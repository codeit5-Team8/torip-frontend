'use client';

import { ComponentPropsWithoutRef, useId } from 'react';
import { twMerge } from 'tailwind-merge';

type TCheckBoxProps = Omit<ComponentPropsWithoutRef<'input'>, 'type' | 'id'>;

export default function CheckBox(props: TCheckBoxProps) {
  const { checked, onChange, children, ...rest } = props;
  const uid = useId();

  return (
    <div className="flex flex-1 items-center justify-start gap-2 overflow-hidden">
      <input
        id={uid}
        type="checkbox"
        className={twMerge(
          'h-4 w-4 flex-shrink-0 cursor-pointer appearance-none rounded-md border border-slate-200 p-[.125rem]',
          "checked:border-primary checked:bg-primary checked:bg-[url('/asset/image/check-icon.svg')] checked:bg-center checked:bg-no-repeat",
        )}
        checked={checked}
        onChange={onChange}
        {...rest}
      />
      <label
        htmlFor={uid}
        className={twMerge(
          'flex-1 cursor-pointer truncate text-sm font-normal leading-tight',
          checked ? 'line-through' : '',
        )}
      >
        {children}
      </label>
    </div>
  );
}
