import { TResponse } from './model';

type TUserResponse = {
  id: number;
  username: string;
  email: string;
};

export type TTrip = {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  owner: TUserResponse;
  createdAt: string;
  lastUpdatedUser: TUserResponse;
  updatedAt: string;
};

export type TJoinTrip = {
  tripName: string;
  invitee: TUserResponse;
  status: 'Accepted' | 'Pending' | 'Rejected';
  createdAt: string;
  updatedAt: string;
};

// post - /api/v1/torip/trip
export type TPostTripRequest = {
  name: string;
  startDate: string;
  endDate: string;
};

export type TPostTripResponse = TResponse<TTrip>;

// get - /api/v1/torip/{id}/request

export type TJoinTripListResponse = TResponse<TJoinTrip[]>;

// post - /api/v1/torip/{id}/request
export type TJoinTripResponse = TResponse<TJoinTrip>;

// post - /api/v1/torip/request/{id}/reject
export type TRejectTripResponse = TResponse<TJoinTrip>;

// post - /api/v1/torip/request/{id}/accept
export type TAcceptTripResponse = TResponse<TJoinTrip>;

// get - /api/v1/torip/trip/{id}
export type TGetTripResponse = TResponse<TTrip>;

// delete - /api/v1/torip/trip/{id}
export type TDeleteTripResponse = TResponse<Record<string, never>>;

// patch - /api/v1/torip/trip/{id}
export type TPatchTripRequest = {
  name: string;
  startDate: string;
  endDate: string;
};

export type TPatchTripResponse = TResponse<TTrip>;

// get - /api/v1/torip/trip/{id}/members
export type TGetTripMembersResponse = TResponse<TUserResponse[]>;

// get - /api/v1/torip/trip/list
/**
 
@property {number}
*/
export type TGetTripListProps = {
  lastSeenId: number;
};

type TGetTripList = {
  lastSeenId: number;
  content: TTrip[];
};

export type TGetTripListResponse = TResponse<TGetTripList>;
