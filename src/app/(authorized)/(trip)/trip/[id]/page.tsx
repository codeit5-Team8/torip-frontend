import TripNotesButton from '@ui/trip/TripNotesButton';
import TripInfo from '@ui/trip/TripInfo';
import TripTask from '@ui/trip/TripTask';

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

export default function Trip({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <>
      {/* 여행 상세 정보 */}
      <TripInfo tripInfo={tripInfo} />
      {/* 노트 모아보기 */}
      <TripNotesButton />
      {/* 여행 할 일 */}
      <TripTask id={Number(id)} />
    </>
  );
}
