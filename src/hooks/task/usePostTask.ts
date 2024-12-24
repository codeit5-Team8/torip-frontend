import { postAddTask } from '@lib/api/service/task.api';
import { TTask } from '@model/task.model';
import { useMutation } from '@tanstack/react-query';

export const usePostTask = () => {
  const mutation = useMutation({
    mutationFn: async (data: TTask) => {
      return await postAddTask(data);
    },
    onError: (error) => {
      // eslint-disable-next-line no-console
      console.error('할일 추가 중 오류 발생:', error);
    },
  });

  return mutation;
};
