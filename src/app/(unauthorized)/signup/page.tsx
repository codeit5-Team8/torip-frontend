'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import AuthInput from '@ui/auth/AuthInput';
import Button from '@ui/common/Button';
import { AUTH_VALIDATION_REGEX } from '@constant/auth';
import Link from 'next/link';
import { useLogin } from '@hooks/useLogin';

interface ISignUpFormInputs {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<ISignUpFormInputs>({ mode: 'onBlur' });
  const { loginHandler } = useLogin();

  const onSubmit: SubmitHandler<ISignUpFormInputs> = async (data) => {
    // const requestData: TPostRegisterRequest = {
    //   username: data.name,
    //   email: data.email,
    //   password: data.password,
    // };
    loginHandler('credentials', {
      ...data,
      redirect: false,
    });
  };

  // passwordconfirm 이랑 비교하기위해 watch 사용
  const passwordValue = watch('password');

  return (
    <div className="flex flex-col gap-5">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Name */}
        <AuthInput
          type="name"
          errorMessage={errors.name && errors.name.message}
          {...register('name', {
            required: '이름은 필수 항목입니다.',
            pattern: {
              value: AUTH_VALIDATION_REGEX.name,
              message: '유효하지 않은 이름입니다.',
            },
            minLength: {
              value: 2,
              message: '이름은 최소 2자 이상이어야 합니다.',
            },
          })}
        />

        {/* Email */}
        <AuthInput
          type="email"
          errorMessage={errors.email && errors.email.message}
          {...register('email', {
            required: '이메일은 필수 항목입니다.',
            pattern: {
              value: AUTH_VALIDATION_REGEX.email,
              message: '올바른 이메일 형식을 입력해 주세요.',
            },
            minLength: {
              value: 2,
              message: '이메일은 최소 2자 이상이어야 합니다.',
            },
          })}
        />
        {/* Password */}
        <AuthInput
          type="password"
          errorMessage={errors.password && errors.password.message}
          {...register('password', {
            required: '비밀번호는 필수 항목입니다.',
            minLength: {
              value: 8,
              message: '비밀번호는 최소 8자 이상이어야 합니다.',
            },
          })}
        />
        {/* Passwordcheck */}
        <AuthInput
          type="passwordConfirm"
          errorMessage={
            errors.passwordConfirm && errors.passwordConfirm.message
          }
          {...register('passwordConfirm', {
            required: '비밀번호 확인은 필수 항목입니다.',
            validate: (value) =>
              value === passwordValue || '비밀번호가 일치하지 않습니다.',
          })}
        />
        {/* Submit Button */}
        {/* 비활성화 일때 bg-slate-400 , 기본 bg-primary */}
        <Button
          className={`h-12 w-full border-none text-base font-semibold ${
            isValid ? 'bg-primary' : 'bg-slate-400'
          }`}
          type="submit"
          disabled={!isValid}
        >
          회원가입하기
        </Button>
      </form>

      <div className="flex justify-center gap-1 text-sm font-medium text-slate-800">
        <p>이미 회원이신가요? </p>
        <Link href={'/signin'} className="text-mint-500 underline">
          로그인
        </Link>
      </div>
    </div>
  );
}
