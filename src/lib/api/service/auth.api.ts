import {
  TGetEmailExistsRequest,
  TGetEmailExistsResponse,
  TPostLoginRequest,
  TPostRefreshTokenRequest,
  TPostRegisterRequest,
} from '@model/auth.model';
import { get, post } from '../axios';
import { TResponse, TTokenResponse } from '@model/model';

// need to checked
export const postRegister = async (data: TPostRegisterRequest) => {
  const response = await post<TResponse<TTokenResponse | null>>(
    '/api/v1/torip/auth/register',
    data,
  );
  return response.data;
};

export const postRefreshToken = async (data: TPostRefreshTokenRequest) => {
  const response = await post<TResponse<TTokenResponse>>(
    '/api/v1/torip/auth/refresh',
    data,
  );
  return response.data;
};

export const postLogin = async (data: TPostLoginRequest) => {
  const response = await post<TResponse<TTokenResponse>>(
    '/api/v1/torip/auth/ogin',
    data,
  );
  return response.data;
};

export const getEmailExists = async (data: TGetEmailExistsRequest) => {
  const response = await get<TResponse<TGetEmailExistsResponse>>(
    `/api/v1/torip/auth/register/username/exists?username=${data}`,
  );
  return response.data;
};
