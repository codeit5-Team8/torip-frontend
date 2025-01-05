export type TTaskStatus = 'BEFORE_TRIP' | 'DURING_TRIP' | 'AFTER_TRIP';
export type TTaskScope = 'PUBLIC' | 'PRIVATE';

export type TGetTaskRequest = {
  tripId?: number;
  taskSeq: number;
  taskStatus?: TTaskStatus;
  taskScope?: TTaskScope;
  all: boolean;
};

export type TTaskAssignee = {
  taskId: number;
  userId: number;
  username: string;
  email: string;
};

export type TGetTaskResponse = {
  taskId: number;
  tripName: string;
  taskTitle: string;
  ownerId: number;
  taskFilePath?: string;
  taskStatus: TTaskStatus;
  taskDDay: string;
  taskScope: TTaskScope;
  isCompleted: boolean;
  taskCompletionDate?: string;
  registrantId: number;
  createdBy: string;
  createdAt: string;
  modifiedBy: string;
  modifiedAt: string;
  taskAssignees: TTaskAssignee[];
};

export type TUploadTodo = {
  tripId: number;
  taskId?: number;
  taskTitle: string;
  taskFilePath?: string;
  taskStatus: TTaskStatus;
  taskDDay?: string;
  taskScope: TTaskScope;
  taskCompletionDate?: string;
  taskAssignees?: TTaskAssignee[] | string[];
};

export type TTask = {
  tripId: number;
  taskId?: number;
  taskTitle: string;
  taskFilePath?: string;
  taskStatus: TTaskStatus;
  taskDDay?: string;
  taskScope: TTaskScope;
  taskCompletionDate?: string;
  taskAssignees?: string[];
};

export type TGetTaskDetailResponse = {
  travelName: string;
  taskFilePath: string;
  taskStatus: TTaskStatus;
  taskScope: TTaskScope;
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

export type TDeleteTaskRequest = number;

export type TGetTaskDetailRequest = number;

export type TDeleteTaskResponse = { tripId: number };

export type TGetTaskProgressResponse = {
  personalTask: number;
  personalCompletionTask: number;
  commonTask: number;
  commonCompletionTask: number;
  totalTask: number;
  totalCompletionTask: number;
};

export type TPutCompleteTaskRequest = { taskId: number; isCompleted: boolean };

export type TPutCompleteTaskResponse = { tripId: number; taskId: number };
