import { twMerge } from 'tailwind-merge';
import KebabButton from '@ui/common/KebabButton';

interface IButtonIconGroupProps {
  onFileClick: () => void;
  onDocClick: () => void;
  onKebabClick: () => void;
  className?: string;
}

/**
 * 할일 옆에 나오는 아이콘 그룹 컴포넌트입니다.
 *
 * 이 컴포넌트는 세 가지 버튼을 제공합니다:
 * - 파일 버튼: 파일 관련 작업을 수행합니다.
 * - 문서 버튼: 문서 관련 작업을 수행합니다.
 * - 케밥 버튼: 추가 옵션을 표시합니다.
 *
 * @component
 *
 * @param {function} onFileClick - 파일 버튼 클릭 시 호출되는 핸들러
 * @param {function} onDocClick - 문서 버튼 클릭 시 호출되는 핸들러
 * @param {function} onKebabClick - 케밥 버튼 클릭 시 호출되는 핸들러(드롭다운 연결하기)
 *
 */
export default function ButtonIconGroup({
  onFileClick,
  onDocClick,
  onKebabClick,
  className,
}: IButtonIconGroupProps) {
  const buttonStyle =
    'relative flex h-6 w-6 items-center justify-center rounded-full bg-slate-50';

  return (
    <div className={twMerge('flex gap-2', className)}>
      <button
        className={twMerge(buttonStyle, 'text-slate-500')}
        onClick={onFileClick}
      >
        {/* 파일 아이콘 부분 */}
      </button>
      <button
        className={twMerge(buttonStyle, 'text-primary')}
        onClick={onDocClick}
      >
        {/* 문서 아이콘 부분 */}
      </button>
      <KebabButton onClick={onKebabClick} />
    </div>
  );
}
