import Subtitle from '@ui/common/Subtitle';
import FilterButton from '@ui/common/FilterButton';
import TaskCarousel from '@ui/carousel/TaskCarousel';

import ShowAllTasksButton from '@ui/trip/tripTask/ShowAllTasksButton';
import AddTaskButton from '@ui/trip/tripTask/AddTaskButton';
import { TGetTaskResponse, TTaskScope } from '@model/task.model';
import { useRouter } from 'next/navigation';
import { useModalStore } from '@store/modal.store';
import TodoModal from '@ui/common/TodoModal';
import { FILTER_MAPPING } from '@constant/Task';
import { useState } from 'react';
// import { useGetTasks } from '@hooks/task/useGetTasks';

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
    taskDDay: '2024-12-12T00:00:00Z', // D-3을 ISO 형식의 날짜 문자열로 변환
    taskFilePath: '/files/ticket.pdf',
    createdBy: {
      id: 1,
      username: 'Alice',
      email: 'alice@example.com',
    },
    createdAt: '2024-12-01T12:00:00Z',
    modifiedBy: {
      id: 1,
      username: 'Alice',
      email: 'alice@example.com',
    },
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
    taskDDay: '2024-12-11T00:00:00Z', // D-7을 ISO 형식의 날짜 문자열로 변환
    createdBy: {
      id: 3,
      username: 'Charlie',
      email: 'charlie@example.com',
    },
    createdAt: '2024-12-02T12:00:00Z',
    modifiedBy: {
      id: 3,
      username: 'Charlie',
      email: 'charlie@example.com',
    },
    modifiedAt: '2024-12-12T12:00:00Z',
    taskAssignees: [
      { taskId: 101, userId: 1, username: 'Alice', email: 'alice@example.com' },
      { taskId: 101, userId: 2, username: 'Bob', email: 'bob@example.com' },
    ],
  },
  {
    taskId: 103,
    tripName: '제주도 여행',
    taskTitle: '관광 일정 짜기',
    taskStatus: 'BEFORE_TRIP',
    taskScope: 'PRIVATE',
    taskCompletionDate: '2024-12-20',
    taskDDay: '2024-12-15T00:00:00Z', // D-5를 ISO 형식의 날짜 문자열로 변환
    createdBy: {
      id: 12,
      username: 'Alice',
      email: 'alice@example.com',
    },
    createdAt: '2024-12-03T12:00:00Z',
    modifiedBy: {
      id: 12,
      username: 'Alice',
      email: 'alice@example.com',
    },
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
    taskDDay: '2024-12-26T00:00:00Z', // D+1을 ISO 형식의 날짜 문자열로 변환
    taskFilePath: '/files/photos.zip',
    createdBy: {
      id: 2,
      username: 'Bob',
      email: 'bob@example.com',
    },
    createdAt: '2024-12-04T12:00:00Z',
    modifiedBy: {
      id: 2,
      username: 'Bob',
      email: 'bob@example.com',
    },
    modifiedAt: '2024-12-18T12:00:00Z',
    taskAssignees: [
      { taskId: 101, userId: 1, username: 'Alice', email: 'alice@example.com' },
      { taskId: 101, userId: 2, username: 'Bob', email: 'bob@example.com' },
    ],
  },
];
interface ITripCardProps {
  id: number;
  name: string;
}

// task를 어떻게 어디서 불러오느냐에 따라 props 변경하기
// 할일 추가 버튼 onclick 추가하기
export default function TripBox({ id, name }: ITripCardProps) {
  const [taskScope, setTaskScope] = useState<TTaskScope | null>(null);
  const params = {
    tripId: id,
    taskSeq: 0,
    all: true,
    ...(taskScope ? { taskScope } : {}),
  };
  // const { data: tasks } = useGetTasks(params);
  const navigate = useRouter();
  const { showModal } = useModalStore();
  const handleTaskFilterClick = (filter: string) => {
    const scope = FILTER_MAPPING[filter];
    setTaskScope(scope);
  };

  const handleAddTaskClick = () => {
    showModal({
      title: '할 일 생성',
      content: <TodoModal />,
    });
  };
  const handleMoveTrip = () => {
    navigate.push(`/trip/${id}`);
  };
  return (
    <div className="flex w-full flex-col gap-4 rounded-xl bg-white py-6 pl-4 tablet:pl-6 desktop:px-6">
      <div className="flex flex-col justify-between gap-5 pr-4 tablet:pr-6 desktop:pr-0">
        <div className="flex justify-between">
          <Subtitle
            title={name}
            icon="whiteflag"
            iconBg="bg-blue-500"
            link="#"
          />
          <ShowAllTasksButton onClick={handleMoveTrip} />
        </div>
        <div className="flex items-center justify-between">
          <FilterButton onClick={handleTaskFilterClick} />
          <AddTaskButton onClick={handleAddTaskClick} />
        </div>
      </div>
      <TaskCarousel tripId={id} tasks={tasks ? tasks : []} height="304px" />
    </div>
  );
}
