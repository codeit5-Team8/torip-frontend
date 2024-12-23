'use client';

import { TTrip } from '@model/trip.model';
import TripMemberSection from '../TripMemberSection';
import TripJoinRequestItem from './TripJoinRequestItem';
import { usePopupStore } from '@store/popup.store';
import { useGetJoinTripList } from '@hooks/trip/useGetJoinTripList';

type TTripMember = Pick<TTrip, 'id'>;

export default function TripJoinRequestList({ id }: TTripMember) {
  const { data: joinTripList } = useGetJoinTripList(id);
  const { showPopup } = usePopupStore();

  const onConfirm = () => {
    alert('Confirm');
  };

  const onCancel = () => {
    alert('Cancel');
  };

  const handleAcceptPopup = () => {
    showPopup({
      popupText: '여행 초대를 수락하시겠어요?',
      showCancelButton: true,
      confirmButtonText: '확인',
      onConfirm,
      onCancel,
    });
  };

  const handleRejectPopup = () => {
    showPopup({
      popupText: '여행 초대를 거절하시겠어요?',
      showCancelButton: true,
      confirmButtonText: '확인',
      onConfirm,
      onCancel,
    });
  };

  const handleAcceptClick = () => {
    // TODO: 참가 승인
    handleAcceptPopup();
  };
  const handleRejectClick = () => {
    // TODO: 참가 승인
    handleRejectPopup();
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
