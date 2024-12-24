'use client';

import { TTrip } from '@model/trip.model';
import TripMemberSection from '../TripMemberSection';
import TripJoinRequestItem from './TripJoinRequestItem';
import { usePopupStore } from '@store/popup.store';
import { useGetJoinTripList } from '@hooks/trip/useGetJoinTripList';
import { usePostAcceptTrip } from '@hooks/trip/usePostAcceptTrip';
import { usePostRejectTrip } from '@hooks/trip/usePostRejectTrip';
import { TRIP_POPUP_MESSAGE } from '@constant/trip';

type TTripMember = Pick<TTrip, 'id'>;

export default function TripJoinRequestList({ id }: TTripMember) {
  const { data: joinTripList } = useGetJoinTripList(id);
  const acceptTrip = usePostAcceptTrip();
  const rejectTrip = usePostRejectTrip();

  const { showPopup } = usePopupStore();

  const onAcceptConfirm = () => {
    acceptTrip.mutate(id);
  };

  const onRejectConfirm = () => {
    rejectTrip.mutate(id);
  };

  const handleAcceptClick = () => {
    showPopup({
      popupText: TRIP_POPUP_MESSAGE.acceptInvite,
      showCancelButton: true,
      confirmButtonText: '확인',
      onConfirm: onAcceptConfirm,
    });
  };

  const handleRejectClick = () => {
    showPopup({
      popupText: TRIP_POPUP_MESSAGE.rejectInvite,
      showCancelButton: true,
      confirmButtonText: '확인',
      onConfirm: onRejectConfirm,
    });
  };

  return (
    <TripMemberSection title="여행 멤버 승인">
      <ul className="flex flex-col">
        {joinTripList?.result.map((item, index) => (
          <TripJoinRequestItem
            key={index}
            invitee={item.invitee}
            createdAt={item.createdAt}
            onAccept={handleAcceptClick}
            onReject={handleRejectClick}
          />
        ))}
      </ul>
    </TripMemberSection>
  );
}
