import Image from 'next/image';
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
      className="inline-flex h-[34px] w-[94px] items-center justify-center gap-1 rounded-xl bg-primary text-white sm:h-12 sm:w-[180px]"
    >
      <Image
        src={`/asset/icon/plus.png`}
        alt="노트 아이콘"
        width={24}
        height={24}
      />{' '}
      노트 추가
    </Link>
  );
}
