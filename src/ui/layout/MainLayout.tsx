import Header from '@ui/common/Header';
import SideBar from '@ui/SideBar/SideBar';

interface IMainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: IMainLayoutProps) {
  return (
    <>
      <div className="flex min-h-[100vh] w-full flex-col items-center bg-slate-100">
        <Header />
        <SideBar />
        <main className="container my-6 ml-0 flex flex-1 flex-col md:pl-[4.75rem] min-[1400px]:pl-[1rem]">
          {/* Contents 영역 */}
          {children}
        </main>
      </div>
    </>
  );
}
