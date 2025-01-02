/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
'use client';

import { twMerge } from 'tailwind-merge';
import { useEffect } from 'react';
import { useResize } from '@hooks/useResize';
import SideBarContent from './SideBarContent';
import SideBarHeader from './SideBarHeader';

interface ISideBarProps {
  isSideBarOpen: boolean;
  setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SideBar({
  isSideBarOpen,
  setIsSideBarOpen,
}: ISideBarProps) {
  const { isMobileSize } = useResize();

  useEffect(() => {
    if (isSideBarOpen && isMobileSize) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup: 컴포넌트 언마운트 시 초기화
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSideBarOpen, isMobileSize]);

  const toggleSideBar = () => {
    setIsSideBarOpen((prev) => !prev);
  };

  const closeSideBar = () => {
    setIsSideBarOpen(false);
  };

  const clickSideBarContent = () => {
    if (isMobileSize) {
      setIsSideBarOpen(false);
    }
  };

  const sidebarClassname = twMerge(
    'bg-white hidden z-50 md:block tablet:transition-width tablet:duration-300 tablet:fixed tablet:left-0 tablet:top-0 tablet:h-screen',
    isSideBarOpen
      ? 'block absolute w-full h-full tablet:w-[280px]'
      : 'tablet:w-[60px]',
  );

  return (
    <>
      {isSideBarOpen && (
        <div
          onClick={closeSideBar}
          className="fixed inset-0 z-40 hidden bg-black bg-opacity-50 tablet:block desktop:hidden"
        ></div>
      )}
      <div className={sidebarClassname}>
        <SideBarHeader
          isSideBarOpen={isSideBarOpen}
          toggleSideBar={toggleSideBar}
        />
        {isSideBarOpen && (
          <SideBarContent
            toggleSideBar={toggleSideBar}
            clickSideBarContent={clickSideBarContent}
          />
        )}
      </div>
    </>
  );
}
