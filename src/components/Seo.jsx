import { useEffect } from 'react';
import { business } from '../config/business';

export default function Seo({ title, description }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${business.name}` : `${business.name} — ${business.tagline}`;
    document.title = fullTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta && description) meta.setAttribute('content', description);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', fullTitle);
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription && description) ogDescription.setAttribute('content', description);
  }, [title, description]);

  return null;
}
