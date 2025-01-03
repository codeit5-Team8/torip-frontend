'use client';

import { ReactNode, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

interface INameTagProps {
  children: ReactNode; // 이름 정보
  className?: string; // 사용자 정의 스타일링
}

const colors = [
  'border-[#E2E8F0] bg-[#FFFFFF]',
  'border-[#5BE1DD] bg-[#F7FFFF]',
  'border-[#FEE90A] bg-[#FFFEEE]',
  'border-[#3E85FE] bg-[#F4F8FF]',
  'border-[#FF71B5] bg-[#FFF6FA]',
  'border-[#CA72FF] bg-[#FDFBFF]',
  'border-[#FFB52C] bg-[#FFF8EB]',
];

export default function NameTag({ children }: INameTagProps) {
  const randomColor = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }, []);

  return (
    <span
      className={twMerge(
        'item-center h-5 rounded border px-[3px] py-0.5',
        'text-xs font-normal leading-none text-slate-700',
        randomColor,
      )}
    >
      {children}
    </span>
  );
}
