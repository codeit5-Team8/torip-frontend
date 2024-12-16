import CredentialsProvider from 'next-auth/providers/credentials';
import { postLogin, postRegister } from './api/service/auth.api';
import { Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';

interface IMyUser {
  id: number;
  email: string;
  name: string;
  accessToken?: string;
  refreshToken?: string;
}

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET, // NextAuth 비밀키
  providers: [
    CredentialsProvider({
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
            (error as Error).message = message; //서버 msg 넣기
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
          // 커스텀 에러 객체 생성
          const error = new Error('Login failed.');
          (error as Error).message = message; //서버 msg 넣기
          throw error;
        }
      },
    }),
  ],
  pages: {
    signIn: '/signin',
  },
  callbacks: {
    async jwt({ token, user }: { token: JWT; user: IMyUser }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.accessToken = user.accessToken as string;
        token.refreshToken = user.refreshToken as string;
      }
      return token;
    },

    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user) {
        session.user.id = token.id as number;
        session.user.email = token.email as string;
        session.user.name = token.name as string;
        session.accessToken = token.accessToken as string;
        session.refreshToken = token.refreshToken as string;
      }
      return session;
    },

    // // Redirect 콜백: 로그인 후 리디렉션할 URL을 지정
    // redirect: async ({ url, baseUrl }: { url: string; baseUrl: string }) => {
    //   if (url.startsWith('/')) {
    //     return `${baseUrl}${url}`;
    //   }
    //   if (url) {
    //     const { search, origin } = new URL(url);
    //     const callbackUrl = new URLSearchParams(search).get('callbackUrl');
    //     if (callbackUrl) {
    //       return callbackUrl.startsWith('/')
    //         ? `${baseUrl}${callbackUrl}`
    //         : callbackUrl;
    //     }
    //     if (origin === baseUrl) {
    //       return url;
    //     }
    //   }
    //   return baseUrl;
    // },
  },
};
