import axios from "axios";
import Cookies from 'js-cookie'

const API_URL = "http://localhost:3000";

const api = axios.create({
    baseURL: API_URL,
    withCredentials: true
});

// Request Interceptor
api.interceptors.request.use(
    (config) => {
        const token = Cookies.get("token");

        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response Interceptor
api.interceptors.response.use(
    (response) => response,
    (error) => {


        console.error(
            "API Error:",
            error.response?.data || error.message
        );

        // Auto logout if token expired
        if (error.response?.status === 401) {
            Cookies.remove("token");
            window.location.href = "/login";
        }

        return Promise.reject(error);
    }
);

export default api;