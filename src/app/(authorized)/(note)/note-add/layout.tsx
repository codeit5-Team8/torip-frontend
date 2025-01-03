import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '노트 작성',
  description:
    '새로운 노트를 추가하세요. Torip에서 여러분의 할 일을 관리하세요.',
  keywords: ['note', 'add note', 'Torip', '메모 추가'],
};

export default function NoteAddLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
