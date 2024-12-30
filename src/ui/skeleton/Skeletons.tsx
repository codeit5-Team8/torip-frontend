import Skeleton from '@ui/common/Skeleton';
import Subtitle from '@ui/common/Subtitle';
import Image from 'next/image';

// dashboard
export function UserTripsSkeleton() {
  return (
    <div className="flex w-full flex-col gap-6">
      {/* tripbox */}
      <div className="flex w-full flex-col gap-4 rounded-xl bg-white py-6 pl-4 tablet:pl-6 desktop:px-6">
        <div className="flex items-center gap-2">
          <Skeleton className="flex h-10 w-10 items-center justify-center rounded-2xl" />
          <Skeleton className="h-7 w-32 rounded-md" />
        </div>
        <div className="mx-6 flex gap-[22px]">
          {/* 기본 (mobile): 1개 */}
          <Skeleton className="h-[304px] w-full" />
          {/* tablet: 2개 (1개는 반만 보여줌) */}
          <Skeleton className="hidden h-[304px] tablet:block tablet:w-1/2 desktop:hidden" />
          {/* desktop: 정확히 3개 */}
          <Skeleton className="hidden h-[304px] desktop:block desktop:w-full" />
          <Skeleton className="hidden h-[304px] desktop:block desktop:w-full" />
        </div>
      </div>
      {/* tripbox */}
      <div className="flex w-full flex-col gap-4 rounded-xl bg-white py-6 pl-4 tablet:pl-6 desktop:px-6">
        <div className="flex items-center gap-2">
          <Skeleton className="flex h-10 w-10 items-center justify-center rounded-2xl" />
          <Skeleton className="h-7 w-32 rounded-md" />
        </div>
        <div className="mx-6 flex gap-[22px]">
          {/* 기본 (mobile): 1개 */}
          <Skeleton className="h-[304px] w-full" />
          {/* tablet: 2개 (1개는 반만 보여줌) */}
          <Skeleton className="hidden h-[304px] tablet:block tablet:w-1/2 desktop:hidden" />
          {/* desktop: 정확히 3개 */}
          <Skeleton className="hidden h-[304px] desktop:block desktop:w-full" />
          <Skeleton className="hidden h-[304px] desktop:block desktop:w-full" />
        </div>
      </div>
    </div>
  );
}

export function AllTodoBoxSkeleton() {
  return (
    <div className="flex h-[250px] flex-col gap-4 rounded-xl bg-white px-4 pb-6 pt-4 tablet:px-6">
      <div className="flex items-center justify-between">
        <Subtitle
          title="모든 할 일"
          icon="everytodo"
          iconBg="bg-primary"
          link="/todo-all"
        />
        <div className="flex items-center whitespace-nowrap border-none bg-white text-sm font-medium text-slate-600 hover:bg-slate-100 active:bg-slate-100">
          <span className="ml-2">전체 보기</span>
          <Image
            src={`/asset/icon/arrowright.png`}
            alt="progress"
            width={24}
            height={24}
          />
        </div>
      </div>

      <div className="space-y-2">
        {Array.from({ length: 3 }).map((_, index) => (
          <Skeleton key={index} className="h-6 w-full" />
        ))}
      </div>
    </div>
  );
}

export function MyProgressBoxSkeleton() {
  return (
    <div className="flex h-[250px] rounded-xl bg-[#28D7D2] bg-[url('/asset/image/progressBg.png')] px-4 py-4 tablet:px-6">
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
          <div className="flex items-center gap-1">
            <p className="flex items-center gap-1 text-3xl font-bold leading-9 text-white">
              0<span className="text-base font-semibold leading-normal">%</span>
            </p>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-1 items-center justify-center">
            <Skeleton className="h-[166px] w-[166px]" isCircle />
          </div> */}
    </div>
  );
}
