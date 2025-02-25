import { render, screen } from '@testing-library/react';
import { usePathname } from 'next/navigation';
import '@testing-library/jest-dom';
import { ROUTE_TITLE_MAP } from '@constant/path';
import { extractBasePath } from '../../util/common';
import NavTitle from '@ui/common/NavTitle';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

jest.mock('../../util/common', () => ({
  extractBasePath: jest.fn(),
}));

describe('NavTitle', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('페이지 제목이 props로 주어지면 해당 제목을 렌더링', () => {
    render(<NavTitle pageTitleProp="테스트 페이지" />);
    expect(screen.getByText('테스트 페이지')).toBeInTheDocument();
  });

  it('현재 경로의 기본 제목을 렌더링', () => {
    (usePathname as jest.Mock).mockReturnValue('/todo-all');
    (extractBasePath as jest.Mock).mockReturnValue('/todo-all');

    render(<NavTitle />);

    expect(screen.getByText(ROUTE_TITLE_MAP['/todo-all'])).toBeInTheDocument();
  });

  it('추가적인 클래스명이 적용되는지 확인', () => {
    render(<NavTitle className="text-red-500" pageTitleProp="스타일 테스트" />);
    const titleElement = screen.getByText('스타일 테스트');
    expect(titleElement).toHaveClass('text-red-500');
  });
});
