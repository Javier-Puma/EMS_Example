// src/app/services/AxiosService.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080/api',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Interceptor para manejo de errores
apiClient.interceptors.response.use(
  response => response,
  error => {
    // Manejo de errores...
    return Promise.reject(error);
  }
);

export default apiClient; // ¡Asegúrate de exportar apiClient!