'use client';

import Link from 'next/link';

interface INoteDetailDrawerLayoutProps {
  children: React.ReactNode; // 페이지 컴포넌트
}

export default function NoteDetailDrawerLayout({
  children,
}: INoteDetailDrawerLayoutProps) {
  return (
    <>
      {/* 백드롭 */}
      <Link
        href={'/note-all-trip'}
        className="bg-black bg-opacity-50 transition-opacity duration-300"
      />
      {/* 임베드  */}
      {/* 뷰어 */}
      <div className="flex translate-x-full transform items-center justify-center transition-transform duration-300">
        <div className="animate-slide-in w-full max-w-md rounded-lg bg-white p-4 shadow-lg">
          {children}
        </div>
      </div>
    </>
  );
}
