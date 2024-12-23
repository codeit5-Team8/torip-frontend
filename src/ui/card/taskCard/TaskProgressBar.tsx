import { Progress } from '@components/ui/progress';

interface ITaskProgressBar {
  progress: number; // 할 일 완료도
}

export default function TaskProgressBar({ progress }: ITaskProgressBar) {
  return (
    <div className="item-center gap-2 rounded-full border border-slate-100 bg-white px-2 py-[.125rem]">
      <Progress
        value={progress}
        color="bg-slate-900"
        backgroundColor="bg-slate-100"
      />
      <span className="text-xs font-semibold leading-none text-slate-900">
        {progress}%
      </span>
    </div>
  );
}
