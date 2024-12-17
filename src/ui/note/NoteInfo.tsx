import NoteTripTitle from './NoteTripTitle';
import NoteTaskInfo from './NoteTaskInfo';

export default function NoteInfo() {
  return (
    <section className="flex flex-col gap-3">
      <NoteTripTitle tripTitle="여행 제목" />
      <NoteTaskInfo title="할 일 제목" />
    </section>
  );
}
