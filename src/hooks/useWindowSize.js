import { useEffect, useState } from 'react';

export default function useWindowSize() {
  const [size, setSize] = useState(null);
  useEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

