'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const ScrollToTop = () => {
  const pathname:any = usePathname();

  useEffect(() => {
    // 경로가 바뀔 때마다 스크롤 맨 위로 이동
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
