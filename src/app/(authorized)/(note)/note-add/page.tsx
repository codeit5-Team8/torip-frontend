'use client';

import { useEffect, useRef, useState } from 'react';
import NoteDraft from '@ui/note/NoteDraft';
import NoteForm from '@ui/note/NoteForm';
import NoteHeader from '@ui/note/NoteHeader';
import NoteInfo from '@ui/note/NoteInfo';
import { useForm, FormProvider } from 'react-hook-form';
import { LOCAL_STORAGE_NOTE_DRAFT_KEY } from '@constant/note';
import { Editor } from '@toast-ui/react-editor';
import { TNoteFormInput } from '@type/note';
import { saveToLocalStorage } from 'src/util/note';

export default function Page() {
  const methods = useForm<TNoteFormInput>({
    defaultValues: {
      title: '',
      content: '',
    },
  });

  const editorRef = useRef<Editor | null>(null);

  const [draft, setDraft] = useState<string | null>(null);

  useEffect(() => {
    // draft 가져오기
    const draft = window.localStorage.getItem(LOCAL_STORAGE_NOTE_DRAFT_KEY);
    if (draft) {
      setDraft(draft);
    }
  }, []);

  const handleSubmit = () => {
    // TODO 전송하기 api 연동
    const title = methods.getValues('title').trim();
    const content = editorRef.current?.getInstance().getHTML();
    alert({ title, content });

    // form 초기화
    methods.reset();
    editorRef.current?.getInstance().setHTML('');
  };

  const handleSaveDraft = () => {
    const title = methods.getValues('title').trim();
    const content = methods.getValues('content');
    saveToLocalStorage(LOCAL_STORAGE_NOTE_DRAFT_KEY, { title, content });
    setDraft(JSON.stringify({ title, content }));
  };

  const handleLoadDraft = () => {
    if (draft) {
      // draft 가져오기
      const parsedDraft = JSON.parse(draft);
      const title = parsedDraft.title;
      const content = parsedDraft.content;
      methods.setValue('title', title);
      methods.setValue('content', content);
      editorRef.current?.getInstance().setHTML(content);
      // draft 제거
      localStorage.removeItem(LOCAL_STORAGE_NOTE_DRAFT_KEY);
      setDraft(null);
    }
  };

  const handleDeleteDraft = () => {
    localStorage.removeItem(LOCAL_STORAGE_NOTE_DRAFT_KEY);
    setDraft(null);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>
        <NoteHeader handleSaveDraft={handleSaveDraft} />
        {draft && (
          <NoteDraft
            handleLoadDraft={handleLoadDraft}
            handleDeleteDraft={handleDeleteDraft}
          />
        )}
        <NoteInfo />
        <NoteForm editorRef={editorRef} />
      </form>
    </FormProvider>
  );
}
