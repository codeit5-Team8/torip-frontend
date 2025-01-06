export type TPostRegisterRequest = {
  username: string;
  email: string;
  password: string;
};

export type TPostRefreshTokenRequest = { refreshToken: string };

export type TPostLoginRequest = Omit<TPostRegisterRequest, 'username'>;

export type TGetEmailExistsRequest = string;

export type TGetEmailExistsResponse = {
  exists: boolean;
};

export type TPostKaKaoLoginRequest = {
  accessToken: string;
};
