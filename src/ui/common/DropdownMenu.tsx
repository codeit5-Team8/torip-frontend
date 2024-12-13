import {
  DropdownMenu as DropDownMenuWrapper,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@components/ui/dropdown-menu';

interface IDropdownMenuProps {
  items: {
    label: string; // 메뉴 항목의 이름
    onClick: () => void; // 항목을 클릭했을 때 실행되는 함수
    disabled?: boolean; // 항목이 비활성화 상태인지 여부
  }[];
}

export default function DropdownMenu({ items }: IDropdownMenuProps) {
  return (
    <DropDownMenuWrapper>
      <DropdownMenuTrigger asChild>
        <button className="relative flex h-6 w-6 items-center justify-center rounded-full bg-slate-50 text-slate-400">
          {/* 케밥 아이콘 부분 */}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {items?.map((item, index) => (
          <DropdownMenuItem
            key={index}
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
