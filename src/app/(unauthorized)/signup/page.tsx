'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import AuthInput from '@ui/auth/AuthInput';
import Button from '@ui/common/Button';
import { AUTH_VALIDATION_REGEX } from '@constant/auth';
import Link from 'next/link';
import { useLogin } from '@hooks/auth/useLogin';
import { useRouter } from 'next/navigation';
import { getEmailExists } from '@lib/api/service/auth.api';

interface ISignUpFormInputs {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}
export default function SignUpPage({
  searchParams,
}: {
  searchParams: { redirectTo?: string };
}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<ISignUpFormInputs>({ mode: 'onBlur' });
  const { loginHandler } = useLogin();
  const router = useRouter();

  // 이메일 중복 체크 함수
  const checkEmailExists = async (email: string): Promise<boolean | string> => {
    const response = await getEmailExists(email);
    if (response?.result.exists) {
      return '이미 사용 중인 이메일입니다.';
    }
    return true;
  };

  const onSubmit: SubmitHandler<ISignUpFormInputs> = async (data) => {
    const res = await loginHandler('credentials', {
      ...data,
      redirect: false,
    });
    if (res?.ok) {
      if (searchParams.redirectTo) {
        router.push(searchParams.redirectTo);
      } else {
        router.push('/');
      }
    }
  };

  // passwordconfirm 비교를 위해 watch 사용
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
            validate: checkEmailExists,
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
        {/* Password Confirm */}
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
