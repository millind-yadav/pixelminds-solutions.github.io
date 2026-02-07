import { cn } from '@utils/cn';
import { useIntersectionObserver } from '@hooks';
import { Section, SectionHeader } from '@components/ui';
import { AnimatedCounter, AbstractVisual } from '@components/features';
import { ABOUT_CONTENT, STATS } from '@constants';

/**
 * About Section Component
 * 
 * Company overview with animated counters and visual elements.
 */
function About() {
  const [leftRef, isLeftVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [rightRef, isRightVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <Section id="about" background="gray">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div
          ref={leftRef}
          className={cn(
            'transition-all duration-700',
            isLeftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          )}
        >
          <SectionHeader
            subtitle={ABOUT_CONTENT.subtitle}
            title={ABOUT_CONTENT.title}
            align="left"
          />

          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Visual & Stats */}
        <div
          ref={rightRef}
          className={cn(
            'transition-all duration-700 delay-200',
            isRightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          )}
        >
          {/* Abstract Visual */}
          <div className="mb-12">
            <AbstractVisual />
          </div>

          {/* Stats / Highlights Grid (hidden while empty) */}
          {STATS && STATS.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {STATS.map((stat, index) => (
                stat.value !== undefined ? (
                  <AnimatedCounter
                    key={index}
                    end={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                  />
                ) : (
                  <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-lg font-semibold text-slate-800">{stat.label}</div>
                    <div className="text-sm text-gray-500 mt-2">{stat.description}</div>
                  </div>
                )
              ))}
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}

export default About;
