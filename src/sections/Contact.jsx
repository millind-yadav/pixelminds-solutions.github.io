import { cn } from '@utils/cn';
import { useIntersectionObserver } from '@hooks';
import { CONTACT_CONTENT, CONTACT } from '@constants';

/**
 * Contact/CTA Section Component
 * 
 * Call-to-action section with gradient background.
 */
function Contact() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section
      id="contact"
      className="py-24 md:py-32 gradient-animate relative overflow-hidden"
    >
      {/* Background Elements */}
      <BackgroundElements />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div
          ref={ref}
          className={cn(
            'transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {CONTACT_CONTENT.title}
          </h2>

          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            {CONTACT_CONTENT.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${CONTACT.email.primary}`}
              className="px-10 py-5 bg-white text-brand-600 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/50 inline-block"
            >
              {CONTACT_CONTENT.primaryCta}
            </a>
            <a
              href={`mailto:${CONTACT.email.info}`}
              className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-brand-600 focus:outline-none focus:ring-4 focus:ring-white/50 inline-block"
            >
              {CONTACT_CONTENT.secondaryCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Background Elements Sub-component
 */
function BackgroundElements() {
  return (
    <>
      <div className="absolute top-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-20 h-20 border border-white/10 rounded-full" />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-white/10 rounded-2xl rotate-45" />
    </>
  );
}

export default Contact;
