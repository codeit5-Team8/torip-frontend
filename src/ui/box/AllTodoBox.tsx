'use client';

import { EMPTY_TASK_MESSAGE } from '@constant/task';
import TaskList from '@ui/card/taskCard/TaskList';
import Button from '@ui/common/Button';
import EmptyMessage from '@ui/common/EmptyMessage';
import Subtitle from '@ui/common/Subtitle';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useGetTasks } from '@hooks/task/useGetTasks';
import { AllTodoBoxSkeleton } from '@ui/skeleton/Skeletons';

export default function AllTodoBox() {
  const params = {
    taskSeq: 0,
    all: true,
  };
  const { data: tasks, isLoading: isTasksLoading } = useGetTasks(params);
  const navigate = useRouter();

  const navTodoAll = () => {
    navigate.push('/todo-all');
  };

  // 최대 5개의 할 일만 표시
  const displayedTasks = tasks?.result?.slice(0, 5) || [];

  if (isTasksLoading) {
    return <AllTodoBoxSkeleton />;
  }

  return (
    <div className="flex h-[250px] flex-col gap-4 rounded-xl bg-white px-6 pb-6 pt-4 tablet:px-6">
      <div className="flex items-center justify-between">
        <Subtitle
          title="모든 할 일"
          icon="everytodo"
          iconBg="bg-primary"
          link="/todo-all"
        />
        <Button
          className="flex items-center whitespace-nowrap border-none bg-white text-sm font-medium text-slate-600 hover:bg-slate-100 active:bg-slate-100"
          onClick={navTodoAll}
        >
          <span className="ml-2">전체 보기</span>
          <Image
            src={`/asset/icon/arrowright.png`}
            alt="progress"
            width={24}
            height={24}
          />
        </Button>
      </div>
      {/* 데이터 렌더링 */}
      <div className="flex flex-1 overflow-auto">
        {displayedTasks.length > 0 ? (
          <TaskList tasks={displayedTasks} />
        ) : (
          <EmptyMessage message={EMPTY_TASK_MESSAGE} />
        )}
      </div>
    </div>
  );
}
