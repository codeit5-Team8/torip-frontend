import {
  signIn,
  SignInOptions,
  signOut,
  SignOutParams,
  useSession,
} from 'next-auth/react';

type TLoginWay = 'kakao' | 'credentials';

export const useLogin = () => {
  const { status } = useSession();

  const logOutHandler = (options?: SignOutParams) => {
    signOut(options);
  };

  const loginHandler = (loginWay: TLoginWay, options?: SignInOptions) =>
    signIn(loginWay, options);

  return {
    logOutHandler,
    loginHandler,
    status,
  };
};
