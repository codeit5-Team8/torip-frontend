import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
});

axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export function get<T>(...args: Parameters<typeof instance.get>) {
  return instance.get<T>(...args);
}
export function post<T>(...args: Parameters<typeof instance.get>) {
  return instance.post<T>(...args);
}
export function del<T>(...args: Parameters<typeof instance.get>) {
  return instance.delete<T>(...args);
}
export function put<T>(...args: Parameters<typeof instance.get>) {
  return instance.put<T>(...args);
}
export function patch<T>(...args: Parameters<typeof instance.get>) {
  return instance.patch<T>(...args);
}
