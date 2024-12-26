import { tripQueryKeys } from '@constant/queryKeyFactory';
import { postJoinTrip } from '@lib/api/service/trip.api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const usePostJoinTrip = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (id: number) => {
      await postJoinTrip(id);
      return id;
    },
    onSuccess: (id: number) => {
      queryClient.invalidateQueries({
        queryKey: tripQueryKeys.joinList(id).queryKey,
      });
    },
    onError: (error) => {
      // eslint-disable-next-line no-console
      console.error('여행 참가 요청 중 오류 발생:', error);
    },
  });

  return mutation;
};
