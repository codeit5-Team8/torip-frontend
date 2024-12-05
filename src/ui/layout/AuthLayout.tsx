import Logo from '@ui/common/Logo';

interface IAuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: IAuthLayoutProps) {
  return (
    <div className="item-center">
      <main className="container flex flex-col gap-10 pb-16 pt-12 tablet:w-[640px] tablet:pb-20 tablet:pt-16 desktop:pb-[8rem] desktop:pt-[7.5rem]">
        <div className="item-center">
          <Logo iconOnly={false} size="large" />
        </div>

        {/* Contents 영역 */}
        {children}
      </main>
    </div>
  );
}
