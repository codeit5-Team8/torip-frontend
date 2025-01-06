// types/next-auth.d.ts

import { DefaultSession, DefaultUser } from 'next-auth';

declare module 'next-auth' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface Session {
    user: {
      id: number;
    } & DefaultSession['user'];
    accessToken?: string;
    refreshToken?: string;
    expiredAt?: string;
  }
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface User extends DefaultUser {
    accessToken?: string;
    refreshToken?: string;
    expiredAt?: string;
  }
}
