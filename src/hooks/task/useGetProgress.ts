import { tasksQueryKeys } from '@constant/queryKeyFactory';
import { useQuery } from '@tanstack/react-query';

export const useGetProgress = () => {
  return useQuery({
    ...tasksQueryKeys.progress(),
    select: (data) => {
      const result = data?.result;

      const totalTask = result.totalTask || 0;
      const totalCompletionTask = result.totalCompletionTask || 0;

      const progress =
        totalTask > 0 ? Math.round((totalCompletionTask / totalTask) * 100) : 0;

      return {
        progress, // 퍼센트 값 (0 ~ 100)
        totalTask,
        totalCompletionTask,
      };
    },
  });
};
