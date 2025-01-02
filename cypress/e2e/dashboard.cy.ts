// describe('NavTitle Component - E2E', () => {
//   beforeEach(() => {
//     // 대시보드 경로로 이동
//     cy.visit('/');
//   });

//   it('displays the correct title based on the route', () => {
//     // ROUTE_TITLE_MAP['/dashboard']에 해당하는 타이틀이 렌더링되었는지 확인
//     cy.get('nav').should('contain.text', '대시보드');
//   });

//   it('changes title dynamically when the route changes', () => {
//     // 다른 경로로 이동
//     cy.visit('/note-all-trip/1');
//     // ROUTE_TITLE_MAP['/settings']에 해당하는 타이틀 확인
//     cy.get('nav').should('contain.text', '여행 별 노트 모아보기');
//   });
// });

// import AllTodoBox from '@ui/box/AllTodoBox'; // 실제 경로에 맞게 수정

// describe('AllTodoBox Component', () => {
//   beforeEach(() => {
//     // 페이지로 이동
//     cy.visit('/');
//   });

//   it('displays loading skeleton while fetching data', () => {
//     // 로딩 상태일 때 AllTodoBoxSkeleton 컴포넌트가 렌더링 되는지 확인
//     cy.mount(<AllTodoBoxSkeleton />);
//     cy.get('div').should('have.class', 'all-todo-box-skeleton'); // 실제 class명으로 수정
//   });

//   it('displays tasks when data is available', () => {
//     // 데이터가 있을 때 실제 컴포넌트를 렌더링하고 화면에 표시되는지 확인
//     cy.intercept('GET', '/api/v1/torip/task*', {
//       statusCode: 200,
//       body: {
//         result: [
//           { taskSeq: 1, title: 'Task 1', status: 'pending' },
//           { taskSeq: 2, title: 'Task 2', status: 'completed' },
//         ],
//       },
//     }).as('getTasks');

//     cy.wait('@getTasks');

//     // AllTodoBox 컴포넌트를 렌더링하여 UI 확인
//     cy.mount(<AllTodoBox />);

//     // '모든 할 일' 제목과 버튼이 화면에 보이는지 확인
//     cy.contains('모든 할 일').should('be.visible');
//     cy.contains('전체 보기').should('be.visible');

//     // 할 일 목록이 5개 이하로 표시되는지 확인
//     cy.get('.task-item').should('have.length.lte', 5); // 실제 할 일 목록의 클래스명으로 수정 필요
//   });

//   it('displays empty message when no tasks are available', () => {
//     // 빈 결과를 모킹하여 화면에서 빈 메시지가 보이는지 확인
//     cy.intercept('GET', '/api/v1/torip/task*', {
//       statusCode: 200,
//       body: { result: [] },
//     }).as('getEmptyTasks');
//     cy.reload();
//     cy.wait('@getEmptyTasks');

//     // 할 일이 없다는 메시지가 표시되는지 확인
//     cy.contains('등록된 할 일이 없습니다').should('be.visible');
//   });

//   it('navigates to /todo-all when "전체 보기" button is clicked', () => {
//     // 전체 보기 버튼 클릭 시 /todo-all 페이지로 이동하는지 확인
//     cy.contains('전체 보기').click();
//     cy.url().should('include', '/todo-all');
//   });
// });
