import { tasksQueryKeys } from '@constant/queryKeyFactory';
import { putCompleteTask } from '@lib/api/service/task.api';
import { TPutCompleteTaskRequest } from '@model/task.model';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const usePutCompleteTask = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (data: TPutCompleteTaskRequest) => {
      const response = await putCompleteTask(data);
      return response;
    },
    onSuccess: (response) => {
      if (response.success) {
        const props = {
          tripId: response.result.tripId,
          taskSeq: 0,
          all: true,
        };
        queryClient.invalidateQueries({
          queryKey: tasksQueryKeys.list(props).queryKey,
        });
      }
    },
    onError: (error) => {
      // eslint-disable-next-line no-console
      console.error('할일 완료 중 오류 발생:', error);
    },
  });

  return mutation;
};
