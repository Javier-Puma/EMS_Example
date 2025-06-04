// src/app/services/EmployeeService.js
import apiClient from './AxiosService'; // Importa apiClient correctamente

const EMPLOYEE_ENDPOINT = '/employees';

export const listEmployees = async () => {
  try {
    console.log('[DEBUG] API Client config:', apiClient?.defaults);
    const response = await apiClient.get(EMPLOYEE_ENDPOINT);
    return response.data;
  } catch (error) {
    console.error('Error listing employees:', error);
    throw new Error(error.response?.data?.message || 'Failed to fetch employees');
  }
};

export const createEmployee = async (employee) => {
  const response = await apiClient.post(EMPLOYEE_ENDPOINT, employee)
  return response.data
}

export const getEmployee = async (id) => {
  const response = await apiClient.get(`${EMPLOYEE_ENDPOINT}/${id}`)
  return response.data
}

export const updateEmployee = async (id, employee) => {
  const response = await apiClient.put(`${EMPLOYEE_ENDPOINT}/${id}`, employee)
  return response.data
}

export const deleteEmployee = async (id) => {
  const response = await apiClient.delete(`${EMPLOYEE_ENDPOINT}/${id}`)
  return response.data
}