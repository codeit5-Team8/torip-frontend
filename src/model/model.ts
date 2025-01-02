export type TResponse<T> = {
  success: boolean;
  code: number;
  message: string;
  result: T;
};

export type TTokenResponse = {
  accessToken: string;
  refreshToken: string;
  expiredAt: string;
};
