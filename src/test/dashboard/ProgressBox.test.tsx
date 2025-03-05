import { render, screen } from '@testing-library/react';
import { useGetProgress } from '../../hooks/task/useGetProgress';
import '@testing-library/jest-dom';
import MyProgressBox from '@ui/box/MyProgrssBox';

jest.mock('../../hooks/task/useGetProgress', () => ({
  useGetProgress: jest.fn(),
}));

jest.mock('react-chartjs-2', () => ({
  Doughnut: () => <div data-testid="doughnut-chart" />,
}));

describe('MyProgressBox', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('로딩 중일 때 Skeleton이 표시되는지 확인', () => {
    (useGetProgress as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
    });

    render(<MyProgressBox />);
    expect(screen.getByTestId('my-progress-box-skeleton')).toBeInTheDocument();
  });

  it('진행 상황이 올바르게 표시되는지 확인', () => {
    (useGetProgress as jest.Mock).mockReturnValue({
      data: { progress: 75 },
      isLoading: false,
    });

    render(<MyProgressBox />);

    expect(screen.getByText('내 진행 상황')).toBeInTheDocument();
    expect(
      screen.getByText((content) => content.includes('75')),
    ).toBeInTheDocument();
  });

  it('Doughnut 차트가 렌더링되는지 확인', () => {
    (useGetProgress as jest.Mock).mockReturnValue({
      data: { progress: 50 },
      isLoading: false,
    });

    render(<MyProgressBox />);
    expect(screen.getByTestId('doughnut-chart')).toBeInTheDocument();
  });
});
