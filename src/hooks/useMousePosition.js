import { useState, useEffect } from 'react';

/**
 * Custom hook for mouse position tracking
 * 
 * Tracks mouse position and provides normalized values for parallax effects.
 * Includes throttling for performance optimization.
 * 
 * @param {Object} options - Configuration options
 * @param {number} options.throttleMs - Throttle delay in milliseconds
 * @returns {Object} - Mouse position state
 */
export function useMousePosition({ throttleMs = 16 } = {}) {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
    normalizedX: 0, // -0.5 to 0.5
    normalizedY: 0, // -0.5 to 0.5
  });

  useEffect(() => {
    let lastTime = 0;

    const handleMouseMove = (event) => {
      const now = Date.now();
      
      if (now - lastTime < throttleMs) return;
      lastTime = now;

      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;

      setMousePosition({
        x: clientX,
        y: clientY,
        normalizedX: (clientX / innerWidth - 0.5),
        normalizedY: (clientY / innerHeight - 0.5),
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [throttleMs]);

  return mousePosition;
}

export default useMousePosition;
