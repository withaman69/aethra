import axios from "axios";

const api = axios.create({
  baseURL: "https://aethra-5hi1.onrender.com/api",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    console.log("TOKEN FROM LOCALSTORAGE:", token);

    if (token) {
      config.headers.Authorization =
        `Bearer ${token}`;
    }

    console.log(
      "AUTH HEADER:",
      config.headers.Authorization
    );

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;