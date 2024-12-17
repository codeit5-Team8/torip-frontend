import Subtitle from '@ui/common/Subtitle';
import FilterButton from '@ui/common/FilterButton';
import TaskCarousel from '@ui/carousel/TaskCarousel';
import { TTask } from '@model/task.model';
import ShowAllTasksButton from '@ui/trip/tripTask/ShowAllTasksButton';
import AddTaskButton from '@ui/trip/tripTask/AddTaskButton';

/* eslint-disable @typescript-eslint/no-unused-vars */
// TODO: API 연동 후 제거 예정
const tasks: TTask[] = [
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

interface ITripCardProps {
  id: number;
  name: string;
}

// task를 어떻게 어디서 불러오느냐에 따라 props 변경하기
// 할일 추가 버튼 onclick 추가하기
export default function TripBox({ id, name }: ITripCardProps) {
  return (
    <div className="rounded-xl bg-white pb-6 pl-4 tablet:pl-6 desktop:px-6">
      <div className="flex items-center justify-between pt-4">
        <Subtitle title={name} icon="whiteflag" iconBg="bg-blue-500" link="#" />
        <AddTaskButton />
      </div>
      <div className="my-5 flex items-center justify-between">
        <FilterButton />
        <ShowAllTasksButton />
      </div>
      <TaskCarousel tasks={tasks} height="304px" />
    </div>
  );
}
