'use client';

import { usePathname } from 'next/navigation';
import { ROUTE_TITLE_MAP } from '@constant/path';
import { twMerge } from 'tailwind-merge';
import { extractBasePath } from '@util/common';

/**
 * 현재페이지가 어디인지 알려주는 상단 타이틀 용
 *
 * @component
 * @param {string} className - css커스텀을 위한 props
 */

export default function NavTitle({ className }: { className?: string }) {
  const pathname = usePathname();
  const basePath = extractBasePath(pathname);
  // 모든 노트 등 같은 경우 동적으로 받아야 하기에 api 받은후 수정필요함
  const pageTitle = ROUTE_TITLE_MAP[basePath];

  const baseStyles =
    'text-slate-900 text-base font-semibold py-3 leading-normal tablet:text-lg tablet:leading-7';

  return <h1 className={twMerge(baseStyles, className)}>{pageTitle}</h1>;
}
