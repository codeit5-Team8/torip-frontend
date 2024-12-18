import { useQuery } from '@tanstack/react-query';
import { TGetTaskRequest } from '@model/task.model';
import { tasksQueryKeys } from '@constant/queryKeyFactory';

export const useGetTasks = (params: TGetTaskRequest) => {
  return useQuery({ ...tasksQueryKeys.list(params) });
};
