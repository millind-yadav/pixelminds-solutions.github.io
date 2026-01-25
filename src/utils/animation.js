/**
 * Generate animation delay style
 * 
 * @param {number} index - Index of the element
 * @param {number} baseDelay - Base delay in milliseconds
 * @returns {Object} - Style object with animation delay
 */
export function getAnimationDelay(index, baseDelay = 100) {
  return {
    animationDelay: `${index * baseDelay}ms`,
    transitionDelay: `${index * baseDelay}ms`,
  };
}

/**
 * Generate stagger animation classes
 * 
 * @param {number} index - Index of the element
 * @returns {string} - Tailwind delay class
 */
export function getStaggerClass(index) {
  const delays = ['delay-0', 'delay-75', 'delay-100', 'delay-150', 'delay-200', 'delay-300', 'delay-500', 'delay-700'];
  return delays[Math.min(index, delays.length - 1)];
}

/**
 * Calculate parallax offset based on scroll position
 * 
 * @param {number} scrollY - Current scroll position
 * @param {number} speed - Parallax speed multiplier
 * @param {number} offset - Starting offset
 * @returns {number} - Parallax offset value
 */
export function getParallaxOffset(scrollY, speed = 0.5, offset = 0) {
  return (scrollY * speed) + offset;
}
