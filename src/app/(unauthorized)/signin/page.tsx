'use client';

import Image from 'next/image';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AUTH_VALIDATION_REGEX } from '@constant/auth';
import AuthInput from '@ui/auth/AuthInput';
import Button from '@ui/common/Button';
import { INPUT_MESSAGE } from '@constant/input';

type TLoginFormInputs = {
  email: string;
  password: string;
};

export default function SignInPage() {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<TLoginFormInputs>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<TLoginFormInputs> = () => {
    // console.log(data);
  };

  return (
    <div className="flex flex-col gap-5">
      <form id="loginForm" onSubmit={handleSubmit(onSubmit)} noValidate>
        <AuthInput
          type="email"
          errorMessage={
            errors.email?.type === 'required'
              ? INPUT_MESSAGE.error.required
              : errors.email?.type === 'pattern'
                ? INPUT_MESSAGE.error.invalidEmail
                : undefined
          }
          {...register('email', {
            required: true,
            pattern: AUTH_VALIDATION_REGEX.email,
          })}
        />
        <AuthInput
          type="password"
          errorMessage={
            errors.password?.type === 'required'
              ? INPUT_MESSAGE.error.required
              : errors.password?.type === 'minLength'
                ? INPUT_MESSAGE.error.passwordTooShort
                : undefined
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
            href="/signup"
            className="text-sm font-medium leading-tight text-mint-500 underline"
          >
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
}
