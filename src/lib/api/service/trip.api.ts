import {
  TAcceptTripResponse,
  TDeleteTripResponse,
  TGetTripListProps,
  TGetTripListResponse,
  TGetTripMembersResponse,
  TGetTripResponse,
  TJoinTripListResponse,
  TJoinTripResponse,
  TPatchTripRequest,
  TPostTripRequest,
  TPostTripResponse,
} from '@model/trip.model';
import { del, get, patch, post } from '../axios';

export const postTrip = async (data: TPostTripRequest) => {
  const response = await post<TPostTripResponse>('/api/v1/torip/travel', data);

  return response.data;
};

export const getJoinTripList = async (id: number) => {
  const response = await get<TJoinTripListResponse>(
    `api/v1/torip/travel/${id}/request`,
  );

  return response.data;
};

export const postJoinTrip = async (id: number) => {
  const response = await post<TJoinTripResponse>(
    `api/v1/torip/travel/${id}/request`,
  );

  return response.data;
};

export const postAcceptTrip = async (id: number) => {
  const response = await post<TAcceptTripResponse>(
    `api/v1/torip/travel/request/${id}/accept`,
  );

  return response.data;
};

export const getTrip = async (id: number) => {
  const response = await get<TGetTripResponse>(`api/v1/torip/travel/${id}`);

  return response.data;
};

export const deleteTrip = async (id: number) => {
  const response = await del<TDeleteTripResponse>(`api/v1/torip/travel/${id}`);

  return response.data;
};

export const patchTrip = async (id: number, data: TPatchTripRequest) => {
  const response = await patch<TGetTripResponse>(
    `api/v1/torip/travel/${id}`,
    data,
  );

  return response.data;
};

export const getTripMembers = async (id: number) => {
  const response = await get<TGetTripMembersResponse>(
    `api/v1/torip/travel/${id}/members`,
  );

  return response.data;
};

// const response = await getTravelList({lastSeenId: 3});
export const getTripList = async (query: TGetTripListProps) => {
  const response = await get<TGetTripListResponse>(`api/v1/torip/travel/list`, {
    params: query,
  });

  return response.data;
};
