import { create } from 'zustand';

interface IPopupProps {
  isOpen: boolean;
  popupText: string;
  showCancelButton: boolean;
  confirmButtonText: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  showPopup: (options: {
    popupText: string;
    showCancelButton: boolean;
    confirmButtonText: string;
    onConfirm?: () => void;
    onCancel?: () => void;
  }) => void;
  closePopup: () => void;
}

export const usePopupStore = create<IPopupProps>((set) => ({
  isOpen: false,
  popupText: '',
  showCancelButton: true,
  confirmButtonText: '확인',
  onConfirm: undefined,
  onCancel: undefined,
  showPopup: ({
    popupText,
    showCancelButton,
    confirmButtonText,
    onConfirm,
    onCancel,
  }) =>
    set({
      isOpen: true,
      popupText,
      showCancelButton,
      confirmButtonText,
      onConfirm,
      onCancel,
    }),
  closePopup: () =>
    set({
      isOpen: false,
      popupText: '',
      onConfirm: undefined,
      onCancel: undefined,
    }),
}));
