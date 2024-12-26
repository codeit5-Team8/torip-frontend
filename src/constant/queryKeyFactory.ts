import { getNoteAllTrip } from '@lib/api/service/note.api';
import {
  getTask,
  getTaskDetail,
  getTaskProgress,
} from '@lib/api/service/task.api';
import {
  getJoinTripList,
  getTrip,
  getTripMembers,
} from '@lib/api/service/trip.api';
import { getTripList } from '@lib/api/service/trip.api';
import { createQueryKeys } from '@lukemorales/query-key-factory';
import { TGetNoteAllTripProps } from '@model/note.model';
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
  detail: (id: number) => ({
    queryKey: [id],
    queryFn: () => getTaskDetail(id),
  }),
});

export const tripQueryKeys = createQueryKeys('trip', {
  list: (query: TGetTripListProps) => ({
    queryKey: ['tripList'],
    queryFn: () => getTripList(query),
  }),
  detail: (id: number) => ({
    queryKey: [id],
    queryFn: () => getTrip(id),
  }),
  members: (id: number) => ({
    queryKey: [id],
    queryFn: () => getTripMembers(id),
  }),
  joinList: (id: number) => ({
    queryKey: ['member', id],
    queryFn: () => getJoinTripList(id),
  }),
});

export const noteQueryKeys = createQueryKeys('trip', {
  noteAllTrip: (query: TGetNoteAllTripProps) => ({
    queryKey: ['tripList'],
    queryFn: () => getNoteAllTrip(query),
  }),
});
