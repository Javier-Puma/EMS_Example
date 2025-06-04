'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { getEmployee, updateEmployee } from '@/app/services/EmployeeService'
import EmployeeForm from '@/app/components/EmployeeForm/EmployeeForm'
import Notification from '@/app/components/Notification/Notification'

export default function EditEmployeePage() {
  const [notification, setNotification] = useState(null)
  const { id } = useParams()
  const router = useRouter()

  const handleSubmit = async (formData) => {
    try {
      await updateEmployee(id, formData)
      setNotification({ type: 'success', message: 'Employee updated successfully' })
      setTimeout(() => router.push('/employees'), 1500)
    } catch (error) {
      setNotification({ type: 'error', message: 'Error updating employee' })
    }
  }

  return (
    <div className='container'>
      <br/><br/>
      <div className='row'>
        <div className='card col-md-6 offset-md-3'>
          <h2 className='text-center'>Update Employee</h2>
          <div className='card-body'>
            {notification && <Notification {...notification} />}
            <EmployeeForm 
              onSubmit={handleSubmit} 
              isEditing={true}
            />
          </div>
        </div>
      </div>
    </div>
  )
}