import { TNote } from '@model/note.model';
import NoteDrawer from '@ui/note/NoteDrawer';
import NoteDetail from '@ui/note/NoteDetail';

export default function NoteDetailDrawerPage() {
  // TODO noteId 받아서 api 호출 후 렌더링
  // const { noteId } = useParams();

  return (
    <NoteDrawer selectors="#drawer-root">
      <NoteDetail {...mockNote} />
    </NoteDrawer>
  );
}

const mockNote: TNote = {
  noteId: 1,
  tripTitle: '여행 제목1',
  tripStatus: 'BEFORE_TRIP',
  noteTitle: '노트 제목1',
  /* eslint-disable no-useless-escape */
  noteContent: `<h1>heading1</h1><h2>heading1</h2><h3>heading1</h3><h4>heading1</h4><h5>heading1</h5><h6>heading1</h6><p>pragraph</p><p><strong>bold</strong></p><p><em>italic</em></p><ul><li><p>unordered list</p></li></ul><ol><li><p>ordered list</p></li></ol><p><a href=\"https://www.youtube.com/watch?v=NpbHTtPhWJg\">youtube link1</a></p><p><a href=\"https://www.youtube.com/watch?v=UZuegES_3cM\">youtube link2</a></p><p><a href=\"https://blog.naver.com/osumorao/223200287788\">naver link1</a></p><p><a href=\"https://campaign.naver.com/gabojagojeju/\">naver link2</a></p><p><a href=\"https://www.instagram.com/p/C2JTIgHtN1Z/?igsh=MXdxNTU4ejBzOGRudg==\">instagram link</a></p><p><a href=\"https://www.notion.so/2311856b65034f4282c5c89ba6233706\">notion link1</a></p><p><a href=\"https://rapid-polyester-96c.notion.site/af66aff0239e46e59bcb2aa6eeb15f34\">notion link2</a></p><p><a href=\"https://enjoy.hanatour.com/?gad_source=1\">hanatour link</a></p><p><a href=\"https://www.modetour.com/?utm_source=google_pc&amp;amp;amp;utm_medium=cpc&amp;amp;amp;utm_campaign=0.%EB%B8%8C%EB%9E%9C%EB%93%9C_PC&amp;amp;amp;utm_content=%EB%B8%8C%EB%9E%9C%EB%93%9C&amp;amp;amp;utm_term=%23%EB%AA%A8%EB%91%90%ED%88%AC%EC%96%B4&amp;amp;amp;gad_source=1\">modetour link</a></p><p><a href=\"https://www.tripadvisor.co.kr/Restaurants-g297885-Jeju_Jeju_Island.html\">tripadviser link</a></p><p><a href=\"https://triple.guide/tna/products/eac593ba-adb4-4122-bef3-3cda8f254442\">triple link</a></p><p><br></p><p>         blanks</p><p><br><br><br><br><br><br><br><br><br><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p>spaces</p>`,
  taskTitle: '할 일 제목',
  createdBy: 'demo@gmail.com',
  createdAt: '2024-12-12T01:49:42.223Z',
  modifiedBy: 'demo@gmail.com',
  modifiedAt: '2024-12-12T01:49:42.224Z',
};
