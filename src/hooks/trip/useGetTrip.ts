import { useQuery } from '@tanstack/react-query';
import { tripQueryKeys } from '@constant/queryKeyFactory';

export const useGetTrip = (id: number) => {
  return useQuery(tripQueryKeys.detail(id));
};
