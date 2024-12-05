import AuthLayout from '@ui/layout/AuthLayout';

export default function UnAuthorizedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthLayout>{children}</AuthLayout>;
}
