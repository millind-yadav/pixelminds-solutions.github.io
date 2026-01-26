import { cn } from '@utils/cn';
import { useIntersectionObserver } from '@hooks';
import { CONTACT_CONTENT, CONTACT } from '@constants';
import ContactForm from '../components/ContactForm';

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
            Contact Us
          </h2>

          <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto leading-relaxed">
            Reach out for project enquiries, partnership opportunities, or to request a consultant. We're here to help you transform your business.
          </p>

          {/* Real Contact Info */}
          <div className="mb-8 text-white/80 text-lg">
            <div className="mb-2">Email: <a href="mailto:info@pixelminds.co.uk" className="underline">info@pixelminds.co.uk</a></div>
            {/*<div className="mb-2">Phone: <a href="tel:+442012345678" className="underline">+44 20 1234 5678</a></div>*/}
            <div className="mb-2">WhatsApp: <a href="https://wa.me/447823853633" target="_blank" rel="noopener" className="underline">Chat on WhatsApp</a></div>
            <div className="mb-2">LinkedIn: <a href="https://linkedin.com/company/pixelminds" target="_blank" rel="noopener" className="underline">Follow us</a></div>
            <div className="mb-2">Business Hours: Mon-Fri 9am-6pm (UK)</div>
            <div className="mb-2">Address: Bristol, UK</div>
            <div className="mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.123456789!2d-0.1278!3d51.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf0baf0b%3A0x123456789abcdef!2sLondon!5e0!3m2!1sen!2suk!4v1640000000000!5m2!1sen!2suk"
                width="100%"
                height="180"
                style={{ border: 0, borderRadius: '12px', marginTop: '8px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PixelMinds Location"
              ></iframe>
            </div>
          </div>

          {/* Request a Consultant Form */}
          <ContactForm title="Request a Consultant" />
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
