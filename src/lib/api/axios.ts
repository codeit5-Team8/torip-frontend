import axios, { InternalAxiosRequestConfig, AxiosHeaders } from 'axios';
import { getSession } from 'next-auth/react';

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
});

// Request interceptor
instance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    if (typeof window === 'undefined') {
      return config;
    }

    const session = await getSession();

    // 헤더 초기화 및 Content-Type 설정
    if (!config.headers || !(config.headers instanceof AxiosHeaders)) {
      config.headers = new AxiosHeaders();
    }
    config.headers.set('Content-Type', 'application/json');

    // Authorization 헤더 설정
    if (
      session?.accessToken &&
      !config.url?.startsWith('/api/v1/torip/auth/') // 인증 관련 URL 제외
    ) {
      config.headers.set('Authorization', `Bearer ${session.accessToken}`);
    }

    return config;
  },
  (error) => Promise.reject(error),
);

// Response interceptor
// instance.interceptors.response.use(
//   (response: AxiosResponse) => response,
//   async (error: AxiosError) => {
//     const originalRequest = error.config as ICustomAxiosRequestConfig;
//     console.log(
//       'Response error:',
//       error.response?.status,
//       error.response?.data,
//     );
//     console.log(originalRequest._retry);
//     if (
//       (error.response?.status === 403 || error.response?.status === 401) &&
//       !originalRequest._retry
//     ) {
//       console.log('hihih');
//       originalRequest._retry = true;

//       try {
//         const session = await getSession();
//         if (!session?.refreshToken) {
//           throw new Error('No refresh token available');
//         }

//         const newAccessToken = await refreshAccessToken(session.refreshToken);
//         console.log('New access token:', newAccessToken);

//         // 요청 헤더에 새로운 액세스 토큰 설정
//         originalRequest.headers.set(
//           'Authorization',
//           `Bearer ${newAccessToken}`,
//         );
//         console.log('Retrying request with new token');
//         return instance(originalRequest);
//       } catch (refreshError) {
//         console.error('Error during token refresh:', refreshError);
//         // If refresh token is invalid or expired, sign out the user
//         await signOut();
//         return Promise.reject(refreshError);
//       }
//     }

//     return Promise.reject(error);
//   },
// );

// HTTP 메서드 래퍼 함수
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
