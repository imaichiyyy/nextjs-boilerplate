import 'src/styles/globals.scss'
import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  // Use msw
  if (process.env.NODE_ENV === 'development') {
    const MockServer = () => import('src/mocks/worker')
    MockServer()
  }
  return <Component {...pageProps} />
}

export default App
