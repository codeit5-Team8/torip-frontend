import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { INPUT_CLASSNAME } from '@constant/input';
import { IInputProps } from '@type/input';

/**
 * 공통 Input 컴포넌트 입니다.
 *
 * @param {'text' | 'email' } type - input 타입 입니다.
 * @param {TErrorType | null} errorType - 해당하는 오류 메세지를 표시 합니다.선택 사항입니다.
 * @param {string} label - input 필드에 대한 레이블 텍스트를 제공합니다. 선택 사항입니다.
 * @returns {JSX.Element} - type에 맞는 입력 필드를 리턴합니다.
 */
const Input = forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
  const { errorMessage, ...rest } = props;

  const inputClassName = twMerge(
    INPUT_CLASSNAME.base,
    errorMessage && INPUT_CLASSNAME.error.border,
  );

  return (
    <div className="relative pb-7">
      <input className={inputClassName} ref={ref} {...rest} />

      {errorMessage && (
        <p className={INPUT_CLASSNAME.error.message}>{errorMessage}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export { Input };
