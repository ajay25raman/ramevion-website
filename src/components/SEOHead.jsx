import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function SEOHead({ title, description }) {
  const location = useLocation();

  useEffect(() => {
    const fullTitle = title 
      ? `${title} | RAMEVION Technologies` 
      : 'RAMEVION Technologies — Engineering the Future';
    document.title = fullTitle;

    const defaultDesc = 'RAMEVION Technologies — Born in a Village. Built for the World. Thoughtful, accessible, and dependable digital solutions from website and mobile app development to custom software.';
    const finalDesc = description || defaultDesc;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = finalDesc;

    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = fullTitle;

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.content = finalDesc;

  }, [title, description, location]);

  return null;
}
