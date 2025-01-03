import { TNote } from '@model/note.model';
import NoteItem from './NoteItem';

interface INoteListProps {
  notes: TNote[];
}

export default function NoteList({ notes }: INoteListProps) {
  return (
    <>
      {notes.map((note) => (
        <NoteItem key={note.noteId} note={note} />
      ))}
    </>
  );
}
