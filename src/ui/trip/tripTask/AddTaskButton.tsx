import PlusIcon from '@ui/common/PlusIcon';
import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface IAddTaskButtonProps extends ComponentPropsWithoutRef<'button'> {
  className?: string; // 버튼 스타일 설정
  iconSize?: number; // SVG 크기
  color?: 'black' | 'primary'; // 텍스트 색상 선택
}

export default function AddTaskButton({
  onClick,
  className,
  iconSize = 16,
  color = 'black',
  ...rest
}: IAddTaskButtonProps) {
  const textColor = color === 'primary' ? 'text-primary' : 'text-slate-700';

  return (
    <button
      className={twMerge(
        'group flex items-center gap-1 bg-white text-sm font-medium',
        textColor, // 동적으로 적용되는 텍스트 색상
        'hover:text-mint-700 active:text-mint-800 disabled:text-slate-400',
        'transition-colors duration-200 ease-in-out', // 전환 효과: 200ms
        className,
      )}
      onClick={onClick}
      {...rest}
    >
      <PlusIcon
        size={iconSize}
        className={`transition-colors duration-200 ease-in-out group-hover:text-mint-700 group-active:text-mint-800 ${textColor}`} // 아이콘 색상도 동일하게 적용
      />
      할일 추가
    </button>
  );
}
