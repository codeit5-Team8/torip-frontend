import { removeHtmlTags, removeSpaces } from '@util/note';
import { useFormContext } from 'react-hook-form';

export default function NoteContentCounter() {
  const { watch } = useFormContext();
  return (
    <section className="mb-2 text-xs font-medium leading-none text-slate-800">
      <>공백 포함 : 총 {removeHtmlTags(watch('content')).length}자 | </>
      <>
        공백 제외 : 총 {removeSpaces(removeHtmlTags(watch('content'))).length}자
      </>
    </section>
  );
}
