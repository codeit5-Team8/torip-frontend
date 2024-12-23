import { useGetUserTripList } from '@hooks/trip/useGetUserTripList';
import TripBox from './TripBox';

export default function UserTrips() {
  const { data } = useGetUserTripList({
    lastSeenId: 0,
  });

  // 디자인 변경필요
  if (data?.content.length === 0) {
    return (
      <div className="flex h-[200px] w-full items-center justify-center rounded-xl bg-white text-slate-500 tablet:h-[771px] desktop:h-[651px]">
        등록한 여행이 없어요
      </div>
    );
  }

  // 디자인 변경필요
  return (
    <div>
      {data?.content.map((trip) => (
        <TripBox key={trip.id} id={trip.id} name={trip.name} />
      ))}
    </div>
  );
}
