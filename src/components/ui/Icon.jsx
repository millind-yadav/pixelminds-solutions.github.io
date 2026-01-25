import { cn } from '@utils/cn';

/**
 * Icon Component
 * 
 * Wrapper for displaying icons with consistent styling.
 * Uses emoji by default but can be extended for icon libraries.
 * 
 * @param {Object} props - Component props
 * @param {string} props.icon - Icon character or emoji
 * @param {string} props.size - Icon size ('sm' | 'md' | 'lg' | 'xl')
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.gradient - Apply gradient background
 */
function Icon({
  icon,
  size = 'md',
  className = '',
  gradient = false,
}) {
  const sizes = {
    sm: 'w-10 h-10 text-lg',
    md: 'w-14 h-14 text-2xl',
    lg: 'w-16 h-16 text-2xl',
    xl: 'w-20 h-20 text-3xl',
  };

  const baseStyles = cn(
    'flex items-center justify-center rounded-2xl',
    gradient && 'bg-gradient-to-br from-brand-500 to-brand-600 text-white',
    !gradient && 'bg-brand-100 text-brand-600',
    'transition-transform duration-300 group-hover:scale-110'
  );

  return (
    <div className={cn(baseStyles, sizes[size], className)}>
      <span>{icon}</span>
    </div>
  );
}

export default Icon;
