import { useState, useEffect } from 'react';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 1920,
    height: 1200,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window?.innerWidth,
        height: window?.innerHeight,
      });
    }
    
    window?.addEventListener("resize", handleResize);
     
    handleResize();
    
    return () => window?.removeEventListener("resize", handleResize);
  }, []);
  if (typeof window !== undefined) {
    return windowSize;
  }
  return {width: 1920, height: 1200};
}

export default useWindowSize;