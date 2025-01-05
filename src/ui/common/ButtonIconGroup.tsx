import { twMerge } from 'tailwind-merge';
import DropdownMenu from './DropdownMenu';
import Link from 'next/link';
import Image from 'next/image';
import { useLogin } from '@hooks/auth/useLogin';
import { TTaskAssignee } from '@model/task.model';

/**
 * 할일 옆에 나오는 아이콘 그룹 컴포넌트입니다.
 *
 * 이 컴포넌트는 세 가지 버튼을 제공합니다:
 * - 파일 버튼: 파일 관련 작업을 수행합니다.
 * - 문서 버튼: 문서 관련 작업을 수행합니다.
 * - 케밥 버튼: 추가 옵션을 표시합니다.
 *
 * taskId - 할일 id
 * hasFilePath - 파일 존재 여부
 * onFileClick - 파일 버튼 클릭 시 호출되는 핸들러
 * onEditTaskClick - 할일 수정 이벤트 핸들러
 * onDeleteTaskClick - 할일 삭제 이벤트 핸들러
 * className - 사용자 정의 스타일링
 */
interface IButtonIconGroupProps {
  taskId: number;
  hasFilePath: boolean;
  onFileClick: () => void;
  onEditTaskClick: () => void;
  onDeleteTaskClick: () => void;
  registrantId: number;
  ownerId: number;
  className?: string;
  taskAssignees: TTaskAssignee[];
}

export default function ButtonIconGroup({
  taskId,
  hasFilePath,
  onFileClick,
  ownerId,
  taskAssignees,
  registrantId,
  onEditTaskClick,
  onDeleteTaskClick,
  className,
}: IButtonIconGroupProps) {
  const { data: user } = useLogin();

  const buttonStyle =
    'relative flex h-6 w-6 items-center justify-center rounded-full bg-slate-50';

  //오너 response로 받아서추가처리
  const showDropdownMenu =
    ownerId === user?.user.id ||
    registrantId === user?.user.id ||
    taskAssignees.some((assignee) => assignee.userId === user?.user.id);

  return (
    <div className={twMerge('flex gap-2', className)}>
      {hasFilePath && (
        <button
          className={twMerge(buttonStyle, 'text-slate-500')}
          onClick={onFileClick}
        >
          <Image
            src="/asset/icon/file.png"
            width="9"
            height="10"
            alt="파일 아이콘"
          />
        </button>
      )}
      <Link href={`/note-all-task/${taskId}`}>
        <button className={twMerge(buttonStyle, 'text-primary')}>
          <Image
            src="/asset/icon/document.png"
            width="9"
            height="10"
            alt="노트 아이콘"
          />
        </button>
      </Link>
      {/* 케밥 메뉴 */}
      {showDropdownMenu && (
        <DropdownMenu
          items={[
            { label: '수정하기', onClick: onEditTaskClick },
            { label: '삭제하기', onClick: onDeleteTaskClick },
          ]}
        >
          <Image
            src="/asset/icon/kebab.png"
            width={24}
            height={24}
            alt="케밥 메뉴 아이콘"
          />
        </DropdownMenu>
      )}
    </div>
  );
}
