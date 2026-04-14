import { useState } from 'react'
import FormField from '../components/FormField'
import PasswordInput from '../components/PasswordInput'
import SuccessMessage from '../components/SuccessMessage'
import { validateAllFields, validateEmail, validateFullName, validatePassword, validatePhone } from '../utils/validators'

const initialFormData = {
    fullName: '',
    email: '',
    phone: '',
    password: '',
}

const initialTouched = {
    fullName: false,
    email: false,
    phone: false,
    password: false,
}

const initialErrors = {
    fullName: '',
    email: '',
    phone: '',
    password: '',
}

const RegisterPage = () => {
    const [formData, setFormData] = useState(initialFormData)
    const [errors, setErrors] = useState(initialErrors)
    const [touched, setTouched] = useState(initialTouched)
    const [submitted, setSubmitted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const fieldValidators = {
        fullName: validateFullName,
        email: validateEmail,
        phone: validatePhone,
        password: validatePassword,
    }

    const handleChange = (field, value) => {
        setFormData((current) => ({
            ...current,
            [field]: value,
        }))

        setErrors((current) => ({
            ...current,
            [field]: '',
        }))
    }

    const handleBlur = (field) => {
        setTouched((current) => ({
            ...current,
            [field]: true,
        }))

        const validator = fieldValidators[field]
        const nextError = validator ? validator(formData[field]) : ''

        setErrors((current) => ({
            ...current,
            [field]: nextError,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (isSubmitting) {
            return
        }

        setTouched({
            fullName: true,
            email: true,
            phone: true,
            password: true,
        })

        const { errors: nextErrors, isValid } = validateAllFields(formData)

        if (isValid) {
            setErrors(initialErrors)
            setIsSubmitting(true)

            window.setTimeout(() => {
                setIsSubmitting(false)
                setSubmitted(true)
            }, 1000)
            return
        }

        setErrors(nextErrors)
    }

    const resetForm = () => {
        setFormData(initialFormData)
        setErrors(initialErrors)
        setTouched(initialTouched)
        setIsSubmitting(false)
        setSubmitted(false)
    }

    if (submitted) {
        return (
            <main className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-amber-50 px-4 py-10">
                <SuccessMessage name={formData.fullName} onReset={resetForm} />
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-amber-50 px-4 py-10">
            <div className="mx-auto w-full max-w-[480px] rounded-3xl border border-slate-200 bg-white p-7 shadow-xl sm:p-9">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100 text-cyan-700">
                    <svg
                        className="h-8 w-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c2.485 0 4.5-2.015 4.5-4.5S14.485 3 12 3 7.5 5.015 7.5 7.5 9.515 12 12 12z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 21a8 8 0 0116 0" />
                    </svg>
                </div>

                <h1 className="mt-5 text-center text-3xl font-bold text-slate-900">Create an account</h1>
                <p className="mt-2 text-center text-slate-600">Fill in the details below to get started</p>

                <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
                    <FormField
                        id="fullName"
                        label="Full Name"
                        value={formData.fullName}
                        onChange={(event) => handleChange('fullName', event.target.value)}
                        onBlur={() => handleBlur('fullName')}
                        placeholder="Jane Doe"
                        autoComplete="name"
                        name="fullName"
                        error={touched.fullName || submitted ? errors.fullName : ''}
                    />

                    <FormField
                        id="email"
                        label="Email"
                        type="email"
                        value={formData.email}
                        onChange={(event) => handleChange('email', event.target.value)}
                        onBlur={() => handleBlur('email')}
                        placeholder="jane@example.com"
                        autoComplete="email"
                        name="email"
                        error={touched.email || submitted ? errors.email : ''}
                    />

                    <FormField
                        id="phone"
                        label="Phone Number"
                        type="tel"
                        value={formData.phone}
                        onChange={(event) => handleChange('phone', event.target.value)}
                        onBlur={() => handleBlur('phone')}
                        placeholder="+12345678901"
                        autoComplete="tel"
                        name="phone"
                        error={touched.phone || submitted ? errors.phone : ''}
                    />

                    <PasswordInput
                        id="password"
                        label="Password"
                        value={formData.password}
                        onChange={(event) => handleChange('password', event.target.value)}
                        onBlur={() => handleBlur('password')}
                        placeholder="At least 6 characters"
                        autoComplete="new-password"
                        error={touched.password || submitted ? errors.password : ''}
                    />

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-700 px-5 py-3 font-semibold text-white transition hover:bg-cyan-800 disabled:cursor-not-allowed disabled:bg-cyan-400"
                    >
                        {isSubmitting && (
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/50 border-t-white" aria-hidden="true" />
                        )}
                        {isSubmitting ? 'Creating account...' : 'Create account'}
                    </button>
                </form>

            </div>
        </main>
    )
}

export default RegisterPage
