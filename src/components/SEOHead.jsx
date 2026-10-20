import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://ramevion-website-5crv.vercel.app';

export default function SEOHead({ title, description, canonical, noindex = false }) {
  const location = useLocation();

  useEffect(() => {
    const fullTitle = !title
      ? 'RAMEVION Technologies — Web, App & Custom Software Development'
      : title.includes('RAMEVION')
        ? title
        : `${title} | RAMEVION Technologies`;
    document.title = fullTitle;

    const defaultDesc = 'RAMEVION Technologies delivers custom software development, mobile apps, and website development from Bihar for businesses and innovators worldwide.';
    const finalDesc = description || defaultDesc;

    // Determine normalized canonical URL without trailing slashes (except root)
    const normalizedPath = location.pathname === '/' ? '/' : location.pathname.replace(/\/+$/, '');
    const canonicalUrl = canonical || `${BASE_URL}${normalizedPath}`;

    // Update or create meta[name="description"]
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = finalDesc;

    // Update or create meta[name="robots"]
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.name = 'robots';
      document.head.appendChild(metaRobots);
    }
    metaRobots.content = noindex ? 'noindex, nofollow' : 'index, follow';

    // Update or create link[rel="canonical"]
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = canonicalUrl;

    // Update or create Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = fullTitle;

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.content = finalDesc;

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.content = canonicalUrl;

  }, [title, description, canonical, noindex, location]);

  return null;
}
