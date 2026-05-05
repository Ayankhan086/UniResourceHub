import axios from 'axios';
import cookie from "js-cookie"

const axiosInstance = axios.create({
    baseURL: 'http://13.63.139.136:5000/api/v1/', // Change to your API base URL
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${cookie.get('accessToken')}`
    },
    withCredentials: true, // Include credentials for CORS requests
});

export default axiosInstance;