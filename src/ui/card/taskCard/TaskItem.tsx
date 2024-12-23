/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import { memo } from 'react';
import { TGetTaskResponse } from '@model/task.model';
import CheckBox from '@ui/common/CheckBox';
import ButtonIconGroup from '@ui/common/ButtonIconGroup';

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
  const handleFileClick = () => {
    // TODO: 파일 다운로드 모달
  };
  const handleDocClick = () => {
    // TODO: 노트 모아보기로 이동
  };

  return (
    <li className="flex items-center justify-between gap-2">
      {/* TODO: 할 일 체크 */}
      <CheckBox>{taskTitle}</CheckBox>
      <ButtonIconGroup
        onFileClick={handleFileClick}
        onDocClick={handleDocClick}
      />
    </li>
  );
}

export default memo(TaskItem);
