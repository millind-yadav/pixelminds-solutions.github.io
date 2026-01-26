import { cn } from '@utils/cn';
import { useMousePosition } from '@hooks';
import { scrollToElement } from '@utils/scroll';
import { Button } from '@components/ui';
import { GeometricShapes, ScrollIndicator, AnimatedBackground } from '@components/features';
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0f1a]">
      {/* Animated Cascading if  Pixel Background */}
      <AnimatedBackground />
      
      {/* Subtle Geometric Overlays */}
      <GeometricShapes mousePosition={mousePosition} />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="hero-card hero-card-float p-10 md:p-14 lg:p-16">
          <div className="hero-card-inner">
            {/* Main Headline */}
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-normal animate-fade-in-up"
            >
              <span className="bg-gradient-to-r from-white via-white to-blue-200 bg-clip-text text-transparent">
                {HERO_CONTENT.headline.split(' Into ')[0]}
              </span>
              <span className="text-white/90"> Into</span>
              <span className="block mt-3 bg-gradient-to-r from-blue-400 via-violet-400 to-blue-400 bg-clip-text text-transparent pb-2">
                {HERO_CONTENT.headline.split(' Into ')[1]}
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className="text-base md:text-lg text-white/70 mb-10 max-w-xl mx-auto leading-relaxed animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              {HERO_CONTENT.subheadline}
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
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
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}

export default Hero;
