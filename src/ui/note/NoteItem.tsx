'use client';

import { TNote } from '@model/note.model';
import NoteTaskInfo from './NoteTaskInfo';
import Divider from '@ui/note/Divider';
import DropdownMenu from '@ui/common/DropdownMenu';
import { usePopupStore } from '@store/popup.store';
import { NOTE_POPUP_MESSAGE } from '@constant/note';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface INoteItemProps {
  note: TNote;
}

export default function NoteItem({ note }: INoteItemProps) {
  const { showPopup } = usePopupStore();
  const router = useRouter();

  const handleEdit = () => {
    router.push(`/note-edit/${note.noteId}`);
  };

  const handleDelete = () => {
    alert('삭제하기 API 호출');
  };

  const handleEditPopup = () => {
    showPopup({
      popupText: NOTE_POPUP_MESSAGE.editNote,
      showCancelButton: true,
      confirmButtonText: '확인',
      onConfirm: handleEdit,
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
    <Link href={`/note-detail/${note.noteId}`}>
      <div className="flex-col rounded-xl bg-white p-6">
        <div className="mb-4 flex items-center gap-1">
          <>아이콘</>
          <span className="text-sm font-medium leading-tight text-slate-800">
            {note.createdBy}
          </span>
          <span className="ml-auto">
            <DropdownMenu
              items={[
                { label: '수정하기', onClick: handleEditPopup },
                {
                  label: '삭제하기',
                  onClick: handleDeletePopup,
                },
              ]}
            >
              <span>메뉴 열기</span>
            </DropdownMenu>
          </span>
        </div>

        <p>{note.noteTitle}</p>

        <Divider className="my-3" />

        <NoteTaskInfo title="투두 제목" />
      </div>
    </Link>
  );
}
