import { deleteNote } from '@lib/api/service/note.api';
import { useMutation } from '@tanstack/react-query';

export const useDeleteTripNote = () => {
  const mutation = useMutation({
    mutationFn: async (noteId: number) => {
      const result = await deleteNote(noteId);
      return result;
    },
    onError: (error) => {
      // eslint-disable-next-line no-console
      console.error('노트 삭제 중 오류 발생:', error);
    },
  });

  return mutation;
};
