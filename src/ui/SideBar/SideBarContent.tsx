import Image from 'next/image';
import Button from '../common/Button';
import { useModalStore } from '@store/modal.store';
import UserInfo from '@ui/SideBar/UserInfo';
import Dashboard from '@ui/SideBar/Dashboard';
import TripList from '@ui/SideBar/TripList';
import TodoModal from '@ui/Modal/TodoModal';
import TripModal from '@ui/Modal/TripModal';
import { usePostTrip } from '@hooks/trip/usePostTrip';
import { TPostTripRequest } from '@model/trip.model';
import { useGetUserTripList } from '@hooks/trip/useGetUserTripList';
import { usePostTask } from '@hooks/task/usePostTask';

interface ISideBarContentProps {
  toggleSideBar: () => void;
  clickSideBarContent: () => void;
}
export default function SideBarContent({
  toggleSideBar,
  clickSideBarContent,
}: ISideBarContentProps) {
  const { showModal } = useModalStore();
  const postTask = usePostTask();
  const postTrip = usePostTrip();
  const { data: tripList } = useGetUserTripList({
    lastSeenId: 0,
  });

  const handleAddTodo = () => {
    showModal({
      title: '할 일 생성',
      content: <TodoModal onConfirm={(data) => postTask.mutate(data)} />,
    });
  };

  const handleAddTrip = () => {
    showModal({
      title: '여행 생성',
      content: (
        <TripModal
          onConfirm={(data: TPostTripRequest) => postTrip.mutate(data)}
          toggleSideBar={toggleSideBar}
        />
      ),
    });
  };

  return (
    <div className="w-full">
      <section className="flex flex-col gap-6 border-b-[1px] border-slate-200 px-6 pb-6">
        <UserInfo />
        <Button
          className="h-12 w-full gap-0.5 p-3 text-base font-semibold"
          onClick={handleAddTodo}
        >
          <Image
            src="/asset/icon/plus.png"
            alt="할 일 추가 버튼"
            width={24}
            height={24}
          />
          새 할 일
        </Button>
      </section>
      <Dashboard clickSideBarContent={clickSideBarContent} />
      <section className="p-6">
        <TripList
          tripList={tripList}
          clickSideBarContent={clickSideBarContent}
        />
        <Button
          variant="outlined"
          className="h-12 w-full gap-0.5 p-3 text-base font-semibold"
          onClick={handleAddTrip}
        >
          <Image
            src="/asset/icon/plus-mint.png"
            alt="여행 추가 버튼"
            width={24}
            height={24}
          />
          새 여행
        </Button>
      </section>
    </div>
  );
}
