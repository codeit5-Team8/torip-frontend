import { putEditTask } from '@lib/api/service/task.api';
import { TUploadTodo } from '@model/task.model';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const usePutTask = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (data: TUploadTodo) => {
      const result = await putEditTask(data);
      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['tasksList'],
      });
    },
    onError: (error) => {
      // eslint-disable-next-line no-console
      console.error('할일 수정 중 오류 발생:', error);
    },
  });

  return mutation;
};
