'use client';

import { NOTE_POPUP_MESSAGE } from '@constant/note';
import { usePopup } from '@hooks/usePopup';
import Button from '@ui/common/Button';

interface INoteDraftProps {
  handleLoadDraft: () => void;
  handleDeleteDraft: () => void;
}

export default function NoteDraft({
  handleLoadDraft,
  handleDeleteDraft,
}: INoteDraftProps) {
  const { openPopup } = usePopup();

  const handleLoadDraftPopup = () => {
    openPopup({
      popupText: NOTE_POPUP_MESSAGE.loadDraft,
      showCancelButton: true,
      confirmButtonText: '확인',
      onConfirm: handleLoadDraft,
    });
  };

  const handleDeleteDraftPopup = () => {
    openPopup({
      popupText: '임시저장한 노트를 삭제합니다.',
      showCancelButton: true,
      confirmButtonText: '확인',
      onConfirm: handleDeleteDraft,
    });
  };

  return (
    <section className="mb-4 flex h-14 items-center rounded-[28px] bg-slate-50 px-4 py-[18px]">
      <button
        className="mr-5 cursor-pointer"
        onClick={handleDeleteDraftPopup}
        type="button"
      >
        X
      </button>
      {/* TODO 아이콘  */}
      <p className="mr-3 flex-1 break-keep text-sm font-semibold leading-tight text-primary">
        임시 저장된 노트가 있어요. 저장된 노트를 불러오시겠어요?
      </p>
      <Button
        variant="outlined"
        rounded={true}
        onClick={handleLoadDraftPopup}
        type="button"
        className="cursor-pointer"
      >
        불러오기
      </Button>
    </section>
  );
}
