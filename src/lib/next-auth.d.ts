// next-auth.d.ts
import 'next-auth';

declare module 'next-auth' {
  interface ISession {
    accessToken?: string;
    refreshToken?: string;
  }
}
