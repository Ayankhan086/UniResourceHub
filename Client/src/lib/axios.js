import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://uni-resource-hub-18s1.vercel.app/api/v1', // Change to your API base URL
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true, // Include credentials for CORS requests
});

export default axiosInstance;