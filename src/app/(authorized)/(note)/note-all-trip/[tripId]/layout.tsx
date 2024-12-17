import NavTitle from '@ui/common/NavTitle';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavTitle />
      {children}
    </>
  );
}
