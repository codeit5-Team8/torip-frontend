import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json({ iframeAllowed: false });
  }

  // iframe 지원 여부를 확인하는 로직
  const iframeAllowed = await checkIframeSupport(url);

  return NextResponse.json({ iframeAllowed });
}

const checkIframeSupport = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, { method: 'HEAD' });

    // X-Frame-Options 헤더 확인
    const xFrameOptions = response.headers.get('X-Frame-Options');
    if (
      xFrameOptions &&
      (xFrameOptions === 'DENY' || xFrameOptions === 'SAMEORIGIN')
    ) {
      return false;
    }

    // Content-Security-Policy 헤더 확인
    const contentSecurityPolicy = response.headers.get(
      'Content-Security-Policy',
    );
    if (
      contentSecurityPolicy &&
      contentSecurityPolicy.includes('frame-ancestors')
    ) {
      return false; // frame-ancestors가 설정되어 있으면 iframe 사용 불가
    }

    return response.ok; // 그 외의 경우는 OK로 간주
  } catch {
    return false;
  }
};
