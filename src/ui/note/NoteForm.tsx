'use client';

import dynamic from 'next/dynamic';
import NoteTitleInput from './NoteTitleInput';
import { Editor } from '@toast-ui/react-editor';
import NoteContentCounter from './NoteContentCounter';

const NoteEditor = dynamic(() => import('@ui/note/NoteEditor'), {
  ssr: false,
  loading: () => <>{/* TODO 로딩 UI */}</>,
});

interface INoteFormProps {
  editorRef: React.MutableRefObject<Editor | null>;
}

export default function NoteForm({ editorRef }: INoteFormProps) {
  return (
    <>
      <NoteTitleInput />
      <NoteContentCounter />
      <NoteEditor editorRef={editorRef} />
    </>
  );
}
