import { postTripNote } from '@lib/api/service/note.api';
import { TNoteRequest } from '@model/note.model';
import { useMutation } from '@tanstack/react-query';

export const usePostTripNote = () => {
  const mutation = useMutation({
    mutationFn: async (data: TNoteRequest) => {
      const result = await postTripNote(data);
      return result;
    },
    onError: (error) => {
      // eslint-disable-next-line no-console
      console.error('노트 추가 중 오류 발생:', error);
    },
  });

  return mutation;
};
