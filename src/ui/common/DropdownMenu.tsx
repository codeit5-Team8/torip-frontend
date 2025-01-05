import {
  DropdownMenu as DropDownMenuWrapper,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@components/ui/dropdown-menu';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface IDropdownMenuProps {
  items: {
    label: string; // 메뉴 항목의 이름
    onClick: () => void; // 항목을 클릭했을 때 실행되는 함수
    disabled?: boolean; // 항목이 비활성화 상태인지 여부
  }[];
  className?: string; // 버튼 스타일
  children: ReactNode; // 트리거 버튼 텍스트나 아이콘
}

export default function DropdownMenu({
  items,
  className,
  children,
}: IDropdownMenuProps) {
  return (
    <DropDownMenuWrapper>
      <DropdownMenuTrigger asChild>
        <button
          className={twMerge(
            'relative flex min-h-6 min-w-6 items-center justify-center rounded-full bg-white text-slate-400 outline-none',
            className,
          )}
        >
          <div className="pointer-events-none">
            {/* 아이콘이나 텍스트 */}
            {children}
          </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="z-50">
        {items?.map((item, index) => (
          <DropdownMenuItem
            key={index}
            onClick={(event) => event.stopPropagation()}
            onSelect={item.onClick}
            disabled={item.disabled}
          >
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropDownMenuWrapper>
  );
}
