import { useQuery } from '@tanstack/react-query';
import { noteQueryKeys } from '@constant/queryKeyFactory';
import { TGetNoteAllTripProps } from '@model/note.model';

export const useGetNoteAllTrip = (query: TGetNoteAllTripProps) => {
  return useQuery(noteQueryKeys.noteAllTrip(query));
};
