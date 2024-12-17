import NavTitle from '@ui/common/NavTitle';
import TripNotesButton from '@ui/trip/TripNotesButton';
import TripInfo from '@ui/trip/TripInfo';

// TODO: API 연동시 제거 예정
const tripInfo = {
  id: 1,
  name: '제주도 여행',
  startDate: '2021-10-01',
  endDate: '2021-10-05',
  owner: {
    id: 1,
    username: 'test',
    email: 'test@test.com',
  },
  createdAt: '2024-12-16T07:45:43.447Z',
  lastUpdatedUser: {
    id: 1,
    username: 'test',
    email: 'test@test.com',
  },
  updatedAt: '2024-12-16T07:45:43.447Z',
};

export default function Trip() {
  return (
    <div className="flex min-h-full flex-1 flex-col gap-[1.625rem] py-6">
      <NavTitle />
      {/* 여행 상세 정보 */}
      <TripInfo tripInfo={tripInfo} />
      {/* 노트 모아보기 */}
      <TripNotesButton />
    </div>
  );
}
