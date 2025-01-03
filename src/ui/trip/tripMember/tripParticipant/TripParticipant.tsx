import { useGetTripMembers } from '@hooks/trip/useGetTripMembers';
import TripMemberSection from '../TripMemberSection';
import TripParticipantItem from './TripParticipantItem';
import { TTrip } from '@model/trip.model';

type TTripParticipant = Pick<TTrip, 'id'>;

export default function TripParticipant({ id }: TTripParticipant) {
  const { data: TripMembers } = useGetTripMembers(id);

  return (
    <TripMemberSection title="여행 멤버">
      <ul className="grid grid-cols-1 gap-x-6 overflow-y-auto tablet:grid-cols-2">
        {TripMembers?.result.map((member, index) => (
          <TripParticipantItem key={index} username={member.username} />
        ))}
      </ul>
    </TripMemberSection>
  );
}
