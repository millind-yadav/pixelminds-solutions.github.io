import { useEffect } from 'react';

function ensureMeta(selector, attr, value) {
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    if (selector.startsWith('meta[name')) {
      const name = selector.match(/meta\[name=(?:"|')?(.*?)(?:"|')?\]/)[1];
      el.setAttribute('name', name);
    }
    if (selector.startsWith('meta[property')) {
      const prop = selector.match(/meta\[property=(?:"|')?(.*?)(?:"|')?\]/)[1];
      el.setAttribute('property', prop);
    }
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

export default function Seo({ title, description, url, image }) {
  useEffect(() => {
    if (title) document.title = title;
    if (description) ensureMeta("meta[name='description']", 'content', description);
    if (title) ensureMeta("meta[property='og:title']", 'content', title);
    if (description) ensureMeta("meta[property='og:description']", 'content', description);
    if (url) {
      ensureMeta("meta[property='og:url']", 'content', url);
      let link = document.querySelector("link[rel='canonical']");
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', url);
    }

    if (image) {
      ensureMeta("meta[property='og:image']", 'content', image);
      ensureMeta("meta[name='twitter:image']", 'content', image);
      ensureMeta("meta[name='twitter:card']", 'content', 'summary_large_image');
    }
  }, [title, description, url, image]);

  return null;
}
