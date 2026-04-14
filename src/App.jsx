import { ProductProvider } from './context/ProductContext'
import ListingPage from './pages/ListingPage'

const App = () => {
  return (
    <ProductProvider>
      <ListingPage />
    </ProductProvider>
  )
}

export default App
