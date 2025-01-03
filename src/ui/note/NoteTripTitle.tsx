import Image from 'next/image';

export default function NoteTripTitle({ tripTitle }: { tripTitle: string }) {
  return (
    <div className="flex items-center gap-[6px]">
      <Image
        src={`/asset/icon/trip-dark.png`}
        alt="여행 아이콘"
        width={24}
        height={24}
      />

      <p className="text-base font-medium leading-normal text-slate-800">
        {tripTitle}
      </p>
    </div>
  );
}
