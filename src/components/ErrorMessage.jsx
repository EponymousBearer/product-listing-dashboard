const ErrorMessage = ({ message }) => {
  const handleRetry = () => {
    window.location.reload()
  }

  return (
    <div className="flex justify-center py-6">
      <div className="w-full max-w-xl rounded-xl border border-red-200 bg-red-50 p-5 text-center shadow-sm">
        <div className="mx-auto mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-red-600">
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="2">
            <path d="M12 9v4" strokeLinecap="round" />
            <circle cx="12" cy="16.5" r="0.75" fill="currentColor" />
            <path d="M10.3 3.84 1.82 18A2 2 0 0 0 3.53 21h16.94a2 2 0 0 0 1.71-3L13.7 3.84a2 2 0 0 0-3.4 0Z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <p className="mb-4 text-sm font-medium text-red-700">{message}</p>

        <button
          type="button"
          onClick={handleRetry}
          className="inline-flex h-10 items-center justify-center rounded-lg bg-red-600 px-4 text-sm font-semibold text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
        >
          Retry
        </button>
      </div>
    </div>
  )
}

export default ErrorMessage
