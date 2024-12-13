import NoteTaskInfo from './NoteTaskInfo';

export default function NoteInfo() {
  return (
    <section className="flex flex-col gap-3">
      <NoteTripInfo />
      <NoteTaskInfo title="할 일 제목" />
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
