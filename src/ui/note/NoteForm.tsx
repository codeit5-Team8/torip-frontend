'use client';

import dynamic from 'next/dynamic';
import NoteTitleInput from './NoteTitleInput';
import { Editor } from '@toast-ui/react-editor';
import NoteContentCounter from './NoteContentCounter';
import Skeleton from '@ui/common/Skeleton';

const NoteEditor = dynamic(() => import('@ui/note/NoteEditor'), {
  ssr: false,
  loading: () => <Skeleton className="h-[500px] w-full" />,
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
