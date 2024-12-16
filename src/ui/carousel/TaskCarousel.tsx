import { TTask } from '@model/task.model';
import TaskCard from '@ui/card/taskCard/TaskCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { TRIP_STATUS } from '@constant/Task';

type TTripStatusKey = keyof typeof TRIP_STATUS;

const mockTasks: TTask[] = [
  {
    travelId: 1,
    taskId: 101,
    taskTitle: '비행기 티켓 예약하기',
    travelStatus: 'BEFORE_TRAVEL',
    scope: 'PRIVATE',
    completionDate: '2024-12-15',
    taskDDay: 'D-3',
    filePath: '/files/ticket.pdf',
    assignees: ['Alice', 'Bob'],
  },
  {
    travelId: 1,
    taskId: 102,
    taskTitle: '호텔 예약 완료하기',
    travelStatus: 'BEFORE_TRAVEL',
    scope: 'PUBLIC',
    completionDate: '2024-12-18',
    assignees: ['Charlie'],
  },
  {
    travelId: 1,
    taskId: 103,
    taskTitle: '관광 일정 짜기',
    travelStatus: 'BEFORE_TRAVEL',
    scope: 'PRIVATE',
    completionDate: '2024-12-20',
  },
  {
    travelId: 1,
    taskId: 104,
    taskTitle: '여행지 사진 정리',
    travelStatus: 'AFTER_TRAVEL',
    scope: 'PUBLIC',
    completionDate: '2024-12-25',
    filePath: '/files/photos.zip',
  },
];
const todoStatus: TTripStatusKey[] = ['ready', 'ongoing', 'done']; // 상태별 순서 설정

export default function TaskCarousel({ tripId }: { tripId: number }) {
  SwiperCore.use([]);

  return (
    <div className="swiper-container">
      <Swiper
        loop={true} // 슬라이드 루프
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
      >
        {todoStatus.map((status, index) => (
          <SwiperSlide key={tripId + index}>
            <TaskCard
              status={status}
              tasks={mockTasks}
              classNames="min-w-[384px] h-[304px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
