import { useQuery } from '@tanstack/react-query';
import { tripQueryKeys } from '@constant/queryKeyFactory';

export const useGetJoinTripList = (id: number) => {
  return useQuery(tripQueryKeys.joinList(id));
};
