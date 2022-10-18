import '../styles/globals.css'
import { StyleBase } from '@dart-s/darts-ui'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <StyleBase />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
