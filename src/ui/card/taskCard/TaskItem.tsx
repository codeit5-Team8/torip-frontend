'use client';

import { memo, useCallback, useRef, useState } from 'react';
import { TGetTaskResponse } from '@model/task.model';
import CheckBox from '@ui/common/CheckBox';
import ButtonIconGroup from '@ui/common/ButtonIconGroup';
import { useDeleteTask } from '@hooks/task/useDeleteTask';
import { usePopupStore } from '@store/popup.store';
import { TASK_POPUP_MESSAGE } from '@constant/task';
import { get } from '@lib/api/axios';
import { useModalStore } from '@store/modal.store';
import TodoModal from '@ui/Modal/TodoModal';
import { usePutTask } from '@hooks/task/usePutTask';
import { usePutCompleteTask } from '@hooks/task/usePutCompleteTask';
import NameTag from '@ui/common/NameTag';

interface ITaskItemProps
  extends Omit<
    TGetTaskResponse,
    'tripName' | 'createdAt' | 'modifiedBy' | 'modifiedAt'
  > {
  tripId: number;
}

function TaskItem({
  tripId,
  taskId,
  taskTitle,
  taskFilePath,
  taskStatus,
  taskDDay,
  taskScope,
  isCompleted,
  taskCompletionDate,
  registrantId,
  taskAssignees,
}: ITaskItemProps) {
  const [isCompletedTask, setIsCompletedTask] = useState(isCompleted || false);

  const deleteTask = useDeleteTask();
  const editTask = usePutTask();
  const putCompleteTask = usePutCompleteTask();

  const { showPopup } = usePopupStore();
  const { showModal } = useModalStore();

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleCompleteTaskChange = useCallback(() => {
    setIsCompletedTask((prev) => {
      const newCompletedState = !prev;

      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        putCompleteTask.mutate({
          taskId: taskId,
          isCompleted: newCompletedState,
        });
      }, 300);

      return newCompletedState;
    });
  }, [taskId, putCompleteTask]);

  const handleFileClick = () => {
    if (!taskFilePath) {
      return;
    }

    // TODO: 제대로된 파일 경로 받아서 다운로드 잘 되는지 확인하기
    showPopup({
      popupText: TASK_POPUP_MESSAGE.downLoadFile,
      showCancelButton: true,
      confirmButtonText: '네',
      onConfirm: async () => {
        try {
          const fileUrl = taskFilePath;

          // Axios 요청
          const response = await get(fileUrl, { responseType: 'blob' });

          // Blob 생성 및 다운로드
          const blob = response.data as Blob; // 명시적으로 Blob으로 캐스팅
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = fileUrl.split('/').pop() || 'download';
          document.body.appendChild(a);
          a.click();

          // 리소스 정리
          window.URL.revokeObjectURL(url);
          document.body.removeChild(a);
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('파일 다운로드 오류:', error);
        }
      },
    });
  };

  const handleEditTaskClick = () => {
    showModal({
      title: '할 일 수정',
      content: (
        <TodoModal
          tripId={tripId}
          taskId={taskId}
          taskTitle={taskTitle}
          taskFilePath={taskFilePath}
          taskStatus={taskStatus}
          taskDDay={taskDDay}
          taskScope={taskScope}
          taskCompletionDate={taskCompletionDate}
          taskAssignees={taskAssignees}
          onConfirm={(data) => editTask.mutate(data)}
        />
      ),
    });
  };

  const handleDeleteTaskClick = () => {
    showPopup({
      popupText: TASK_POPUP_MESSAGE.deleteTask,
      showCancelButton: true,
      confirmButtonText: '확인',
      onConfirm: () => {
        deleteTask.mutate(taskId);
      },
    });
  };

  return (
    <li className="flex w-full flex-col gap-1 transition-colors duration-200 ease-in-out hover:text-primary">
      <div className="flex items-center justify-between">
        <CheckBox checked={isCompletedTask} onChange={handleCompleteTaskChange}>
          {taskTitle}
        </CheckBox>
        <ButtonIconGroup
          taskAssignees={taskAssignees}
          taskId={taskId}
          hasFilePath={!!taskFilePath}
          registrantId={registrantId}
          onFileClick={handleFileClick}
          onEditTaskClick={handleEditTaskClick}
          onDeleteTaskClick={handleDeleteTaskClick}
        />
      </div>
      <div className="ml-6 flex gap-1">
        {taskAssignees.map((assignees) => (
          <NameTag key={assignees.userId}>{assignees.username}</NameTag>
        ))}
      </div>
    </li>
  );
}

export default memo(TaskItem);
