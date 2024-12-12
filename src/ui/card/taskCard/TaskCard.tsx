import { twMerge } from 'tailwind-merge';
import TodoProgressBar from './TaskProgressBar';
import { TTask } from '@model/task.model';
import { TRIP_STATUS } from '@constant/Task';
import TaskList from './TaskList';

type TTripStatusKey = keyof typeof TRIP_STATUS;

interface ITaskCardProps {
  status: TTripStatusKey;
  tasks: TTask[];
  width?: string;
  height?: string;
}

export default function TaskCard({
  status,
  tasks,
  width = 'w-96', // 기본값 설정
  height = 'h-80', // 기본값 설정
}: ITaskCardProps) {
  return (
    <div
      className={twMerge(
        'flex flex-col gap-4 rounded-3xl p-6',
        width,
        height,
        status === 'ready' && 'bg-teal-50',
        status === 'ongoing' && 'bg-[#FFFDE8]',
        status === 'done' && 'bg-[#ECF3FF]',
      )}
    >
      <div className="flex flex-col gap-2.5">
        {/* 여행 상태 */}
        <div className="text-lg font-bold leading-7">{TRIP_STATUS[status]}</div>
        {/* todo 프로그래스 바 */}
        <TodoProgressBar progress={80} />
      </div>
      {/* todo list */}
      <TaskList tasks={tasks} />
    </div>
  );
}
