'use client';

import { twMerge } from 'tailwind-merge';

export const FILTERS = ['All', '공통', '개인'] as const;
export type TFilterType = (typeof FILTERS)[number];

interface IFilterButtonProps {
  activeFilter: TFilterType; // 필터 상태
  onClick: (filter: TFilterType) => void; // 클릭 이벤트 핸들러
}

export default function FilterButton({
  activeFilter,
  onClick,
}: IFilterButtonProps) {
  return (
    <div className="inline-flex gap-2.5">
      {FILTERS.map((filter) => (
        <button
          key={filter}
          onClick={() => onClick(filter)}
          className={twMerge(
            'rounded-[17px] border px-3 py-1 text-sm font-medium leading-tight transition-colors duration-200 ease-in-out',
            filter === activeFilter
              ? 'bg-primary text-white'
              : 'bg-white text-slate-800',
          )}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
