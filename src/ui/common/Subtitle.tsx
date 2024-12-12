import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface ISubTitleProps {
  title: string;
  icon: string;
  iconBg: string;
  link?: string;
  className?: string;
}

/**
 * 아이콘과 함께 사용하는 Subtitle 컴포넌트
 */
export default function Subtitle({
  title,
  icon,
  iconBg,
  link,
  className,
}: ISubTitleProps) {
  const baseClass = 'flex items-center gap-2';
  const mergedClass = twMerge(baseClass, className);

  const content = (
    <div className={mergedClass}>
      {/* 아이콘 */}
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-2xl ${iconBg}`}
      >
        {/* iconsize 고려해보기 */}
        <Image
          src={`/asset/icon/${icon}.png`}
          alt="subtitleIcon"
          className="text-white"
          width={24}
          height={24}
        />
      </div>
      {/* 텍스트 */}
      <span className="text-lg font-semibold leading-7 text-slate-800">
        {title}
      </span>
    </div>
  );

  return link ? <Link href={link}>{content}</Link> : <h2>{content}</h2>;
}
