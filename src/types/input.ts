import { InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';

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
  register?: UseFormRegister<Record<string, string>>;
}
