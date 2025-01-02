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
 * @param {string} pageTitle - 렌더링할 페이지 제목 (옵션)
 */

export default function NavTitle({
  className,
  pageTitleProp,
}: {
  className?: string;
  pageTitleProp?: string;
}) {
  const pathname = usePathname();
  const basePath = extractBasePath(pathname);

  const baseStyles =
    'text-slate-900 text-base font-semibold leading-normal tablet:text-lg tablet:leading-7';

  // TODO 모든 노트 등 같은 경우 동적으로 받아야 하기에 api 받은후 수정필요함
  const pageTitle = pageTitleProp || ROUTE_TITLE_MAP[basePath];
  return <h2 className={twMerge(baseStyles, className)}>{pageTitle}</h2>;
}
