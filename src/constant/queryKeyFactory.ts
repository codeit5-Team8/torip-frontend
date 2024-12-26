import { getTask, getTaskProgress } from '@lib/api/service/task.api';
import { getTripList } from '@lib/api/service/trip.api';
import { createQueryKeys } from '@lukemorales/query-key-factory';
import { TGetTaskRequest } from '@model/task.model';
import { TGetTripListProps } from '@model/trip.model';

export const tasksQueryKeys = createQueryKeys('tasks', {
  list: (props: TGetTaskRequest) => ({
    // 동적 props 추가 필요
    queryKey: [
      'tasksList',
      props.tripId,
      props.taskScope && props.taskScope,
      props.taskStatus && props.taskStatus,
      props.taskSeq && props.taskSeq,
    ],
    queryFn: () => getTask(props),
  }),
  progress: () => ({
    queryKey: ['taskProgress'],
    queryFn: () => getTaskProgress(),
  }),
});

export const tripQueryKeys = createQueryKeys('trip', {
  list: (query: TGetTripListProps) => ({
    queryKey: ['tripList'],
    queryFn: () => getTripList(query),
  }),
});
