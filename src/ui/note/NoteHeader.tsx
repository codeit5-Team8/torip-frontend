'use client';

import { useFormContext } from 'react-hook-form';
import { TNoteFormInput } from '@type/note';
import Button from '@ui/common/Button';
import { isEmptyText, removeHtmlTags } from '@util/note';
import { usePopupStore } from '@store/popup.store';
import NavTitle from '@ui/common/NavTitle';
import { ROUTE_TITLE_MAP } from '@constant/path';

interface INoteHeaderProps {
  handleSaveDraft: () => void;
  popupText: string;
}

export default function NoteHeader({
  handleSaveDraft,
  popupText,
}: INoteHeaderProps) {
  const { watch } = useFormContext<TNoteFormInput>();
  const { showPopup } = usePopupStore();

  const handlePopup = () => {
    showPopup({
      popupText,
      showCancelButton: true,
      confirmButtonText: '확인',
      onConfirm: handleSaveDraft,
    });
  };

  return (
    <section className="mb-4 flex h-9 items-center justify-between gap-2 sm:h-11">
      <NavTitle
        pageTitleProp={ROUTE_TITLE_MAP['/note-all-trip']}
        className="mb-[18px]"
      />

      <div className="flex w-[176px] gap-2 sm:w-[206px]">
        <Button
          size="middle"
          variant="outlined"
          className="border-white bg-white px-4 py-2 text-primary hover:text-mint-700 disabled:cursor-not-allowed sm:px-6 sm:py-3"
          onClick={handlePopup}
          type="button"
          disabled={
            isEmptyText({ value: watch('title'), hasHtml: false }) &&
            isEmptyText({ value: watch('content'), hasHtml: true })
          }
        >
          임시저장
        </Button>
        <Button
          size="middle"
          variant="solid"
          className="border-slate-400 bg-slate-400 px-4 py-2 text-white hover:border-primary hover:bg-primary hover:text-white disabled:cursor-not-allowed sm:px-6 sm:py-3"
          disabled={
            isEmptyText({ value: watch('title'), hasHtml: false }) ||
            isEmptyText({ value: watch('content'), hasHtml: true }) ||
            removeHtmlTags(watch('content')).length >= 1000
          }
          type="submit"
        >
          작성하기
        </Button>
      </div>
    </section>
  );
}
