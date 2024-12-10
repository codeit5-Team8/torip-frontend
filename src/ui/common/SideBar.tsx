/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
'use client';

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Logo from './Logo';
import Image from 'next/image';
import SidebarContent from './SidebarContent';

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const sidebarClassname = twMerge(
    'tablet:z-50 tablet:block tablet:transition-width tablet:duration-300 tablet:fixed tablet:left-0 tablet:top-0 tablet:h-screen bg-white',
    isOpen ? 'tablet:w-[280px]' : 'tablet:w-[60px]',
  );

  // TODO : 반응형 디자인 필요
  // TODO : mobile 환경에서 Header에서 Sidebar 제어할 수 있는 방법 구상하기

  return (
    <>
      {isOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 z-40 hidden bg-black bg-opacity-50 tablet:block desktop:hidden"
        ></div>
      )}
      <div className={sidebarClassname}>
        <section
          className={`${isOpen ? 'flex-row justify-between p-6' : 'flex-col gap-6 p-4'} flex items-center`}
        >
          <Logo
            iconOnly={isOpen ? false : true}
            size={isOpen ? 'small' : undefined}
          />
          <button className="inline" onClick={toggleSidebar}>
            <Image
              src={`/asset/icon/${isOpen ? 'fold' : 'expand'}.png`}
              alt={`${isOpen ? '사이드바 닫기' : '사이드바 열기'}`}
              width={24}
              height={24}
            />
          </button>
        </section>
        {isOpen && <SidebarContent />}
      </div>
    </>
  );
}
