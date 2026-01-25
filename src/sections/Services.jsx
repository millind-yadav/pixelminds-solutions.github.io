import { cn } from '@utils/cn';
import { useIntersectionObserver } from '@hooks';
import { Section, SectionHeader } from '@components/ui';
import { ServiceCard } from '@components/features';
import { SERVICES_CONTENT, SERVICES } from '@constants';

/**
 * Services Section Component
 * 
 * Displays service offerings in a responsive grid.
 */
function Services() {
  const [headerRef, isHeaderVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <Section id="services" background="white">
      {/* Section Header */}
      <div
        ref={headerRef}
        className={cn(
          'text-center mb-16 transition-all duration-700',
          isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        )}
      >
        <SectionHeader
          subtitle={SERVICES_CONTENT.subtitle}
          title={SERVICES_CONTENT.title}
          description={SERVICES_CONTENT.description}
        />
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SERVICES.map((service, index) => (
          <ServiceCard
            key={service.id}
            icon={service.icon}
            title={service.title}
            description={service.fullDescription}
            delay={index * 150}
          />
        ))}
      </div>
    </Section>
  );
}

export default Services;
