import { ComponentPropsWithRef, forwardRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { INPUT_CLASSNAME, INPUT_MESSAGE } from '@/constant/input';
import { TInputErrorType } from './Input';

interface IPasswordInputProps
  extends Omit<ComponentPropsWithRef<'input'>, 'type'> {
  errorType?: TInputErrorType;
}

const PasswordInput = forwardRef<HTMLInputElement, IPasswordInputProps>(
  (props, ref) => {
    const { errorType, ...rest } = props;

    const [isShow, setIsShow] = useState(false);

    const inputClassName = twMerge(
      INPUT_CLASSNAME.base,
      errorType && INPUT_CLASSNAME.error.border,
    );

    return (
      <div className="relative pb-7">
        <div className="relative flex items-center">
          <input
            ref={ref}
            type={isShow ? 'text' : 'password'}
            className={inputClassName}
            {...rest}
          />
          <button
            type="button"
            className="absolute right-6 top-auto"
            onClick={() => setIsShow((prev) => !prev)}
          >
            {isShow ? (
              <>show{/* 아이콘 들어올 자리 */}</>
            ) : (
              <>hidden{/* 아이콘 들어올 자리 */}</>
            )}
          </button>
        </div>

        {errorType && (
          <p className={INPUT_CLASSNAME.error.message}>
            {INPUT_MESSAGE.error[errorType]}
          </p>
        )}
      </div>
    );
  },
);

PasswordInput.displayName = 'PasswordInput';

export { PasswordInput };
