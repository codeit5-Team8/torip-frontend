import { render, screen } from '@testing-library/react';
import { FormProvider, useForm } from 'react-hook-form';
import NoteTitleInput from 'src/ui/note/NoteTitleInput';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { ReactNode } from 'react';
import { NOTE_PLACEHOLDER } from '@constant/note';

const Wrapper = ({ children }: { children: ReactNode }) => {
  const methods = useForm();
  return <FormProvider {...methods}>{children}</FormProvider>;
};

describe('NoteTitleInput', () => {
  beforeEach(() => {
    render(
      <Wrapper>
        <NoteTitleInput />
      </Wrapper>,
    );
  });

  test('renders input field with placeholder and displays character count', () => {
    const input = screen.getByPlaceholderText(NOTE_PLACEHOLDER.title);
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('');

    const charCount = screen.getByText('0 /');
    expect(charCount).toBeInTheDocument();
  });

  test('updates character count when typing', async () => {
    const input = screen.getByPlaceholderText(NOTE_PLACEHOLDER.title);
    await userEvent.type(input, 'Hello');

    expect(input).toHaveValue('Hello');
    const charCount = screen.getByText('5 /');
    expect(charCount).toBeInTheDocument();
  });

  test('respects maxLength constraint of 30 characters', async () => {
    const input = screen.getByPlaceholderText(NOTE_PLACEHOLDER.title);
    await userEvent.type(input, 'A'.repeat(40));

    expect(input).toHaveValue('A'.repeat(30));
    const charCount = screen.getByText('30 /');
    expect(charCount).toBeInTheDocument();
  });

  test('handles empty input correctly', async () => {
    const input = screen.getByPlaceholderText(NOTE_PLACEHOLDER.title);
    await userEvent.clear(input);

    expect(input).toHaveValue('');
    const charCount = screen.getByText('0 /');
    expect(charCount).toBeInTheDocument();
  });

  test('handles spaces and special characters', async () => {
    const input = screen.getByPlaceholderText(NOTE_PLACEHOLDER.title);
    await userEvent.type(input, '!@#$%^&*()     ');

    expect(input).toHaveValue('!@#$%^&*()     ');
    const charCount = screen.getByText('15 /');
    expect(charCount).toBeInTheDocument();
  });
});
