import { useEffect, useState } from 'react';

export const useResize = () => {
  const [isMobileSize, setIsMobileSize] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileSize(window.innerWidth <= 639);
    };

    handleResize();

    let timeoutId: NodeJS.Timeout;
    window.addEventListener('resize', () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 200);
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return {
    isMobileSize,
    setIsMobileSize,
  };
};
