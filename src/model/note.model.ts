// get api props

import { TResponse } from './model';

// 노트 등록, 수정 ,삭제
export type TNoteRequest = {
  id: number;
  noteTitle: string;
  noteContent: string;
};

export type TNoteTrip = {
  noteId: number;
  noteTitle: string;
  noteContent: string;
  ownerId: number; // 여행 오너
  registrantId: number; // 노트 작성자
  createdBy: string;
  createdAt: string;
  modifiedBy: string;
  modifiedAt: string;
};

export type TNoteTask = TNoteTrip & {
  status: 'BEFORE_TRIP' | 'DURING_TRIP' | 'AFTER_TRIP';
  title: string;
};

export type TNote = TNoteTrip | TNoteTask;

// 여행 별 노트 모아보기
export type TGetNoteAllTripProps = {
  id: number;
  tripNoteSeq: number;
  taskNoteSeq: number;
};

export type TNoteAllTrip = {
  title: string;
  noteDetails: TNote[];
};

export type TNoteAllTripResponse = TResponse<TNoteAllTrip>;

export type TNoteResponse = TResponse<TNote>;
