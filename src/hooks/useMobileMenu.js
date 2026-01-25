import { useState, useCallback } from 'react';

/**
 * Custom hook for managing mobile menu state
 * 
 * Handles mobile menu toggle with body scroll lock.
 * 
 * @returns {Object} - Menu state and handlers
 */
export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, []);

  const toggle = useCallback(() => {
    if (isOpen) {
      close();
    } else {
      open();
    }
  }, [isOpen, open, close]);

  return { isOpen, open, close, toggle };
}

export default useMobileMenu;
