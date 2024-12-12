import Subtitle from '@ui/common/Subtitle';
import TaskCard from '../taskCard/TaskCard';
import { TTask } from '@model/task.model';
import Button from '@ui/common/Button';
import Image from 'next/image';
import FilterButton from './FilterButton';

interface ITripCardProps {
  id: number;
  name: string;
}

const mockTasks: TTask[] = [
  {
    travelId: 1,
    taskId: 101,
    taskTitle: '비행기 티켓 예약하기',
    travelStatus: 'BEFORE_TRAVEL',
    scope: 'PRIVATE',
    completionDate: '2024-12-15',
    taskDDay: 'D-3',
    filePath: '/files/ticket.pdf',
    assignees: ['Alice', 'Bob'],
  },
  {
    travelId: 1,
    taskId: 102,
    taskTitle: '호텔 예약 완료하기',
    travelStatus: 'BEFORE_TRAVEL',
    scope: 'PUBLIC',
    completionDate: '2024-12-18',
    assignees: ['Charlie'],
  },
  {
    travelId: 1,
    taskId: 103,
    taskTitle: '관광 일정 짜기',
    travelStatus: 'BEFORE_TRAVEL',
    scope: 'PRIVATE',
    completionDate: '2024-12-20',
  },
  {
    travelId: 1,
    taskId: 104,
    taskTitle: '여행지 사진 정리',
    travelStatus: 'AFTER_TRAVEL',
    scope: 'PUBLIC',
    completionDate: '2024-12-25',
    filePath: '/files/photos.zip',
  },
];

export default function TripCard({ id, name }: ITripCardProps) {
  return (
    <div className="bg-slate-100 px-6 pb-6">
      <div className="flex justify-between">
        <Subtitle title={name} icon="whiteflag" iconBg="bg-blue-500" />
        <Button className="border-none bg-slate-100 text-sm font-medium text-slate-800 hover:bg-slate-100 active:border-none active:bg-slate-100">
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
      <div className="mt-4 flex gap-[22px]">
        <TaskCard key={id} status="ready" tasks={mockTasks} />
        <TaskCard key={id} status="ongoing" tasks={mockTasks} />
        <TaskCard key={id} status="done" tasks={mockTasks} />
      </div>
    </div>
  );
}
