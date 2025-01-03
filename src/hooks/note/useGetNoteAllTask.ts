import { noteQueryKeys } from '@constant/queryKeyFactory';
import { TGetNoteAllTaskProps } from '@model/note.model';
import { useQuery } from '@tanstack/react-query';

export const useGetNoteAllTask = (query: TGetNoteAllTaskProps) => {
  return useQuery(noteQueryKeys.noteAllTask(query));
};
