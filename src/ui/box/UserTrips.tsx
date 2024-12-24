import TripBox from './TripBox';

export default function UserTrips() {
  // const { data } = useGetUserTripList({
  //   lastSeenId: 0,
  // });
  // 임시 데이터
  const data = {
    content: [
      {
        id: 1,
        name: '제주도 여행',
        startDate: '2021-10-01',
        endDate: '2021-10-05',
        owner: {
          id: 1,
          username: 'test',
          email: 'test@test.com',
        },
        createdAt: '2024-12-24T02:23:42.944Z',
        lastUpdatedUser: {
          id: 1,
          username: 'test',
          email: 'test@test.com',
        },
        updatedAt: '2024-12-24T02:23:42.944Z',
      },
    ],
  };

  // 여행 없을 때 UI
  if (data?.content.length === 0) {
    return (
      <div className="flex flex-1 items-center justify-center rounded-xl bg-white text-slate-500">
        등록한 여행이 없어요
      </div>
    );
  }

  return (
    <div className="flex w-full">
      {data?.content.map((trip) => (
        <TripBox key={trip.id} id={trip.id} name={trip.name} />
      ))}
    </div>
  );
}
