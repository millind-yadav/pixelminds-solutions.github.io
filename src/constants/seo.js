/**
 * SEO Constants
 * Centralized SEO configuration for the website
 */

export const SEO_CONFIG = {
  siteName: 'PixelMinds Consultancy',
  siteUrl: 'https://pixelminds.co.uk',
  
  // Default meta
  defaultTitle: 'PixelMinds Consultancy | AI & Digital Transformation Experts UK',
  defaultDescription: 'UK-based technology consulting firm specialising in AI solutions, cloud architecture, mobile app development, and digital transformation. Transform your business with innovative technology solutions.',
  
  // Social
  twitterHandle: '@pixelmindsuk',
  linkedIn: 'https://www.linkedin.com/company/pixelminds',
  github: 'https://github.com/pixelminds-solutions',
  
  // Images
  ogImage: '/og-image.png',
  logo: '/images/logo.png',
  
  // Contact
  email: 'hello@pixelminds.co.uk',
  
  // Location
  country: 'United Kingdom',
  language: 'en-GB',
};

// Page-specific SEO data
export const PAGE_SEO = {
  home: {
    title: 'PixelMinds Consultancy | AI & Digital Transformation Experts UK',
    description: 'Transform your business with innovative AI solutions, cloud architecture, and digital transformation services. UK\'s trusted technology consulting partner.',
    keywords: 'AI consultancy UK, digital transformation, cloud solutions, technology consulting',
  },
  services: {
    title: 'Our Services | PixelMinds Consultancy',
    description: 'Explore our comprehensive technology services including AI solutions, cloud architecture, mobile app development, and business intelligence.',
    keywords: 'AI services, cloud consulting, mobile development, DevOps, business intelligence UK',
  },
  about: {
    title: 'About Us | PixelMinds Consultancy',
    description: 'Learn about PixelMinds Consultancy - a UK-based technology firm with over a decade of experience in digital transformation.',
    keywords: 'technology consultancy UK, about PixelMinds, digital solutions company',
  },
  contact: {
    title: 'Contact Us | PixelMinds Consultancy',
    description: 'Get in touch with PixelMinds Consultancy for your technology needs. We\'re here to help transform your business.',
    keywords: 'contact PixelMinds, technology consultancy contact, get quote',
  },
};

// Service-specific structured data
export const SERVICE_SCHEMA = [
  {
    name: 'AI & Machine Learning Solutions',
    description: 'Custom AI solutions, predictive analytics, and machine learning models to automate processes and drive insights.',
    provider: 'PixelMinds Consultancy',
  },
  {
    name: 'Cloud Architecture & DevOps',
    description: 'Scalable cloud infrastructure design, migration services, and DevOps implementation for optimal performance.',
    provider: 'PixelMinds Consultancy',
  },
  {
    name: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications built with modern frameworks for iOS and Android.',
    provider: 'PixelMinds Consultancy',
  },
  {
    name: 'Business Intelligence & Analytics',
    description: 'Data-driven insights, dashboard development, and analytics solutions to inform strategic decisions.',
    provider: 'PixelMinds Consultancy',
  },
  {
    name: 'Process Automation',
    description: 'Streamline operations with intelligent automation, RPA, and workflow optimization solutions.',
    provider: 'PixelMinds Consultancy',
  },
  {
    name: 'Custom Software Development',
    description: 'Bespoke software solutions tailored to your unique business requirements and challenges.',
    provider: 'PixelMinds Consultancy',
  },
];
