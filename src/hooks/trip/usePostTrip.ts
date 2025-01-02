import { tripQueryKeys } from '@constant/queryKeyFactory';
import { postTrip } from '@lib/api/service/trip.api';
import { TGetTripListProps, TPostTripRequest } from '@model/trip.model';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const usePostTrip = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (data: TPostTripRequest) => {
      const result = await postTrip(data);
      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: tripQueryKeys.list({} as TGetTripListProps).queryKey,
      });
    },
    onError: (error) => {
      // eslint-disable-next-line no-console
      console.error('여행 추가 중 오류 발생:', error);
    },
  });

  return mutation;
};
