import { getTask } from '@lib/api/service/task.api';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const taskCount = await getTasksCount();

  return {
    title: `모든 할일 (${taskCount}) | Torip`,
    description: `여러분의 할 일을 한 곳에서 관리하고, 모든 할 일 (${taskCount})을 확인하세요.`,
  };
}

async function getTasksCount() {
  const data = await getTask({
    taskSeq: 0,
    all: true,
  });

  return data?.result.length || 0;
}

export default function TodoAllLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-full max-w-[988px] flex-1 flex-col">
      {children}
    </div>
  );
}
