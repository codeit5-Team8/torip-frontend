// get api props

import { TResponse } from './model';

// 노트 등록, 수정 ,삭제
export type TNoteRequest = {
  id: number;
  noteTitle: string;
  noteContent: string;
};

// 여행 별 노트 모아보기
export type TNote = {
  noteId: number;
  noteTitle: string;
  noteContent: string;
  createdBy: string;
  createdAt: string;
  modifiedBy: string;
  modifiedAt: string;
  ownerId: number; // 여행 오너
  registrantId: number; // 노트 작성자
  taskStatus?: 'BEFORE_TRIP' | 'DURING_TRIP' | 'AFTER_TRIP';
  taskTitle?: string;
};

export type TGetNoteAllTripProps = {
  id: number;
  tripNoteSeq: number;
  taskNoteSeq: number;
};

export type TGetNoteAllTaskProps = {
  id: number;
  noteSeq: number;
};

export type TNoteAllTrip = {
  tripTitle: string;
  taskTitle: string;
  noteDetails: TNote[];
};

export type TNoteAllTripResponse = TResponse<TNoteAllTrip>;

// 여행 상세보기
export type TGetNoteDetailProp = number;

export type TNoteDetail = {
  noteId: number;
  noteTitle: string;
  noteContent: string;
  createdBy: string;
  createdAt: string;
  modifiedBy: string;
  modifiedAt: string;
  tripTitle: string;
  ownerId: number; // 여행 오너
  registrantId: number; // 노트 작성자
  taskStatus?: 'BEFORE_TRIP' | 'DURING_TRIP' | 'AFTER_TRIP';
  taskTitle?: string;
};

// 할일 별 노트 모아보기
export type TTaskNotes = {
  tripTitle: string;
  taskTitle?: string;
  details: TNoteDetail[];
};

export type TNoteDetailResponse = TResponse<TNoteDetail>;

export type TNoteResponse = TResponse<TNote>;
