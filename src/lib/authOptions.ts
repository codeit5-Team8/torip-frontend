import { NextAuthOptions } from 'next-auth';

export const authOptions: NextAuthOptions = {
  secret: 'next auth secret key',
  providers: [],
  pages: {},
  callbacks: {},
};
