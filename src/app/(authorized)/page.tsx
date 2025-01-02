import AllTodoBox from '@ui/box/AllTodoBox';
import MyProgressBox from '@ui/box/MyProgrssBox';
import UserTrips from '@ui/box/UserTrips';
import NavTitle from '@ui/common/NavTitle';

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <NavTitle />
      <section className="grid w-full grid-cols-1 gap-2 pt-4 tablet:grid-cols-2 tablet:gap-6">
        <AllTodoBox />
        <MyProgressBox />
      </section>
      <section className="mt-6 flex flex-1 flex-col">
        <UserTrips />
      </section>
    </div>
  );
}
