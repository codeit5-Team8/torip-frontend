'use client';

import Button from '@ui/common/Button';
import Subtitle from '@ui/common/Subtitle';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

//task를 어떻게 어디서 불러오느냐에 따라 props 변경하기
export default function AllTodoBox() {
  const navigate = useRouter();
  const navTodoAll = () => {
    navigate.push('/todo-all');
  };
  return (
    <div className="h-[250px] rounded-xl bg-white px-4 pb-6 pt-4 tablet:px-6">
      <div className="flex items-center justify-between">
        <Subtitle
          title="모든 할 일"
          icon="everytodo"
          iconBg="bg-primary"
          link="/todo-all"
        />
        <Button
          className="flex items-center whitespace-nowrap border-none bg-white text-sm font-medium text-slate-600 hover:bg-slate-100 active:bg-slate-100"
          onClick={navTodoAll}
        >
          <span className="ml-2">전체 보기</span>
          <Image
            src={`/asset/icon/arrowright.png`}
            alt="progress"
            width={24}
            height={24}
          />
        </Button>
      </div>
      {/* task data 필요 */}
      {/* <TaskList tasks={''} /> */}
    </div>
  );
}
