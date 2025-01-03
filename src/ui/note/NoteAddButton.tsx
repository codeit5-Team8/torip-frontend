import PlusIcon from '@ui/common/PlusIcon';
import Link from 'next/link';

interface INoteAddButtonProps {
  tripId?: number;
  taskId?: number;
}

export default function NoteAddButton({ tripId, taskId }: INoteAddButtonProps) {
  const query = taskId ? { taskId } : { tripId };

  return (
    <Link
      href={{
        pathname: '/note-add',
        query,
      }}
      className="inline-flex h-[34px] w-[94px] items-center justify-center gap-2 rounded-xl bg-primary text-white sm:h-12 sm:w-[180px]"
    >
      <PlusIcon size={24} /> 노트 추가
    </Link>
  );
}
