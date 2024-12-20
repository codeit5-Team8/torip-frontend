'use client';

import { useModalStore } from '@store/modal.store';
import DropdownMenu from '@ui/common/DropdownMenu';
import TripMember from './tripMember/TripMemberModal';
import { twMerge } from 'tailwind-merge';
import { TTrip } from '@model/trip.model';
import { useGetTrip } from '@hooks/trip/useGetTrip';
import Skeleton from '@ui/common/Skeleton';

type TTripInfoProps = Pick<TTrip, 'id'>;

export default function TripInfo({ id }: TTripInfoProps) {
  const { data: tripInfo, isLoading } = useGetTrip(id);
  const { showModal } = useModalStore();

  const handleShowTripMember = () => {
    showModal({
      title: '멤버 관리',
      content: <TripMember />,
    });
  };

  if (isLoading) {
    return (
      <section className="section-box min-h-[136px]">
        <div className="flex flex-col gap-3 py-4">
          <Skeleton className="h-7 w-52" />
          <Skeleton className="h-8 w-32" />
        </div>
      </section>
    );
  }

  return (
    <section
      // TODO: 추후 배경이미지 추가될 경우 수정 필요
      style={
        {
          '--bg-img': `url('https://png.pngtree.com/thumb_back/fw800/background/20230902/pngtree-seoul-trip-with-tour-gsg-tour-korean-history-image_13115056.jpg')`,
        } as React.CSSProperties
      }
      className={twMerge(
        'section-box relative min-h-[136px] overflow-hidden bg-cover bg-center bg-no-repeat',
        // 'before:to--[#888888]/30 before:absolute before:inset-0 before:bg-gradient-to-r before:from-black before:opacity-50 before:content-[""]',
        // 'bg-[image:var(--bg-img)]',
        // backgroundImage && 'bg-[image:var(--bg-img)]',
      )}
    >
      <div className="relative z-10 flex flex-col gap-3 py-4">
        <h3 className="text-lg font-semibold leading-7">
          {tripInfo && tripInfo?.success
            ? tripInfo?.result.name
            : tripInfo?.message}
        </h3>
        <div className="text-[2rem] font-black leading-none">
          {/* TODO: D-Day */}
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
          className="bg-transparent font-black"
        >
          {/* 케밥 아이콘 부분 */} :
        </DropdownMenu>
      </div>
    </section>
  );
}
