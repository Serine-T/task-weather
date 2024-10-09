import { API_URL } from '@utils/config';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class SimpleRequestService {
  private instance: AxiosInstance;

  constructor(defaultParams?: Record<string, any>) {
    this.instance = axios.create({
      baseURL: API_URL,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json',
      },
      params: defaultParams,
    });
  }

  get<T = any, R = AxiosResponse<T>>(
    url: string,
    filters?: Record<string, any>,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.instance.get<T, R>(url, {
      ...config,
      params: {
        ...config?.params,
        ...filters,
      },
    });
  }

  post<T = any, R = AxiosResponse<T>>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R> {
    return this.instance.post<T, R>(url, data, config);
  }

  put<T = any, R = AxiosResponse<T>>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R> {
    return this.instance.put<T, R>(url, data, config);
  }

  patch<T = any, R = AxiosResponse<T>>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R> {
    return this.instance.patch<T, R>(url, data, config);
  }

  delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.instance.delete<T, R>(url, config);
  }
}

export const http = new SimpleRequestService();
