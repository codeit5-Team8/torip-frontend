'use client';

import { useGetNoteAllTrip } from '@hooks/note/useGetNoteAllTrip';
import NoteAllTripInfo from '@ui/note/NoteAllTripInfo';
import NoteList from '@ui/note/NoteList';
import NoteListEmpty from '@ui/note/NoteListEmpty';

export default function Page({
  params: { tripId },
}: {
  params: { tripId: number };
}) {
  const { data } = useGetNoteAllTrip({
    tripId,
    taskNoteSeq: 1,
    tripNoteSeq: 1,
  });

  if (!data) {
    return null;
  }

  const {
    result: { taskNoteDetails: notes, tripTitle }, // API 수정 반영
  } = data;

  return (
    <div className="flex flex-col gap-4">
      <NoteAllTripInfo tripId={tripId} tripTitle={tripTitle} />

      {notes?.length > 0 ? <NoteList notes={notes} /> : <NoteListEmpty />}
    </div>
  );
}
