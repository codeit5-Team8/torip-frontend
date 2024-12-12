'use client';

import NavTitle from '@ui/common/NavTitle';

export default function Home() {
  return (
    <div>
      <NavTitle />
      <div className="grid w-full grid-cols-1 gap-2 tablet:grid-cols-2 tablet:gap-6">
        <div className="h-[250px] rounded-xl bg-gray-500">모든 할일</div>
        <div className="h-[250px] rounded-xl bg-cyan-300">내 진행상황</div>
      </div>
      {/* 각 여행 별 할일 컨테이너 */}
      <div></div>
    </div>
  );
}
