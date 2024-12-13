import Button from '@ui/common/Button';
import Subtitle from '@ui/common/Subtitle';
import Image from 'next/image';

//task를 어떻게 어디서 불러오느냐에 따라 props 변경하기
export default function EveryTodoBox() {
  return (
    <div className="h-[250px] rounded-xl bg-white px-6 pb-6 pt-4">
      <div className="flex items-center justify-between">
        <Subtitle
          title="모든 할 일"
          icon="everytodo"
          iconBg="bg-primary"
          link="/signup"
        />
        <Button className="whitespace-nowrap border-none bg-white text-sm font-medium text-slate-600 hover:bg-slate-100 active:border-none active:bg-slate-100">
          <p>전체 보기</p>
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
