import { useProductContext } from '../context/ProductContext'

const SearchBar = () => {
  const { searchQuery, setSearchQuery, setCurrentPage } = useProductContext()

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
    setCurrentPage(1)
  }

  const clearSearch = () => {
    setSearchQuery('')
    setCurrentPage(1)
  }

  return (
    <div className="w-full">
      <label htmlFor="search" className="mb-2 block text-sm font-medium text-slate-700">
        Search products
      </label>

      <div className="relative">
        <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
        </span>

        <input
          id="search"
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleChange}
          className="h-11 w-full rounded-lg border border-slate-300 bg-white pl-10 pr-10 text-sm text-slate-800 shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
        />

        {searchQuery ? (
          <button
            type="button"
            onClick={clearSearch}
            aria-label="Clear search"
            className="absolute inset-y-0 right-2 my-1 inline-flex h-9 w-9 items-center justify-center rounded-md text-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
          >
            ×
          </button>
        ) : null}
      </div>
    </div>
  )
}

export default SearchBar
