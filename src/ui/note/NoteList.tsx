import { TNote } from '@model/note.model';
import NoteItem from './NoteItem';

interface INoteListProps {
  notes: TNote[];
  tripId?: number;
  taskId?: number;
}

export default function NoteList({ notes, tripId, taskId }: INoteListProps) {
  // tripid , taskid 선택적으로 받아옴
  const idProps = tripId ? { tripId } : { taskId };
  return (
    <>
      {notes.map((note) => (
        <NoteItem key={note.noteId} note={note} {...idProps} />
      ))}
    </>
  );
}
