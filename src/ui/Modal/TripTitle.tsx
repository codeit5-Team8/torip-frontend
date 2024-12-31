import { Input } from '@ui/common/Input';

interface ITripTitle {
  tripName: string;
  setTripName: React.Dispatch<React.SetStateAction<string>>;
}
export default function TripTitle({ tripName, setTripName }: ITripTitle) {
  const handleTripName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTripName(e.target.value);
  };

  return (
    <div>
      <header className="mb-2 text-base font-semibold text-slate-800">
        여행 제목
      </header>
      <Input
        type="text"
        value={tripName}
        onChange={handleTripName}
        placeholder="여행의 제목을 적어주세요"
      />
    </div>
  );
}
