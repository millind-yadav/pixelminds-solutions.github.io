import { useState, useEffect, useRef, useCallback } from 'react';
import { useIntersectionObserver } from './useIntersectionObserver';

/**
 * Custom hook for animated counter
 * 
 * Animates a number from 0 to target value when element becomes visible.
 * 
 * @param {Object} options - Configuration options
 * @param {number} options.end - Target value
 * @param {number} options.duration - Animation duration in ms
 * @param {number} options.delay - Delay before starting in ms
 * @returns {[React.RefObject, number]} - Ref to attach and current count
 */
export function useAnimatedCounter({
  end = 0,
  duration = 2000,
  delay = 0,
} = {}) {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.5 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    
    hasAnimated.current = true;

    const startAnimation = () => {
      let start = 0;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    };

    const timeoutId = setTimeout(startAnimation, delay);

    return () => clearTimeout(timeoutId);
  }, [isVisible, end, duration, delay]);

  return [ref, count];
}

export default useAnimatedCounter;
