import { removeHtmlTags, removeSpaces } from '@util/note';
import { useFormContext } from 'react-hook-form';

export default function NoteContentCounter() {
  const { watch } = useFormContext();
  return (
    <section className="mb-2 text-xs font-medium leading-none">
      <span className="text-slate-800">
        <>공백 포함 : 총 </>
        <span
          className={`${removeHtmlTags(watch('content')).length > 1000 ? 'text-red-700' : 'text-slate-800'}`}
        >
          {removeHtmlTags(watch('content')).length}
        </span>
        <>자 / </>
        <span className="text-mint-500">1000</span>
        <>자</>
        <span className="text-slate-300"> | </span>
      </span>

      <span className="text-slate-800">
        공백 제외 : 총 {removeSpaces(removeHtmlTags(watch('content'))).length}자
      </span>
    </section>
  );
}
