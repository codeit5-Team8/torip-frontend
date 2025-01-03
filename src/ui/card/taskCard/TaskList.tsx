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
          taskFilePath={task.taskFilePath}
          taskStatus={task.taskStatus}
          taskDDay={task.taskDDay}
          taskScope={task.taskScope}
          isCompleted={task.isCompleted}
          taskCompletionDate={task.taskCompletionDate}
          createdBy={task.createdBy}
          taskAssignees={task.taskAssignees}
        />
      ))}
    </ul>
  );
}
