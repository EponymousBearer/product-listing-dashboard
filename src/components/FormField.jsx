const FormField = ({
  label,
  id,
  type = 'text',
  value,
  onChange,
  onBlur,
  placeholder,
  error,
  ...inputProps
}) => {
  const hasError = Boolean(error)

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-semibold text-slate-700">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        {...inputProps}
        aria-invalid={hasError}
        aria-describedby={hasError ? `${id}-error` : undefined}
        className={`w-full rounded-xl border bg-white px-4 py-3 text-slate-900 outline-none transition ${
          hasError
            ? 'border-rose-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-200'
            : 'border-slate-300 hover:border-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100'
        }`}
      />
      {hasError && (
        <p id={`${id}-error`} role="alert" className="flex items-center gap-2 text-sm text-rose-600">
          <svg
            className="h-4 w-4 flex-shrink-0"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M8.257 3.099c.765-1.36 2.72-1.36 3.486 0l6.518 11.595c.75 1.334-.213 2.99-1.742 2.99H3.48c-1.53 0-2.492-1.656-1.742-2.99L8.257 3.1zm1.743 3.651a1 1 0 00-1 1v3.5a1 1 0 102 0v-3.5a1 1 0 00-1-1zm0 8a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"
              clipRule="evenodd"
            />
          </svg>
          {error}
        </p>
      )}
    </div>
  )
}

export default FormField
