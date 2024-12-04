import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { AUTH_INPUT_LABEL_MAP, INPUT_MESSAGE } from '@constant/input';
import { Input } from '@ui/common/Input';
import { PasswordInput } from '@ui/common/PasswordInput';
import { TInputErrorType } from '@type/input';

export interface IAuthInputProps {
  type: 'name' | 'email' | 'password' | 'passwordConfirm';
  className?: string;
  errorType?: TInputErrorType;
}

const AuthInput = forwardRef<HTMLInputElement, IAuthInputProps>(
  ({ type, className, errorType }, ref) => {
    const placeholder = INPUT_MESSAGE.placeholder[type];

    return (
      <div className={twMerge(className, 'mb-4 flex flex-col gap-3')}>
        <label
          htmlFor={type}
          className="text-base font-semibold leading-normal text-slate-800"
        >
          {AUTH_INPUT_LABEL_MAP[type]}
        </label>
        {type === 'name' || type === 'email' ? (
          <Input
            id={type}
            type={type === 'name' ? 'text' : 'email'}
            placeholder={placeholder}
            ref={ref}
            errorType={errorType}
          />
        ) : (
          <PasswordInput
            id={type}
            placeholder={placeholder}
            ref={ref}
            errorType={errorType}
          />
        )}
      </div>
    );
  },
);

AuthInput.displayName = 'AuthInput';

export default AuthInput;
