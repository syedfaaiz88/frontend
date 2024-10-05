// src/Services/AxiosInstance.js
import axios from 'axios';
import authServices from './Auth/AuthServices';

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/', // Base URL
    timeout: 10000, // Request timeout
});

// Request interceptor to add Authorization header
axiosInstance.interceptors.request.use(
    (config) => {
        const tokens = JSON.parse(localStorage.getItem('tokens'));
        if (tokens && tokens.access) {
            config.headers['Authorization'] = `Bearer ${tokens.access}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const { response } = error;        
        if (response && response.status === 401) { // Unauthorized
            try {
                const tokens = JSON.parse(localStorage.getItem('tokens'));
                const { refresh } = tokens;
                
                const refreshResponse = await authServices.refreshAccessToken(refresh);
                const newAccessToken = refreshResponse.data.result.access;

                // Update tokens in localStorage
                localStorage.setItem('tokens', JSON.stringify({
                    ...tokens,
                    access: newAccessToken
                }));

                // Retry the original request with the new access token
                error.config.headers['Authorization'] = `Bearer ${newAccessToken}`;
                return axiosInstance.request(error.config);
            } catch (refreshError) {
                console.error('Token refresh failed', refreshError);
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
