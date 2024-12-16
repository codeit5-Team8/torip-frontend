import Image from 'next/image';
import Link from 'next/link';

interface IDashboard {
  clickSideBarContent: () => void;
}
export default function Dashboard({ clickSideBarContent }: IDashboard) {
  return (
    <Link href="/" onClick={clickSideBarContent} className="block">
      <section className="flex items-center gap-2 border-b-[1px] border-slate-200 p-6">
        <Image
          src="/asset/icon/home.png"
          alt="대시보드로 가기"
          width={24}
          height={24}
        />
        <p className="text-lg font-medium">대시보드</p>
      </section>
    </Link>
  );
}
