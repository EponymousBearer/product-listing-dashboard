import { useState } from 'react'

const PasswordInput = ({
  label,
  id,
  value,
  onChange,
  onBlur,
  placeholder,
  error,
  ...inputProps
}) => {
  const [showPassword, setShowPassword] = useState(false)
  const hasError = Boolean(error)

  const passwordValue = String(value ?? '')
  const hasNumber = /\d/.test(passwordValue)
  const hasSpecialCharacter = /[^A-Za-z0-9]/.test(passwordValue)

  let strengthLevel = 1
  let strengthLabel = 'Weak'
  let strengthColorClass = 'bg-rose-500'

  if (passwordValue.length >= 10 && hasNumber && hasSpecialCharacter) {
    strengthLevel = 4
    strengthLabel = 'Strong'
    strengthColorClass = 'bg-emerald-500'
  } else if (passwordValue.length >= 8 && hasNumber) {
    strengthLevel = 3
    strengthLabel = 'Good'
    strengthColorClass = 'bg-amber-400'
  } else if (passwordValue.length >= 6) {
    strengthLevel = 2
    strengthLabel = 'Fair'
    strengthColorClass = 'bg-orange-500'
  }

  const strengthBars = Array.from({ length: 4 }, (_, index) => (
    <span
      key={`strength-bar-${index}`}
      className={`h-2 w-full rounded-full ${index < strengthLevel ? strengthColorClass : 'bg-slate-200'}`}
      aria-hidden="true"
    />
  ))

  return (
    <div className="space-y-3">
      <label htmlFor={id} className="block text-sm font-semibold text-slate-700">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          name={id}
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          {...inputProps}
          aria-invalid={hasError}
          aria-describedby={hasError ? `${id}-error ${id}-strength` : `${id}-strength`}
          className={`w-full rounded-xl border bg-white px-4 py-3 pr-24 text-slate-900 outline-none transition ${
            hasError
              ? 'border-rose-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-200'
              : 'border-slate-300 hover:border-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100'
          }`}
        />
        <button
          type="button"
          onClick={() => setShowPassword((current) => !current)}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg px-3 py-1 text-lg transition hover:bg-cyan-50"
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? (
            <svg className="h-5 w-5 text-cyan-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.58 10.58a2 2 0 102.83 2.83M9.88 5.09A9.77 9.77 0 0112 4.8c5.4 0 9.27 3.11 10.5 7.2a11.8 11.8 0 01-3.2 5.01M6.61 6.61A11.8 11.8 0 001.5 12c.48 1.59 1.42 3.1 2.69 4.37A11.73 11.73 0 0012 19.2c1.52 0 2.94-.3 4.2-.85"
              />
            </svg>
          ) : (
            <svg className="h-5 w-5 text-cyan-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M1.5 12S5.4 4.8 12 4.8 22.5 12 22.5 12 18.6 19.2 12 19.2 1.5 12 1.5 12z"
              />
              <circle cx="12" cy="12" r="3" />
            </svg>
          )}
        </button>
      </div>
      <div id={`${id}-strength`} className="space-y-1">
        <div className="grid grid-cols-4 gap-2">{strengthBars}</div>
        <p className="text-xs font-medium text-slate-600">Strength: {strengthLabel}</p>
      </div>
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

export default PasswordInput
