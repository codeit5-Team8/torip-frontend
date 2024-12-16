'use client';

import { useModalStore } from '@store/modal.store';
import DropdownMenu from '@ui/common/DropdownMenu';
import TripMember from './tripMember/TripMember';

export default function TripInfo() {
  const { showModal } = useModalStore();

  const handleShowTripMember = () => {
    showModal({
      title: '멤버 관리',
      content: <TripMember />,
    });
  };

  return (
    <section>
      <div className="absolute right-4 top-4">
        <DropdownMenu
          items={[
            // TODO: 기능 추가 필요
            /* eslint-disable no-console */
            { label: '공유하기', onClick: () => console.log('Edit clicked') },
            { label: '멤버관리', onClick: handleShowTripMember },
            { label: '수정하기', onClick: () => console.log('Share clicked') },
            { label: '삭제하기', onClick: () => console.log('Share clicked') },
            /* eslint-disable no-console */
          ]}
          className="bg-transparent font-black text-white"
        >
          {/* 케밥 아이콘 부분 */} :
        </DropdownMenu>
      </div>
    </section>
  );
}
