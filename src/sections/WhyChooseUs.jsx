import { Section, SectionHeader } from '@components/ui';
import { FeatureCard } from '@components/features';
import { WHY_US_CONTENT, FEATURES } from '@constants';

/**
 * Why Choose Us Section Component
 * 
 * Displays key differentiators in an alternating layout.
 */
function WhyChooseUs() {
  return (
    <Section id="why-us" background="gray">
      {/* Section Header */}
      <SectionHeader
        subtitle={WHY_US_CONTENT.subtitle}
        title={WHY_US_CONTENT.title}
        description={WHY_US_CONTENT.description}
      />

      {/* Features List */}
      <div className="space-y-16 mt-20">
        {FEATURES.map((feature, index) => (
          <FeatureCard
            key={feature.id}
            number={feature.number}
            title={feature.title}
            description={feature.description}
            reverse={index % 2 !== 0}
            delay={index * 100}
          />
        ))}
      </div>
    </Section>
  );
}

export default WhyChooseUs;
