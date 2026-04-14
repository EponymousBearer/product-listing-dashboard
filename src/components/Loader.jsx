const Loader = () => {
  const skeletonItems = Array.from({ length: 8 }, (_, index) => index)

  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-label="Loading products">
      {skeletonItems.map((item) => (
        <article key={item} className="w-full animate-pulse rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="mb-3 h-[200px] w-full rounded-lg bg-slate-200" />

          <div className="mb-3 h-6 w-24 rounded-full bg-slate-200" />

          <div className="mb-2 h-4 w-full rounded bg-slate-200" />
          <div className="mb-4 h-4 w-4/5 rounded bg-slate-200" />

          <div className="h-6 w-28 rounded bg-slate-200" />
        </article>
      ))}
    </section>
  )
}

export default Loader
