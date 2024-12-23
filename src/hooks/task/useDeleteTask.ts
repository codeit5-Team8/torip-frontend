import { deleteTask } from '@lib/api/service/task.api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (taskId: number) => {
      await deleteTask(taskId);
      return taskId;
    },
    onSuccess: (taskId: number) => {
      // TODO: 삭제 후 데이터 리프레쉬
      queryClient.invalidateQueries({
        queryKey: ['tasksList', taskId],
      });
      // queryClient.refetchQueries({
      //   queryKey: ['tasksList', taskId],
      // });
    },
    onError: (error) => {
      // eslint-disable-next-line no-console
      console.error('할일 삭제 중 오류 발생:', error);
    },
  });

  return mutation;
};
