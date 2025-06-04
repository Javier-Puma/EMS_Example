// app/(dashboard)/employees/page.jsx
'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { deleteEmployee, listEmployees } from '../../services/EmployeeService'
import Link from 'next/link'

export default function ListEmployeesPage() {
    const [employees, setEmployees] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const router = useRouter()

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                setLoading(true)
                const data = await listEmployees()
                // Asegúrate que data es un array
                if (Array.isArray(data)) {
                    setEmployees(data)
                } else {
                    throw new Error('Formato de datos inesperado')
                }
            } catch (err) {
                console.error('Error al cargar empleados:', err)
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchEmployees()
    }, [])

    const handleDelete = async (id) => {
        if (confirm('¿Estás seguro de eliminar este empleado?')) {
            try {
                await deleteEmployee(id)
                // Recargar la lista después de eliminar
                setEmployees(prev => prev.filter(emp => emp.id !== id))
            } catch (err) {
                console.error('Error al eliminar empleado:', err)
                setError('Error al eliminar empleado')
            }
        }
    }

    if (loading) {
        return (
            <div className='container text-center my-5'>
                <div className='spinner-border text-primary' role="status">
                    <span className='visually-hidden'>Cargando...</span>
                </div>
                <p>Cargando lista de empleados...</p>
            </div>
        )
    }

    if (error) {
        return (
            <div className='container alert alert-danger my-5'>
                <h4>Error al cargar empleados</h4>
                <p>{error}</p>
                <button 
                    className='btn btn-primary'
                    onClick={() => window.location.reload()}
                >
                    Reintentar
                </button>
            </div>
        )
    }

    return (
        <div className='container'>
            <h2 className='text-center my-4'>Lista de Empleados</h2>
            
            <div className='mb-3 d-flex justify-content-between align-items-center'>
                <Link href="/add" className='btn btn-primary'>
                    Agregar Empleado
                </Link>
                <span className='badge bg-secondary'>
                    Total: {employees.length}
                </span>
            </div>

            <div className='table-responsive'>
                <table className='table table-striped table-hover'>
                    <thead className='table-dark'>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Email</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.length > 0 ? (
                            employees.map((employee) => (
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>
                                    <td>
                                        <Link 
                                            href={`/employees/edit/${employee.id}`}
                                            className='btn btn-sm btn-warning me-2'
                                        >
                                            Editar
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(employee.id)}
                                            className='btn btn-sm btn-danger'
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className='text-center py-4'>
                                    No se encontraron empleados
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}