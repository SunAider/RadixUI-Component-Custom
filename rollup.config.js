import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'
import pkg from './package.json'
import typescript from 'rollup-plugin-typescript2'

const config = {
  name: 'DesignSystem',
  extensions: ['.ts', '.tsx'],
}

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({ extensions: config.extensions, browser: true }),
    commonjs({}),
    typescript({ useTsconfigDeclarationDir: true }),

    babel({
      extensions: config.extensions,
      include: ['src/**/*'],
      exclude: 'node_modules/**',
    }),
  ],
  external: ['react', 'react-dom'],
}
