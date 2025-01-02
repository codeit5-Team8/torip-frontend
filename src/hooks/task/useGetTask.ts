import { useQuery } from '@tanstack/react-query';
import { TGetTaskDetailRequest } from '@model/task.model';
import { tasksQueryKeys } from '@constant/queryKeyFactory';

export const useGetTask = (params: TGetTaskDetailRequest) => {
  return useQuery({
    ...tasksQueryKeys.detail(params),
    enabled: Boolean(params),
  });
};
