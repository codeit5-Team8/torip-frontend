import { TTask } from '@model/task.model';
import TaskItem from './TaskItem';

interface ITaskListProps {
  tasks: TTask[];
}

export default function TaskList({ tasks }: ITaskListProps) {
  return (
    <ul className="scroll flex flex-1 flex-col gap-2 overflow-y-auto">
      {tasks.map((task) => (
        <TaskItem
          key={task.taskId}
          taskId={task.taskId}
          taskTitle={task.taskTitle}
          travelStatus={task.travelStatus}
          scope={task.scope}
          completionDate={task.completionDate}
          taskDDay={task.taskDDay}
          filePath={task.filePath}
          assignees={task.assignees}
        />
      ))}
    </ul>
  );
}
