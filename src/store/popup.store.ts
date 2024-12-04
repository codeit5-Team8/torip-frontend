import { create } from 'zustand';

interface IShowPopupState {
  popupText: string;
  showCancelButton: boolean;
  confirmButtonText: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

interface IPopupStore extends IShowPopupState {
  isOpen: boolean;
  showPopup: (params: IShowPopupState) => void;
  closePopup: () => void;
}

export const popupStore = create<IPopupStore>((set) => ({
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
