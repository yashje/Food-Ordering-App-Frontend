import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import { BrowserRouter as Router } from "react-router-dom"
import AppRoutes from './AppRoutes'
import { QueryClient, QueryClientProvider } from 'react-query'
import Auth0ProviderWithNavigate from "../src/auth/Auth0ProviderWithNavigate"
import { Toaster } from 'sonner'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Auth0ProviderWithNavigate  >
          <AppRoutes />
          <Toaster visibleToasts={1} position='top-right' richColors/>
        </Auth0ProviderWithNavigate>
        </Router>
    </QueryClientProvider>
  </StrictMode>,
)
