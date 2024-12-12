import Link from 'next/link';

export default function NoteAddButton() {
  const sampleNoteId = '123';

  return (
    <Link
      href={`/note-add/${sampleNoteId}`}
      className="inline-flex h-[34px] w-[94px] items-center justify-center rounded-xl bg-primary text-white sm:h-12 sm:w-[180px]"
    >
      + 노트 추가
    </Link>
  );
}
