'use client';

import { useGetUserTripList } from '@hooks/trip/useGetUserTripList';
import TripBox from './TripBox';
import { UserTripsSkeleton } from '@ui/skeleton/Skeletons';

export default function UserTrips() {
  const { data: tripList, isLoading } = useGetUserTripList({
    lastSeenId: 0,
  });

  if (isLoading) {
    return <UserTripsSkeleton />;
  }

  // 여행 없을 때 UI
  if (tripList?.content.length === 0) {
    return (
      <div className="flex flex-1 items-center justify-center rounded-xl bg-white text-slate-500">
        등록한 여행이 없어요
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-6">
      {tripList?.content.map((trip) => (
        <TripBox key={trip.id} id={trip.id} name={trip.name} />
      ))}
    </div>
  );
}
