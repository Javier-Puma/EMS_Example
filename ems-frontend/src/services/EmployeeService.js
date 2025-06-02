import axios, { Axios } from "axios";
const REST_API_BASE_URL='http://localhost:8080/api/employees';
export const listEmployees=() => axios.get(REST_API_BASE_URL);
export const createEmployee=(employee)=>axios.post(REST_API_BASE_URL, employee);
export const getEmployee = (employeId)=>axios.get(REST_API_BASE_URL+'/'+employeId)
export const updateEmployee =(employeId, employee)=>axios.put(REST_API_BASE_URL+'/'+employeId,employee)