'use client';

import Header from '@ui/common/Header';
import SideBar from '@ui/SideBar/SideBar';
import { useState } from 'react';

interface IMainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: IMainLayoutProps) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <>
      <div className="flex min-h-[100vh] w-full flex-col items-center bg-slate-100">
        <Header setIsSideBarOpen={setIsSideBarOpen} />
        <SideBar
          isSideBarOpen={isSideBarOpen}
          setIsSideBarOpen={setIsSideBarOpen}
        />
        <main className="container my-6 ml-0 flex flex-1 flex-col md:pl-[4.75rem] min-[1400px]:pl-[1rem]">
          {/* Contents 영역 */}
          {children}
        </main>
      </div>
    </>
  );
}
