import { InputHTMLAttributes } from 'react';

export type TInputErrorType =
  | 'required'
  | 'passwordTooShort'
  | 'passwordsDoNotMatch'
  | 'invalidEmail'
  | 'passwordWrong'
  | 'passwordNotSame';

export interface IInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>,
    React.RefAttributes<HTMLInputElement> {
  type: 'text' | 'email';
  errorMessage?: string;
}
