import { tripQueryKeys } from '@constant/queryKeyFactory';
import { deleteTrip } from '@lib/api/service/trip.api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useDeleteTrip = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (id: number) => {
      await deleteTrip(id);
      return id;
    },
    onSuccess: (id: number) => {
      queryClient.invalidateQueries({
        queryKey: tripQueryKeys.detail(id).queryKey,
      });
    },
    onError: (error) => {
      // eslint-disable-next-line no-console
      console.error('여행 삭제 중 오류 발생:', error);
    },
  });

  return mutation;
};
