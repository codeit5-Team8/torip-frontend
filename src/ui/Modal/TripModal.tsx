import { useEffect, useState } from 'react';
import DateRangePicker from './DateRangePicker';
import Button from '@ui/common/Button';
import { TPatchTripRequest, TPostTripRequest } from '@model/trip.model';
import MainTitle from './MainTitle';

interface ITripModalProps {
  id?: number;
  name?: string;
  startDate?: string;
  endDate?: string;
  onConfirm?:
    | ((data: TPostTripRequest) => void) // 생성
    | ((id: number, data: TPatchTripRequest) => void); // 수정
}

export default function TripModal({
  id,
  name: propsName,
  startDate: propStartDate,
  endDate: propEndDate,
  onConfirm,
}: ITripModalProps) {
  const [tripName, setTripName] = useState(propsName ?? '');
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);

  // 문자열을 Date 객체로 변환하는 함수
  const parseDate = (dateString?: string): Date | null => {
    return dateString ? new Date(dateString) : null;
  };

  useEffect(() => {
    if (propStartDate) {
      setStartDate(parseDate(propStartDate));
    }
    if (propEndDate) {
      setEndDate(parseDate(propEndDate));
    }
  }, [propStartDate, propEndDate]);

  return (
    <main className="mt-6">
      <MainTitle tripName={tripName} setTripName={setTripName} />
      <DateRangePicker
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
      <Button
        size="large"
        variant={tripName && startDate && endDate ? 'solid' : 'outlined'}
        rounded={true}
        fullWidth={true}
        className="mt-10"
        disabled={tripName && startDate && endDate ? false : true}
        onClick={() => {
          if (typeof onConfirm === 'function' && id) {
            (onConfirm as (id: number, data: TPatchTripRequest) => void)(id, {
              name: tripName,
              startDate: startDate!.toISOString().split('T')[0],
              endDate: endDate!.toISOString().split('T')[0],
            });
          } else {
            (onConfirm as (data: TPostTripRequest) => void)({
              name: tripName,
              startDate: startDate!.toISOString().split('T')[0],
              endDate: endDate!.toISOString().split('T')[0],
            });
          }
        }}
      >
        확인
      </Button>
    </main>
  );
}
