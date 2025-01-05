import { TTrip } from '@model/trip.model';
import Image from 'next/image';
import Link from 'next/link';

interface ITripList {
  tripList:
    | {
        lastSeenId: number;
        content: TTrip[];
      }
    | undefined;
  clickSideBarContent: () => void;
}

export default function TripList({ tripList, clickSideBarContent }: ITripList) {
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
      {tripList && tripList.content.length > 0 ? (
        <ul className="pb-6 pt-4">
          {tripList!.content.map((trip) => (
            <li
              key={trip.id}
              className="cursor-pointer list-inside list-disc p-2"
            >
              <Link href={`/trip/${trip.id}`} onClick={clickSideBarContent}>
                {trip.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}
