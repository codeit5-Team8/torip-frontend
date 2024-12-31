import { twMerge } from 'tailwind-merge';

interface ITodoScope {
  taskScope: 'PUBLIC' | 'PRIVATE';
  setTaskScope: React.Dispatch<React.SetStateAction<'PUBLIC' | 'PRIVATE'>>;
}

const FILTERS = ['PUBLIC', 'PRIVATE'];

export default function TodoScope({ taskScope, setTaskScope }: ITodoScope) {
  const handleFilterClick = (filter: 'PUBLIC' | 'PRIVATE') => {
    setTaskScope(filter);
  };

  return (
    <>
      <header className="my-4 text-base font-semibold text-slate-800">
        역할 범위
      </header>
      <div className="inline-flex gap-2.5">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => handleFilterClick(filter as 'PUBLIC' | 'PRIVATE')}
            className={twMerge(
              'rounded-[17px] border px-3 py-1 text-sm font-medium leading-tight',
              filter === taskScope
                ? 'bg-primary text-white'
                : 'bg-white text-slate-800',
            )}
          >
            {filter === 'PUBLIC' ? '공통' : '개인'}
          </button>
        ))}
      </div>
    </>
  );
}
