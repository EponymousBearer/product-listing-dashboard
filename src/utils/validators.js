export function validateFullName(value) {
  const normalizedValue = String(value ?? '').trim()

  if (!normalizedValue) {
    return 'Full name is required.'
  }

  if (normalizedValue.length < 2) {
    return 'Full name must be at least 2 characters.'
  }

  if (!/^[A-Za-z\s]+$/.test(normalizedValue)) {
    return 'Full name can only contain letters and spaces.'
  }

  return ''
}

export function validateEmail(value) {
  const normalizedValue = String(value ?? '').trim()

  if (!normalizedValue) {
    return 'Email is required.'
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailPattern.test(normalizedValue)) {
    return 'Please enter a valid email address.'
  }

  return ''
}

export function validatePhone(value) {
  const normalizedValue = String(value ?? '').trim()

  if (!normalizedValue) {
    return 'Phone number is required.'
  }

  if (!/^\+?\d{10,15}$/.test(normalizedValue)) {
    return 'Phone number must be 10 to 15 digits and may start with +.'
  }

  return ''
}

export function validatePassword(value) {
  const normalizedValue = String(value ?? '')

  if (!normalizedValue) {
    return 'Password is required.'
  }

  if (normalizedValue.length < 6) {
    return 'Password must be at least 6 characters.'
  }

  if (!/(?=.*[A-Za-z])(?=.*\d)/.test(normalizedValue)) {
    return 'Password must include at least one letter and one number.'
  }

  return ''
}

export function validateAllFields(formData) {
  const errors = {
    fullName: validateFullName(formData?.fullName),
    email: validateEmail(formData?.email),
    phone: validatePhone(formData?.phone),
    password: validatePassword(formData?.password),
  }

  const isValid = Object.values(errors).every((error) => error === '')

  return { errors, isValid }
}

export function validateConfirmPassword(password, confirmPassword) {
  const normalizedConfirmPassword = String(confirmPassword ?? '')

  if (!normalizedConfirmPassword) {
    return 'Please confirm your password.'
  }

  if (String(password ?? '') !== normalizedConfirmPassword) {
    return 'Passwords do not match.'
  }

  return ''
}

export function validateRegisterForm(values) {
  return {
    fullName: validateFullName(values?.fullName),
    email: validateEmail(values?.email),
    password: validatePassword(values?.password),
    confirmPassword: validateConfirmPassword(values?.password, values?.confirmPassword),
  }
}
