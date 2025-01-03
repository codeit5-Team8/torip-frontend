import {
  getNoteAllTask,
  getNoteAllTrip,
  getTripNoteDetail,
} from '@lib/api/service/note.api';
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
import {
  TGetNoteAllTaskProps,
  TGetNoteAllTripProps,
  TGetNoteDetailProp,
} from '@model/note.model';
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

export const noteQueryKeys = createQueryKeys('note', {
  noteAllTrip: (query: TGetNoteAllTripProps) => ({
    queryKey: [query.id],
    queryFn: () => getNoteAllTrip(query),
  }),
  noteDetail: (id: TGetNoteDetailProp) => ({
    queryKey: [id],
    queryFn: () => getTripNoteDetail(id),
  }),
  noteAllTask: (query: TGetNoteAllTaskProps) => ({
    queryKey: [query.id],
    queryFn: () => getNoteAllTask(query),
  }),
});
