import Image from 'next/image';

// progress 퍼센테이지 불러오는 것에 따라 props 변경 필요
export default function MyProgressBox() {
  return (
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
            {/* 임시값 */}
            74
            <span className="text-base font-semibold leading-normal">%</span>
          </p>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        {/* 임시 프로그래스바 이미지 */}
        <Image
          src={`/asset/image/testcircle.png`}
          alt="progress"
          width={166}
          height={166}
        />
      </div>
    </div>
  );
}
