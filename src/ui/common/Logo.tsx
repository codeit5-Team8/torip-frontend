import Image from 'next/image';
import Link from 'next/link';

interface ILogoProps {
  iconOnly: boolean; // 아이콘만 사용할지 선택
  size?: 'small' | 'large'; // 로고 사이즈 선택
  className?: string; // style 설정. 혹시 몰라 준비했습니다.
}

export default function Logo(props: ILogoProps) {
  const { size = 'large', iconOnly = false, className } = props;
  return (
    <>
      <h1>
        <Link href="/">
          {iconOnly ? (
            <Image
              src="/asset/logo_icon.png"
              width="32"
              height="32"
              alt="Torip 아이콘"
              className={className}
            />
          ) : (
            <Image
              src="/asset/logo.png"
              width={size === 'small' ? 106 : 270}
              height={size === 'small' ? 35 : 90}
              alt="Torip 로고"
              className={className}
            />
          )}
        </Link>
      </h1>
    </>
  );
}
