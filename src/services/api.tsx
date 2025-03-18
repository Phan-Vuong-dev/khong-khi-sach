import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from "axios";
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from "../types";
import { storageService } from "./storage.service";

const API_BASE_URL = "https://clean-air.dion.vn/account/api";

class ApiService {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    // Request interceptor for auth token
    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const token = storageService.getToken();
        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },

      (error) => Promise.reject(error)
    );

    // Response interceptor for error handling
    this.instance.interceptors.response.use(
      (response) => response,
      (error) => {
        // Handle 401 Unauthorized errors (token expired, etc.)
        if (error.response && error.response.status === 401) {
          storageService.clearAuthData();
          // You could dispatch a logout action here or redirect to login
          window.location.href = "/login";
        }
        return Promise.reject(error);
      }
    );
  }

  public get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.get<T>(url, config).then((response) => response.data);
  }

  public post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.instance
      .post<T>(url, data, config)
      .then((response) => response.data);
  }

  public put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.instance
      .put<T>(url, data, config)
      .then((response) => response.data);
  }

  public delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.instance
      .delete<T>(url, config)
      .then((response) => response.data);
  }
}

// Create API service instance
const apiService = new ApiService();

// Auth API methods
export const authApi = {
  login: (credentials: LoginRequest): Promise<LoginResponse> => {
    return apiService.post<LoginResponse>("/login", credentials);
  },

  register: (data: RegisterRequest): Promise<RegisterResponse> => {
    return apiService.post<RegisterResponse>("/register", data);
  },

  logout: (): void => {
    storageService.clearAuthData();
  },
};

export default apiService;
