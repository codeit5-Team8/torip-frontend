// get api props

import { TResponse } from './model';

/**
 
@property {'TRAVEL'|'TASK'} 여행 / 할일 필터링 구분
@property { number} 여행/할일 고유키
@seq {number} 현재 페이지에서 가장 작은 노트 고유*/
export type TGetNotesProps = {
  key: 'TRAVEL' | 'TASK';
  id: number;
  seq: number;
};

export type TNote = {
  // 추가 정의 필요
  noteId: number;
  tripTitle: string;
  tripStatus: 'BEFORE_TRIP' | 'DURING_TRIP' | 'AFTER_TRIP';
  noteTitle: string;
  noteContent: string;
  createdBy: string;
  createdAt: string;
  modifiedBy: string;
  modifiedAt: string;
  taskTitle: string;
};

export type TNotes = {
  // 추가 정의 필요
  result: TNote[];
};

// 노트 등록, 수정 ,삭제
export type TNoteRequest = {
  taskId: number;
  noteId: number;
  title: string;
  content: string;
};

// 노트들 목록 response
export type TNotesResponse = TResponse<TNotes>;
export type TNoteResponse = TResponse<TNote>;
