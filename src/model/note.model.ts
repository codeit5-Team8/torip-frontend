// get api props

import { TResponse } from './model';

// 노트 등록, 수정 ,삭제
export type TNoteRequest = {
  taskId: number;
  noteId: number;
  title: string;
  content: string;
};

export type TNoteBase = {
  noteId: number;
  noteTitle: string;
  noteContent: string;
};

export type TNoteTrip = TNoteBase & {
  //  TODO API 맞춰 수정
  // tripNoteId: number;
  // tripNoteTitle: string;
  // tripNoteContent: string;
  createdBy: string;
  createdAt: string;
  modifiedBy: string;
  modifiedAt: string;
};

export type TNoteTask = TNoteBase & {
  taskStatus: 'BEFORE_TRIP' | 'DURING_TRIP' | 'AFTER_TRIP';
  taskTitle: string;
  createdBy: string;
  createdAt: string;
  modifiedBy: string;
  modifiedAt: string;
};

export type TNote = TNoteTrip | TNoteTask;

// 여행 별 노트 모아보기
export type TGetNoteAllTripProps = {
  tripId: number;
  // TODO API 맞춰 수정
  tripNoteSeq: number;
  taskNoteSeq: number;
};

export type TNoteAllTrip = {
  tripTitle: string;
  tripNoteDetails: TNoteTrip[];
  taskNoteDetails: TNoteTask[];
  // noteDetails: TNote[]; // TODO API 맞춰 수정
};

export type TNoteAllTripResponse = TResponse<TNoteAllTrip>;

export type TNoteResponse = TResponse<TNote>;
