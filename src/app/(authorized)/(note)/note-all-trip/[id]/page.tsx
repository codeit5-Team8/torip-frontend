import { TNote } from '@model/note.model';
import NoteAllTripInfo from '@ui/note/NoteAllTripInfo';
import NoteList from '@ui/note/NoteList';

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <NoteAllTripInfo />
      <NoteList notes={mockNotes} />
    </div>
  );
}

const mockNotes: TNote[] = [
  {
    noteId: 1,
    tripTitle: '여행 제목1',
    tripStatus: 'BEFORE_TRIP',
    noteTitle: '노트 제목1',
    noteContent: '노트 내용',
    createdBy: 'demo@gmail.com',
    createdAt: '2024-12-12T01:49:42.223Z',
    modifiedBy: 'demo@gmail.com',
    modifiedAt: '2024-12-12T01:49:42.224Z',
  },
  {
    noteId: 2,
    tripTitle: '여행 제목2',
    tripStatus: 'DURING_TRIP',
    noteTitle: '노트 제목2',
    noteContent: '노트 내용',
    createdBy: 'demo@gmail.com',
    createdAt: '2024-12-12T01:49:42.223Z',
    modifiedBy: 'demo@gmail.com',
    modifiedAt: '2024-12-12T01:49:42.224Z',
  },
];
