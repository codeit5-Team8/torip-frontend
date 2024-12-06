import { modalStore } from '@store/modal.store';

interface IShowModalState {
  title: string;
  content: React.ReactNode;
}

export const useModal = () => {
  const { showModal, closeModal } = modalStore();

  const openModal = ({ title, content }: IShowModalState) => {
    showModal({
      title,
      content,
    });
  };

  return { openModal, closeModal };
};
