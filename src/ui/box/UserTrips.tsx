import { useGetUserTripList } from '@hooks/useGetUserTripList';
import TripBox from './TripBox';

export default function UserTrips() {
  const { data } = useGetUserTripList({
    lastSeenId: 0,
  });

  // 디자인 변경필요
  if (data?.content.length === 0) {
    return <div>등록한 여행이 없어요.</div>;
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
