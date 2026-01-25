import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for scroll-based state
 * 
 * Tracks scroll position and provides scroll-related states.
 * Includes debouncing for performance optimization.
 * 
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Scroll threshold for "isScrolled" state
 * @param {number} options.debounceMs - Debounce delay in milliseconds
 * @returns {Object} - Scroll state object
 */
export function useScroll({ threshold = 50, debounceMs = 10 } = {}) {
  const [scrollState, setScrollState] = useState({
    scrollY: 0,
    scrollX: 0,
    isScrolled: false,
    scrollDirection: null,
  });

  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const currentScrollX = window.scrollX;
    
    setScrollState({
      scrollY: currentScrollY,
      scrollX: currentScrollX,
      isScrolled: currentScrollY > threshold,
      scrollDirection: currentScrollY > lastScrollY ? 'down' : 'up',
    });
    
    setLastScrollY(currentScrollY);
  }, [threshold, lastScrollY]);

  useEffect(() => {
    let timeoutId = null;

    const debouncedHandleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(handleScroll, debounceMs);
    };

    // Set initial state
    handleScroll();

    window.addEventListener('scroll', debouncedHandleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [handleScroll, debounceMs]);

  return scrollState;
}

export default useScroll;
