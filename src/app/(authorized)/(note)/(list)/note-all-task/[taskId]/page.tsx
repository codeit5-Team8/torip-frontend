'use client';

import { useGetNoteAllTask } from '@hooks/note/useGetNoteAllTask';
import NoteAllTripInfo from '@ui/note/NoteAllTripInfo';
import NoteListEmpty from '@ui/note/NoteListEmpty';
import { NoteAllTaskPageSkeleton } from '@ui/skeleton/Skeletons';

export default function NoteDetailPage({
  params: { taskId },
}: {
  params: { taskId: string };
}) {
  const params = {
    id: Number(taskId),
    noteSeq: 0,
  };

  const { data, isLoading } = useGetNoteAllTask(params);

  if (isLoading) {
    return <NoteAllTaskPageSkeleton />;
  }

  const tripTitle = data?.result?.tripTitle || '';
  const notes = data?.result?.details || [];
  // tasktitle을 detail 배열 안에만 내려줘서 이렇게 작성할 수 밖에 없습니다.. 수정필요
  const taskTitle = data?.result?.taskTitle || '';

  return (
    <div className="flex flex-col gap-4">
      <NoteAllTripInfo
        taskTitle={taskTitle}
        tripTitle={tripTitle}
        taskId={Number(taskId)}
      />
      {notes.length > 0 ? <div>qweqwe</div> : <NoteListEmpty />}
    </div>
  );
}
