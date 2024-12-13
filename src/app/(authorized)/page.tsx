'use client';

import EveryTodoBox from '@ui/box/EveryTodoBox';
import MyProgressBox from '@ui/box/MyProgrssBox';
import TripBox from '@ui/box/TripBox';
import NavTitle from '@ui/common/NavTitle';

export default function Home() {
  return (
    <div>
      <NavTitle />
      <section className="grid w-full grid-cols-1 gap-2 pt-4 tablet:grid-cols-2 tablet:gap-6">
        {/* task 전체 불러오기(?) 필요 */}
        <EveryTodoBox />
        {/* progress 퍼센테이지 불러오는 것 필요 */}
        <MyProgressBox />
      </section>
      {/* 각 여행 별 할일 컨테이너 */}
      {/* 유저가 포함되어있는 여행들 불러오는 것 필요 */}
      {/* 여행별 taskdata 필요 */}
      <section className="mt-6 flex flex-col gap-6">
        <article>
          <TripBox id={1} name="제주도 여행" />
        </article>
        <article>
          <TripBox id={2} name="강원도 여행" />
        </article>
      </section>
    </div>
  );
}
