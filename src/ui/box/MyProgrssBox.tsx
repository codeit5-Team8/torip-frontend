'use client';

import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, ChartData } from 'chart.js';
import Image from 'next/image';
import React, { useRef, useEffect, useState } from 'react';
import { useGetProgress } from '@hooks/task/useGetProgress';
import {
  createProgressData,
  progressChartOptions,
} from '@app/progressChartConfig';

ChartJS.register(ArcElement);

export default function MyProgressBox() {
  const { data } = useGetProgress();
  const progress = data?.progress || 0;
  const chartRef = useRef<ChartJS<'doughnut', number[], unknown> | null>(null);
  const [chartData, setChartData] = useState<null | ChartData<
    'doughnut',
    number[],
    unknown
  >>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = chartRef.current;
      const ctx = chart.ctx;
      const chartArea = chart.chartArea;

      if (ctx && chartArea) {
        const data = createProgressData(progress, ctx, chartArea);
        setChartData(data);
      }
    }
  }, [progress, chartRef]);

  return (
    <div className="flex h-[250px] rounded-xl bg-cyan-300 bg-[url('/asset/image/progressBg.png')] px-4 py-4 tablet:px-6">
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0F172A]">
          <Image
            src={`/asset/icon/progress.png`}
            alt="progress"
            width={17}
            height={17}
          />
        </div>
        <div className="flex flex-col gap-1 text-white">
          <h4 className="text-lg font-semibold leading-7">내 진행 상황</h4>
          <p className="flex items-center gap-1 text-3xl font-bold leading-9 text-white">
            {progress}
            <span className="text-base font-semibold leading-normal">%</span>
          </p>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <div className="h-[166px] w-[166px]">
          <Doughnut
            data={chartData || createProgressData(progress)}
            options={progressChartOptions}
            ref={chartRef}
          />
        </div>
      </div>
    </div>
  );
}
