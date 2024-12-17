import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface IShowAllTasksButtonProps extends ComponentPropsWithoutRef<'button'> {
  className?: string; // 버튼 스타일 설정
}

export default function ShowAllTasksButton({
  onClick,
  className,
  ...rest
}: IShowAllTasksButtonProps) {
  return (
    <button
      className={twMerge(
        'flex items-center bg-white text-sm font-medium text-slate-600',
        'hover:text-slate-800 active:text-slate-800',
        "after:inline-block after:h-6 after:w-6 after:bg-[url('/asset/icon/arrowright.png')] after:bg-contain after:bg-no-repeat",
        className,
      )}
      onClick={onClick}
      {...rest}
    >
      전체 보기
    </button>
  );
}
