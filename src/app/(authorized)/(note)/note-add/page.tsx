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
import { usePostTripNote } from '@hooks/note/usePostTripNote';
import toast, { Toaster } from 'react-hot-toast';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { tripId, taskId } = searchParams;

  const tripIdNumber = Number(tripId);

  const { data: tripInfo } = useGetTrip(tripIdNumber);

  const methods = useForm<TNoteFormInput>({
    defaultValues: {
      title: '',
      content: '',
    },
  });

  const editorRef = useRef<Editor | null>(null);

  const [draft, setDraft] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    // draft 가져오기
    const draft = localStorage.getItem(LOCAL_STORAGE_NOTE_DRAFT_KEY);
    if (draft) {
      setDraft(draft);
    }
  }, []);

  const queryClient = useQueryClient();

  const notify = (message: string) => toast(message);

  const { mutate } = usePostTripNote();

  const handleSubmit = () => {
    const params = {
      id: tripIdNumber,
      noteTitle: methods.getValues('title').trim(),
      noteContent: editorRef.current?.getInstance().getHTML(),
    };

    mutate(params, {
      onSuccess: (result) => {
        if (result.success === true) {
          queryClient.invalidateQueries({
            queryKey: ['note', 'noteAllTrip', tripId],
          });
          notify('노트 작성 성공');

          setTimeout(() => {
            router.push(`/note-all-trip/${tripId}`);
          }, 1000);
        }
      },
    });

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
      </form>
      <Toaster />
    </FormProvider>
  );
}
