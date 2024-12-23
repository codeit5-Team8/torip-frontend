import { TTaskScope } from '@model/task.model';

// 할 일 여행 상태
export const TRIP_STATUS = {
  ready: '여행 준비',
  ongoing: '여행 중',
  done: '여행 완료',
};

// 할 일 공유 범위
export const FILTER_MAPPING: Record<string, TTaskScope | null> = {
  All: null,
  공통: 'PUBLIC',
  개인: 'PRIVATE',
};

// 데이터가 없을 경우 표시하는 메시지
export const EMPTY_TASK_MESSAGE = '아직 할 일이 없어요.';
