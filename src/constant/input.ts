import { IAuthInputProps } from '@ui/auth/AuthInput';

export const INPUT_CLASSNAME = {
  base: ` 
      w-full flex items-center rounded-xl border text-slate-800 font-normal placeholder:text-slate-400 bg-gray-50
      border-white hover:border-blue-300 focus:border-blue-500
      outline-none ring-0 ring-offset-0 focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0
      h-11 px-6 py-3 text-sm leading-tight
      sm:h-12 sm:px-6 sm:py-3 sm:text-base sm:leading-normal
  `,
  error: {
    border: 'border-warning hover:border-blue-300 focus:border-warning',
    message: 'absolute bottom-0 left-0 pt-2 text-xs text-warning',
  },
};

export const INPUT_MESSAGE = {
  placeholder: {
    name: '이름을 입력해 주세요.',
    email: '이메일을 입력해 주세요.',
    password: '비밀번호를 입력해 주세요.',
    passwordConfirm: '비밀번호를 다시 한 번 입력해 주세요.',
    todo: '할 일의 제목을 적어주세요.',
    selectTrip: '여행을 선택해 주세요.',
  },
  error: {
    required: '필수 입력 항목입니다.',
    passwordTooShort: '비밀번호는 최소 8자 이상이어야 합니다.',
    passwordsDoNotMatch: '비밀번호가 일치하지 않습니다.',
    invalidEmail: '유효한 이메일 주소를 입력해 주세요.',
    passwordNotSame: '비밀번호가 일치하지 않습니다.',
    passwordWrong: '비밀번호가 올바르지 않습니다.',
  },
};

export const AUTH_INPUT_LABEL_MAP: Record<IAuthInputProps['type'], string> = {
  name: '이름',
  email: '아이디',
  password: '비밀번호',
  passwordConfirm: '비밀번호 확인',
};
