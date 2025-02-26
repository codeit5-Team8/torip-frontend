import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import DropdownMenu from '@ui/common/DropdownMenu';
import userEvent from '@testing-library/user-event';

describe('DropdownMenu Component', () => {
  const onMenuClick = jest.fn();
  const items = [
    { label: 'option1', onClick: onMenuClick },
    { label: 'option2', onClick: onMenuClick, disabled: true },
  ];

  test('should render correctly', () => {
    const wrapper = render(<DropdownMenu items={items}>menu</DropdownMenu>);
    expect(() => wrapper.unmount()).not.toThrow();
  });

  test('should contain a button', () => {
    const { getByRole } = render(
      <DropdownMenu items={items}>menu</DropdownMenu>,
    );

    const menuButton = getByRole('button', { name: /menu/i });
    expect(menuButton).not.toBeNull();
  });

  test('should open the menu when button is clicked', async () => {
    const { getByRole } = render(
      <DropdownMenu items={items}>menu</DropdownMenu>,
    );

    const menuButton = getByRole('button', { name: /menu/i });
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByText(/option1/i)).toBeNull();

    await userEvent.click(menuButton);

    await waitFor(() => {
      expect(menuButton).toHaveAttribute('aria-expanded', 'true');
      expect(screen.getByText(/option1/i)).toBeInTheDocument();
      expect(screen.getByText(/option2/i)).toBeInTheDocument();
    });
  });

  test('should call onClick event when menu item is clicked', async () => {
    const { getByRole } = render(
      <DropdownMenu items={items}>menu</DropdownMenu>,
    );

    const menuButton = getByRole('button', { name: /menu/i });
    await userEvent.click(menuButton);

    const option1 = await screen.findByText('option1');
    fireEvent.click(option1);

    expect(onMenuClick).toHaveBeenCalledTimes(1);
  });

  it('should have aria-disabled attribute for disabled menu item', async () => {
    const { getByRole } = render(
      <DropdownMenu items={items}>menu</DropdownMenu>,
    );

    const menuButton = getByRole('button', { name: /menu/i });
    await userEvent.click(menuButton);

    const disabledItem = await screen.findByText('option2');
    expect(disabledItem).toHaveAttribute('aria-disabled', 'true'); // Radix UI 스타일 확인
  });
});
