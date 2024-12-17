import { ROUTE_TITLE_MAP } from '@constant/path';
import NavTitle from '@ui/common/NavTitle';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavTitle pageTitleProp={ROUTE_TITLE_MAP['/note-all-trip']} />
      {children}
    </>
  );
}
