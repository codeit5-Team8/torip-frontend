import { Input } from '@ui/common/Input';

interface ITripName {
  tripName: string;
  setTripName: React.Dispatch<React.SetStateAction<string>>;
}
export default function TripName({ tripName, setTripName }: ITripName) {
  const handleTripName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTripName(e.target.value);
  };

  return (
    <div>
      <header className="mb-2 text-base font-semibold text-slate-800">
        여행 제목
      </header>
      <Input type="text" value={tripName} onChange={handleTripName} />
    </div>
  );
}
