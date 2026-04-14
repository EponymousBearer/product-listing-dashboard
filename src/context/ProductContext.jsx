import { createContext, useContext, useMemo, useState } from 'react'
import useDebounce from '../hooks/useDebounce'
import useProducts from '../hooks/useProducts'

const ProductContext = createContext(undefined)
export const ITEMS_PER_PAGE = 8

export const ProductProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [sortOption, setSortOption] = useState('default')
  const [currentPage, setCurrentPage] = useState(1)
  const { products, loading, error } = useProducts()
  const debouncedSearch = useDebounce(searchQuery, 400)

  const filteredProducts = useMemo(() => {
    const normalizedQuery = debouncedSearch.trim().toLowerCase()

    const filtered = normalizedQuery
      ? products.filter((product) => product.title.toLowerCase().includes(normalizedQuery))
      : products

    const sorted = [...filtered]

    switch (sortOption) {
      case 'name-desc':
        return sorted.sort((a, b) => b.title.localeCompare(a.title))
      case 'price-asc':
        return sorted.sort((a, b) => a.price - b.price)
      case 'price-desc':
        return sorted.sort((a, b) => b.price - a.price)
      case 'name-asc':
        return sorted.sort((a, b) => a.title.localeCompare(b.title))
      case 'default':
      default:
        return sorted
    }
  }, [products, debouncedSearch, sortOption])

  const value = useMemo(
    () => ({
      products,
      filteredProducts,
      searchQuery,
      setSearchQuery,
      sortOption,
      setSortOption,
      loading,
      error,
      currentPage,
      setCurrentPage,
      ITEMS_PER_PAGE,
    }),
    [products, filteredProducts, searchQuery, sortOption, loading, error, currentPage],
  )

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}

export const useProductContext = () => {
  const context = useContext(ProductContext)

  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider')
  }

  return context
}
