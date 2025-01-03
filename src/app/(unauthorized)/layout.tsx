import AuthLayout from '@ui/layout/AuthLayout';

interface ILayoutProps {
  children: React.ReactNode;
}

export default function UnAuthorizedLayout({ children }: ILayoutProps) {
  return <AuthLayout>{children}</AuthLayout>;
}
