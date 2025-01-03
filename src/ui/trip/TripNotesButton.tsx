import { TTrip } from '@model/trip.model';
import Image from 'next/image';
import Link from 'next/link';

type TTripNotesButton = Pick<TTrip, 'id'>;

export default function TripNotesButton({ id }: TTripNotesButton) {
  return (
    <section className="section-box bg-mint-100 p-0">
      <Link
        href={`/note-all-trip/${id}`}
        className="flex w-full items-center justify-between px-6 py-4 text-lg font-bold leading-7"
      >
        <div className="flex gap-2">
          <Image
            src="/asset/icon/note.png"
            width={24}
            height={24}
            alt="노트 아이콘"
          />
          <span>노트 모아보기</span>
        </div>
        <div>
          <Image
            src="/asset/icon/arrowright.png"
            alt="노트 모아보기 이동 아이콘"
            width="24"
            height="24"
          />
        </div>
      </Link>
    </section>
  );
}
