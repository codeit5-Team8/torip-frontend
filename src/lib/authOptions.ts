import CredentialsProvider from 'next-auth/providers/credentials';
import KakaoProvider from 'next-auth/providers/kakao';
import { NextAuthOptions, Session, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import dayjs from 'dayjs';
import {
  postKaKaoLogin,
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
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        const { name, email, password } = credentials;

        try {
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

            if (success && token) {
              return {
                id: token.id.toString(),
                name: token.username,
                email: token.email,
                accessToken: token.accessToken,
                refreshToken: token.refreshToken,
                expiredAt: token.expiredAt,
              };
            } else {
              throw new Error(message || 'Signup failed.');
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

          if (success && token) {
            return {
              id: token.id.toString(),
              name: token.username,
              email: token.email,
              accessToken: token.accessToken,
              refreshToken: token.refreshToken,
              expiredAt: token.expiredAt,
            };
          } else {
            throw new Error(message || 'Login failed.');
          }
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('Authentication error:', error);
          return null;
        }
      },
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: '/signin',
  },
  callbacks: {
    async signIn({ user, account }) {
      // 카카오 로그인 서버 검증
      if (account?.provider === 'kakao' && account.access_token) {
        try {
          const {
            result: token,
            success,
            message,
          } = await postKaKaoLogin({
            accessToken: account.access_token,
          });
          if (success && token) {
            user.id = token.id.toString();
            user.name = token.username;
            user.email = token.email;
            user.accessToken = token.accessToken;
            user.refreshToken = token.refreshToken;
            user.expiredAt = token.expiredAt;
            return true;
          } else {
            throw new Error(message || 'KAKAO Login failed.');
          }
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('Error during Kakao login:', error);
          return false;
        }
      }
      return true;
    },
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
