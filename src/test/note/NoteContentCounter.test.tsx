import { render, screen } from '@testing-library/react';
import NoteContentCounter from '@ui/note/NoteContentCounter';
import { FormProvider, useForm } from 'react-hook-form';
import { removeHtmlTags, removeSpaces } from 'src/util/note';
import '@testing-library/jest-dom';

// 외부 함수 모킹
jest.mock('src/util/note', () => ({
  removeHtmlTags: jest.fn() as jest.Mock,
  removeSpaces: jest.fn() as jest.Mock,
}));

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm();
  return <FormProvider {...methods}>{children}</FormProvider>;
};

describe('NoteContentCounter', () => {
  it('should render the correct content lengths with spaces and without spaces', () => {
    (removeHtmlTags as jest.Mock).mockReturnValue('This is a test content');
    (removeSpaces as jest.Mock).mockReturnValue('Thisisatestcontent');

    render(
      <Wrapper>
        <NoteContentCounter />
      </Wrapper>,
    );

    expect(screen.getByText(/공백 포함 : 총 \d+자/)).toBeInTheDocument();
    expect(screen.getByText(/공백 제외 : 총 \d+자/)).toBeInTheDocument();
  });

  it('should handle empty content correctly', () => {
    (removeHtmlTags as jest.Mock).mockReturnValue('');
    (removeSpaces as jest.Mock).mockReturnValue('');

    render(
      <Wrapper>
        <NoteContentCounter />
      </Wrapper>,
    );

    expect(screen.getByText(/공백 포함 : 총 0자/)).toBeInTheDocument();
    expect(screen.getByText(/공백 제외 : 총 0자/)).toBeInTheDocument();
  });
});
