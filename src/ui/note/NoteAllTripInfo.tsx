import NoteAddButton from '@ui/note/NoteAddButton';
import Image from 'next/image';
import NoteTaskInfo from './NoteTaskInfo';

interface INoteAllTripInfoProps {
  tripId?: number;
  taskId?: number;
  tripTitle: string;
  taskTitle?: string;
}

export default function NoteAllTripInfo({
  tripId,
  taskId,
  taskTitle,
  tripTitle,
}: INoteAllTripInfoProps) {
  // tripid , taskid 선택적으로 받아옴
  const idProps = tripId ? { tripId } : { taskId };

  return (
    <section className="mb-4 flex h-[52px] items-center gap-2 rounded-xl bg-white px-[11px] py-[9px] sm:h-[88px] sm:px-6 sm:py-5">
      <Image
        src="/asset/icon/trip-dark.png"
        alt="여행아이콘"
        width={24}
        height={24}
      />
      <div className="flex-1 flex-col justify-center text-sm font-semibold leading-tight text-slate-800">
        {tripTitle}
        {taskId && taskTitle && <NoteTaskInfo taskTitle={taskTitle} />}
      </div>
      <NoteAddButton {...idProps} />
    </section>
  );
}
