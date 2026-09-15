import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://northernsoulrenovation.com',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },

  /* Redirect map from the old Squarespace site.
     Astro emits these as meta-refresh pages, which work on any static host.
     If you deploy somewhere that supports real 301s (Netlify `_redirects`,
     Vercel `vercel.json`, Cloudflare `_redirects`), move these there instead —
     301s pass on more SEO value than a meta refresh.

     VERIFY THIS LIST against the live Squarespace sitemap before launch;
     `/services-4` is confirmed, the rest are the conventional slugs. */
  redirects: {
    '/services-4': '/services/',
    '/services-1': '/services/',
    '/our-services': '/services/',
    '/portfolio': '/projects/',
    '/our-work': '/projects/',
    '/gallery': '/projects/',
    '/about-us': '/about/',
    '/our-story': '/about/',
    '/contact': '/estimate/',
    '/contact-us': '/estimate/',
    '/get-a-quote': '/estimate/',
    '/free-estimate': '/estimate/',
  },
});
