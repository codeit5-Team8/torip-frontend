import {
  TGetNotesProps,
  TNoteRequest,
  TNoteResponse,
  TNotesResponse,
} from 'src/model/note.model';
import { del, get, post, put } from '../axios';

// 노트 목록 조회
// const response = await getNotes({ key: 'TRAVEL', id: 1, seq: 0 });
export const getNotes = async (query: TGetNotesProps) => {
  const response = await get<TNotesResponse>('/api/v1/torip/note', {
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
