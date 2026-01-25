import { cn } from '@utils/cn';
import { useIntersectionObserver } from '@hooks';

/**
 * Section Component
 * 
 * Wrapper component for page sections with consistent styling.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Section content
 * @param {string} props.id - Section ID for navigation
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.background - Background variant ('white' | 'gray' | 'gradient')
 * @param {boolean} props.animated - Enable scroll animation
 */
function Section({
  children,
  id,
  className = '',
  background = 'white',
  animated = false,
  ...props
}) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-slate-50',
    gradient: 'gradient-animate',
    dark: 'bg-slate-900',
  };

  const animationStyles = animated
    ? cn(isVisible ? 'opacity-100' : 'opacity-0', 'transition-opacity duration-700')
    : '';

  return (
    <section
      id={id}
      ref={animated ? ref : undefined}
      className={cn(
        'py-24 md:py-32',
        backgrounds[background],
        animationStyles,
        className
      )}
      {...props}
    >
      <div className="max-w-7xl mx-auto px-6">
        {children}
      </div>
    </section>
  );
}

export default Section;
