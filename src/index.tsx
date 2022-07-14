import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Routers } from 'routers'
import { QueryClient, QueryClientProvider } from 'react-query'
import reportWebVitals from './reportWebVitals'
import './index.css'
import 'antd/dist/antd.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <HashRouter>
      <QueryClientProvider client={queryClient}>
        <Routers />
      </QueryClientProvider>
    </HashRouter>
  </StrictMode>,
)

reportWebVitals()
