'use client';

import TripCard from '@ui/card/tripCard/TripCard';
import Button from '@ui/common/Button';
import NavTitle from '@ui/common/NavTitle';
import Subtitle from '@ui/common/Subtitle';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="pt-6">
      <NavTitle />
      <div className="grid w-full grid-cols-1 gap-2 pt-4 tablet:grid-cols-2 tablet:gap-6">
        <div className="h-[250px] rounded-xl bg-slate-100 px-6 pb-6 pt-4">
          <div className="flex items-center justify-between">
            <Subtitle
              title="모든 할 일"
              icon="everytodo"
              iconBg="bg-primary"
              link="/signup"
            />
            <Button className="border-none bg-slate-100 text-sm font-medium text-slate-600 hover:bg-slate-100 active:border-none active:bg-slate-100">
              <span>전체 보기</span>
              <span>
                {/* 아이콘 추가 필요 */}
                {'>'}
              </span>
            </Button>
          </div>
          {/* task data 필요 */}
          {/* <TaskList tasks={''} /> */}
        </div>
        <div className="flex h-[250px] rounded-xl bg-cyan-300 bg-[url('/asset/image/progressBg.png')] px-6 py-4">
          <div className="flex flex-1 flex-col gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0F172A]">
              <Image
                src={`/asset/icon/progress.png`}
                alt="progress"
                width={17}
                height={17}
              />
            </div>
            <div className="flex flex-col gap-1 text-white">
              <h4 className="text-lg font-semibold leading-7">내 진행 상황</h4>
              <p className="flex items-center gap-1 text-3xl font-bold leading-9 text-white">
                74
                <span className="text-base font-semibold leading-normal">
                  %
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <Image
              src={`/asset/image/testcircle.png`}
              alt="progress"
              width={166}
              height={166}
            />
          </div>
        </div>
      </div>
      {/* 각 여행 별 할일 컨테이너 */}
      {/* 유저가 포함되어있는 여행들 불러오는 것 필요 */}
      {/* 여행별 taskdata 필요 */}
      <div className="mt-6 flex flex-col gap-6">
        <TripCard id={1} name="제주도 여행" />
        <TripCard id={2} name="강원도 여행" />
      </div>
    </div>
  );
}
