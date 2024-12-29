import { ReactNode } from 'react';

interface ITripMemberSectionProps {
  title: string;
  children: ReactNode;
}
export default function TripMemberSection({
  title, // 소제목
  children, // 참여 리스트
}: ITripMemberSectionProps) {
  return (
    <div className="flex min-h-[136px] flex-1 flex-col">
      {/* 소제목 */}
      <h4 className="mb-2 text-base font-semibold leading-normal">{title}</h4>
      {/* 참여 리스트 */}
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}
