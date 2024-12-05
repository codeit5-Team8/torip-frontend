import Logo from '@ui/common/Logo';

interface IAuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: IAuthLayoutProps) {
  return (
    <div className="item-center">
      <main className="container flex flex-col gap-10 pt-12 tablet:pt-16 desktop:w-[640px] desktop:pt-[7.5rem]">
        <div className="item-center">
          <Logo iconOnly={false} size="large" />
        </div>

        {/* Contents 영역 */}
        {children}
      </main>
    </div>
  );
}
