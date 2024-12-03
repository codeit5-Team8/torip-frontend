import Header from '@ui/common/Header';
import SideBar from '@ui/common/SideBar';

interface IMainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: IMainLayoutProps) {
  return (
    <div className="flex h-screen">
      {/* 사이드바 고정 */}
      <SideBar />

      {/* Content 스크롤 가능 */}
      <div className="flex-1 overflow-y-auto">
        <Header />
        {children}
      </div>
    </div>
  );
}
