export default function NoteInfo() {
  return (
    <section className="flex flex-col gap-3">
      <NoteTripInfo />
      <NoteTodoInfo />
    </section>
  );
}

function NoteTripInfo() {
  return (
    <div className="flex items-center gap-[6px]">
      <span>icon</span>
      {/* TODO 아이콘  */}
      <p className="text-base font-medium leading-normal text-slate-800">
        여행 제목
      </p>
    </div>
  );
}

function NoteTodoInfo() {
  return (
    <div className="flex items-center gap-[6px]">
      <span className="inline-flex h-5 items-center justify-center rounded bg-slate-100 px-[3px] py-0.5 text-xs font-medium leading-none text-slate-700">
        To do
      </span>
      <span className="text-sm font-normal leading-tight text-slate-700">
        할 일 제목
      </span>
    </div>
  );
}
