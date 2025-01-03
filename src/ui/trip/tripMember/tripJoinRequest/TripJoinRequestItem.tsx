'use client';

import { memo } from 'react';
import { TJoinTrip } from '@model/trip.model';
import Button from '@ui/common/Button';

interface ITripJoinRequestItemProps
  extends Pick<TJoinTrip, 'invitee' | 'createdAt'> {
  onAccept: () => void;
  onReject: () => void;
}

function TripJoinRequestItem({
  invitee,
  createdAt,
  onAccept,
  onReject,
}: ITripJoinRequestItemProps) {
  return (
    <li className="flex items-center justify-between border-b border-slate-200 py-1 last:border-0">
      <div className="text-sm font-normal leading-tight">
        {invitee.username}
      </div>
      <div className="flex items-center gap-16">
        <div className="hidden text-sm font-normal leading-tight tablet:block">
          {createdAt}
        </div>

        <div className="flex gap-[0.375rem]">
          <Button size="xsmall" onClick={onAccept}>
            승인
          </Button>
          <Button variant="outlined" size="xsmall" onClick={onReject}>
            거절
          </Button>
        </div>
      </div>
    </li>
  );
}

export default memo(TripJoinRequestItem);
