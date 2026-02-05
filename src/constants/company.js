/**
 * Brand and Company Configuration
 *
 * Centralized configuration for company branding, contact information,
 * and other business-related constants.
 */

export const COMPANY = {
  name: 'PixelMinds Consultancy',
  shortName: 'PixelMinds',
  tagline: 'Innovating Digital Experiences',
  description:
    'A UK-based technology consulting firm dedicated to transforming how businesses operate in the digital landscape.',
  founded: 2016,
  location: 'United Kingdom',
  website: 'https://pixelminds.co.uk',
  logo: '/images/logo.png',
};

export const CONTACT = {
  email: {
    primary: 'info@pixelminds.co.uk',
    support: 'support@pixelminds.co.uk',
    info: 'info@pixelminds.co.uk',
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/pixelmindsconsultancy/',
    twitter: 'https://twitter.com/pixelminds',
    github: 'https://github.com/pixelminds-solutions',
  },
};

export const STATS = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 10, suffix: '+', label: 'Years Experience' },
];

export const COPYRIGHT = {
  year: new Date().getFullYear(),
  get text() {
    return `© ${new Date().getFullYear()} PixelMinds Consultancy. All rights reserved.`;
  },
};
