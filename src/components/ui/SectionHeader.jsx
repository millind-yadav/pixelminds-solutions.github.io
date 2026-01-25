import { cn } from '@utils/cn';

/**
 * SectionHeader Component
 * 
 * Reusable section header with subtitle, title, and description.
 * 
 * @param {Object} props - Component props
 * @param {string} props.subtitle - Section subtitle
 * @param {string} props.title - Section title
 * @param {string} props.description - Section description
 * @param {string} props.align - Text alignment ('left' | 'center')
 * @param {string} props.className - Additional CSS classes
 */
function SectionHeader({
  subtitle,
  title,
  description,
  align = 'center',
  className = '',
}) {
  const alignStyles = {
    left: 'text-left',
    center: 'text-center',
  };

  return (
    <div className={cn('mb-16', alignStyles[align], className)}>
      {subtitle && (
        <p className="text-brand-600 font-semibold text-sm uppercase tracking-wider mb-4">
          {subtitle}
        </p>
      )}
      {title && (
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          {title}
        </h2>
      )}
      {description && (
        <p className={cn(
          'text-gray-600 text-lg',
          align === 'center' && 'max-w-2xl mx-auto'
        )}>
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
