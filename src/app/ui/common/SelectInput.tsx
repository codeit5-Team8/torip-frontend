import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select';
import { twMerge } from 'tailwind-merge';
import { INPUT_CLASSNAME, INPUT_MESSAGE } from '@/constant/input';
import { ComponentPropsWithRef } from 'react';
import { TInputErrorType } from '@/app/types/input';

export type TSelectOptionsType = {
  label: string;
  value: string | null;
}[];

interface ISelectInputProps
  extends Omit<ComponentPropsWithRef<'select'>, 'onChange'> {
  options: TSelectOptionsType;
  onChange: (value: string | undefined) => void;
  placeholder: string;
  errorType?: TInputErrorType;
}

export default function SelectInput(props: ISelectInputProps) {
  const { placeholder, options, value, onChange, errorType } = props;

  const selectTriggerClassName = twMerge(
    INPUT_CLASSNAME.base,
    errorType && INPUT_CLASSNAME.error.border,
  );

  const SelectOptionClassName =
    'p-0 gap-0 rounded-bl-xl rounded-br-xl bg-gray-50 font-normal leading-normal text-slate-800 text-sm sm:text-base';

  const selectedOptions = options.find((option) => option.value === value);

  return (
    <div className="relative pb-7">
      <Select onValueChange={onChange}>
        <SelectTrigger className={selectTriggerClassName}>
          <div className="flex w-full items-center justify-between">
            {selectedOptions ? (
              <span>{selectedOptions.label}</span>
            ) : (
              <span className="text-slate-400">{placeholder}</span>
            )}
            <>icon{/* 아이콘 들어올 자리 */}</>
          </div>
        </SelectTrigger>
        <SelectContent className={SelectOptionClassName}>
          {options.map((option) => {
            const value = String(option.value);
            return (
              <SelectItem key={value} value={value} className="px-6 py-2.5">
                {option.label}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>

      {errorType && (
        <p className={INPUT_CLASSNAME.error.message}>
          {INPUT_MESSAGE.error[errorType]}
        </p>
      )}
    </div>
  );
}
