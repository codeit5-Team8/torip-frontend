import NavTitle from './NavTitle';

export default function Header() {
  return (
    <div className="mb-4 flex items-center gap-4 bg-white px-4">
      <button className="h-6 w-6 text-slate-400 tablet:hidden">
        {/* 햄버거 아이콘 들어감, sidebar 여는 핸들러 등록필요함 */}=
      </button>
      <NavTitle />
    </div>
  );
}
