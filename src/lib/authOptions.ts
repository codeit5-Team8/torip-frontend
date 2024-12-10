import CredentialsProvider from 'next-auth/providers/credentials';
import { postLogin, postRegister } from './api/service/auth.api';

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
      async authorize(credentials: {
        name: string | undefined;
        email: string;
        password: string;
      }) {
        const { name, email, password } = credentials;
        // 회원가입
        try {
          if (name) {
            const { result: token, success } = await postRegister({
              username: name,
              email,
              password,
            });
            if (success) {
              return { name, email, ...token };
            }
          }
          // 로그인
          const { result: token, success } = await postLogin({
            email,
            password,
          });
          if (success) {
            return { name, email, ...token };
          }
        } catch (error: unknown) {
          throw new Error(error.message);
        }
      },
    }),
  ],
  pages: {
    signIn: '/signin',
  },
  callbacks: {},
};
