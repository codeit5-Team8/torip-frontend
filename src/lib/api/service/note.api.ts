import {
  TGetNoteAllTripProps,
  TNoteAllTripResponse,
  TNoteRequest,
  TNoteResponse,
} from 'src/model/note.model';
import { del, get, post, put } from '../axios';

// 여행 별 노트 목록 조회
export const getNoteAllTrip = async (query: TGetNoteAllTripProps) => {
  const response = await get<TNoteAllTripResponse>('/api/v1/torip/trip/note', {
    params: query,
  });
  return response.data;
};

// 노트 수정
export const updateNote = async (data: TNoteRequest) => {
  const response = await put<TNoteResponse>('/api/v1/torip/note', data);
  return response.data;
};

//노트 등록
export const createNote = async (data: TNoteRequest) => {
  const response = await post<TNoteResponse>('/api/v1/torip/note', data);
  return response.data;
};

// 노트 상세 조회
export const getNoteDetail = async (noteId: number) => {
  const response = await get<TNoteResponse>(`/api/v1/torip/note/${noteId}`);
  return response.data;
};

// 노트 삭제
export const deleteNote = async (noteId: number) => {
  const response = await del<TNoteResponse>(`/api/v1/torip/note/${noteId}`);
  return response.data;
};
