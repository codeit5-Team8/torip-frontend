import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { FormProvider, useForm } from 'react-hook-form';
import { isEmptyText } from '@util/note';
import { usePopup } from '@hooks/usePopup';
import NoteHeader from '@ui/note/NoteHeader';
import { NOTE_POPUP_MESSAGE } from '@constant/note';

// 외부 함수 모킹
jest.mock('src/util/note', () => ({
  isEmptyText: jest.fn(),
}));

jest.mock('src/hooks/usePopup', () => ({
  usePopup: jest.fn(),
}));

const mockHandleSaveDraft = jest.fn();

// 테스트할 컴포넌트를 감싸는 Wrapper 컴포넌트
const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm(); // react-hook-form의 useForm 훅을 사용하여 폼 상태를 초기화
  return <FormProvider {...methods}>{children}</FormProvider>; // FormProvider로 하위 컴포넌트들에게 폼 상태를 전달
};

describe('NoteHeader', () => {
  const testPopupText = NOTE_POPUP_MESSAGE.saveDraft; // 테스트할 팝업 텍스트

  beforeEach(() => {
    (isEmptyText as jest.Mock).mockReturnValue(false); // 기본값 설정
  });

  const renderNoteHeader = () => {
    render(
      <Wrapper>
        <NoteHeader
          handleSaveDraft={mockHandleSaveDraft}
          popupText={testPopupText}
        />
      </Wrapper>,
    );
  };

  // "임시저장" 버튼 클릭 시 팝업이 열리는지 테스트
  it('should call openPopup when 임시저장 button is clicked', () => {
    const openPopupMock = jest.fn(); // openPopup을 모킹하여 호출 여부를 확인
    (usePopup as jest.Mock).mockReturnValue({ openPopup: openPopupMock }); // usePopup 훅의 반환값으로 openPopup을 설정

    renderNoteHeader(); // NoteHeader 렌더링

    const saveButton = screen.getByText('임시저장'); // "임시저장" 버튼을 찾아서 클릭
    fireEvent.click(saveButton); // 버튼 클릭 이벤트 발생

    // openPopup이 올바르게 호출되었는지 확인
    expect(openPopupMock).toHaveBeenCalledWith({
      popupText: testPopupText,
      showCancelButton: true,
      confirmButtonText: '확인',
      onConfirm: mockHandleSaveDraft, // onConfirm 콜백으로 mockHandleSaveDraft가 설정됨
    });
  });

  // 제목과 내용이 비어 있을 경우 버튼들이 비활성화 되는지 테스트
  it('should disable the buttons when title and content are empty', () => {
    (isEmptyText as jest.Mock).mockReturnValue(true); // isEmptyText 함수가 true를 반환하도록 설정 (타이틀과 내용이 비어 있다고 설정)

    renderNoteHeader(); // NoteHeader 렌더링

    const saveButton = screen.getByText('임시저장');
    const submitButton = screen.getByText('작성하기');

    // 두 버튼 모두 비활성화 상태여야 함
    expect(saveButton).toBeDisabled();
    expect(submitButton).toBeDisabled();
  });

  // 제목과 내용이 비어 있지 않으면 버튼들이 활성화되는지 테스트
  it('should enable the buttons when title and content are not empty', () => {
    (isEmptyText as jest.Mock).mockReturnValue(false); // isEmptyText 함수가 false를 반환하도록 설정 (타이틀과 내용이 비어 있지 않다고 설정)

    renderNoteHeader(); // NoteHeader 렌더링

    const saveButton = screen.getByText('임시저장');
    const submitButton = screen.getByText('작성하기');

    // 두 버튼 모두 활성화 상태여야 함
    expect(saveButton).toBeEnabled();
    expect(submitButton).toBeEnabled();
  });

  // "임시저장" 버튼을 클릭하고 팝업에서 확인을 눌렀을 때 handleSaveDraft가 호출되는지 테스트
  it('should call handleSaveDraft when 임시저장 button is clicked and confirmed', () => {
    const openPopupMock = jest.fn((config) => {
      config.onConfirm(); // 팝업에서 확인 버튼을 누른 것처럼 시뮬레이션
    });
    (usePopup as jest.Mock).mockReturnValue({ openPopup: openPopupMock });
    (isEmptyText as jest.Mock).mockReturnValue(false); // isEmptyText가 false를 반환하여 제목과 내용이 비어 있지 않음을 설정

    renderNoteHeader(); // NoteHeader 렌더링

    const saveButton = screen.getByText('임시저장');
    fireEvent.click(saveButton); // "임시저장" 버튼 클릭

    // handleSaveDraft가 호출되었는지 확인
    expect(mockHandleSaveDraft).toHaveBeenCalled();
  });

  // popupText가 올바르게 렌더링되는지 테스트
  it('should display the correct popup text', () => {
    renderNoteHeader(); // NoteHeader 렌더링

    const saveButton = screen.getByText('임시저장');
    fireEvent.click(saveButton); // "임시저장" 버튼 클릭

    // openPopup이 호출되었을 때 popupText가 올바르게 전달되었는지 확인
    expect(usePopup().openPopup).toHaveBeenCalledWith(
      expect.objectContaining({
        popupText: testPopupText,
      }),
    );
  });
});
