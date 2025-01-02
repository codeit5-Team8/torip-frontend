import { twMerge } from 'tailwind-merge';

interface ISkeletonProps {
  className?: string; // 스타일 사용자 정의
  isSquare?: boolean; // 정사각 1:1 비율
  isCircle?: boolean; // 원형
}

const Skeleton = ({
  isSquare = false, // 정사각
  isCircle = false, // 원
  className,
}: ISkeletonProps) => {
  return (
    <div
      className={twMerge(
        'h-5 w-full animate-pulse rounded-md bg-gray-200',
        isCircle && 'rounded-full',
        className,
      )}
      style={isSquare ? { aspectRatio: '1 / 1' } : undefined}
    />
  );
};

export default Skeleton;
