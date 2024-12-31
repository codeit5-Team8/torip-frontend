/* eslint-disable @typescript-eslint/no-unused-vars */
import { tripQueryKeys } from '@constant/queryKeyFactory';
import { postRejectTrip } from '@lib/api/service/trip.api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const usePostRejectTrip = () => {
  // const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await postRejectTrip(id);
      return response;
    },
    onSuccess: (response) => {
      // TODO: api 수정 후 여행 id 넘겨 참여 리스트 재호출 처리 확인 필요
      if (response.success) {
        // queryClient.invalidateQueries({
        //   queryKey: ['trip', 'joinList', 'member'],
        // });
        // queryClient.invalidateQueries(
        //   {
        //     queryKey: tripQueryKeys.joinList(response..result.id).queryKey,
        //   },
        //   { throwOnError: true },
        // );
      }
    },
    onError: (error) => {
      // eslint-disable-next-line no-console
      console.error('여행 참가 거절 중 오류 발생:', error);
    },
  });

  return mutation;
};
