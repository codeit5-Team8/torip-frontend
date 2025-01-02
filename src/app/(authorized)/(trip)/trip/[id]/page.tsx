'use client';

import TripNotesButton from '@ui/trip/TripNotesButton';
import TripInfo from '@ui/trip/TripInfo';
import NavTitle from '@ui/common/NavTitle';
import TripTask from '@ui/trip/TripTask';
import TripJoinAccess from '@ui/trip/TripJoinAccess';
import { useGetTrip } from '@hooks/trip/useGetTrip';
import { Metadata } from 'next';
import { getTrip } from '@lib/api/service/trip.api';

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
          url: '/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Torip Trip Image',
        },
      ],
      locale: 'ko_KR',
      type: 'website',
    },
  };
}

export default function Trip({ params }: { params: { id: string } }) {
  const { id } = params;
  const { data: tripInfo } = useGetTrip(Number(id));

  if (tripInfo && !tripInfo.success) {
    return <TripJoinAccess id={Number(id)} />;
  }

  return (
    <>
      <NavTitle />
      {/* 여행 상세 정보 */}
      <TripInfo id={Number(id)} />
      {/* 노트 모아보기 */}
      <TripNotesButton id={Number(id)} />
      {/* 여행 할 일 */}
      <TripTask id={Number(id)} />
    </>
  );
}
