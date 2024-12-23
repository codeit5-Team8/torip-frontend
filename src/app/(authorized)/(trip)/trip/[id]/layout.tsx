import NavTitle from '@ui/common/NavTitle';

interface ITripLayoutProps {
  children: React.ReactNode;
}

export default async function TripLayout({ children }: ITripLayoutProps) {
  return (
    <div className="flex min-h-full flex-1 flex-col gap-6">
      <NavTitle />
      {children}
    </div>
  );
}
