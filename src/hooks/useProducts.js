import { useEffect, useState } from 'react'

const useProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    const fetchProducts = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch('https://fakestoreapi.com/products', {
          signal: controller.signal,
        })

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }

        const data = await response.json()
        setProducts(Array.isArray(data) ? data : [])
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError('Unable to load products. Please try again.')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()

    return () => {
      controller.abort()
    }
  }, [])

  return {
    products,
    loading,
    error,
  }
}

export default useProducts
