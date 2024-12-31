import { useGetUserTripList } from '@hooks/trip/useGetUserTripList';
import SelectInput from '@ui/common/SelectInput';

interface ITripPicker {
  tripId: number;
  setTripId: React.Dispatch<React.SetStateAction<number>>;
}

export default function TripPicker({ tripId = 33, setTripId }: ITripPicker) {
  const { data: tripList, isLoading } = useGetUserTripList({
    lastSeenId: 0,
  });

  return (
    <>
      {!isLoading && (
        <>
          <header className="my-4 text-base font-semibold text-slate-800">
            여행 선택
          </header>
          {/* TODO: 옵션 선택 후 반영되도록 수정하기. (사용법 설명 여쭤보기) */}
          <SelectInput
            options={tripList!.content.map((trip) => {
              return { label: trip.name, value: `${trip.id}` };
            })}
            onChange={(newValue) => {
              setTripId(Number(newValue));
            }}
            value={tripId}
            defaultTrip={tripId}
            placeholder="여행을 선택해주세요."
          />
        </>
      )}
    </>
  );
}
