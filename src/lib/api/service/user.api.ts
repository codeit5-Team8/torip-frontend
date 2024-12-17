import { TGetUserResponse } from '@model/user.model';
import { get } from '../axios';

export const getUser = async () => {
  const response = await get<TGetUserResponse>('/api/user');
  return response.data;
};
