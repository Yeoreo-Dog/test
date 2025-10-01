import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl.pathname;

  // 크롬 devtools 자동 요청 무시
  if (url === '/.well-known/appspecific/com.chrome.devtools.json') {
    return new NextResponse(null, { status: 204 });
  }

  return NextResponse.next(); // 나머지 요청은 정상 처리
}
