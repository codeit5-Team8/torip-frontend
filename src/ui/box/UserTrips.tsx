import { useGetUserTripList } from '@hooks/trip/useGetUserTripList';
import TripBox from './TripBox';
import Skeleton from '@ui/common/Skeleton';

export default function UserTrips() {
  const { data: tripList, isLoading } = useGetUserTripList({
    lastSeenId: 0,
  });
  // 임시 데이터
  // const data = {
  //   content: [
  //     {
  //       id: 1,
  //       name: '제주도 여행',
  //       startDate: '2021-10-01',
  //       endDate: '2021-10-05',
  //       owner: {
  //         id: 1,
  //         username: 'test',
  //         email: 'test@test.com',
  //       },
  //       createdAt: '2024-12-24T02:23:42.944Z',
  //       lastUpdatedUser: {
  //         id: 1,
  //         username: 'test',
  //         email: 'test@test.com',
  //       },
  //       updatedAt: '2024-12-24T02:23:42.944Z',
  //     },
  //     {
  //       id: 1,
  //       name: '제주도 여행',
  //       startDate: '2021-10-01',
  //       endDate: '2021-10-05',
  //       owner: {
  //         id: 1,
  //         username: 'test',
  //         email: 'test@test.com',
  //       },
  //       createdAt: '2024-12-24T02:23:42.944Z',
  //       lastUpdatedUser: {
  //         id: 1,
  //         username: 'test',
  //         email: 'test@test.com',
  //       },
  //       updatedAt: '2024-12-24T02:23:42.944Z',
  //     },
  //   ],
  // };

  if (isLoading) {
    return (
      <div className="flex w-full flex-col gap-6">
        {/* tripbox */}
        <div className="flex w-full flex-col gap-4 rounded-xl bg-white py-6 pl-4 tablet:pl-6 desktop:px-6">
          <div className="flex items-center gap-2">
            <Skeleton className="flex h-10 w-10 items-center justify-center rounded-2xl" />
            <Skeleton className="h-7 w-32 rounded-md" />
          </div>
          <div className="mx-6 flex gap-[22px]">
            {/* 기본 (mobile): 1개 */}
            <Skeleton className="h-[304px] w-full" />
            {/* tablet: 2개 (1개는 반만 보여줌) */}
            <Skeleton className="hidden h-[304px] tablet:block tablet:w-1/2 desktop:hidden" />
            {/* desktop: 정확히 3개 */}
            <Skeleton className="hidden h-[304px] desktop:block desktop:w-full" />
            <Skeleton className="hidden h-[304px] desktop:block desktop:w-full" />
          </div>
        </div>
        {/* tripbox */}
        <div className="flex w-full flex-col gap-4 rounded-xl bg-white py-6 pl-4 tablet:pl-6 desktop:px-6">
          <div className="flex items-center gap-2">
            <Skeleton className="flex h-10 w-10 items-center justify-center rounded-2xl" />
            <Skeleton className="h-7 w-32 rounded-md" />
          </div>
          <div className="mx-6 flex gap-[22px]">
            {/* 기본 (mobile): 1개 */}
            <Skeleton className="h-[304px] w-full" />
            {/* tablet: 2개 (1개는 반만 보여줌) */}
            <Skeleton className="hidden h-[304px] tablet:block tablet:w-1/2 desktop:hidden" />
            {/* desktop: 정확히 3개 */}
            <Skeleton className="hidden h-[304px] desktop:block desktop:w-full" />
            <Skeleton className="hidden h-[304px] desktop:block desktop:w-full" />
          </div>
        </div>
      </div>
    );
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
