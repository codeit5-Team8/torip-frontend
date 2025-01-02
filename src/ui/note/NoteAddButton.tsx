import Link from 'next/link';

interface INoteAddButtonProps {
  tripId: number;
  taskId?: string;
}

export default function NoteAddButton({ tripId, taskId }: INoteAddButtonProps) {
  const query = taskId ? { tripId, taskId } : { tripId };

  return (
    <Link
      href={{
        pathname: '/note-add',
        query,
      }}
      className="inline-flex h-[34px] w-[94px] items-center justify-center rounded-xl bg-primary text-white sm:h-12 sm:w-[180px]"
    >
      + 노트 추가
    </Link>
  );
}
