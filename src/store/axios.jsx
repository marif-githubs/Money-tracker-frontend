import axios from "axios";
const api = axios.create({

    baseURL: "https://money-tracker-backend-8trv.onrender.com/",
    headers: { "Content-Type": "application/json" },
});

// Add request interceptor
api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('jwt_token')}`;
    return config;
});

// Add response interceptor
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response.status === 403) {
            window.location.href = "/auth/login";
        }
    }
);

export default api;
