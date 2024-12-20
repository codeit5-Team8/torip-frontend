import TripNotesButton from '@ui/trip/TripNotesButton';
import TripInfo from '@ui/trip/TripInfo';
import TripTask from '@ui/trip/TripTask';

export default function Trip({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <>
      {/* 여행 상세 정보 */}
      <TripInfo id={Number(id)} />
      {/* 노트 모아보기 */}
      <TripNotesButton id={Number(id)} />
      {/* 여행 할 일 */}
      <TripTask id={Number(id)} />
    </>
  );
}
