const SuccessMessage = ({ name, onReset }) => {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="w-full max-w-md animate-fadeIn rounded-3xl border border-emerald-200 bg-white p-8 text-center shadow-xl">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
          <svg
            className="h-7 w-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h2 className="mt-5 text-2xl font-bold text-emerald-900">Registration successful!</h2>
        <p className="mt-3 text-emerald-800">Welcome, {name}! Your account has been created.</p>
        <button
          type="button"
          onClick={onReset}
          className="mt-7 rounded-xl bg-emerald-700 px-5 py-3 font-semibold text-white transition hover:bg-emerald-800"
        >
          Register another
        </button>
      </div>
    </div>
  )
}

export default SuccessMessage
