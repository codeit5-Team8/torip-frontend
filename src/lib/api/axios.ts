import axios from 'axios';

// Axios 인스턴스 생성
export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
});

// 요청 함수
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
