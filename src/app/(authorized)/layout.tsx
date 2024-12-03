import MainLayout from '@ui/layout/MainLayout';

export default function AuthorizedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout>{children}</MainLayout>;
}
