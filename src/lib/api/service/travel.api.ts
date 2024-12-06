import {
  TAcceptTravelResponse,
  TDeleteTravelResponse,
  TGetTravelListProps,
  TGetTravelListResponse,
  TGetTravelMembersResponse,
  TGetTravelResponse,
  TJoinTravelListResponse,
  TJoinTravelResponse,
  TPatchTravelRequest,
  TPostTravelRequest,
  TPostTravelResponse,
} from '@model/travel.model';
import { del, get, patch, post } from '../axios';

export const postTravel = async (data: TPostTravelRequest) => {
  const response = await post<TPostTravelResponse>(
    '/api/v1/torip/travel',
    data,
  );

  return response.data;
};

export const getJoinTravelList = async (id: number) => {
  const response = await get<TJoinTravelListResponse>(
    `api/v1/torip/travel/${id}/request`,
  );

  return response.data;
};

export const postJoinTravel = async (id: number) => {
  const response = await post<TJoinTravelResponse>(
    `api/v1/torip/travel/${id}/request`,
  );

  return response.data;
};

export const postAcceptTravel = async (id: number) => {
  const response = await post<TAcceptTravelResponse>(
    `api/v1/torip/travel/request/${id}/accept`,
  );

  return response.data;
};

export const getTravel = async (id: number) => {
  const response = await get<TGetTravelResponse>(`api/v1/torip/travel/${id}`);

  return response.data;
};

export const deleteTravel = async (id: number) => {
  const response = await del<TDeleteTravelResponse>(
    `api/v1/torip/travel/${id}`,
  );

  return response.data;
};

export const patchTravel = async (id: number, data: TPatchTravelRequest) => {
  const response = await patch<TGetTravelResponse>(
    `api/v1/torip/travel/${id}`,
    data,
  );

  return response.data;
};

export const getTravelMembers = async (id: number) => {
  const response = await get<TGetTravelMembersResponse>(
    `api/v1/torip/travel/${id}/members`,
  );

  return response.data;
};

// const response = await getTravelList({lastSeenId: 3});
export const getTravelList = async (query: TGetTravelListProps) => {
  const response = await get<TGetTravelListResponse>(
    `api/v1/torip/travel/list`,
    {
      params: query,
    },
  );

  return response.data;
};
