import { cn } from '@utils/cn';
import { scrollToElement } from '@utils/scroll';
import { COMPANY, CONTACT, COPYRIGHT, FOOTER_LINKS } from '@constants';
import { FOOTER_CONTENT } from '@constants';

/**
 * Footer Component
 * 
 * Main footer with company info, links, and social media.
 */
function Footer() {
  const handleLinkClick = (href) => {
    if (href.startsWith('#')) {
      scrollToElement(href.slice(1), { offset: 80 });
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Logo />
            <p className="text-gray-400 leading-relaxed max-w-md">
              {FOOTER_CONTENT.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">
              {FOOTER_CONTENT.quickLinksTitle}
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">
              {FOOTER_CONTENT.contactTitle}
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href={`mailto:${CONTACT.email.primary}`}
                  className="hover:text-white transition-colors duration-300"
                >
                  {CONTACT.email.primary}
                </a>
              </li>
              <li>{COMPANY.location}</li>
            </ul>

            {/* Social Icons */}
            <SocialLinks />
          </div>
        </div>

        {/* Bottom Bar */}
        <BottomBar />
      </div>
    </footer>
  );
}

/**
 * Logo Sub-component
 */
function Logo() {
  return (
    <a href="/" className="inline-block mb-4">
      <img
        src="/images/logo.png"
        alt="PixelMinds Consultancy"
        className="h-10 md:h-12 w-auto brightness-0 invert"
      />
    </a>
  );
}

/**
 * Social Links Sub-component
 */
function SocialLinks() {
  const socials = [
    { name: 'LinkedIn', initial: 'L', url: CONTACT.social.linkedin },
    { name: 'Twitter', initial: 'T', url: CONTACT.social.twitter },
    { name: 'GitHub', initial: 'G', url: CONTACT.social.github },
  ];

  return (
    <div className="flex gap-4 mt-6">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-brand-600 hover:text-white transition-all duration-300"
          aria-label={social.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          {social.initial}
        </a>
      ))}
    </div>
  );
}

/**
 * Bottom Bar Sub-component
 */
function BottomBar() {
  return (
    <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-gray-500 text-sm">
        {COPYRIGHT.text}
      </p>
      <div className="flex gap-6 text-sm text-gray-500">
        {FOOTER_LINKS.legal.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="hover:text-white transition-colors duration-300"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Footer;
