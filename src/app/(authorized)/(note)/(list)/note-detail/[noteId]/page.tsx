'use client';

import { useGetTripNoteDetail } from '@hooks/note/useGetTripNoteDetail';
import NoteDetail from '@ui/note/NoteDetail';

export default function NoteDetailPage({
  params: { noteId },
}: {
  params: { noteId: string };
}) {
  const { data } = useGetTripNoteDetail(Number(noteId));

  if (!data) {
    return null;
  }
  return (
    <div className="h-[calc(100vh-96px)] overflow-hidden md:h-[calc(100vh-48px)]">
      <NoteDetail {...data.result} />
    </div>
  );
}
