import { THyperLinkType } from '@/types';
import Link from 'next/link';

interface IHyperLinkProps {
  type: THyperLinkType;
  link: string;
  onDelete?: () => void;
}

export default function HyperLink({ type, link, onDelete }: IHyperLinkProps) {
  return (
    <div className="relative flex w-full items-center justify-between rounded-[20px] bg-slate-200 px-1.5 py-1 text-base text-slate-800">
      <Link
        className="flex flex-1 items-center overflow-hidden text-ellipsis whitespace-nowrap"
        href={link}
      >
        {type === 'icon' && (
          <div className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-primary text-white">
            {/* 아이콘 들어올 자리 */}
          </div>
        )}
        <span className="mx-2 overflow-hidden whitespace-nowrap">{link}</span>
      </Link>
      {onDelete && (
        <button
          className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-slate-500 text-white"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        >
          {/* 아이콘 들어올 자리 */}
        </button>
      )}
    </div>
  );
}
