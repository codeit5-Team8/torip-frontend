import { TPostRegisterRequest } from './auth.model';

export type TGetUserResponse = Omit<TPostRegisterRequest, 'password'>;
