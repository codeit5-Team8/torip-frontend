import Header from '@ui/common/Header';
import SideBar from '@ui/common/SideBar';

interface IMainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: IMainLayoutProps) {
  return (
    <>
      <SideBar />
      <div className="item-center">
        <main className="container ml-0 mt-6 max-[1440px]:ml-0 md:ml-[3.75rem]">
          <Header />
          {/* Contents 영역 */}
          {children}
        </main>
      </div>
    </>
  );
}
