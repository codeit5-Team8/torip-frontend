export type TGetTaskRequest = {
  travelId: string;
  seq: string;
};

export type TGetTaskResponse = {
  taskId: number;
  travelName: string;
  taskTitle: string;
  taskFilePath: string;
  taskStatus: 'BEFORE_TRAVEL' | 'DURING_TRAVEL' | 'AFTER_TRAVEL';
  taskDDay: string;
  taskScope: 'PUBLIC' | 'PRIVATE';
  taskCompletionDate: string;
  taskCreatedBy: string;
  taskCreatedAt: string;
  taskModifiedBy: string;
  taskUpdatedAt: string;
  assignees: string[];
};

export type TTask = {
  travelId: number;
  taskId: number;
  taskTitle: string;
  travelStatus: 'BEFORE_TRAVEL' | 'DURING_TRAVEL' | 'AFTER_TRAVEL';
  scope: 'PUBLIC' | 'PRIVATE';
  completionDate: string;
  taskDDay?: string;
  filePath?: string;
  assignees?: string[];
};

export type TGetTaskDetailRequest = Pick<TTask, 'taskId'>;

export type TGetTaskDetailResponse = {
  travelName: string;
  taskFilePath: string;
  taskStatus: 'BEFORE_TRAVEL / DURING_TRAVEL / AFTER_TRAVEL';
  taskScope: 'PUBLIC' | 'PRIVATE';
  taskCompletionDate: string;
  taskCreatedBy: string;
  taskCreatedAt: string;
  taskModifiedBy: string;
  taskUpdatedAt: string;
  taskId: number;
  taskTitle: string;
  taskDDay?: string;
  assignees?: string[];
};

export type TPutEditTaskResponse = number;

export type TPostAddTaskResponse = number;

export type TDeleteTaskRequest = Pick<TTask, 'taskId'>;

export type TDeleteTaskResponse = number;

export type TGetTaskProgressResponse = {
  personalTask: number;
  personalCompletionTask: number;
  commonTask: number;
  commonCompletionTask: number;
  totalTask: number;
  totalCompletionTask: number;
};
