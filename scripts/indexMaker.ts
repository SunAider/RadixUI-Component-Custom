import * as fs from 'fs'
import * as path from 'path'

const srcPath = path.resolve(__dirname, '../src')

try {
  fs.unlinkSync(`${srcPath}/index.tsx`)
} catch (e) {
  console.log('not exists index.tsx')
}

fs.readdir(srcPath, (err, files) => {
  files.map((file) => {
    if (file === 'index.tsx') return

    const moduleName = file.split('.')[0]

    fs.appendFileSync(`${srcPath}/index.tsx`, `export { default as ${moduleName} } from './${moduleName}'\n`)
  })
})
