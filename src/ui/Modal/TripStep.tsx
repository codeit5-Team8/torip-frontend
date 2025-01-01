import { twMerge } from 'tailwind-merge';

interface ITripStep {
  taskStatus: 'BEFORE_TRIP' | 'DURING_TRIP' | 'AFTER_TRIP';
  setTaskStatus: React.Dispatch<
    React.SetStateAction<'BEFORE_TRIP' | 'DURING_TRIP' | 'AFTER_TRIP'>
  >;
}

const FILTERS = ['BEFORE_TRIP', 'DURING_TRIP', 'AFTER_TRIP'];

export default function TripStep({ taskStatus, setTaskStatus }: ITripStep) {
  const handleFilterClick = (
    filter: 'BEFORE_TRIP' | 'DURING_TRIP' | 'AFTER_TRIP',
  ) => {
    setTaskStatus(filter);
  };

  return (
    <>
      <header className="my-5 text-base font-semibold text-slate-800">
        여행 단계
      </header>
      <div className="inline-flex gap-2.5">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() =>
              handleFilterClick(
                filter as 'BEFORE_TRIP' | 'DURING_TRIP' | 'AFTER_TRIP',
              )
            }
            className={twMerge(
              'rounded-[17px] border px-3 py-1 text-sm font-medium leading-tight',
              filter === taskStatus
                ? 'bg-primary text-white'
                : 'bg-white text-slate-800',
            )}
          >
            {filter === 'BEFORE_TRIP'
              ? '여행 전'
              : filter === 'DURING_TRIP'
                ? '여행 중'
                : '여행 후'}
          </button>
        ))}
      </div>
    </>
  );
}
