import { create } from 'zustand';

interface IModalState {
  title: string;
  content: React.ReactNode;
}

interface IModalStore extends IModalState {
  isOpen: boolean;
  showModal: (modalData: IModalState) => void;
  closeModal: () => void;
}

export const modalStore = create<IModalStore>((set) => ({
  isOpen: false,
  title: '',
  content: '',
  showModal: (modalData: IModalState) =>
    set({
      isOpen: true,
      title: modalData.title,
      content: modalData.content,
    }),
  closeModal: () =>
    set({
      isOpen: false,
      title: '',
      content: '',
    }),
}));
