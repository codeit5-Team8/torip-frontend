'use client';

import Image from 'next/image';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AUTH_VALIDATION_REGEX } from '@constant/auth';
import AuthInput from '@ui/auth/AuthInput';
import Button from '@ui/common/Button';
import { INPUT_MESSAGE } from '@constant/input';
import { useLogin } from '@hooks/auth/useLogin';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

type TLoginFormInputs = {
  email: string;
  password: string;
};

export default function SignInPage({
  searchParams,
}: {
  searchParams: { redirectTo?: string };
}) {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    setError,
  } = useForm<TLoginFormInputs>({ mode: 'onBlur' });
  const { loginHandler } = useLogin();
  const router = useRouter();

  const onSubmit: SubmitHandler<TLoginFormInputs> = async (data) => {
    const res = await loginHandler('credentials', { ...data, redirect: false });
    if (res?.ok) {
      if (searchParams.redirectTo) {
        router.push(searchParams.redirectTo);
      } else {
        router.push('/');
      }
    } else if (res) {
      // 에러 메시지에 따라 필드별로 에러 설정
      if (res?.error === '비밀번호가 일치하지 않습니다.') {
        setError('password', {
          type: 'manual',
          message: res.error,
        });
      } else {
        setError('email', {
          type: 'manual',
          message: res.error!,
        });
      }
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <form id="loginForm" onSubmit={handleSubmit(onSubmit)} noValidate>
        <AuthInput
          type="email"
          errorMessage={
            errors.email?.message ||
            (errors.email?.type === 'required'
              ? INPUT_MESSAGE.error.required
              : errors.email?.type === 'pattern'
                ? INPUT_MESSAGE.error.invalidEmail
                : undefined)
          }
          {...register('email', {
            required: true,
            pattern: AUTH_VALIDATION_REGEX.email,
          })}
        />
        <AuthInput
          type="password"
          errorMessage={
            errors.password?.message ||
            (errors.password?.type === 'required'
              ? INPUT_MESSAGE.error.required
              : errors.password?.type === 'minLength'
                ? INPUT_MESSAGE.error.passwordTooShort
                : undefined)
          }
          {...register('password', {
            required: true,
            minLength: 8,
          })}
        />
      </form>
      <div className="flex flex-col items-center gap-6">
        <div className="flex w-full flex-col gap-4">
          <Button
            form="loginForm"
            type="submit"
            size="large"
            fullWidth={true}
            disabled={!isValid}
          >
            로그인하기
          </Button>
          <Button
            size="large"
            fullWidth={true}
            className="border-[#FEE500] bg-[#FEE500] text-slate-800 hover:border-[#FEE500] hover:bg-[#FEE500] active:border-[#FEE500] active:bg-[#FEE500]"
            onClick={() => signIn('kakao')}
          >
            <Image
              src="/asset/image/kakao.png"
              width="20"
              height="19"
              alt="카카오 아이콘"
            />
            카카오톡으로 로그인하기
          </Button>
        </div>
        <div className="flex h-5 gap-1">
          <div className="text-sm font-medium leading-tight">
            Torip이 처음이신가요?
          </div>
          <Link
            href={
              searchParams.redirectTo
                ? `/signup?redirectTo=${encodeURIComponent(searchParams.redirectTo)}`
                : '/signup'
            }
            className="text-sm font-medium leading-tight text-mint-500 underline"
          >
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
}
