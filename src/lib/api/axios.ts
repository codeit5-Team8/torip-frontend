import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { getSession } from 'next-auth/react';
import { postRefreshToken } from './service/auth.api';

interface ICustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
});

const interceptorRequestFulfilled = async (
  config: InternalAxiosRequestConfig,
) => {
  if (typeof window === 'undefined') {
    return config;
  }

  const session = await getSession();

  if (!config.headers) {
    return config;
  }
  if (!session?.accessToken) {
    return config;
  }

  // 로그인/회원가입 관련 api시 헤더 x
  if (config.url?.startsWith('/api/v1/torip/auth/')) {
    return config;
  }

  config.headers.Authorization = `Bearer ${session.accessToken}`;

  return config;
};

// 액세스 토큰 갱신 함수 (리프레시 토큰을 사용)
const refreshAccessToken = async (refreshToken: string) => {
  const response = await postRefreshToken(refreshToken);
  return response.result.accessToken;
};

const interceptorRequestRejected = async (err: AxiosError) => {
  const originalRequest = err.config as ICustomAxiosRequestConfig;

  // originalRequest가 존재하고, 401 오류가 발생했을 때 처리
  if (originalRequest && err.response?.status === 401) {
    const session = await getSession();

    // 리프레시 토큰이 있는 경우 액세스 토큰을 갱신
    if (session?.refreshToken) {
      originalRequest._retry = true;

      // 리프레시 토큰으로 새로운 액세스 토큰을 요청
      const newAccessToken = await refreshAccessToken(session.refreshToken);

      // 새 액세스 토큰을 헤더에 설정하고 요청을 재시도
      originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
      return instance(originalRequest); // 재시도
    }
  }

  return Promise.reject(err); // 그 외의 에러는 그대로 처리
};

instance.interceptors.request.use(interceptorRequestFulfilled);
instance.interceptors.response.use(
  (response) => response, // 정상적인 응답은 그대로 반환
  interceptorRequestRejected, // 401 에러 발생 시 리프레시 토큰으로 재시도
);

export function get<T>(...args: Parameters<typeof instance.get>) {
  return instance.get<T>(...args);
}
export function post<T>(...args: Parameters<typeof instance.post>) {
  return instance.post<T>(...args);
}
export function del<T>(...args: Parameters<typeof instance.delete>) {
  return instance.delete<T>(...args);
}
export function put<T>(...args: Parameters<typeof instance.put>) {
  return instance.put<T>(...args);
}
export function patch<T>(...args: Parameters<typeof instance.patch>) {
  return instance.patch<T>(...args);
}
