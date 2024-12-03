import { create } from 'zustand';

interface IShowPopupParameter {
  popupText: string;
  showCancelButton: boolean;
  confirmButtonText: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

interface IPopup extends IShowPopupParameter {
  isOpen: boolean;
  showPopup: (params: IShowPopupParameter) => void;
  closePopup: () => void;
}

export const usePopupStore = create<IPopup>((set) => ({
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
