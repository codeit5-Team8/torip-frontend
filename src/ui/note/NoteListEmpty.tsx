import { NOTE_LIST_EMPTY_MESSAGE } from '@constant/note';

export default function NoteListEmpty() {
  return (
    <div className="flex h-[calc(100vh-156px)] w-full items-center justify-center text-center text-sm font-normal leading-tight text-slate-500">
      {NOTE_LIST_EMPTY_MESSAGE}
    </div>
  );
}
