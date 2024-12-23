'use client';

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

const FILTERS = ['All', '공통', '개인'];

interface IFilterButtonProps {
  onClick: (filter: string) => void; // 클릭 이벤트 핸들러
}

export default function FilterButton({ onClick }: IFilterButtonProps) {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    onClick(filter);
  };

  return (
    <div className="inline-flex gap-2.5">
      {FILTERS.map((filter) => (
        <button
          key={filter}
          onClick={() => handleFilterClick(filter)}
          className={twMerge(
            'rounded-[17px] border px-3 py-1 text-sm font-medium leading-tight',
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
