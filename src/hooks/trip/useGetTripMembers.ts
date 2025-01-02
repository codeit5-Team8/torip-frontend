import { useQuery } from '@tanstack/react-query';
import { tripQueryKeys } from '@constant/queryKeyFactory';

export const useGetTripMembers = (id: number) => {
  return useQuery(tripQueryKeys.members(id));
};
