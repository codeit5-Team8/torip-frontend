import { create } from 'zustand';

interface IPopupProps {
  isOpen: boolean; // 팝업 제어 boolean
  popupText: string[]; // 팝업에 들어 갈 text 배열, 띄워쓰기 단위로 배열에 담아 보내면 보내시면 됩니다.
  showCancelButton: boolean; // cancel 버튼 출력 유무 boolean
  confirmButtonText: string; // confirm 역할을 하는 버튼에 들어가는 text
  onConfirm?: () => void; // confirm 버튼 클릭 시 실행 할 함수
  onCancel?: () => void; // cancel 버튼 클릭 시 실행 할 함수
  showPopup: (
    popupText: string[],
    showCancelButton: boolean,
    confirmButtonText: string,
    onConfirm?: () => void,
    onCancel?: () => void,
  ) => void; // 팝업 열기 함수, 팝업에 들어 갈 정보를 인자로 넘겨줍니다.
  closePopup: () => void; // 팝업 닫기 함수
}

export const usePopupStore = create<IPopupProps>((set) => ({
  isOpen: false,
  popupText: [],
  showCancelButton: true,
  confirmButtonText: '확인',
  onConfirm: undefined,
  onCancel: undefined,
  showPopup: (
    popupText,
    showCancelButton,
    confirmButtonText,
    onConfirm,
    onCancel,
  ) =>
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
      popupText: [],
      onConfirm: undefined,
      onCancel: undefined,
    }),
}));
