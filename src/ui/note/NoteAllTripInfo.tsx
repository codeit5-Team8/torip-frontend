import NoteAddButton from '@ui/note/NoteAddButton';

interface INoteAllTripInfoProps {
  tripId: number;
  tripTitle: string;
}

export default function NoteAllTripInfo(props: INoteAllTripInfoProps) {
  return (
    <section className="mb-4 flex h-[52px] items-center gap-2 rounded-xl bg-white px-[11px] py-[9px] sm:h-[88px] sm:px-6 sm:py-5">
      <>아이콘</>
      <div className="flex-1 text-sm font-semibold leading-tight text-slate-800">
        {props.tripTitle}
      </div>
      <NoteAddButton />
    </section>
  );
}
