import { useEffect, useState } from 'react';

const KAKAO_MAP_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&libraries=services&autoload=false`;

export const useKakaoLoader = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    if (window.kakao && window.kakao.maps) {
      setLoaded(true);
      return undefined;
    }

    const script = document.createElement('script');
    script.src = KAKAO_MAP_URL;
    script.async = true;
    script.onload = () => {
      if (window.kakao?.maps?.load) {
        window.kakao.maps.load(() => {
          setLoaded(true);
        });
      }
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return loaded;
};
