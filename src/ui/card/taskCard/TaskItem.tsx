/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import { memo } from 'react';
import { TGetTaskResponse } from '@model/task.model';
import CheckBox from '@ui/common/CheckBox';
import ButtonIconGroup from '@ui/common/ButtonIconGroup';
import { useDeleteTask } from '@hooks/task/useDeleteTask';
import { usePopupStore } from '@store/popup.store';
import { TASK_POPUP_MESSAGE } from '@constant/task';
import { get } from '@lib/api/axios';

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
  taskStatus,
  createdBy,
  taskScope,
  taskCompletionDate,
  taskDDay,
  taskFilePath,
  taskAssignees,
}: ITaskItemProps) {
  const deleteTask = useDeleteTask();

  const { showPopup } = usePopupStore();

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
    // TODO: 할 일 수정하기
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
    <li className="flex items-center justify-between gap-2">
      {/* TODO: 할 일 체크 */}
      <CheckBox>{taskTitle}</CheckBox>
      <ButtonIconGroup
        taskId={taskId}
        hasFilePath={!!taskFilePath}
        createdBy={createdBy}
        onFileClick={handleFileClick}
        onEditTaskClick={handleEditTaskClick}
        onDeleteTaskClick={handleDeleteTaskClick}
      />
    </li>
  );
}

export default memo(TaskItem);
