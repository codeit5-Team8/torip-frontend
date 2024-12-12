'use client';

import { TNote } from '@model/note.model';
import NoteTaskInfo from './NoteTaskInfo';
import Divider from '@ui/note/Divider';
import DropdownMenu from '@ui/common/DropdownMenu';

interface INoteItemProps {
  note: TNote;
}

export default function NoteItem({ note }: INoteItemProps) {
  return (
    <div className="flex-col rounded-xl bg-white p-6">
      <div className="mb-4 flex items-center gap-1">
        <>아이콘</>
        <span className="text-sm font-medium leading-tight text-slate-800">
          {note.createdBy}
        </span>
        <span className="ml-auto">
          <DropdownMenu
            items={[
              /* eslint-disable no-console */
              { label: '수정하기', onClick: () => console.log('Edit clicked') },
              {
                label: '삭제하기',
                onClick: () => console.log('Delete clicked'),
              },
              /* eslint-disable no-console */
            ]}
          />
        </span>
      </div>

      <p>{note.noteTitle}</p>

      <Divider className="my-3" />

      <NoteTaskInfo title="투두 제목" />
    </div>
  );
}
