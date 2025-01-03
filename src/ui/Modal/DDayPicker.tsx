import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface IDDayPickerProps {
  DDay: Date | null;
  setDDay: React.Dispatch<React.SetStateAction<Date | null>>;
}

export default function DDayPicker({ DDay, setDDay }: IDDayPickerProps) {
  const handleEndDateChange = (date: Date | null) => setDDay(date);

  return (
    <>
      <header className="my-5 text-base font-semibold text-slate-800">
        할 일 D-Day
      </header>
      <div className="flex flex-col space-y-2">
        <section className="flex w-full flex-col justify-between gap-2 tablet:flex-row">
          {/* D-Day 날짜 선택 */}
          <section className="flex w-full flex-col">
            <DatePicker
              id="end-date"
              selected={DDay}
              onChange={handleEndDateChange}
              dateFormat="yyyy-MM-dd"
              minDate={new Date()}
              className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-blue-500"
              placeholderText="D-Day를 선택하세요"
            />
          </section>
        </section>
      </div>
    </>
  );
}
