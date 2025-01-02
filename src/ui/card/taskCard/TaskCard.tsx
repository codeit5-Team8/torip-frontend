import { twMerge } from 'tailwind-merge';

import TaskProgressBar from './TaskProgressBar';
import { TGetTaskResponse } from '@model/task.model';
import TaskList from './TaskList';
import EmptyMessage from '@ui/common/EmptyMessage';
import { EMPTY_TASK_MESSAGE, TRIP_STATUS } from '@constant/task';

type TTripStatusKey = keyof typeof TRIP_STATUS;

interface ITaskCardProps {
  status: TTripStatusKey;
  tripId: number;
  tasks: TGetTaskResponse[] | null;
  classNames?: string;
}

export default function TaskCard({
  status,
  tripId,
  tasks,
  classNames,
}: ITaskCardProps) {
  const totalTasks = tasks?.length || 0;
  const completedTasks =
    tasks?.filter((task) => task.isCompleted === true)?.length || 0;
  const progress =
    totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div
      className={twMerge(
        'flex h-full flex-col gap-4 rounded-3xl p-6',
        status === 'ready' && 'bg-teal-50',
        status === 'ongoing' && 'bg-[#FFFDE8]',
        status === 'done' && 'bg-[#ECF3FF]',
        classNames,
      )}
    >
      <div className="flex flex-col gap-2.5">
        {/* 여행 상태 */}
        <div className="text-lg font-bold leading-7">{TRIP_STATUS[status]}</div>
        <TaskProgressBar progress={progress} />
      </div>
      {/* todo list */}
      {tasks ? (
        <TaskList tripId={tripId} tasks={tasks} />
      ) : (
        <EmptyMessage message={EMPTY_TASK_MESSAGE} />
      )}
    </div>
  );
}
