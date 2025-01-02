import { tripQueryKeys } from '@constant/queryKeyFactory';
import { TRIP_POPUP_MESSAGE } from '@constant/trip';
import { postJoinTrip } from '@lib/api/service/trip.api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export const usePostJoinTrip = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await postJoinTrip(id);
      return response;
    },
    onSuccess: (response) => {
      if (response.success) {
        toast.success(TRIP_POPUP_MESSAGE.joinSent);

        queryClient.invalidateQueries({
          queryKey: tripQueryKeys.joinList(response.result.tripId).queryKey,
        });
      } else {
        toast.error(response.message || TRIP_POPUP_MESSAGE.joinFailed);
      }
    },
    onError: (error) => {
      // eslint-disable-next-line no-console
      console.error('여행 참가 요청 중 오류 발생:', error);
      toast.error(TRIP_POPUP_MESSAGE.joinError);
    },
  });

  return mutation;
};
