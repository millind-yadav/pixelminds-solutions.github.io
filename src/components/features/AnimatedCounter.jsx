import { useAnimatedCounter } from '@hooks';

/**
 * AnimatedCounter Component
 * 
 * Counter that animates from 0 to target value when visible.
 * 
 * @param {Object} props - Component props
 * @param {number} props.end - Target value
 * @param {string} props.suffix - Suffix after number (e.g., '+', '%')
 * @param {string} props.label - Counter label
 * @param {number} props.duration - Animation duration in ms
 */
function AnimatedCounter({ end, suffix = '', label, duration = 2000 }) {
  const [ref, count] = useAnimatedCounter({ end, duration });

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-brand-600 mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-600 font-medium">
        {label}
      </div>
    </div>
  );
}

export default AnimatedCounter;
