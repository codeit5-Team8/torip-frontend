import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { FormProvider, useForm } from 'react-hook-form';
import { isEmptyText } from '@util/note';
import { usePopupStore } from 'src/store/popup.store';
import NoteHeader from '@ui/note/NoteHeader';
import { NOTE_POPUP_MESSAGE } from '@constant/note';

// 외부 함수 모킹
jest.mock('src/util/note', () => ({
  isEmptyText: jest.fn(),
}));

jest.mock('src/store/popup.store', () => ({
  usePopupStore: jest.fn(),
}));

const mockHandleSaveDraft = jest.fn();

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm();
  return <FormProvider {...methods}>{children}</FormProvider>;
};

describe('NoteHeader', () => {
  const testPopupText = NOTE_POPUP_MESSAGE.saveDraft;

  beforeEach(() => {
    (isEmptyText as jest.Mock).mockReturnValue(false);
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

  it('should call showPopup when 임시저장 button is clicked', () => {
    const showPopupMock = jest.fn();
    (
      usePopupStore as jest.MockedFunction<typeof usePopupStore>
    ).mockReturnValue({
      showPopup: showPopupMock,
    });

    renderNoteHeader();

    const saveButton = screen.getByText('임시저장');
    fireEvent.click(saveButton);

    expect(showPopupMock).toHaveBeenCalledWith({
      popupText: testPopupText,
      showCancelButton: true,
      confirmButtonText: '확인',
      onConfirm: mockHandleSaveDraft,
    });
  });

  it('should display the correct popup text', () => {
    const showPopupMock = jest.fn();
    (
      usePopupStore as jest.MockedFunction<typeof usePopupStore>
    ).mockReturnValue({
      showPopup: showPopupMock,
    });

    renderNoteHeader();

    const saveButton = screen.getByText('임시저장');
    fireEvent.click(saveButton);

    expect(showPopupMock).toHaveBeenCalledWith(
      expect.objectContaining({
        popupText: testPopupText,
      }),
    );
  });
});
