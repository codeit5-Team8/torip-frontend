import { TGetTaskResponse } from '@model/task.model';
import TaskItem from './TaskItem';

interface ITaskListProps {
  tripId?: number;
  tasks: TGetTaskResponse[];
}

export default function TaskList({ tripId, tasks }: ITaskListProps) {
  return (
    <ul className="scroll flex flex-1 flex-col gap-2 overflow-y-auto">
      {tasks.map((task) => (
        <TaskItem
          key={task.taskId}
          tripId={tripId ? tripId : 0}
          taskId={task.taskId}
          taskTitle={task.taskTitle}
          taskStatus={task.taskStatus}
          taskScope={task.taskScope}
          taskCompletionDate={task.taskCompletionDate}
          taskDDay={task.taskDDay}
          taskFilePath={task.taskFilePath}
          taskAssignees={task.taskAssignees}
        />
      ))}
    </ul>
  );
}
