import { postTrip } from '@lib/api/service/trip.api';
import { TPostTripRequest } from '@model/trip.model';
import { useMutation } from '@tanstack/react-query';

export const usePostTrip = () => {
  const mutation = useMutation({
    mutationFn: async (data: TPostTripRequest) => {
      const result = await postTrip(data);
      return result;
    },
    onError: (error) => {
      // eslint-disable-next-line no-console
      console.error('할일 삭제 중 오류 발생:', error);
    },
  });

  return mutation;
};
