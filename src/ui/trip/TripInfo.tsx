'use client';

import { useModalStore } from '@store/modal.store';
import DropdownMenu from '@ui/common/DropdownMenu';
import TripMember from './tripMember/TripMemberModal';
import { twMerge } from 'tailwind-merge';

export default function TripInfo() {
  const { showModal } = useModalStore();

  const handleShowTripMember = () => {
    showModal({
      title: '멤버 관리',
      content: <TripMember />,
    });
  };

  return (
    <section
      // TODO: 추후 배경이미지 추가될 경우 수정 필요
      style={
        {
          '--bg-img': `url('https://png.pngtree.com/thumb_back/fw800/background/20230902/pngtree-seoul-trip-with-tour-gsg-tour-korean-history-image_13115056.jpg')`,
        } as React.CSSProperties
      }
      className={twMerge(
        'section-box relative overflow-hidden bg-cover bg-center bg-no-repeat',
        'before:to--[#888888]/30 before:absolute before:inset-0 before:bg-gradient-to-r before:from-black before:opacity-50 before:content-[""]',
        'bg-[image:var(--bg-img)]',
        // backgroundImage && 'bg-[image:var(--bg-img)]',
      )}
    >
      <div className="relative z-10 flex flex-col gap-3 py-4 text-white">
        <h3 className="text-lg font-semibold leading-7">한국 여행</h3>
        <div className="text-[2rem] font-black leading-none text-white">
          D-14
        </div>
      </div>
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
