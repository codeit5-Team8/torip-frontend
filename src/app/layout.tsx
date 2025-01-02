import type { Metadata } from 'next';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import QueryProvider from '@provider/QueryProvider';
import Popup from '@ui/common/Popup';
import Modal from '@ui/Modal/Modal';
import SessionWrapper from '@provider/SessionWrapper';
import Drawer from '@ui/common/Drawer';
import UIProvider from '@provider/UIProvider';

export const metadata: Metadata = {
  title: {
    template: '%s | Torip',
    default: 'Torip',
  },
  description: 'Torip은 여행과 할 일을 간편하게 관리할 수 있는 플랫폼입니다.',
  keywords: [
    'Torip',
    '여행',
    '할 일 관리',
    'todo',
    'trip',
    'travel',
    'planner',
  ],
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  applicationName: 'Torip',
  creator: 'Torip Dev 8 Team',
  publisher: 'Torip Inc.',
  openGraph: {
    title: 'Torip - 여행과 관련된 할일을 관리하는 플랫폼',
    description:
      'Torip을 통해 여행 계획을 세우고, 할 일 목록을 간편하게 관리하세요.',
    url: 'https://torip.vercel.app',
    siteName: 'Torip',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Torip Open Graph Image',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryProvider>
      <SessionWrapper>
        <html lang="en">
          <body>
            <UIProvider>
              <Popup />
              <Modal />
              <Drawer />
              {children}
              <SpeedInsights />
            </UIProvider>
          </body>
        </html>
      </SessionWrapper>
    </QueryProvider>
  );
}
