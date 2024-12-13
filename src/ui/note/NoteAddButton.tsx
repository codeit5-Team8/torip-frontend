import Link from 'next/link';

export default function NoteAddButton() {
  const sampleTripId = '123';
  const sampleTaskId = '123';

  return (
    <Link
      href={{
        pathname: '/note-add',
        query: { tripId: sampleTripId, taskId: sampleTaskId },
      }}
      as="/note-add"
      className="inline-flex h-[34px] w-[94px] items-center justify-center rounded-xl bg-primary text-white sm:h-12 sm:w-[180px]"
    >
      + 노트 추가
    </Link>
  );
}
