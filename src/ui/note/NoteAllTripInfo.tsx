import NoteAddButton from '@ui/note/NoteAddButton';
import Image from 'next/image';

interface INoteAllTripInfoProps {
  tripId: number;
  tripTitle: string;
}

export default function NoteAllTripInfo({
  tripId,
  tripTitle,
}: INoteAllTripInfoProps) {
  return (
    <section className="mb-4 flex h-[52px] items-center gap-2 rounded-xl bg-white px-[11px] py-[9px] sm:h-[88px] sm:px-6 sm:py-5">
      <Image
        src={`/asset/icon/trip-dark.png`}
        alt="여행 아이콘"
        width={24}
        height={24}
      />
      <div className="flex-1 text-sm font-semibold leading-tight text-slate-800">
        {tripTitle}
      </div>
      <NoteAddButton tripId={tripId} />
    </section>
  );
}
