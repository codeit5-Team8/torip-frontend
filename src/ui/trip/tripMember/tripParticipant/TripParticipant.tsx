import TripMemberSection from '../TripMemberSection';
import TripParticipantItem from './TripParticipantItem';

// TODO: API 연결 시 제거 예정
const TripMembers = [
  {
    id: 1,
    username: 'test',
    email: 'test@test.com',
  },
  {
    id: 2,
    username: 'test',
    email: 'test@test.com',
  },
  {
    id: 3,
    username: 'test',
    email: 'test@test.com',
  },
];

export default function TripParticipant() {
  return (
    <TripMemberSection title="여행 멤버">
      <ul className="grid grid-cols-1 gap-x-6 overflow-y-auto tablet:grid-cols-2">
        {TripMembers.map((member, index) => (
          <TripParticipantItem key={index} username={member.username} />
        ))}
      </ul>
    </TripMemberSection>
  );
}
