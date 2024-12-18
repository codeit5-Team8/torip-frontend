import { getTask, getTaskProgress } from '@lib/api/service/task.api';
import { createQueryKeys } from '@lukemorales/query-key-factory';
import { TGetTaskRequest } from '@model/task.model';

export const tasksQueryKeys = createQueryKeys('tasks', {
  list: (props: TGetTaskRequest) => ({
    // 동적 props 추가 필요
    queryKey: ['tasksList'],
    queryFn: () => getTask(props),
  }),
});

export const progressQueryKeys = createQueryKeys('progress', {
  progress: () => ({
    queryKey: ['taskProgress'],
    queryFn: () => getTaskProgress(),
  }),
});
