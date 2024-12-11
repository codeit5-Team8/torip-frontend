'use client';

import { useFormContext } from 'react-hook-form';
import { TNoteFormInput } from '@type/note';
import { NOTE_PLACEHOLDER } from '@constant/note';

export default function NoteTitleInput() {
  const { register, watch } = useFormContext<TNoteFormInput>();
  const title = watch('title');

  return (
    <div className="relative mb-3 mt-5 border-b border-t border-slate-200">
      <input
        type="text"
        className="block h-10 w-full py-3 text-base font-medium leading-normal outline-none sm:h-[52px] sm:py-2 sm:text-lg sm:font-medium sm:leading-7"
        maxLength={30}
        {...register('title', { required: true })}
        placeholder={NOTE_PLACEHOLDER.title}
      />
      <div className="absolute right-0 top-1/2 translate-y-[-50%] flex-row text-xs font-medium">
        <span className="t">{title ? title.length : 0} /</span>
        <span className="text-xs font-medium text-primary"> 30</span>
      </div>
    </div>
  );
}
