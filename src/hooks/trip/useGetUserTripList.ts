import { tripQueryKeys } from '@constant/queryKeyFactory';
import { TGetTripListProps } from '@model/trip.model';
import { useQuery } from '@tanstack/react-query';

export const useGetUserTripList = (query: TGetTripListProps) => {
  return useQuery({
    ...tripQueryKeys.list(query),
    select: (data) => ({
      lastSeenId: data.result.lastSeenId,
      content: data.result.content,
    }),
  });
};
