import { useLogin } from '@hooks/auth/useLogin';
import Logo from '@ui/common/Logo';
import Image from 'next/image';

interface ISideBarHeaderProps {
  isSideBarOpen: boolean;
  toggleSideBar: () => void;
}

export default function SideBarHeader({
  isSideBarOpen,
  toggleSideBar,
}: ISideBarHeaderProps) {
  const { data: userData } = useLogin();
  return (
    <section
      className={`${isSideBarOpen ? 'flex-row justify-between p-6' : 'flex-col gap-6 p-4'} flex items-center`}
    >
      <Logo
        iconOnly={isSideBarOpen ? false : true}
        size={isSideBarOpen ? 'small' : undefined}
      />
      {userData && (
        <button className="inline" onClick={toggleSideBar}>
          <Image
            src={`/asset/icon/${isSideBarOpen ? 'fold' : 'expand'}.png`}
            alt={`${isSideBarOpen ? '사이드바 닫기' : '사이드바 열기'}`}
            width={24}
            height={24}
          />
        </button>
      )}
    </section>
  );
}
