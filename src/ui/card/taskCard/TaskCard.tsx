import { twMerge } from 'tailwind-merge';
import TodoList from './TaskList';
import TodoProgressBar from './TaskProgressBar';
import { TTask } from '@model/task.model';
import { TRIP_STATUS } from '@constant/Task';

type TTripStatusKey = keyof typeof TRIP_STATUS;

interface ITaskCardProps {
  status: TTripStatusKey;
  tasks: TTask[];
}

export default function TaskCard(props: ITaskCardProps) {
  const { status, tasks } = props;
  return (
    <div
      className={twMerge(
        'flex h-80 w-96 flex-col gap-4 rounded-3xl p-6',
        status === 'ready' && 'bg-teal-50',
        status === 'ongoing' && 'bg-[#FFFDE8]',
        status === 'done' && 'bg-[#ECF3FF]',
      )}
    >
      <div className="flex flex-col gap-2.5">
        {/* 여행 상태 */}
        <div className="text-lg font-bold leading-7">{TRIP_STATUS[status]}</div>
        {/* todo 프로그래스 바 */}
        {/* TODO: 임시 지정 */}
        <TodoProgressBar progress={80} />
      </div>
      {/* todo list */}
      <TodoList tasks={tasks} />
    </div>
  );
}
