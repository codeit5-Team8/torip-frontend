import CredentialsProvider from 'next-auth/providers/credentials';
import { NextAuthOptions, Session, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import dayjs from 'dayjs';
import {
  postLogin,
  postRefreshToken,
  postRegister,
} from './api/service/auth.api';

interface IMyUser extends User {
  accessToken?: string;
  refreshToken?: string;
  expiredAt?: string;
}

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      // 기존 CredentialsProvider 설정 유지
      name: 'credentials',
      credentials: {
        name: {
          label: '이름',
          type: 'text',
          placeholder: '이름을 입력해주세요.',
        },
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
      async authorize(
        credentials: Record<'name' | 'email' | 'password', string> | undefined,
      ) {
        // 기존 authorize 함수 내용 유지
        if (!credentials) {
          throw new Error('No credentials provided.');
        }
        const { name, email, password } = credentials;

        // 회원가입
        if (name) {
          const {
            result: token,
            success,
            message,
          } = await postRegister({
            username: name,
            email: email,
            password: password,
          });

          if (success) {
            return { id: '1', name, email, ...token };
          } else {
            const error = new Error('Signup failed.');
            (error as Error).message = message;
            throw error;
          }
        }

        // 로그인
        const {
          result: token,
          success,
          message,
        } = await postLogin({
          email: email,
          password: password,
        });

        if (success) {
          return { id: '1', name, email, ...token };
        } else {
          const error = new Error('Login failed.');
          (error as Error).message = message;
          throw error;
        }
      },
    }),
  ],
  pages: {
    signIn: '/signin',
  },
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: IMyUser }) {
      if (user) {
        token.id = Number(user.id);
        token.email = user.email;
        token.name = user.name;
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.expiredAt = user.expiredAt;
      }

      if (
        token.expiredAt &&
        dayjs(token.expiredAt as string).isAfter(dayjs())
      ) {
        return token;
      }

      const response = await postRefreshToken({
        refreshToken: token.refreshToken as string,
      });

      if (response.success && response.result) {
        return {
          ...token,
          accessToken: response.result.accessToken,
          refreshToken: response.result.refreshToken,
          expiredAt: response.result.expiredAt,
        };
      } else {
        return {
          id: token.id,
          email: token.email,
          name: token.name,
          accessToken: undefined,
          refreshToken: undefined,
          expiredAt: undefined,
        };
      }
    },

    async session({ session, token }: { session: Session; token: JWT }) {
      if (token.accessToken) {
        session.user.id = token.id as number;
        session.user.email = token.email as string;
        session.user.name = token.name as string;
        session.accessToken = token.accessToken as string;
        session.refreshToken = token.refreshToken as string;
        session.expiredAt = token.expiredAt as string;
      } else {
        session = {
          ...session,
          user: {
            id: 0,
            name: null,
            email: null,
          },
          accessToken: undefined,
          refreshToken: undefined,
          expiredAt: undefined,
        };
      }
      return session;
    },
  },
};
