import Image from 'next/image';
import Button from './Button';
import Link from 'next/link';
import TodoModal from './TodoModal';
import TripModal from './TripModal';
import { useModalStore } from '@store/modal.store';

interface ISidebarContentProps {
  clickSidebarContent: () => void;
}
export default function SidebarContent({
  clickSidebarContent,
}: ISidebarContentProps) {
  const mockTrip = ['서울 여행', '부산 여행', '유럽 여행'];
  const { showModal } = useModalStore();

  const handleAddTodo = () => {
    showModal({
      title: '할 일 생성',
      content: <TodoModal />,
    });
  };

  const handleAddTrip = () => {
    showModal({
      title: '여행 생성',
      content: <TripModal />,
    });
  };

  return (
    <div className="w-full">
      <section className="flex flex-col gap-6 border-b-[1px] border-slate-200 px-6 pb-6">
        <section className="flex gap-3">
          <Image
            src="/asset/image/profile.png"
            alt="프로필"
            width={64}
            height={64}
          />
          <section className="grow text-sm font-semibold">
            {/* TODO : 유저 네임, 이메일 받아서 적용하기 */}
            <p>유저 네임</p>
            <p>유저 이메일</p>
            {/* TODO : 로그인 정책 수립된 후 로그아웃 기능 구현 */}
            <button className="mt-2 text-xs font-normal text-slate-400">
              로그아웃
            </button>
          </section>
        </section>
        <Button
          className="h-12 w-full gap-0.5 p-3 text-base font-semibold"
          onClick={handleAddTodo}
        >
          <Image
            src="/asset/icon/plus.png"
            alt="할 일 추가 버튼"
            width={24}
            height={24}
          />
          새 할 일
        </Button>
      </section>
      <Link href="/" onClick={clickSidebarContent} className="block">
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
      <section className="p-6">
        <section className="flex items-center gap-2">
          <Image
            src="/asset/icon/flag.png"
            alt="대시보드로 가기"
            width={24}
            height={24}
          />
          <p className="text-lg font-medium">여행</p>
        </section>
        <ul className="pb-6 pt-4">
          {mockTrip.map((trip, index) => (
            <li
              key={index}
              className="cursor-pointer list-inside list-disc p-2"
            >
              {/* TODO : 여행 별 링크 작업 필요 */}
              <Link href="/playground" onClick={clickSidebarContent}>
                {trip}
              </Link>
            </li>
          ))}
        </ul>
        <Button
          variant="outlined"
          className="h-12 w-full gap-0.5 p-3 text-base font-semibold"
          onClick={handleAddTrip}
        >
          <Image
            src="/asset/icon/plus-mint.png"
            alt="여행 추가 버튼"
            width={24}
            height={24}
          />
          새 여행
        </Button>
      </section>
    </div>
  );
}
