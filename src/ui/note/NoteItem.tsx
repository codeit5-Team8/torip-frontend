'use client';

import { TNote } from '@model/note.model';
import NoteTaskInfo from './NoteTaskInfo';
import Divider from '@ui/note/Divider';
import DropdownMenu from '@ui/common/DropdownMenu';
import { usePopupStore } from '@store/popup.store';
import { NOTE_POPUP_MESSAGE } from '@constant/note';
import Link from 'next/link';
import { useLogin } from '@hooks/auth/useLogin';
import { useDeleteTripNote } from '@hooks/note/useDeleteTripNote';
import { useQueryClient } from '@tanstack/react-query';
import toast, { Toaster } from 'react-hot-toast';
import Image from 'next/image';

interface INoteItemProps {
  note: TNote;
  tripId?: number;
  taskId?: number;
}

export default function NoteItem({ note, tripId, taskId }: INoteItemProps) {
  const { showPopup } = usePopupStore();
  const id = taskId ? { taskId } : { tripId };
  const { data } = useLogin();
  const userId = data?.user?.id;
  const hasUserRight = userId === 40 || userId === note.registrantId;

  const queryClient = useQueryClient();

  const { mutate } = useDeleteTripNote();

  const handleDelete = () => {
    mutate(note.noteId, {
      onSuccess: (result) => {
        if (result.success === true) {
          toast('노트 삭제 성공', { duration: 500 });

          setTimeout(() => {
            queryClient.invalidateQueries({
              queryKey: ['note', 'noteAllTrip', id],
            });
          }, 1000);
        }
      },
    });
  };

  const handleDeletePopup = () => {
    showPopup({
      popupText: NOTE_POPUP_MESSAGE.deleteNote,
      showCancelButton: true,
      confirmButtonText: '확인',
      onConfirm: handleDelete,
    });
  };

  return (
    <Link
      className="flex-col rounded-xl bg-white p-6"
      href={`/note-detail/${note.noteId}`}
    >
      <div className="mb-4 flex items-center gap-1">
        <Image
          src={`/asset/icon/note.png`}
          alt="노트 아이콘"
          width={28}
          height={28}
        />
        <span className="text-sm font-medium leading-tight text-slate-800">
          {note.createdBy}
        </span>
        {hasUserRight && (
          <span className="ml-auto">
            <DropdownMenu
              items={[
                {
                  label: '삭제하기',
                  onClick: handleDeletePopup,
                },
              ]}
            >
              <Image
                src={`/asset/icon/kebab.png`}
                alt="note"
                width={24}
                height={24}
              />
            </DropdownMenu>
          </span>
        )}
      </div>

      <p>{note.noteTitle}</p>

      {note.taskTitle && tripId && (
        <>
          <Divider className="my-3" />
          <NoteTaskInfo taskTitle={note.taskTitle} />
        </>
      )}
      <Toaster />
    </Link>
  );
}
