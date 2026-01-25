import { cn } from '@utils/cn';

/**
 * Button Component
 * 
 * Reusable button component with multiple variants and sizes.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Button content
 * @param {string} props.variant - Button variant ('primary' | 'secondary' | 'dark' | 'ghost')
 * @param {string} props.size - Button size ('sm' | 'md' | 'lg')
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.disabled - Disabled state
 * @param {string} props.href - If provided, renders as anchor
 * @param {Function} props.onClick - Click handler
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  href,
  onClick,
  ...props
}) {
  const baseStyles = cn(
    'inline-flex items-center justify-center rounded-full font-semibold',
    'transition-all duration-300 transform',
    'focus:outline-none focus:ring-4 focus:ring-opacity-50',
    disabled && 'opacity-50 cursor-not-allowed'
  );

  const variants = {
    primary: cn(
      'bg-white text-brand-600 hover:bg-gray-50',
      'shadow-lg hover:shadow-xl hover:scale-105',
      'focus:ring-white'
    ),
    secondary: cn(
      'bg-transparent border-2 border-white text-white',
      'hover:bg-white hover:text-brand-600 hover:scale-105',
      'focus:ring-white'
    ),
    dark: cn(
      'bg-brand-600 text-white',
      'hover:bg-brand-700 shadow-lg hover:shadow-xl hover:scale-105',
      'focus:ring-brand-300'
    ),
    ghost: cn(
      'bg-transparent text-brand-600',
      'hover:bg-brand-50 hover:scale-105',
      'focus:ring-brand-300'
    ),
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg',
  };

  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  // Render as anchor if href is provided
  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
