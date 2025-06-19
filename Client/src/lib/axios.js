import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api/v1', // Change to your API base URL
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true, // Include credentials for CORS requests
});

export default axiosInstance;