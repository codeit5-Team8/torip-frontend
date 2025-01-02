'use client';
import { EMPTY_TASK_MESSAGE, FILTER_MAPPING } from '@constant/Task';
import { useGetTasks } from '@hooks/task/useGetTasks';
import { usePostTask } from '@hooks/task/usePostTask';
import { TTaskScope } from '@model/task.model';
import { useModalStore } from '@store/modal.store';
import TaskList from '@ui/card/taskCard/TaskList';
import EmptyMessage from '@ui/common/EmptyMessage';
import FilterButton from '@ui/common/FilterButton';
import NavTitle from '@ui/common/NavTitle';
import TodoModal from '@ui/Modal/TodoModal';
import { AllTodoPageSkeleton } from '@ui/skeleton/Skeletons';
import AddTaskButton from '@ui/trip/tripTask/AddTaskButton';
import { useState } from 'react';

export default function TodoAllPage() {
  const [taskScope, setTaskScope] = useState<TTaskScope | null>(null);
  const params = {
    taskSeq: 0,
    all: true,
    ...(taskScope ? { taskScope } : {}),
  };
  const { showModal } = useModalStore();
  const postTask = usePostTask();
  const handleAddTaskClick = () => {
    showModal({
      title: '할 일 생성',
      content: <TodoModal onConfirm={(data) => postTask.mutate(data)} />,
    });
  };
  const { data: tasks, isLoading: isTasksLoading } = useGetTasks(params);
  const handleTaskFilterClick = (filter: string) => {
    const scope = FILTER_MAPPING[filter];
    setTaskScope(scope);
  };

  if (isTasksLoading) {
    return <AllTodoPageSkeleton />;
  }

  return (
    <div className="flex min-h-full w-full flex-1 flex-col gap-4">
      <nav className="flex w-full items-center justify-between">
        <NavTitle pageTitleProp={`모든 할일 (${tasks?.result.length})`} />
        <AddTaskButton
          onClick={handleAddTaskClick}
          className="bg-slate-100 text-sm font-semibold leading-tight text-primary"
          color="primary"
        />
      </nav>
      <div className="flex flex-1 flex-col">
        <div className="flex flex-1 flex-col gap-7 rounded-xl border border-slate-100 bg-white p-6">
          <FilterButton onClick={handleTaskFilterClick} />
          {tasks?.result && tasks?.result.length > 0 ? (
            <TaskList tasks={tasks?.result ? tasks.result : []} />
          ) : (
            <EmptyMessage
              message={EMPTY_TASK_MESSAGE}
              className="flex flex-1 items-center justify-center"
            />
          )}
        </div>
      </div>
    </div>
  );
}
