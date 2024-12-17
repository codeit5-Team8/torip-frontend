export default function NoteTitle({ noteTitle }: { noteTitle: string }) {
  return (
    <div className="my-6 flex h-10 w-full items-center border-b border-t border-slate-200 text-base font-medium leading-normal outline-none sm:h-[52px] sm:text-lg sm:font-medium sm:leading-7">
      {noteTitle}
    </div>
  );
}
