'use client';

import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';

import { cn } from '@lib/utils';
import { twMerge } from 'tailwind-merge';

interface IProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  color?: string; // 진행 색상 설정
  backgroundColor?: string; // 배경색 설정
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  IProgressProps
>(({ className, value, color, backgroundColor, ...props }, ref) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(value || 0), 200);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        'relative h-1 w-full overflow-hidden rounded-full bg-primary/20',
        className,
        backgroundColor,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={twMerge(
          'h-full w-full flex-1 bg-primary transition-all duration-500',
          color,
        )}
        style={{ transform: `translateX(-${100 - (progress || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
});
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
