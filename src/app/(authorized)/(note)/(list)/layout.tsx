import NavTitle from '@ui/common/NavTitle';

export default function Layout({
  children,
  drawer,
}: {
  children: React.ReactNode;
  drawer: React.ReactNode;
}) {
  return (
    <>
      <NavTitle className="pb-4" />
      {children}
      {drawer}
    </>
  );
}
