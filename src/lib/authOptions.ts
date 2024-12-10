import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { postLogin } from './api/service/auth.api';

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET, // NextAuth 비밀키
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {
          label: '이메일',
          type: 'text',
          placeholder: 'email@example.com',
        },
        password: {
          label: '비밀번호',
          type: 'password',
          placeholder: '비밀번호를 입력해주세요.',
        },
      },
      async authorize(credentials) {
        try {
          if (credentials?.email && credentials?.password) {
            const requestData = {
              email: credentials.email,
              password: credentials.password,
            };
            const user = await postLogin(requestData);

            if (user) {
              return user;
            }
          }
        } catch (e) {
          return e;
        }
      },
    }),
  ],
  pages: {
    signIn: '/signin',
  },
  callbacks: {},
};
