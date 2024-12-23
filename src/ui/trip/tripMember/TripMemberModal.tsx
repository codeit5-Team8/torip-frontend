import { TTrip } from '@model/trip.model';
import TripJoinRequest from './tripJoinRequest/TripJoinRequest';
import TripParticipant from './tripParticipant/TripParticipant';

type TTripMember = Pick<TTrip, 'id'>;

export default function TripMemberModal({ id }: TTripMember) {
  return (
    <div className="flex h-full w-full flex-col gap-8">
      {/* 참여 중인 멤버 */}
      <TripParticipant id={id} />
      {/* 참여 수락/거절 */}
      <TripJoinRequest id={id} />
    </div>
  );
}
