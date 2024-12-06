import { TResponse } from './model';

type TUserResponse = {
  username: string;
  email: string;
};

type TTravel = {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  owner: TUserResponse;
  createdAt: string;
  lastUpdatedUser: TUserResponse;
  updatedAt: string;
};

type TJoinTravel = {
  travelName: string;
  invitee: TUserResponse;
  status: 'Accepted' | 'Pending' | 'Rejected';
  createdAt: string;
  updatedAt: string;
};

// post - /api/v1/torip/travel
export type TPostTravelRequest = {
  name: string;
  startDate: string;
  endDate: string;
};

export type TPostTravelResponse = TResponse<TTravel>;

// get - /api/v1/torip/{id}/request

export type TJoinTravelListResponse = TResponse<TJoinTravel[]>;

// post - /api/v1/torip/{id}/request
export type TJoinTravelResponse = TResponse<TJoinTravel>;

// post - /api/v1/torip/request/{id}/accept
export type TAcceptTravelResponse = TResponse<TJoinTravel>;

// get - /api/v1/torip/travel/{id}
export type TGetTravelResponse = TResponse<TTravel>;

// delete - /api/v1/torip/travel/{id}
export type TDeleteTravelResponse = TResponse<Record<string, never>>;

// patch - /api/v1/torip/travel/{id}
export type TPatchTravelRequest = {
  name: string;
  startDate: string;
  endDate: string;
};

export type TPatchTravelResponse = TResponse<TTravel>;

// get - /api/v1/torip/travel/{id}/members
export type TGetTravelMembersResponse = TResponse<TUserResponse[]>;

// get - /api/v1/torip/travel/list
/**
 
@property {number}
*/
export type TGetTravelListProps = {
  lastSeenId: number;
};

type TGetTravelList = {
  lastSeenId: number;
  content: TTravel[];
};

export type TGetTravelListResponse = TResponse<TGetTravelList>;
