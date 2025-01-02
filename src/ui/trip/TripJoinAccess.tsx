'use client';

import { TRIP_NOT_FOUND } from '@constant/trip';
import { useGetTrip } from '@hooks/trip/useGetTrip';
import { usePostJoinTrip } from '@hooks/trip/usePostJoinTrip';
import Button from '@ui/common/Button';
import EmptyMessage from '@ui/common/EmptyMessage';
import Link from 'next/link';

interface ITripJoinAccessProps {
  id: number;
}

export default function TripJoinAccess({ id }: ITripJoinAccessProps) {
  const { data: tripInfo } = useGetTrip(Number(id));
  const joinTrip = usePostJoinTrip();

  const handleJoinTrip = () => {
    joinTrip.mutate(Number(id));
  };

  return (
    <div className="item-center flex-grow flex-col gap-4">
      <EmptyMessage message={tripInfo?.message || ''} />
      {tripInfo?.message !== TRIP_NOT_FOUND ? (
        <Button onClick={handleJoinTrip}>참여하기</Button>
      ) : (
        <Link href="/">
          <Button>홈으로</Button>
        </Link>
      )}
    </div>
  );
}
