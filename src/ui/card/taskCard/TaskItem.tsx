/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import { memo } from 'react';
import { TGetTaskResponse } from '@model/task.model';
import CheckBox from '@ui/common/CheckBox';
import ButtonIconGroup from '@ui/common/ButtonIconGroup';
import { useDeleteTask } from '@hooks/task/useDeleteTask';
import { usePopupStore } from '@store/popup.store';
import { TASK_POPUP_MESSAGE } from '@constant/task';

interface ITaskItemProps
  extends Omit<
    TGetTaskResponse,
    'tripName' | 'createdBy' | 'createdAt' | 'modifiedBy' | 'modifiedAt'
  > {
  tripId: number;
}

function TaskItem({
  tripId,
  taskId,
  taskTitle,
  taskStatus,
  taskScope,
  taskCompletionDate,
  taskDDay,
  taskFilePath,
  taskAssignees,
}: ITaskItemProps) {
  const deleteTask = useDeleteTask();

  const { showPopup } = usePopupStore();

  const handleFileClick = () => {
    // TODO: 파일 다운로드 모달
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
        hasFilePath={!taskFilePath ? false : true}
        onFileClick={handleFileClick}
        onEditTaskClick={handleEditTaskClick}
        onDeleteTaskClick={handleDeleteTaskClick}
      />
    </li>
  );
}

export default memo(TaskItem);
