// src/lib/api/apiService.js
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const BASE_URL = "http://localhost:8080/api";

// Create axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("accessToken");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

// Auth Services
export const authService = {
  login: async (email, password) => {
    try {
      const response = await api.post("/login", { email, password });
      if (response.data?.accessToken) {
        localStorage.setItem("accessToken", response.data.accessToken);
      }
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Login failed");
    }
  },

  register: async (userData) => {
    try {
      const response = await api.post("/register", userData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Registration failed");
    }
  },

  getLoggedInUserRole: () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const decodedToken = jwtDecode(token);
      return decodedToken.roles;
    }
    return "";
  },

  logout: () => {
    localStorage.removeItem("accessToken");
  },
};

// Jobs Services
export const jobsService = {
  getAllJobs: async (searchParam = "") => {
    const url = searchParam
      ? `/jobs?search=${encodeURIComponent(searchParam)}`
      : "/jobs";
    const response = await api.get(url);
    return response.data;
  },

  getJobById: async (id) => {
    const response = await api.get(`/jobs/${id}`);
    return response.data;
  },

  postJob: async (jobData) => {
    try {
      const response = await api.post("/jobs", jobData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Failed to post job");
    }
  },

  applyForJob: async (jobId) => {
    try {
      const response = await api.post(`/application/${jobId}`);
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to apply for job"
      );
    }
  },
};

export default api;
