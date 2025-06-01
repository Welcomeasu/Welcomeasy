import { ApiResponse } from '../types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

class ApiService {
  private static async fetchWithAuth<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers,
      });
      const data = await response.json();
      return {
        data,
        status: response.status,
      };
    } catch (error) {
      return {
        data: null as T,
        error: error.message,
        status: 500,
      };
    }
  }

  static async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.fetchWithAuth<T>(endpoint);
  }

  static async post<T>(endpoint: string, body: any): Promise<ApiResponse<T>> {
    return this.fetchWithAuth<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(body),
    });
  }

  static async put<T>(endpoint: string, body: any): Promise<ApiResponse<T>> {
    return this.fetchWithAuth<T>(endpoint, {
      method: 'PUT',
      body: JSON.stringify(body),
    });
  }

  static async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.fetchWithAuth<T>(endpoint, {
      method: 'DELETE',
    });
  }
}

export default ApiService; 