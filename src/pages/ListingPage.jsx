import ErrorMessage from '../components/ErrorMessage'
import Loader from '../components/Loader'
import Pagination from '../components/Pagination'
import ProductCard from '../components/ProductCard'
import SearchBar from '../components/SearchBar'
import SortDropdown from '../components/SortDropdown'
import { useProductContext } from '../context/ProductContext'

const ListingPage = () => {
  const {
    filteredProducts,
    loading,
    error,
    currentPage,
    ITEMS_PER_PAGE,
  } = useProductContext()

  const totalResults = filteredProducts.length
  const start = (currentPage - 1) * ITEMS_PER_PAGE
  const pageItems = filteredProducts.slice(start, start + ITEMS_PER_PAGE)

  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Product Listing</h1>
      </header>

      <section className="mb-6 flex flex-col gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 md:flex-row md:items-end md:justify-between">
        <div className="w-full md:max-w-md">
          <SearchBar />
        </div>
        <div className="w-full md:max-w-xs">
          <SortDropdown />
        </div>
      </section>

      <p className="mb-4 text-sm text-slate-600">Showing {pageItems.length} of {totalResults} products</p>

      {loading ? <Loader /> : null}
      {!loading && error ? <ErrorMessage message={error} /> : null}

      {!loading && !error ? (
        <>
          {pageItems.length === 0 ? (
            <p className="rounded-lg border border-slate-200 bg-white p-6 text-center text-slate-600">
              No products match your search
            </p>
          ) : (
            <section className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
              {pageItems.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                  category={product.category}
                />
              ))}
            </section>
          )}

          <Pagination />
        </>
      ) : null}
    </main>
  )
}

export default ListingPage
