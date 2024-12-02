/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
'use client';

import { usePopupStore } from '../../store/popup.store';
import Button from './Button';

export default function Popup() {
  const {
    isOpen,
    popupText,
    showCancelButton,
    confirmButtonText,
    onConfirm,
    onCancel,
    closePopup,
  } = usePopupStore();

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    }
    closePopup();
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
    closePopup();
  };

  const handleOverlayClick = () => {
    closePopup();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="absolute h-[100vh] w-full cursor-pointer bg-black bg-opacity-50"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-text"
    >
      <div
        className="z-2 absolute left-1/2 top-1/2 mx-auto my-0 w-[300px] -translate-x-1/2 -translate-y-1/2 transform cursor-default rounded-lg bg-white tablet:w-[450px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="box-border flex flex-col gap-6 p-6">
          {!showCancelButton && (
            <section className="text-right">
              {/* TODO: X 아이콘 삽입하기 */}
              <button onClick={handleCancel}>X</button>{' '}
              {/* 아이콘 들어올 자리 */}
            </section>
          )}
          <main className="mx-auto my-0 text-center">
            <p className="whitespace-pre-wrap break-words">{popupText}</p>
          </main>
          <footer className="mx-auto my-0 flex justify-center gap-2">
            {showCancelButton && (
              <Button
                variant="outlined"
                className="h-[48px] w-[120px] px-[46px] py-[12px] font-semibold"
                onClick={handleCancel}
              >
                취소
              </Button>
            )}
            <Button
              className="h-[48px] w-[120px] px-[46px] py-[12px] font-semibold"
              onClick={handleConfirm}
            >
              {confirmButtonText}
            </Button>
          </footer>
        </div>
      </div>
    </div>
  );
}
