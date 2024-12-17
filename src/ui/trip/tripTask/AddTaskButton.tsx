import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface IAddTaskButtonProps extends ComponentPropsWithoutRef<'button'> {
  className?: string; // 버튼 스타일 설정
}

export default function AddTaskButton({
  onClick,
  className,
  ...rest
}: IAddTaskButtonProps) {
  return (
    <button
      className={twMerge(
        'flex items-center gap-1 bg-white text-sm font-medium text-slate-700',
        'hover:text-slate-800 active:text-slate-800',
        "before:inline-block before:h-4 before:w-4 before:bg-[url('/asset/icon/plusblack.png')] before:bg-contain before:bg-no-repeat",
        className,
      )}
      onClick={onClick}
      {...rest}
    >
      할일 추가
    </button>
  );
}
