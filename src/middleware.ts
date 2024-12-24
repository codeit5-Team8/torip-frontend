import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(req: NextRequest) {
  const secret = process.env.NEXTAUTH_SECRET;
  const token = await getToken({ req, secret });

  if (!token) {
    return NextResponse.redirect(new URL('/signin', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|signin|signup).*)'],
};
