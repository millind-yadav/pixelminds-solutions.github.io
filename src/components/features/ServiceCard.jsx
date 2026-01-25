import { cn } from '@utils/cn';
import { useIntersectionObserver } from '@hooks';
import { Icon } from '@components/ui';

/**
 * ServiceCard Component
 * 
 * Card component for displaying a service offering.
 * 
 * @param {Object} props - Component props
 * @param {string} props.icon - Service icon (emoji)
 * @param {string} props.title - Service title
 * @param {string} props.description - Service description
 * @param {number} props.delay - Animation delay in ms
 * @param {string} props.className - Additional CSS classes
 */
function ServiceCard({ icon, title, description, delay = 0, className = '' }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={cn(
        'bg-white rounded-2xl p-8 shadow-md',
        'hover:shadow-2xl transition-all duration-500',
        'transform hover:-translate-y-2',
        'group cursor-pointer',
        'border border-transparent hover:border-brand-200',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      <Icon icon={icon} size="lg" gradient className="mb-6" />
      
      <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-brand-600 transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default ServiceCard;
