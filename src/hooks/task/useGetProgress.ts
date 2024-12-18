import { useQuery } from '@tanstack/react-query';
import { progressQueryKeys } from '@constant/queryKeyFactory';

export const useGetProgress = () => {
  return useQuery({
    ...progressQueryKeys.progress(),
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
