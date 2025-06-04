'use client'

import { useState } from 'react'
import { validateEmployeeForm } from './formValidation'

export default function EmployeeForm({ initialData = {}, onSubmit, isEditing = false }) {
  const [formData, setFormData] = useState({
    firstName: initialData.firstName || '',
    lastName: initialData.lastName || '',
    email: initialData.email || ''
  })
  
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validateEmployeeForm(formData)
    
    if (Object.keys(validationErrors).length === 0) {
      onSubmit(formData)
    } else {
      setErrors(validationErrors)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-group mb-2'>
        <label className='form-label'>First Name</label>
        <input
          type="text"
          name='firstName'
          value={formData.firstName}
          className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
          onChange={handleChange}
        />
        {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
      </div>

      <div className='form-group mb-2'>
        <label className='form-label'>Last Name</label>
        <input
          type="text"
          name='lastName'
          value={formData.lastName}
          className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
          onChange={handleChange}
        />
        {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
      </div>

      <div className='form-group mb-2'>
        <label className='form-label'>Email</label>
        <input
          type="email"
          name='email'
          value={formData.email}
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          onChange={handleChange}
        />
        {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
      </div>

      <button type='submit' className='btn btn-success'>
        {isEditing ? 'Update' : 'Submit'}
      </button>
    </form>
  )
}