// types/next-auth.d.ts

import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface Session {
    user: {
      id: number;
      name: string | null;
      email: string | null;
    } & DefaultSession['user'];
    accessToken?: string;
    refreshToken?: string;
  }

  interface IUser {
    id: number;
    name: string;
    email: string;
    accessToken?: string;
    refreshToken?: string;
  }
}
