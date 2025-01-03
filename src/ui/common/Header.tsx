import Image from 'next/image';

interface IHeaderProps {
  setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ setIsSideBarOpen }: IHeaderProps) {
  const toggleSideBar = () => {
    setIsSideBarOpen((prev) => !prev);
  };
  return (
    <div className="flex h-12 w-full items-center gap-4 bg-white px-4 py-3 md:hidden">
      <button onClick={toggleSideBar} className="h-6 w-6 text-slate-400">
        <Image
          src="/asset/icon/hamburger.png"
          alt="사이드바 열기"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
}
