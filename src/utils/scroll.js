/**
 * Smooth scroll to element by ID
 * 
 * @param {string} elementId - ID of the element to scroll to
 * @param {Object} options - Scroll options
 * @param {number} options.offset - Offset from top in pixels
 * @param {string} options.behavior - Scroll behavior ('smooth' | 'auto')
 */
export function scrollToElement(elementId, { offset = 0, behavior = 'smooth' } = {}) {
  const element = document.getElementById(elementId);
  
  if (!element) {
    console.warn(`Element with ID "${elementId}" not found`);
    return;
  }

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior,
  });
}

/**
 * Smooth scroll to top of page
 * 
 * @param {string} behavior - Scroll behavior ('smooth' | 'auto')
 */
export function scrollToTop(behavior = 'smooth') {
  window.scrollTo({
    top: 0,
    behavior,
  });
}

/**
 * Check if element is in viewport
 * 
 * @param {HTMLElement} element - Element to check
 * @param {number} threshold - Percentage of element that must be visible (0-1)
 * @returns {boolean} - Whether element is in viewport
 */
export function isInViewport(element, threshold = 0) {
  if (!element) return false;

  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  const verticalVisible = rect.top <= windowHeight * (1 - threshold) && rect.bottom >= windowHeight * threshold;
  const horizontalVisible = rect.left <= windowWidth * (1 - threshold) && rect.right >= windowWidth * threshold;

  return verticalVisible && horizontalVisible;
}
