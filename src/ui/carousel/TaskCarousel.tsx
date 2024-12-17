import { TTask } from '@model/task.model';
import TaskCard from '@ui/card/taskCard/TaskCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { twMerge } from 'tailwind-merge';

interface ITaskCarouselProps {
  tasks: TTask[]; // 할 일 데이터
  height?: string; // 캐러셀 height 값 지정
  className?: string; // 캐러셀 스타일 지정
}

export default function TaskCarousel({
  tasks,
  height,
  className,
}: ITaskCarouselProps) {
  SwiperCore.use([]);

  const groupedTasks = tasks.reduce(
    (acc, task) => {
      acc[task.travelStatus] = [...(acc[task.travelStatus] || []), task];
      return acc;
    },
    {} as Record<TTask['travelStatus'], TTask[]>,
  );

  return (
    <div className="swiper-container">
      <Swiper
        // loop={true} // 슬라이드 루프
        slidesPerView={3} // 데스크톱 기준 3개
        spaceBetween={22}
        // 추가적인 계산이나 다른 좋은 로직으로 교체하기
        breakpoints={{
          1280: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 2.5,
          },
          768: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 1.5,
          },
          520: {
            slidesPerView: 1.2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        className={twMerge(className)}
        style={{ height: height ? `${height}` : 'auto' }}
      >
        <SwiperSlide className="h-full">
          <TaskCard status="ready" tasks={groupedTasks['BEFORE_TRAVEL']} />
        </SwiperSlide>
        <SwiperSlide>
          <TaskCard status="ongoing" tasks={groupedTasks['DURING_TRAVEL']} />
        </SwiperSlide>
        <SwiperSlide>
          <TaskCard status="done" tasks={groupedTasks['AFTER_TRAVEL']} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
