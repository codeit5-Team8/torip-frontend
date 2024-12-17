import { twMerge } from 'tailwind-merge';
import TodoProgressBar from './TaskProgressBar';
import { TTask } from '@model/task.model';
import { EMPTY_TASK_MESSAGE, TRIP_STATUS } from '@constant/Task';
import TaskList from './TaskList';
import EmptyMessage from '@ui/common/EmptyMessage';

type TTripStatusKey = keyof typeof TRIP_STATUS;

interface ITaskCardProps {
  status: TTripStatusKey;
  tasks: TTask[] | null;
  classNames?: string;
}

export default function TaskCard({
  status,
  tasks,
  classNames,
}: ITaskCardProps) {
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
        {/* todo 프로그래스 바 */}
        <TodoProgressBar progress={80} />
      </div>
      {/* todo list */}
      {tasks ? (
        <TaskList tasks={tasks} />
      ) : (
        <EmptyMessage message={EMPTY_TASK_MESSAGE} />
      )}
    </div>
  );
}
