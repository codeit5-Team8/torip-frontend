import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface INoteTodoInfoProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
}

export default function NoteTodoInfo({ title, className }: INoteTodoInfoProps) {
  const classNames = twMerge('flex items-center gap-[6px]', className);
  return (
    <div className={classNames}>
      <span className="inline-flex h-5 items-center justify-center rounded bg-slate-100 px-[3px] py-0.5 text-xs font-medium leading-none text-slate-700">
        To do
      </span>
      <span className="text-sm font-normal leading-tight text-slate-700">
        {title}
      </span>
    </div>
  );
}
