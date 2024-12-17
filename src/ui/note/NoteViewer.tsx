import { TNote } from '@model/note.model';
import NoteTaskInfo from './NoteTaskInfo';
import NoteTitle from './NoteTitle';
import NoteTripTitle from './NoteTripTitle';
import { formatIsoDateToYYYYMMDD } from '@util/note';

export default function NoteViewer({
  tripTitle,
  taskTitle,
  noteTitle,
  noteContent,
  createdAt,
}: TNote) {
  return (
    <div className="flex-1 overflow-y-scroll px-4 pt-6">
      <header className="sticky top-0 bg-white px-2 py-2">
        <div className="flex flex-col gap-3">
          <NoteTripTitle tripTitle={tripTitle} />
          <div className="flex items-center justify-between">
            <NoteTaskInfo title={taskTitle} />
            <div className="text-xs font-normal leading-none text-slate-500">
              {formatIsoDateToYYYYMMDD(createdAt)}
            </div>
          </div>
        </div>
        <NoteTitle noteTitle={noteTitle} />
      </header>

      <div
        className="note-viewer"
        dangerouslySetInnerHTML={{
          __html: noteContent,
        }}
      />
    </div>
  );
}
