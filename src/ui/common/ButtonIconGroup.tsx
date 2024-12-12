import { twMerge } from 'tailwind-merge';
import DropdownMenu from './DropdownMenu';

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
 *
 */
interface IButtonIconGroupProps {
  onFileClick: () => void;
  onDocClick: () => void;
  className?: string;
}
export default function ButtonIconGroup({
  onFileClick,
  onDocClick,
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
      {/* 케밥 메뉴 */}
      <DropdownMenu
        items={[
          // TODO: 기능 추가 필요
          /* eslint-disable no-console */
          { label: '수정하기', onClick: () => console.log('Edit clicked') },
          { label: '삭제하기', onClick: () => console.log('Delete clicked') },
          /* eslint-disable no-console */
        ]}
        {/* 케밥 아이콘 부분 */} :
      </DropdownMenu>
    </div>
  );
}
