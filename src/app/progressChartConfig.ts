import { ChartArea, ChartData } from 'chart.js';

export const createProgressData = (
  progress: number,
  ctx?: CanvasRenderingContext2D,
  chartArea?: ChartArea,
): ChartData<'doughnut', number[], unknown> => {
  let gradient;
  if (ctx && chartArea) {
    gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0, '#1c8686');
    gradient.addColorStop(1, '#115959');
  } else {
    gradient = '#1c8686';
  }
  const reversedProgress = 100 - progress;
  return {
    datasets: [
      {
        data: [reversedProgress, progress],
        backgroundColor: ['#ffffff', gradient],
        hoverBackgroundColor: ['#ffffff', gradient],
        borderWidth: 0,
        circumference: 360,
        rotation: 0,
      },
    ],
  };
};

export const progressChartOptions = {
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  cutout: '65%',
  maintainAspectRatio: false,
  animation: {
    animateRotate: true,
    animateScale: true,
  },
};
