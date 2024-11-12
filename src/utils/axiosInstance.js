


import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:1000', 
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (requestConfig) => {
    const token = localStorage.getItem('token');
    if (token) {
      requestConfig.headers.Authorization = `Bearer ${token}`;
    }
    return requestConfig;
  },
  (error) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error('Response Error:', error.response.data);
    } else if (error.request) {
      console.error('Network Error or No Response:', error.request);
    } else {
      console.error('Error', error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

