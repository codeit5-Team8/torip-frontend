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
          <header className="my-5 text-base font-semibold text-slate-800">
            여행 선택
          </header>
          <SelectInput
            options={tripList!.content.map((trip) => {
              return { label: trip.name, value: `${trip.id}` };
            })}
            onChange={(newValue) => {
              setTripId(Number(newValue));
            }}
            value={`${tripId}`}
            defaultTrip={tripId}
            placeholder="여행을 선택해주세요."
          />
        </>
      )}
    </>
  );
}
