/**
 * Debounce function
 * 
 * Creates a debounced version of a function that delays invoking
 * until after wait milliseconds have elapsed since the last time
 * the debounced function was invoked.
 * 
 * @param {Function} func - Function to debounce
 * @param {number} wait - Delay in milliseconds
 * @returns {Function} - Debounced function
 */
export function debounce(func, wait = 100) {
  let timeoutId = null;

  const debounced = (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };

  debounced.cancel = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  };

  return debounced;
}

/**
 * Throttle function
 * 
 * Creates a throttled version of a function that only invokes
 * at most once per every wait milliseconds.
 * 
 * @param {Function} func - Function to throttle
 * @param {number} wait - Minimum delay between invocations
 * @returns {Function} - Throttled function
 */
export function throttle(func, wait = 100) {
  let lastTime = 0;
  let timeoutId = null;

  const throttled = (...args) => {
    const now = Date.now();
    const remaining = wait - (now - lastTime);

    if (remaining <= 0) {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      lastTime = now;
      func.apply(this, args);
    } else if (!timeoutId) {
      timeoutId = setTimeout(() => {
        lastTime = Date.now();
        timeoutId = null;
        func.apply(this, args);
      }, remaining);
    }
  };

  throttled.cancel = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  };

  return throttled;
}
