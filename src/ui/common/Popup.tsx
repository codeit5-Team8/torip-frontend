/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
'use client';

import { usePopupStore } from '@store/popup.store';
import { useEffect, useRef } from 'react';
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

  const popupRef = useRef<HTMLDivElement>(null); // 팝업 전체를 참조

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

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      closePopup(); // ESC 키로 팝업 닫기
    }
    if (e.key === 'Enter') {
      handleConfirm(); // Enter 키로 확인 버튼 동작
    }
  };

  // 팝업이 열릴 때 포커스를 이동
  useEffect(() => {
    if (isOpen && popupRef.current) {
      popupRef.current.focus(); // 팝업 컨테이너에 포커스 설정
    }
  }, [isOpen]);

  // 팝업이 열렸을 때 스크롤 막기
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // 스크롤 막기
    } else {
      document.body.style.overflow = ''; // 스크롤 다시 활성화
    }

    // 컴포넌트 언마운트 시 스크롤 다시 활성화
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="absolute z-[9999] h-[100vh] w-full bg-black bg-opacity-50"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-text"
    >
      <div
        ref={popupRef} // 팝업 컨테이너 참조
        className="absolute left-1/2 top-1/2 mx-auto my-0 w-[300px] -translate-x-1/2 -translate-y-1/2 transform cursor-default rounded-lg bg-white desktop:w-[450px]"
        tabIndex={-1} // 키보드 포커스를 받을 수 있도록 설정
        onKeyDown={handleKeyDown}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="box-border flex flex-col gap-6 p-6">
          {!showCancelButton && (
            <section className="text-right">
              {/* TODO: X 아이콘 삽입하기 */}
              <button
                onClick={handleCancel}
                aria-label="닫기"
                className="text-xl"
              >
                X
              </button>
            </section>
          )}
          <main className="mx-auto my-0 text-center">
            <p className="whitespace-pre-wrap break-words">{popupText}</p>
          </main>
          <footer className="mx-auto my-0 flex justify-center gap-2">
            {showCancelButton && (
              <Button
                size="large"
                variant="outlined"
                className="w-[120px]"
                onClick={handleCancel}
              >
                취소
              </Button>
            )}
            <Button size="large" className="w-[120px]" onClick={handleConfirm}>
              {confirmButtonText}
            </Button>
          </footer>
        </div>
      </div>
    </div>
  );
}
