import Subtitle from '@ui/common/Subtitle';
import FilterButton from '@ui/common/FilterButton';
import TaskCarousel from '@ui/carousel/TaskCarousel';
import ShowAllTasksButton from '@ui/trip/tripTask/ShowAllTasksButton';
import AddTaskButton from '@ui/trip/tripTask/AddTaskButton';
import { TTaskScope } from '@model/task.model';
import { useRouter } from 'next/navigation';
import { useModalStore } from '@store/modal.store';
import { FILTER_MAPPING } from '@constant/Task';
import { useState } from 'react';
import { useGetTasks } from '@hooks/task/useGetTasks';
import TodoModal from '@ui/Modal/TodoModal';

/* eslint-disable @typescript-eslint/no-unused-vars */

interface ITripCardProps {
  id: number;
  name: string;
}

export default function TripBox({ id, name }: ITripCardProps) {
  const [taskScope, setTaskScope] = useState<TTaskScope | null>(null);
  const params = {
    tripId: id,
    taskSeq: 0,
    all: true,
    ...(taskScope ? { taskScope } : {}),
  };
  const { data: tasks } = useGetTasks(params);
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
    <div className="flex w-full flex-col gap-4 rounded-xl bg-white py-6 desktop:px-6">
      <div className="flex flex-col justify-between gap-5 px-4 tablet:px-6 desktop:px-0">
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
      <div className="px-4 tablet:px-0">
        <TaskCarousel
          tripId={id}
          tasks={tasks?.result ? tasks.result : []}
          height="304px"
        />
      </div>
    </div>
  );
}
