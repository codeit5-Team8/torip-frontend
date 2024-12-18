'use client';

import AllTodoBox from '@ui/box/AllTodoBox';
import MyProgressBox from '@ui/box/MyProgrssBox';
import UserTrips from '@ui/box/UserTrips';
import NavTitle from '@ui/common/NavTitle';

export default function Home() {
  return (
    <div>
      <NavTitle />
      <section className="grid w-full grid-cols-1 gap-2 pt-4 tablet:grid-cols-2 tablet:gap-6">
        {/* task 전체 불러오기(?) 필요 */}
        <AllTodoBox />
        <MyProgressBox />
      </section>
      {/* 각 여행 별 할일 컨테이너 */}
      {/* 유저가 포함되어있는 여행들 불러오는 것 필요 */}
      {/* 여행 없을시에 보여주는 로직 필요 -> api 연결후에  */}
      {/* 여행별 taskdata 필요 */}
      <section className="mt-6 flex flex-col gap-6">
        <UserTrips />
      </section>
    </div>
  );
}
