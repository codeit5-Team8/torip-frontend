import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface IDateRangePickerProps {
  startDate: Date | null;
  setStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
  endDate: Date | null;
  setEndDate: React.Dispatch<React.SetStateAction<Date | null>>;
}

export default function DateRangePicker({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}: IDateRangePickerProps) {
  const handleStartDateChange = (date: Date | null) => setStartDate(date);
  const handleEndDateChange = (date: Date | null) => setEndDate(date);

  return (
    <div className="flex flex-col space-y-4">
      <header className="text-base font-semibold text-slate-800">
        여행 날짜
      </header>
      <section className="flex w-full flex-col justify-between gap-2 tablet:flex-row">
        {/* 시작 날짜 선택 */}
        <section className="flex w-full flex-col px-1 tablet:w-1/2">
          <label
            htmlFor="start-date"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            시작 날짜
          </label>
          <DatePicker
            id="start-date"
            selected={startDate}
            onChange={handleStartDateChange}
            dateFormat="yyyy-MM-dd"
            className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-blue-500"
            placeholderText="시작 날짜를 선택하세요"
          />
        </section>
        {/* 끝나는 날짜 선택 */}
        <section className="flex w-full flex-col px-1 tablet:w-1/2">
          <label
            htmlFor="end-date"
            className="mb-2 text-sm font-medium text-gray-700"
          >
            끝나는 날짜
          </label>
          <DatePicker
            id="end-date"
            selected={endDate}
            onChange={handleEndDateChange}
            dateFormat="yyyy-MM-dd"
            minDate={startDate!} // 끝나는 날짜는 시작 날짜 이후로만 선택 가능
            className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-blue-500"
            placeholderText="끝나는 날짜를 선택하세요"
          />
        </section>
      </section>
    </div>
  );
}
