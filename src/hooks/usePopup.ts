import { usePopupStore } from '@store/popup.store';

interface IShowPopupOptions {
  popupText: string;
  showCancelButton: false;
  confirmButtonText: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export const usePopup = () => {
  const { showPopup } = usePopupStore();

  const openPopup = ({
    popupText,
    showCancelButton,
    confirmButtonText,
    onConfirm,
    onCancel,
  }: IShowPopupOptions) => {
    showPopup({
      popupText,
      showCancelButton,
      confirmButtonText,
      onConfirm,
      onCancel,
    });
  };

  return { openPopup };
};
