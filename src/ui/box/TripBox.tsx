import Subtitle from '@ui/common/Subtitle';
import Button from '@ui/common/Button';
import Image from 'next/image';
import FilterButton from '@ui/common/FilterButton';
import TaskCarousel from '@ui/carousel/TaskCarousel';

interface ITripCardProps {
  id: number;
  name: string;
}

// task를 어떻게 어디서 불러오느냐에 따라 props 변경하기
// 할일 추가 버튼 onclick 추가하기
export default function TripBox({ id, name }: ITripCardProps) {
  return (
    <div className="rounded-xl bg-white pb-6 pl-4 tablet:pl-6 desktop:px-6">
      <div className="flex justify-between pt-4">
        <Subtitle title={name} icon="whiteflag" iconBg="bg-blue-500" link="#" />
        <Button className="border-none bg-white text-sm font-medium text-slate-800 hover:bg-slate-100 active:border-none active:bg-slate-100">
          <Image
            src="/asset/icon/plusblack.png"
            alt="할 일 추가 버튼"
            width={16}
            height={16}
          />
          할일 추가
        </Button>
      </div>
      <div className="my-5">
        <FilterButton />
      </div>
      <TaskCarousel tripId={id} />
    </div>
  );
}
