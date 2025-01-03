import { getTrip } from '@lib/api/service/trip.api';
import { Metadata } from 'next';

interface ITripLayoutProps {
  params: { id: string };
  children: React.ReactNode;
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const id = Number(params.id);
  const tripInfo = await getTrip(id);
  const pageTitle = tripInfo?.result?.name || '여행 상세';

  return {
    title: pageTitle,
    openGraph: {
      title: pageTitle,
      url: `https://torip.com/trip/${params.id}`,
      siteName: 'Torip',
      images: [
        {
          url: '/asset/image/logo.png',
          width: 1200,
          height: 630,
          alt: 'Torip Open Graph Image',
        },
      ],
      locale: 'ko_KR',
      type: 'website',
    },
  };
}

export default async function TripLayout({ children }: ITripLayoutProps) {
  return (
    <div className="flex min-h-full flex-1 flex-col gap-6">{children}</div>
  );
}
