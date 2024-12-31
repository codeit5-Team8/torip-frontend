import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface IDDayPickerProps {
  DDay: Date | null;
  setDDay: React.Dispatch<React.SetStateAction<Date | null>>;
}

export default function DDayPicker({ DDay, setDDay }: IDDayPickerProps) {
  const handleEndDateChange = (date: Date | null) => setDDay(date);

  return (
    <div className="my-4 flex flex-col space-y-2">
      <header className="text-base font-semibold text-slate-800">
        할 일 D-Day
      </header>
      <section className="flex w-full flex-col justify-between gap-2 tablet:flex-row">
        {/* D-Day 날짜 선택 */}
        <section className="flex w-full flex-col px-1 tablet:w-1/2">
          {/* <label
            htmlFor="end-date"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            D-Day
          </label> */}
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
  );
}
