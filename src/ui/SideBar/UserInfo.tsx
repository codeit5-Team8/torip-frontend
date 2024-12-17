import Image from 'next/image';

export default function UserInfo() {
  return (
    <section className="flex gap-3">
      <Image
        src="/asset/image/profile.png"
        alt="프로필"
        width={64}
        height={64}
      />
      <section className="grow text-sm font-semibold">
        {/* TODO : 유저 네임, 이메일 받아서 적용하기 */}
        <p>유저 네임</p>
        <p>유저 이메일</p>
        {/* TODO : 로그인 정책 수립된 후 로그아웃 기능 구현 */}
        <button className="mt-2 text-xs font-normal text-slate-400">
          로그아웃
        </button>
      </section>
    </section>
  );
}
