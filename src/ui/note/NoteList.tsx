import { TNote } from '@model/note.model';
import NoteItem from './NoteItem';

interface INoteListProps {
  notes: TNote[];
  tripId: number;
}

export default function NoteList({ notes, tripId }: INoteListProps) {
  return (
    <>
      {notes.map((note) => (
        <NoteItem key={note.noteId} note={note} tripId={tripId} />
      ))}
    </>
  );
}
