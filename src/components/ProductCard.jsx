const ProductCard = ({ id, title, price, image, category }) => {
  const formattedPrice = typeof price === 'number' ? price.toFixed(2) : '0.00'

  return (
    <article
      data-product-id={id}
      className="w-full rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-shadow duration-200 hover:shadow-md"
    >
      <div className="mb-3 flex h-[200px] w-full items-center justify-center rounded-lg bg-slate-100 p-4">
        {image ? <img src={image} alt={title} className="h-full w-full object-contain" /> : null}
      </div>

      <span className="mb-3 inline-flex rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
        {category}
      </span>

      <h3 className="line-clamp-2 min-h-[3rem] text-base font-semibold text-slate-900">{title}</h3>

      <p className="mt-3 text-lg font-bold text-emerald-600">${formattedPrice}</p>
    </article>
  )
}

export default ProductCard
