import { useEffect, useRef } from 'react';

// Call callback function when an element outside the referenced element is clicked
function useClickOutside(callback: () => void) {
  const ref = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as HTMLUListElement)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClick);

    return () => document.removeEventListener('mousedown', handleClick);
  }, [ref]);

  return ref;
}

export default useClickOutside;
