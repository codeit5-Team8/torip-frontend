export type TResponse<T> = {
  success: boolean;
  code: number;
  message: string;
  result: T;
};

export type TTokenResponse = {
  id: number;
  username: string;
  email: string;
  accessToken: string;
  refreshToken: string;
  expiredAt: string;
};
