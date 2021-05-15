import Products from './components/Products'
import { QueryClient, QueryClientProvider } from 'react-query'
import AppBar from './components/AppBar'
import { CartProvider } from './hooks/cart'

const client = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <CartProvider>
        <AppBar />
        <Products />
      </CartProvider>
    </QueryClientProvider>
  )
}

export default App
