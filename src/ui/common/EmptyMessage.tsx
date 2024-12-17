import { twMerge } from 'tailwind-merge';

interface IEmptyMessageProps {
  message: string; // 안내 메세지 정의
  className?: string; // 스타일 사용자 정의
}

export default function EmptyMessage({
  message,
  className,
}: IEmptyMessageProps) {
  return (
    <div className={twMerge('item-center h-full w-full', className)}>
      <p className="text-sm font-normal leading-tight text-slate-500">
        {message}
      </p>
    </div>
  );
}
