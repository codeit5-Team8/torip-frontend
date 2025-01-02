import { useQuery } from '@tanstack/react-query';
import { noteQueryKeys } from '@constant/queryKeyFactory';
import { TGetNoteDetailProp } from '@model/note.model';

export const useGetTripNoteDetail = (id: TGetNoteDetailProp) => {
  return useQuery(noteQueryKeys.noteDetail(id));
};
