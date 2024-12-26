'use client';

import NoteTaskInfo from './NoteTaskInfo';

interface INoteTaskInfoWrapper {
  taskId: string;
}

export default function NoteTaskInfoWrapper({ taskId }: INoteTaskInfoWrapper) {
  // TODO taskId로 GET TASK
  // eslint-disable-next-line no-console
  console.log(taskId);

  return <NoteTaskInfo taskTitle="할 일 제목" />;
}
