import { patchTrip } from '@lib/api/service/trip.api';
import { TPatchTripRequest } from '@model/trip.model';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const usePostTrip = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({
      id,
      data,
    }: {
      id: number;
      data: TPatchTripRequest;
    }) => {
      const result = await patchTrip(id, data);
      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['tripsList'],
      });
    },
    onError: (error) => {
      // eslint-disable-next-line no-console
      console.error('여행 수정 중 오류 발생:', error);
    },
  });

  return mutation;
};
