import { cn } from '@utils/cn';
import { useMousePosition } from '@hooks';
import { scrollToElement } from '@utils/scroll';
import { Button } from '@components/ui';
import { GeometricShapes, ScrollIndicator } from '@components/features';
import { HERO_CONTENT } from '@constants';

/**
 * Hero Section Component
 * 
 * Full-viewport hero section with animated gradient background,
 * floating geometric shapes, and glassmorphism content card.
 */
function Hero() {
  const mousePosition = useMousePosition({ throttleMs: 16 });

  const handlePrimaryClick = () => {
    scrollToElement('contact', { offset: 80 });
  };

  const handleSecondaryClick = () => {
    scrollToElement('services', { offset: 80 });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-animate">
      {/* Geometric Background Shapes */}
      <GeometricShapes mousePosition={mousePosition} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="glassmorphism rounded-3xl p-8 md:p-16">
          {/* Pre-headline */}
          <p className="text-white/80 text-lg md:text-xl mb-4 tracking-wide font-medium animate-fade-in-up">
            {HERO_CONTENT.preHeadline}
          </p>

          {/* Main Headline */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            {HERO_CONTENT.headline.split(' Into ')[0]} Into
            <span className="block mt-2">
              {HERO_CONTENT.headline.split(' Into ')[1]}
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            {HERO_CONTENT.subheadline}
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            <Button variant="primary" onClick={handlePrimaryClick}>
              {HERO_CONTENT.primaryCta}
            </Button>
            <Button variant="secondary" onClick={handleSecondaryClick}>
              {HERO_CONTENT.secondaryCta}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}

export default Hero;
