import { ComponentPropsWithRef, forwardRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { INPUT_CLASSNAME } from '@constant/input';

interface IPasswordInputProps
  extends Omit<ComponentPropsWithRef<'input'>, 'type'> {
  errorMessage?: string;
}

const PasswordInput = forwardRef<HTMLInputElement, IPasswordInputProps>(
  (props, ref) => {
    const { errorMessage, ...rest } = props;

    const [isShow, setIsShow] = useState(false);

    const inputClassName = twMerge(
      INPUT_CLASSNAME.base,
      errorMessage && INPUT_CLASSNAME.error.border,
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

        {errorMessage && (
          <p className={INPUT_CLASSNAME.error.message}>{errorMessage}</p>
        )}
      </div>
    );
  },
);

PasswordInput.displayName = 'PasswordInput';

export { PasswordInput };
