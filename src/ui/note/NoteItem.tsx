import { TNote } from '@model/note.model';
import NoteTodoInfo from './NoteTodoInfo';
import Divider from '@ui/note/Divider';

interface INoteItemProps {
  note: TNote;
}

export default function NoteItem({ note }: INoteItemProps) {
  return (
    <div className="flex-col rounded-xl bg-white p-6">
      <div className="mb-4 flex items-center gap-1">
        <>아이콘</>
        <span className="text-sm font-medium leading-tight text-slate-800">
          {note.createdBy}
        </span>
        <span className="ml-auto">케밥</span>
      </div>

      <p>{note.noteTitle}</p>

      <Divider className="my-3" />

      <NoteTodoInfo title="투두 제목" />
    </div>
  );
}
