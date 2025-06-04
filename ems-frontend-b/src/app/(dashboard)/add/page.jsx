// app/add/page.jsx
'use client'

import { useState } from 'react'
import { createEmployee } from '../../services/EmployeeService'
import { useRouter } from 'next/navigation'

export default function AddEmployeePage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })
    const router = useRouter()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const validateForm = () => {
        let valid = true
        const newErrors = { ...errors }
        
        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First Name is required'
            valid = false
        } else {
            newErrors.firstName = ''
        }
        
        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last Name is required'
            valid = false
        } else {
            newErrors.lastName = ''
        }
        
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
            valid = false
        } else {
            newErrors.email = ''
        }
        
        setErrors(newErrors)
        return valid
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (validateForm()) {
            try {
                await createEmployee(formData)
                router.push('/employees')
            } catch (error) {
                console.error('Error creating employee:', error)
            }
        }
    }

    return (
        <div className='container'>
            <br/><br/>
            <div className='row'>
                <div className='card col-md-6 offset-md-3'>
                    <h2 className='text-center'>Add Employee</h2>
                    <div className='card-body'>
                        <form onSubmit={handleSubmit}>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Employee First Name</label>
                                <input
                                    type="text"
                                    placeholder='Enter Employee First Name'
                                    name='firstName'
                                    value={formData.firstName}
                                    className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                    onChange={handleChange}
                                />
                                {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Employee Last Name</label>
                                <input
                                    type="text"
                                    placeholder='Enter Employee Last Name'
                                    name='lastName'
                                    value={formData.lastName}
                                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                    onChange={handleChange}
                                />
                                {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Employee Email</label>
                                <input
                                    type="email"
                                    placeholder='Enter Employee Email'
                                    name='email'
                                    value={formData.email}
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    onChange={handleChange}
                                />
                                {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                            </div>
                            <button type='submit' className='btn btn-success'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}