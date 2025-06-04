export const validateEmployeeForm = (formData) => {
  const errors = {}
  
  if (!formData.firstName.trim()) {
    errors.firstName = 'First Name is required'
  } else if (formData.firstName.length > 50) {
    errors.firstName = 'First Name too long'
  }

  if (!formData.lastName.trim()) {
    errors.lastName = 'Last Name is required'
  }

  if (!formData.email.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = 'Invalid email format'
  }

  return errors
}