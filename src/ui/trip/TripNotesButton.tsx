import Image from 'next/image';
import Link from 'next/link';

export default function TripNotesButton() {
  return (
    <section className="section-box bg-mint-100 p-0">
      {/* TODO 여행별 노트 페이지로 동적 라우팅 */}
      <Link
        href={'/note-all-trip'}
        className="flex w-full items-center justify-between px-6 py-4 text-lg font-bold leading-7"
      >
        <span>
          {/* 아이콘 */}
          노트 모아보기
        </span>
        <Image
          src="/asset/icon/arrowright.png"
          alt="노트 모아보기 이동 아이콘"
          width="24"
          height="24"
        />
      </Link>
    </section>
  );
}
