'use client';

import NoteDrawer from '@ui/note/NoteDrawer';
import NoteDetail from '@ui/note/NoteDetail';
import { useGetTripNoteDetail } from '@hooks/note/useGetTripNoteDetail';

export default function NoteDetailDrawerPage({
  params: { noteId },
}: {
  params: { noteId: string };
}) {
  const { data } = useGetTripNoteDetail(Number(noteId));

  return (
    <NoteDrawer selectors="#drawer-root">
      {data && <NoteDetail {...data.result} />}
    </NoteDrawer>
  );
}
