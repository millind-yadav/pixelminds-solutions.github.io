import { cn } from '@utils/cn';
import { useIntersectionObserver } from '@hooks';
import { getAnimationDelay } from '@utils/animation';

/**
 * Card Component
 * 
 * Reusable card component with hover effects and animation support.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.animated - Enable scroll animation
 * @param {number} props.animationDelay - Animation delay in ms
 * @param {boolean} props.hoverable - Enable hover effects
 */
function Card({
  children,
  className = '',
  animated = false,
  animationDelay = 0,
  hoverable = true,
  ...props
}) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const baseStyles = cn(
    'bg-white rounded-2xl p-8 shadow-md',
    'transition-all duration-500',
    hoverable && 'hover:-translate-y-2 hover:shadow-2xl cursor-pointer group'
  );

  const animationStyles = animated
    ? cn(
        'transition-all duration-700',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )
    : '';

  return (
    <div
      ref={animated ? ref : undefined}
      className={cn(baseStyles, animationStyles, className)}
      style={animationDelay ? getAnimationDelay(animationDelay / 100) : undefined}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
