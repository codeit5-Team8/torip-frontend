import { TPostRegisterRequest } from './auth.model';

export type TGetUserResponse = Omit<TPostRegisterRequest, 'password'>;

export type TUserModel = {
  id: number;
  username: string;
  email: string;
};
