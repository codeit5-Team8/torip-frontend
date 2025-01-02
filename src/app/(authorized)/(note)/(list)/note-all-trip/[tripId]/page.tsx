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
  const params = {
    id: tripId,
    taskNoteSeq: 0,
    tripNoteSeq: 0,
  };

  const { data, isLoading, isFetching } = useGetNoteAllTrip(params);

  if (isLoading || isFetching || !data) {
    return null;
  }

  const {
    result: { noteDetails: notes, tripTitle },
  } = data;

  return (
    <div className="flex flex-col gap-4">
      <NoteAllTripInfo tripId={tripId} tripTitle={tripTitle} />

      {notes?.length > 0 ? (
        <NoteList notes={notes} tripId={tripId} />
      ) : (
        <NoteListEmpty />
      )}
    </div>
  );
}
