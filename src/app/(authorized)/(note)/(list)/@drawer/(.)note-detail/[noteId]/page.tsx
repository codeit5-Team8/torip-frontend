'use client';

import NoteDetail from '@ui/note/NoteDetail';
import NoteDrawer from '@ui/note/NoteDrawer';
// import { useParams } from 'next/navigation';

export default function NoteDetailDrawerPage() {
  // TODO noteId 받아서 api 호출 후 렌더링
  // const { noteId } = useParams();

  return (
    <NoteDrawer selectors="#drawer-root">
      <NoteDetail />
    </NoteDrawer>
  );
}
