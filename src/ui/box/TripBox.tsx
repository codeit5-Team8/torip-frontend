import Subtitle from '@ui/common/Subtitle';
import FilterButton, { TFilterType } from '@ui/common/FilterButton';
import TaskCarousel from '@ui/carousel/TaskCarousel';
import ShowAllTasksButton from '@ui/trip/tripTask/ShowAllTasksButton';
import AddTaskButton from '@ui/trip/tripTask/AddTaskButton';
import { useRouter } from 'next/navigation';
import { useModalStore } from '@store/modal.store';
import { FILTER_MAPPING } from '@constant/task';
import { useState } from 'react';
import { useGetTasks } from '@hooks/task/useGetTasks';
import TodoModal from '@ui/Modal/TodoModal';
import { usePostTask } from '@hooks/task/usePostTask';

interface ITripCardProps {
  id: number;
  name: string;
}

export default function TripBox({ id, name }: ITripCardProps) {
  const [activeFilter, setActiveFilter] = useState<TFilterType>('All');
  const [params, setParams] = useState({
    tripId: id,
    taskSeq: 0,
    all: true,
  });

  const postTask = usePostTask();
  const { data: tasks } = useGetTasks(params);
  const navigate = useRouter();
  const { showModal } = useModalStore();

  const handleTaskFilterClick = (filter: TFilterType) => {
    setActiveFilter(filter);
    const scope = FILTER_MAPPING[filter];
    setParams((prev) => ({
      ...prev,
      taskScope: scope || null,
    }));
  };

  const handleAddTaskClick = () => {
    showModal({
      title: '할 일 생성',
      content: <TodoModal onConfirm={(data) => postTask.mutate(data)} />,
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
            icon="trip-dark"
            iconBg="bg-slate-800"
            link="#"
          />
          <ShowAllTasksButton onClick={handleMoveTrip} />
        </div>
        <div className="flex items-center justify-between">
          <FilterButton
            activeFilter={activeFilter}
            onClick={(filter) => handleTaskFilterClick(filter)}
          />
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
