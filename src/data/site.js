/* Single source of truth for business details (NAP), nav and shared copy.
   Change it here and it updates across every page and the JSON-LD. */

export const site = {
  name: 'Northern Soul Renovation',
  legalName: 'Northern Soul Renovation Ltd.',
  url: 'https://northernsoulrenovation.com',
  phone: '1-877-455-1811',
  phoneHref: 'tel:18774551811',
  email: 'info@northernsoulrenovation.com',
  hours: 'Mon–Fri, 8am – 5pm',
  city: 'Surrey',
  region: 'BC',
  country: 'CA',
  location: 'Surrey, BC · serving the Lower Mainland',
  serviceArea: 'Greater Vancouver & the Fraser Valley',
  founded: '2019',
  instagram: 'https://www.instagram.com/northernsoulrenovation/',
  facebook: 'https://www.facebook.com/p/Northern-Soul-Renovation-100064149518459/',
  tagline: 'Soul / Beauty / Craft',
  boilerplate:
    'Family-run design–build for residential and commercial renovations across Greater Vancouver and the Fraser Valley. Licensed and insured.',
};

/* Where the estimate form posts.
   Set this to the client's form handler or CRM webhook before launch — e.g. a
   Formspree endpoint, a Netlify function, or your own /api/estimate route.
   While it is empty the form shows an "not yet connected" notice instead of
   silently dropping leads. */
export const formEndpoint = '';

export const nav = [
  { label: 'Services', href: '/services/', key: 'services' },
  { label: 'Projects', href: '/projects/', key: 'projects' },
  { label: 'About', href: '/about/', key: 'about' },
];

export const footerServices = [
  { label: 'Kitchen remodels', href: '/services/#kitchens' },
  { label: 'Bathroom remodels', href: '/services/#bathrooms' },
  { label: 'Residential renovations', href: '/services/#residential' },
  { label: 'Commercial build-outs', href: '/services/#commercial' },
  { label: 'Microcement walls & floors', href: '/services/#microcement' },
  { label: 'Design & planning', href: '/services/#design' },
];

export const footerCompany = [
  { label: 'Our work', href: '/projects/' },
  { label: 'About the family', href: '/about/' },
  { label: 'How a build runs', href: '/#process' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'Service areas', href: '/#areas' },
  { label: 'FAQ', href: '/#faq' },
];

/* The 17 municipalities on the Home service-area grid. */
export const serviceAreas = [
  'Vancouver', 'Surrey', 'Burnaby', 'Richmond', 'Coquitlam', 'Langley',
  'North Vancouver', 'West Vancouver', 'New Westminster', 'Delta', 'White Rock',
  'Port Moody', 'Port Coquitlam', 'Maple Ridge', 'Abbotsford', 'Chilliwack', 'Mission',
];
