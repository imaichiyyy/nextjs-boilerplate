import 'src/styles/globals.scss'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const App = ({ Component, pageProps }: AppProps) => {
  // Use msw
  if (process.env.NODE_ENV === 'development' && process.env.MOCK_DISABLED !== 'true') {
    const MockServer = () => import('src/mocks/worker')
    MockServer()
  }
  // Use Tanstack Query(react-query)
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default App
