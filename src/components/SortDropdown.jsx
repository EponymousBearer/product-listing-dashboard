import { useProductContext } from '../context/ProductContext'

const SortDropdown = () => {
  const { sortOption, setSortOption, setCurrentPage } = useProductContext()

  const handleSortChange = (event) => {
    setSortOption(event.target.value)
    setCurrentPage(1)
  }

  return (
    <div className="w-full md:w-64">
      <label htmlFor="sort" className="mb-2 block text-sm font-medium text-slate-700">
        Sort by
      </label>
      <select
        id="sort"
        value={sortOption}
        onChange={handleSortChange}
        className="h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-800 shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
      >
        <option value="default">Sort by</option>
        <option value="name-asc">Name: A → Z</option>
        <option value="name-desc">Name: Z → A</option>
        <option value="price-asc">Price: Low → High</option>
        <option value="price-desc">Price: High → Low</option>
      </select>
    </div>
  )
}

export default SortDropdown
