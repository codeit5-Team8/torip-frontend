import { TNoteDetail } from '@model/note.model';
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
}: TNoteDetail) {
  return (
    <div className="flex-1 overflow-y-scroll">
      <header className="sticky top-0 bg-white px-4 pb-2 pt-6">
        <div className="flex flex-col gap-3">
          <NoteTripTitle tripTitle={tripTitle} />
          <div className="flex items-center justify-between">
            {taskTitle && <NoteTaskInfo taskTitle={taskTitle} />}
            <div className="ml-auto text-xs font-normal leading-none text-slate-500">
              {formatIsoDateToYYYYMMDD(createdAt)}
            </div>
          </div>
        </div>
        <NoteTitle noteTitle={noteTitle} />
      </header>

      <div
        className="note-viewer px-4"
        dangerouslySetInnerHTML={{
          __html: noteContent,
        }}
      />
    </div>
  );
}
