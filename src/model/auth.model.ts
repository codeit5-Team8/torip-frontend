export type TPostRegisterRequest = {
  username: string;
  email: string;
  password: string;
};

export type TPostRefreshTokenRequest = string;

export type TPostLoginRequest = Omit<TPostRegisterRequest, 'username'>;

export type TGetEmailExistsRequest = string;

export type TGetEmailExistsResponse = {
  exists: boolean;
};
