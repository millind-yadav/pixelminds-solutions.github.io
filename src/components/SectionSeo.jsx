import React, { useEffect, useState } from 'react';
import Seo from '@components/Seo';
import { HERO_CONTENT, ABOUT_CONTENT, SERVICES_CONTENT, WHY_US_CONTENT, CONTACT_CONTENT } from '@constants';

function metaForHash(hash) {
  switch ((hash || '').replace('#', '')) {
    case 'about':
      return {
        title: `${ABOUT_CONTENT.title} — PixelMinds Consultancy`,
        description: ABOUT_CONTENT.paragraphs && ABOUT_CONTENT.paragraphs[0]
          ? ABOUT_CONTENT.paragraphs[0]
          : ABOUT_CONTENT.subtitle,
      };
    case 'services':
      return {
        title: `${SERVICES_CONTENT.title} — PixelMinds Consultancy`,
        description: SERVICES_CONTENT.description || SERVICES_CONTENT.subtitle,
      };
    case 'why-us':
      return {
        title: `${WHY_US_CONTENT.title} — PixelMinds Consultancy`,
        description: WHY_US_CONTENT.description || WHY_US_CONTENT.subtitle,
      };
    case 'contact':
      return {
        title: `${CONTACT_CONTENT.title} — PixelMinds Consultancy`,
        description: CONTACT_CONTENT.description || CONTACT_CONTENT.title,
        image: '/images/og-contact.png',
      };
    default:
      return {
        title: `${HERO_CONTENT.headline} — PixelMinds Consultancy`,
        description: HERO_CONTENT.subheadline,
        image: '/og-image.png',
      };
  }
}

export default function SectionSeo() {
  const [meta, setMeta] = useState(() => metaForHash(window.location.hash));

  useEffect(() => {
    function update() {
      const m = metaForHash(window.location.hash);
      setMeta(m);
    }

    window.addEventListener('hashchange', update, { passive: true });
    // Also respond to clicks that set location.hash programmatically
    window.addEventListener('popstate', update, { passive: true });

    // in-page navigation may not always trigger hashchange (e.g., same URL push), so poll on focus
    window.addEventListener('focus', update, { passive: true });

    return () => {
      window.removeEventListener('hashchange', update);
      window.removeEventListener('popstate', update);
      window.removeEventListener('focus', update);
    };
  }, []);

  const canonical = window.location.href;

  return (
    <Seo title={meta.title} description={meta.description} url={canonical} image={meta.image} />
  );
}
