/**
 * Utility function to conditionally join class names
 * 
 * @param  {...(string|boolean|undefined|null)} classes - Class names to join
 * @returns {string} - Joined class names
 * 
 * @example
 * cn('btn', isActive && 'btn-active', 'btn-primary')
 * // => 'btn btn-active btn-primary' (if isActive is true)
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Utility function to merge class names with Tailwind CSS priority
 * Handles conflicting utility classes by using the last one
 * 
 * @param  {...string} inputs - Class strings to merge
 * @returns {string} - Merged class names
 */
export function mergeClasses(...inputs) {
  return inputs
    .filter(Boolean)
    .join(' ')
    .split(' ')
    .filter(Boolean)
    .join(' ');
}

export default cn;
