'use client';

import TripMemberSection from '../TripMemberSection';
import TripJoinRequestItem from './TripJoinRequestItem';
import { usePopupStore } from '@store/popup.store';

// TODO: API 연결 시 제거 예정
const joinRequestList = [
  {
    travelName: '여행',
    invitee: {
      username: '홍길동',
      email: 'email@email.com',
    },
    status: 'Accepted',
    createdAt: '2024.12.11',
    updatedAt: '2024.12.11',
  },
  {
    travelName: '여행',
    invitee: {
      username: '홍길동',
      email: 'email@email.com',
    },
    status: 'Accepted',
    createdAt: '2024.12.11',
    updatedAt: '2024.12.11',
  },
  {
    travelName: '여행',
    invitee: {
      username: '홍길동',
      email: 'email@email.com',
    },
    status: 'Accepted',
    createdAt: '2024.12.11',
    updatedAt: '2024.12.11',
  },
];

export default function TripJoinRequestList() {
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
      <ul className="flex flex-col overflow-y-auto">
        {joinRequestList &&
          joinRequestList.map((item, index) => (
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
