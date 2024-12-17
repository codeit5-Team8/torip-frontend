import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Divider({ className }: HTMLAttributes<HTMLDivElement>) {
  return <div className={twMerge('h-[1px] bg-slate-200', className)} />;
}
