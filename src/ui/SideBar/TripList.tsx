import Image from 'next/image';
import Link from 'next/link';

interface ITripList {
  clickSideBarContent: () => void;
}

export default function TripList({ clickSideBarContent }: ITripList) {
  const mockTrip = ['서울 여행', '부산 여행', '유럽 여행'];

  return (
    <>
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
          <li key={index} className="cursor-pointer list-inside list-disc p-2">
            {/* TODO : 여행 별 링크 작업 필요 */}
            <Link href="/playground" onClick={clickSideBarContent}>
              {trip}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
