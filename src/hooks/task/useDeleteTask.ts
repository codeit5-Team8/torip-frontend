import { tasksQueryKeys } from '@constant/queryKeyFactory';
import { deleteTask } from '@lib/api/service/task.api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (taskId: number) => {
      const response = await deleteTask(taskId);
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
      console.error('할일 삭제 중 오류 발생:', error);
    },
  });

  return mutation;
};
