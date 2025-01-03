import TripJoinRequest from './tripJoinRequest/TripJoinRequest';
import TripParticipant from './tripParticipant/TripParticipant';

export default function TripMember() {
  return (
    <div className="flex w-full flex-1 flex-col gap-8 py-2">
      {/* 참여 중인 멤버 */}
      <TripParticipant />

      {/* 참여 수락/거절 */}
      <TripJoinRequest />
    </div>
  );
}
