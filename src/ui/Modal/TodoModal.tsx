/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */

import { TUploadTodo, TTaskScope, TTaskStatus } from '@model/task.model';
import TodoTitle from './TodoTitle';
import { useEffect, useState } from 'react';
import DDayPicker from './DDayPicker';
import TripPicker from './TripPicker';
import TripStep from './TripStep';
import TodoScope from './TodoScope';
import MultiSelectInput from './MultiselectInput';
import FileUploader from './FileUploader';
import Button from '@ui/common/Button';
import { useUploadFile } from '@hooks/file/useUploadFile';

interface ITodoModal {
  tripId?: number;
  taskId?: number;
  taskTitle?: string;
  taskFilePath?: string;
  taskStatus?: TTaskStatus;
  taskDDay?: string;
  taskScope?: TTaskScope;
  taskCompletionDate?: string;
  taskAssignees?: string[];
  onConfirm: (data: TUploadTodo) => void;
}

export default function TodoModal({
  tripId: propsTripId,
  taskId,
  taskTitle: propsTodoName,
  taskFilePath: propsTaskFilePath,
  taskStatus: propsTasksStatus,
  taskDDay: propsDDay,
  taskScope: propsTaskScope,
  taskCompletionDate,
  taskAssignees: propsTaskAssignees,
  onConfirm,
}: ITodoModal) {
  const [tripId, setTripId] = useState(propsTripId ?? 0);
  const [todoTitle, setTodoTitle] = useState(propsTodoName ?? '');
  const [taskFilePath, setTaskFilePath] = useState<string | undefined>(
    propsTaskFilePath ?? '',
  );
  const [taskStatus, setTaskStatus] = useState(
    propsTasksStatus ?? 'BEFORE_TRIP',
  );
  const [DDay, setDDay] = useState<Date | null>(new Date());
  const [taskScope, setTaskScope] = useState(propsTaskScope ?? 'PUBLIC');
  const [taskAssignees, setTaskAssignees] = useState<string[]>([]);

  const handleFile = async (value: File | null) => {
    if (value) {
      try {
        const filePath = await useUploadFile(value, value.name).then(
          (data) => data.filePath,
        );
        setTaskFilePath(filePath);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  // 문자열을 Date 객체로 변환하는 함수
  const parseDate = (dateString?: string): Date | null => {
    return dateString ? new Date(dateString) : null;
  };

  useEffect(() => {
    if (propsDDay) {
      setDDay(parseDate(propsDDay));
    }
  }, [propsDDay]);

  const handleConfirm = () => {
    onConfirm({
      tripId,
      taskId,
      taskTitle: todoTitle,
      taskFilePath,
      taskStatus,
      taskDDay: `${DDay!.toISOString()}`,
      taskScope,
      taskCompletionDate,
      taskAssignees,
    });
    window.location.reload(); // 브라우저 새로고침
  };

  return (
    <main className="mt-4">
      <TodoTitle todoTitle={todoTitle} setTodoTitle={setTodoTitle} />
      <FileUploader
        defaultFile={taskFilePath}
        onFileChange={(value) => handleFile(value)}
      />
      <TripPicker tripId={tripId} setTripId={setTripId} />
      <TripStep taskStatus={taskStatus} setTaskStatus={setTaskStatus} />
      <DDayPicker DDay={DDay} setDDay={setDDay} />
      <TodoScope taskScope={taskScope} setTaskScope={setTaskScope} />
      <MultiSelectInput
        id={tripId}
        onChange={(newValue) => setTaskAssignees(newValue)}
      />
      <Button
        size="large"
        variant={
          tripId &&
          todoTitle &&
          taskStatus &&
          DDay &&
          taskScope &&
          taskAssignees
            ? 'solid'
            : 'outlined'
        }
        rounded={true}
        fullWidth={true}
        className="mt-10"
        disabled={
          tripId &&
          todoTitle &&
          taskStatus &&
          DDay &&
          taskScope &&
          taskAssignees
            ? false
            : true
        }
        onClick={handleConfirm}
      >
        확인
      </Button>
    </main>
  );
}
