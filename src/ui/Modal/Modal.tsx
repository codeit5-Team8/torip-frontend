/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
'use client';

import { useModalStore } from '@store/modal.store';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function Modal() {
  const { isOpen, title, content, closeModal } = useModalStore();

  const modalRef = useRef<HTMLDivElement>(null);

  const handleCloseModal = () => {
    // if (confirmMessage) {
    //   // TODO: Popup 컴포넌트 띄우는 작업 필요
    //   if (confirm(confirmMessage)) {
    //     closeModal();
    //   }
    // } else {
    //   if (confirm('작성된 내용이 모두 삭제됩니다. 정말 나가시겠어요?')) {
    //     closeModal();
    //   }
    // }
    closeModal();
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-[5555] bg-black bg-opacity-50"
          onClick={handleOverlayClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal"
        >
          <main
            ref={modalRef}
            className="fixed left-1/2 top-1/2 mx-auto my-0 box-border h-[100dvh] w-[100vw] min-w-[320px] -translate-x-1/2 -translate-y-1/2 transform cursor-default overflow-auto bg-white p-6 tablet:h-[724px] tablet:w-[520px] tablet:rounded-xl"
            tabIndex={-1}
            onKeyDown={handleKeyDown}
            onClick={(e) => e.stopPropagation()}
          >
            <article className="flex h-full flex-col gap-[10px]">
              <section className="flex items-center justify-between">
                <p className="text-lg font-bold">{title}</p>
                <Image
                  className="cursor-pointer"
                  src="/asset/icon/delete.png"
                  alt="모달 닫기"
                  width={24}
                  height={24}
                  onClick={handleCloseModal}
                />
              </section>
              <section className="h-full overflow-auto">{content}</section>
            </article>
          </main>
        </div>
      )}
    </>
  );
}
