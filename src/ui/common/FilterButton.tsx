'use client';

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

const FILTERS = ['All', '공통', '개인'];

export default function FilterButton() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  return (
    <div className="inline-flex gap-2.5">
      {FILTERS.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
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
