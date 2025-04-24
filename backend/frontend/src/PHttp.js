import axios from "axios";

// Determine base URL based on environment
const isProduction = process.env.NODE_ENV === 'production';
const baseURL = isProduction 
  ? '/api'  // Relative path in production
  : 'http://localhost:5000/api';  // Full URL in development

const api = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json"
    },
    timeout: 10000
});

// Request interceptor
api.interceptors.request.use(config => {
    const token = sessionStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

// Response interceptor for error handling
api.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401) {
            sessionStorage.removeItem("token");
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default api;