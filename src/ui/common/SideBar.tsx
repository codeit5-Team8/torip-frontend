/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
'use client';

import { twMerge } from 'tailwind-merge';
import Logo from './Logo';
import Image from 'next/image';
import SidebarContent from './SidebarContent';
import { useEffect, useState } from 'react';
import { useResize } from '@hooks/useResize';

export default function SideBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isMobileSize } = useResize();

  useEffect(() => {
    if (isSidebarOpen && isMobileSize) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup: 컴포넌트 언마운트 시 초기화
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSidebarOpen, isMobileSize]);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const clickSidebarContent = () => {
    if (isMobileSize) {
      setIsSidebarOpen(false);
    }
  };

  const sidebarClassname = twMerge(
    'bg-white hidden tablet:z-50 tablet:block tablet:transition-width tablet:duration-300 tablet:fixed tablet:left-0 tablet:top-0 tablet:h-screen',
    isSidebarOpen
      ? 'block absolute w-full h-full tablet:w-[280px]'
      : 'tablet:w-[60px]',
  );

  return (
    <>
      {isSidebarOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 z-40 hidden bg-black bg-opacity-50 tablet:block desktop:hidden"
        ></div>
      )}
      <div className={sidebarClassname}>
        <section
          className={`${isSidebarOpen ? 'flex-row justify-between p-6' : 'flex-col gap-6 p-4'} flex items-center`}
        >
          <Logo
            iconOnly={isSidebarOpen ? false : true}
            size={isSidebarOpen ? 'small' : undefined}
          />
          <button className="inline" onClick={toggleSidebar}>
            <Image
              src={`/asset/icon/${isSidebarOpen ? 'fold' : 'expand'}.png`}
              alt={`${isSidebarOpen ? '사이드바 닫기' : '사이드바 열기'}`}
              width={24}
              height={24}
            />
          </button>
        </section>
        {isSidebarOpen && (
          <SidebarContent clickSidebarContent={clickSidebarContent} />
        )}
      </div>
    </>
  );
}
