import { TGetTaskResponse } from '@model/task.model';
import TaskItem from './TaskItem';
import { ScrollShadow } from '@nextui-org/react';

interface ITaskListProps {
  tripId?: number;
  tasks: TGetTaskResponse[];
}

export default function TaskList({ tripId, tasks }: ITaskListProps) {
  return (
    <ScrollShadow>
      <ul className="scroll flex flex-1 flex-col gap-2 overflow-y-auto">
        {tasks.map((task) => (
          <TaskItem
            key={task.taskId}
            tripId={tripId ? tripId : 0}
            taskId={task.taskId}
            taskTitle={task.taskTitle}
            createdBy={task.createdBy}
            taskStatus={task.taskStatus}
            taskScope={task.taskScope}
            taskCompletionDate={task.taskCompletionDate}
            taskDDay={task.taskDDay}
            taskFilePath={task.taskFilePath}
            taskAssignees={task.taskAssignees}
          />
        ))}
      </ul>
    </ScrollShadow>
  );
}
