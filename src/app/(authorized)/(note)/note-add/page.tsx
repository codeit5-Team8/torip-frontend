'use client';

import { useEffect, useRef, useState } from 'react';
import NoteDraft from '@ui/note/NoteDraft';
import NoteForm from '@ui/note/NoteForm';
import NoteHeader from '@ui/note/NoteHeader';
import { useForm, FormProvider } from 'react-hook-form';
import {
  LOCAL_STORAGE_NOTE_DRAFT_KEY,
  NOTE_POPUP_MESSAGE,
} from '@constant/note';
import { Editor } from '@toast-ui/react-editor';
import { TNoteFormInput } from '@type/note';
import { saveToLocalStorage } from '@util/note';
import NoteTripTitle from '@ui/note/NoteTripTitle';
import { useGetTrip } from '@hooks/trip/useGetTrip';
import NoteTaskInfoWrapper from '@ui/note/NoteTaskInfoWrapper';

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { tripId, taskId } = searchParams;

  const { data: tripInfo } = useGetTrip(Number(tripId));

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
    const draft = localStorage.getItem(LOCAL_STORAGE_NOTE_DRAFT_KEY);
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
      <form onSubmit={methods.handleSubmit(handleSubmit)} className="pt-4">
        <NoteHeader
          handleSaveDraft={handleSaveDraft}
          popupText={
            draft
              ? NOTE_POPUP_MESSAGE.refreshDraft
              : NOTE_POPUP_MESSAGE.saveDraft
          }
        />

        <div className="rounded-md bg-white p-4">
          {draft && (
            <NoteDraft
              handleLoadDraft={handleLoadDraft}
              handleDeleteDraft={handleDeleteDraft}
            />
          )}

          <section className="flex flex-col gap-3">
            <NoteTripTitle tripTitle={tripInfo?.result.name ?? ''} />

            {taskId && typeof taskId === 'string' && (
              <NoteTaskInfoWrapper taskId={taskId} />
            )}
          </section>

          <NoteForm editorRef={editorRef} />
        </div>
      </form>
    </FormProvider>
  );
}
