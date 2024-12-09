import { TTask } from '@model/task.model';
import TodoItem from './TaskItem';

interface ITaskListProps {
  tasks: TTask[];
}

export default function TaskList(props: ITaskListProps) {
  const { tasks } = props;
  return (
    <ul className="scroll flex flex-1 flex-col gap-2 overflow-y-auto">
      {tasks.map((task) => (
        <TodoItem
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
