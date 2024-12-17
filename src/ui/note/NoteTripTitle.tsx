export default function NoteTripTitle({ tripTitle }: { tripTitle: string }) {
  return (
    <div className="flex items-center gap-[6px]">
      <span>icon</span>
      {/* TODO 아이콘  */}
      <p className="text-base font-medium leading-normal text-slate-800">
        {tripTitle}
      </p>
    </div>
  );
}
