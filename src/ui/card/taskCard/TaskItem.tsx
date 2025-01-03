/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import { memo } from 'react';
import { TTask } from '@model/task.model';
import CheckBox from '@ui/common/CheckBox';
import ButtonIconGroup from '@ui/common/ButtonIconGroup';

type TTaskItemProps = Omit<TTask, 'travelId'>;

// TODO: 디자인 시안에 맞춰 props 데이터 수정 필요
function TaskItem({
  taskId,
  taskTitle,
  travelStatus,
  scope,
  completionDate,
  taskDDay,
  filePath,
  assignees,
}: TTaskItemProps) {
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
