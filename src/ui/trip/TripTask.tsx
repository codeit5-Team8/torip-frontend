'use client';

import { TTask } from '@model/task.model';
import TaskCarousel from '@ui/carousel/TaskCarousel';
import FilterButton from '@ui/common/FilterButton';
import ShowAllTasksButton from './tripTask/ShowAllTasksButton';
import AddTaskButton from './tripTask/AddTaskButton';

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

export default function TripTask() {
  return (
    <div className="section-box flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-semibold leading-7 text-slate-800">Todo</h4>
        <ShowAllTasksButton />
      </div>
      <div className="flex items-center justify-between">
        <FilterButton />
        <AddTaskButton />
      </div>
      <TaskCarousel tasks={tasks} height="500px" />
    </div>
  );
}
