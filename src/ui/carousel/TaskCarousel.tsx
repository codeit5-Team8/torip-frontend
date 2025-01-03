import { TGetTaskResponse, TTaskStatus } from '@model/task.model';
import TaskCard from '@ui/card/taskCard/TaskCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { twMerge } from 'tailwind-merge';

interface ITaskCarouselProps {
  tripId: number; // 여행 ID
  tasks: TGetTaskResponse[]; // 할 일 데이터
  height?: string; // 캐러셀 height 값 지정
  className?: string; // 캐러셀 스타일 지정
}

export default function TaskCarousel({
  tripId,
  tasks,
  height,
  className,
}: ITaskCarouselProps) {
  SwiperCore.use([]);

  const groupedTasks = tasks.reduce(
    (acc, task) => {
      acc[task.taskStatus] = [...(acc[task.taskStatus] || []), task];
      return acc;
    },
    {} as Record<TTaskStatus, TGetTaskResponse[]>,
  );

  return (
    <div className="swiper-container">
      <Swiper
        slidesPerView={3} // 데스크톱 기준 3개
        spaceBetween={22}
        slidesOffsetAfter={20}
        slidesOffsetBefore={20}
        breakpoints={{
          1280: {
            slidesPerView: 3,
            slidesOffsetAfter: 0,
            slidesOffsetBefore: 0,
          },
          1024: {
            slidesPerView: 2.5,
            slidesOffsetAfter: 20,
            slidesOffsetBefore: 20,
          },
          768: {
            slidesPerView: 2,
            slidesOffsetAfter: 20,
            slidesOffsetBefore: 20,
          },
          640: {
            slidesPerView: 1.5,
            slidesOffsetAfter: 20,
            slidesOffsetBefore: 20,
          },
          520: {
            slidesPerView: 1.2,
            slidesOffsetAfter: 0,
            slidesOffsetBefore: 0,
          },
          0: {
            slidesPerView: 1,
            slidesOffsetAfter: 0,
            slidesOffsetBefore: 0,
          },
        }}
        className={twMerge(className)}
        style={{ height: height ? `${height}` : 'auto' }}
      >
        <SwiperSlide className="h-full">
          <TaskCard
            status="ready"
            tripId={tripId}
            tasks={groupedTasks['BEFORE_TRIP']}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TaskCard
            status="ongoing"
            tripId={tripId}
            tasks={groupedTasks['DURING_TRIP']}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TaskCard
            status="done"
            tripId={tripId}
            tasks={groupedTasks['AFTER_TRIP']}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
