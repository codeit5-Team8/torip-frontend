'use client';

import TaskCarousel from '@ui/carousel/TaskCarousel';
import FilterButton from '@ui/common/FilterButton';
import AddTaskButton from './tripTask/AddTaskButton';
import { useGetTasks } from '@hooks/task/useGetTasks';
import { TTrip } from '@model/trip.model';
import { useState } from 'react';
import { TTaskScope } from '@model/task.model';
import { FILTER_MAPPING } from '@constant/task';
import { useModalStore } from '@store/modal.store';
import TodoModal from '@ui/Modal/TodoModal';
import { usePostTask } from '@hooks/task/usePostTask';
import { TripTaskSkeleton } from '@ui/skeleton/Skeletons';

type TTripTaskProps = Pick<TTrip, 'id'>;

export default function TripTask({ id }: TTripTaskProps) {
  const [taskScope, setTaskScope] = useState<TTaskScope | null>(null);

  const params = {
    tripId: id,
    taskSeq: 0,
    all: true,
    ...(taskScope ? { taskScope } : {}),
  };
  const { data, isLoading } = useGetTasks(params);

  const { showModal } = useModalStore();
  const postTask = usePostTask();
  const handleAddTaskClick = () => {
    showModal({
      title: '할 일 생성',
      content: <TodoModal onConfirm={(data) => postTask.mutate(data)} />,
    });
  };

  const handleTaskFilterClick = (filter: string) => {
    const scope = FILTER_MAPPING[filter];
    setTaskScope(scope);
  };

  if (isLoading) {
    return <TripTaskSkeleton />;
  }

  return (
    <div className="section-box flex flex-1 flex-col gap-5 px-0 pr-0">
      <div className="flex flex-col gap-5 px-6">
        <h4 className="text-lg font-semibold leading-7 text-slate-800">Todo</h4>
        <div className="flex items-center justify-between">
          <FilterButton onClick={handleTaskFilterClick} />
          <AddTaskButton onClick={handleAddTaskClick} />
        </div>
      </div>
      <TaskCarousel
        tripId={id}
        tasks={data?.success ? data?.result : []}
        height="500px"
      />
    </div>
  );
}
