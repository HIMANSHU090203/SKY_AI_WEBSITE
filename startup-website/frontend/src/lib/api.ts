import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Auth APIs
export const authAPI = {
  register: (userData: { name: string; email: string; password: string }) =>
    api.post('/auth/register', userData),
  login: (credentials: { email: string; password: string }) =>
    api.post('/auth/login', credentials),
};

// Contact API
export const contactAPI = {
  create: (contactData: { name: string; email: string; message: string }) =>
    api.post('/contact', contactData),
  getAll: () => api.get('/contact'),
};

export default api;