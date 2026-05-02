import axios from 'axios';
import cookie from "js-cookie"

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api/v1', // Change to your API base URL
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cookie.get('accessToken')}`
    },
    withCredentials: true, // Include credentials for CORS requests
});

export default axiosInstance;