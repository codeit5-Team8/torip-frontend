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

// alltodopage

export function AllTodoPageSkeleton() {
  return (
    <div className="flex min-h-full w-full flex-1 flex-col gap-4">
      <nav className="flex w-full items-center justify-between">
        {/* "모든 할일" 제목 */}
        <div className="text-base font-semibold leading-normal text-slate-900 tablet:text-lg tablet:leading-7">
          모든 할일
        </div>
        {/* "할 일 추가" 버튼 */}
        <button className="flex items-center gap-1 bg-slate-100 text-sm font-semibold leading-tight text-primary before:inline-block before:h-4 before:w-4 before:bg-[url('/asset/icon/plusprimary.png')] before:bg-contain before:bg-no-repeat hover:text-primary active:text-primary">
          할일 추가
        </button>
      </nav>
      {/* Skeleton UI */}
      <div className="flex flex-1 flex-col gap-7 rounded-xl border border-slate-100 bg-white p-6">
        <div className="flex gap-2">
          <Skeleton className="h-7 w-10" />
          <Skeleton className="h-7 w-10" />
          <Skeleton className="h-7 w-10" />
        </div>
        <div className="space-y-2.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={index} className="h-6 w-full" />
          ))}
        </div>
      </div>
    </div>
  );
}

// note-all-task page

export function NoteAllTaskPageSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      <section className="mb-4 flex h-[52px] items-center justify-between gap-2 rounded-xl bg-white px-[11px] py-[9px] sm:h-[88px] sm:px-6 sm:py-5">
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-4" />
          <Skeleton className="h-5 w-[52px]" />
        </div>
        <Skeleton className="inline-flex h-[34px] w-[94px] items-center justify-center rounded-xl bg-primary text-white sm:h-12 sm:w-[180px]" />
      </section>

      <section className="mb-4 flex h-[192px] gap-4 rounded-xl bg-white px-[11px] py-[9px] sm:h-[164px] sm:px-6 sm:py-6">
        <div className="flex gap-2">
          <Skeleton className="h-4 w-4" />
        </div>
        <div className="flex w-full flex-col gap-4">
          <Skeleton className="h-5 w-[52px]" />
          <Skeleton className="h-7 w-full pl-6 desktop:w-1/2" />
        </div>
      </section>
      <section className="mb-4 flex h-[192px] gap-4 rounded-xl bg-white px-[11px] py-[9px] sm:h-[164px] sm:px-6 sm:py-6">
        <div className="flex gap-2">
          <Skeleton className="h-4 w-4" />
        </div>
        <div className="flex w-full flex-col gap-4">
          <Skeleton className="h-5 w-[52px]" />
          <Skeleton className="h-7 w-full pl-6 desktop:w-1/2" />
        </div>
      </section>
      <section className="mb-4 flex h-[192px] gap-4 rounded-xl bg-white px-[11px] py-[9px] sm:h-[164px] sm:px-6 sm:py-6">
        <div className="flex gap-2">
          <Skeleton className="h-4 w-4" />
        </div>
        <div className="flex w-full flex-col gap-4">
          <Skeleton className="h-5 w-[52px]" />
          <Skeleton className="h-7 w-full pl-6 desktop:w-1/2" />
        </div>
      </section>
    </div>
  );
}

// 여행 상세
export function TripInfoSkeleton() {
  return (
    <section className="section-box min-h-[136px]">
      <div className="flex flex-col gap-3 py-4">
        <Skeleton className="h-7 w-52" />
        <Skeleton className="h-8 w-32" />
      </div>
    </section>
  );
}

export function TripTaskSkeleton() {
  return (
    <div className="flex w-full flex-col gap-4 rounded-xl bg-white px-6 tablet:pl-6 tablet:pr-0">
      <div className="flex h-[500px] gap-[22px]">
        {/* 기본 (mobile): 1개 */}
        <Skeleton className="h-full w-full rounded-3xl" />
        {/* tablet: 2개 (1개는 반만 보여줌) */}
        <Skeleton className="hidden h-full rounded-3xl tablet:block tablet:rounded-br-none tablet:rounded-tr-none desktop:w-full desktop:rounded-3xl" />
        {/* desktop: 정확히 3개 */}
        <Skeleton className="hidden h-full rounded-3xl desktop:block desktop:w-full" />
      </div>
    </div>
  );
}
