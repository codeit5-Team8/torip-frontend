'use client';

import { useParams } from 'next/navigation';

export default function NoteDetailPage() {
  // TODO noteId 받아서 api 호출 후 렌더링
  const { noteId } = useParams();
  return <div>노트 상세 페이지 직접 접근 {noteId}</div>;
}
