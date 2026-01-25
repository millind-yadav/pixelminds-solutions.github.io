import { cn } from '@utils/cn';

/**
 * Container Component
 * 
 * Wrapper for consistent max-width and padding.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Container content
 * @param {string} props.size - Container max-width ('sm' | 'md' | 'lg' | 'xl' | 'full')
 * @param {string} props.className - Additional CSS classes
 */
function Container({ children, size = 'lg', className = '', ...props }) {
  const sizes = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-screen-2xl',
    full: 'max-w-full',
  };

  return (
    <div
      className={cn('mx-auto px-6', sizes[size], className)}
      {...props}
    >
      {children}
    </div>
  );
}

export default Container;
