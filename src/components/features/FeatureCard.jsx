import { cn } from '@utils/cn';
import { useIntersectionObserver } from '@hooks';

/**
 * FeatureCard Component
 * 
 * Card component for displaying a feature/value proposition.
 * 
 * @param {Object} props - Component props
 * @param {string} props.number - Feature number badge
 * @param {string} props.title - Feature title
 * @param {string} props.description - Feature description
 * @param {boolean} props.reverse - Reverse layout direction
 * @param {number} props.delay - Animation delay in ms
 */
function FeatureCard({ number, title, description, reverse = false, delay = 0 }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={cn(
        'flex flex-col md:flex-row items-center gap-8',
        reverse && 'md:flex-row-reverse',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        'transition-all duration-700'
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex-shrink-0">
        <div className="w-20 h-20 bg-gradient-to-br from-brand-600 to-brand-400 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-white text-3xl font-bold">{number}</span>
        </div>
      </div>
      
      <div className={cn('flex-1', reverse && 'md:text-right')}>
        <h3 className="text-2xl font-bold text-gray-800 mb-3">
          {title}
        </h3>
        <p className="text-gray-600 text-lg leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default FeatureCard;
