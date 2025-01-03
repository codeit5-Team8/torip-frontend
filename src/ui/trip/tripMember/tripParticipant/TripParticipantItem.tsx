'use client';

import { memo } from 'react';
import { TGetUserResponse } from '@model/user.model';

// TODO: API 데이터 변경에 따라 수정 필요
type TTripParticipantItemProps = Pick<TGetUserResponse, 'username'>;

function TripParticipantItem({ username }: TTripParticipantItemProps) {
  return (
    <li className="flex items-center justify-between border-b border-slate-200 py-[0.625rem] last:border-0">
      <div className="text-sm font-normal leading-tight">{username}</div>
    </li>
  );
}

export default memo(TripParticipantItem);
