import Subtitle from '@ui/common/Subtitle';
import FilterButton from '@ui/common/FilterButton';
import TaskCarousel from '@ui/carousel/TaskCarousel';

import ShowAllTasksButton from '@ui/trip/tripTask/ShowAllTasksButton';
import AddTaskButton from '@ui/trip/tripTask/AddTaskButton';
import { TGetTaskResponse } from '@model/task.model';

/* eslint-disable @typescript-eslint/no-unused-vars */
// TODO: API 연동 후 제거 예정
const tasks: TGetTaskResponse[] = [
  {
    taskId: 101,
    tripName: '제주도 여행',
    taskTitle: '비행기 티켓 예약하기',
    taskStatus: 'BEFORE_TRIP',
    taskScope: 'PRIVATE',
    taskCompletionDate: '2024-12-15',
    taskDDay: 'D-3',
    taskFilePath: '/files/ticket.pdf',
    createdBy: 'Alice',
    createdAt: '2024-12-01T12:00:00Z',
    modifiedBy: 'Alice',
    modifiedAt: '2024-12-10T12:00:00Z',
    taskAssignees: [
      { taskId: 101, userId: 1, username: 'Alice', email: 'alice@example.com' },
      { taskId: 101, userId: 2, username: 'Bob', email: 'bob@example.com' },
    ],
  },
  {
    taskId: 102,
    tripName: '제주도 여행',
    taskTitle: '호텔 예약 완료하기',
    taskStatus: 'BEFORE_TRIP',
    taskScope: 'PUBLIC',
    taskCompletionDate: '2024-12-18',
    taskDDay: 'D-7',
    createdBy: 'Charlie',
    createdAt: '2024-12-02T12:00:00Z',
    modifiedBy: 'Charlie',
    modifiedAt: '2024-12-12T12:00:00Z',
    taskAssignees: [
      {
        taskId: 102,
        userId: 3,
        username: 'Charlie',
        email: 'charlie@example.com',
      },
    ],
  },
  {
    taskId: 103,
    tripName: '제주도 여행',
    taskTitle: '관광 일정 짜기',
    taskStatus: 'BEFORE_TRIP',
    taskScope: 'PRIVATE',
    taskCompletionDate: '2024-12-20',
    taskDDay: 'D-5',
    createdBy: 'Alice',
    createdAt: '2024-12-03T12:00:00Z',
    modifiedBy: 'Alice',
    modifiedAt: '2024-12-15T12:00:00Z',
    taskAssignees: [],
  },
  {
    taskId: 104,
    tripName: '제주도 여행',
    taskTitle: '여행지 사진 정리',
    taskStatus: 'AFTER_TRIP',
    taskScope: 'PUBLIC',
    taskCompletionDate: '2024-12-25',
    taskDDay: 'D+1',
    taskFilePath: '/files/photos.zip',
    createdBy: 'Bob',
    createdAt: '2024-12-04T12:00:00Z',
    modifiedBy: 'Bob',
    modifiedAt: '2024-12-18T12:00:00Z',
    taskAssignees: [],
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
    <div className="w-full rounded-xl bg-white pb-6 pl-4 tablet:pl-6 desktop:px-6">
      <div className="flex items-center justify-between pt-4">
        <Subtitle title={name} icon="whiteflag" iconBg="bg-blue-500" link="#" />
        <AddTaskButton />
      </div>
      <div className="my-5 flex items-center justify-between">
        <FilterButton />
        <ShowAllTasksButton />
      </div>
      <TaskCarousel tripId={id} tasks={tasks} height="304px" />
    </div>
  );
}
