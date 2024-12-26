interface IHeaderProps {
  setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ setIsSideBarOpen }: IHeaderProps) {
  const toggleSideBar = () => {
    setIsSideBarOpen((prev) => !prev);
  };
  return (
    <div className="flex h-12 w-full items-center gap-4 bg-white md:hidden">
      <button onClick={toggleSideBar} className="h-6 w-6 text-slate-400">
        {/* 햄버거 아이콘 들어감, sidebar 여는 핸들러 등록필요함 */}=
      </button>
    </div>
  );
}
