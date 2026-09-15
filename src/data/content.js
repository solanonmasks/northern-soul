/* Page content. Lifting it out of the markup keeps the pages readable and
   makes this the obvious place to swap in a CMS later. */

export const homeServices = [
  {
    href: '/services/#kitchens',
    img: '/images/kitchen-island.jpg',
    alt: 'Modern kitchen remodel',
    title: 'Kitchen remodels',
    body: 'The heart of the house, rebuilt around how you actually cook. Layout, cabinetry, stone, appliances and every trade behind the walls.',
  },
  {
    href: '/services/#bathrooms',
    img: '/images/vanity-mirror.jpg',
    alt: 'Bathroom remodel',
    title: 'Bathroom remodels',
    body: 'Spa-quality wet rooms, curbless showers and easy-clean materials — built for comfort now and accessibility later.',
  },
  {
    href: '/services/#microcement',
    img: '/images/microcement-wall-floor.jpg',
    alt: 'Seamless microcement feature wall and flooring',
    title: 'Microcement',
    body: 'Seamless, jointless, waterproof. One continuous surface across showers, floors, feature walls and counters — no grout to fail.',
  },
  {
    href: '/services/#residential',
    img: '/images/bedroom-suite.jpg',
    alt: 'Residential renovation',
    title: 'Residential renovations',
    body: 'Whole homes, secondary suites and short-stay rentals. Custom built-ins, decorative wall coverings and finish carpentry throughout.',
  },
  {
    href: '/services/#commercial',
    img: '/images/gym.jpg',
    alt: 'Commercial fit-out',
    title: 'Commercial build-outs',
    body: 'Health, wellness, retail and food service. Tenant improvements phased around your hours so the doors stay open and staff keep working.',
  },
  {
    href: '/services/#design',
    img: '/images/design-planning.jpg',
    alt: 'Design and planning',
    title: 'Design & planning',
    body: 'Drawings, 3D renderings, finish selections and permit-ready plans — settled before a single wall comes down.',
  },
];

export const selectedWork = [
  { href: '/projects/#alive',    img: '/images/gym.jpg',           alt: 'Alive Fitness and Wellness fit-out', title: 'Alive Fitness & Wellness', meta: 'Commercial' },
  { href: '/projects/#downtown', img: '/images/bedroom-suite.jpg', alt: 'Downtown Vancouver suite',           title: 'Downtown suite',           meta: 'Vancouver' },
  { href: '/projects/#pang',     img: '/images/kitchen-island.jpg',alt: 'Surrey residence remodel',           title: 'Pang residence',           meta: 'Surrey' },
  { href: '/projects/#portcoq',  img: '/images/vanity-mirror.jpg', alt: 'Vanity and ensuite, Port Coquitlam', title: 'Vanity & ensuite',         meta: 'Port Coquitlam' },
];

/* No step numbers — order is positional. That is deliberate. */
export const processSteps = [
  {
    title: 'The walkthrough',
    body: 'Norbert comes out himself, measures the space and tells you straight what is realistic for your budget. An hour, no pitch, nothing to sign.',
    note: 'Written scope in 48 hrs',
  },
  {
    title: 'Design & selections',
    body: 'Michelle takes you through drawings, renderings and a full finish schedule. You see the room before we touch it, and the price is locked to that scope.',
    note: 'Renderings included',
  },
  {
    title: 'Build',
    body: 'One lead on site every day and one schedule covering every trade. Dust walls up before demo, floors protected, site swept before we leave.',
    note: 'Weekly progress update',
  },
  {
    title: 'Handover',
    body: 'We walk the finished space with you, close the deficiency list, and hand over warranties, care notes and touch-up materials.',
    note: 'Deficiencies closed same week',
  },
];

/* PLACEHOLDER — replace with real Google reviews before launch. */
export const testimonials = [
  {
    quote: 'They gutted our kitchen and most of the main floor and we still had a liveable house the whole time. Every Friday we knew exactly what was happening the following week.',
    attribution: 'Dana & Ravi M. · Kitchen & main floor · Burnaby',
  },
  {
    quote: 'Our studio reopened on the date they gave us back in January. For a build-out that size, hitting the date was worth the quote on its own.',
    attribution: 'Alive Fitness & Wellness · Commercial fit-out · Surrey',
  },
  {
    quote: 'The microcement shower is the thing every guest comments on. No grout lines, no mould in the corners, and it still looks like it was poured yesterday.',
    attribution: 'Jo L. · Bathroom remodel · Port Coquitlam',
  },
];

export const faq = [
  {
    q: 'What does a renovation cost?',
    a: 'It moves with scope, layout changes and finish level — a cosmetic bathroom refresh and a gut-to-studs kitchen are different projects. We do not quote renovations over the phone. After a walkthrough you get a written, itemised scope with a fixed price attached to it, usually within 48 hours.',
  },
  {
    q: 'How long will my project take?',
    a: 'Bathrooms typically run a few weeks, kitchens longer, and whole-home or commercial projects are scheduled in phases. Lead times on cabinetry, stone and custom glass usually drive the calendar more than the build itself — which is why selections are locked before demolition starts. You get the schedule in writing with your scope.',
  },
  {
    q: 'Can we live in the house during the build?',
    a: 'Usually, yes. We build temporary dust walls, protect floors and pathways, and phase the work so you keep a functioning kitchen or bathroom wherever possible. For full gut renovations we will tell you honestly if moving out for part of it is the better call.',
  },
  {
    q: 'What actually is microcement?',
    a: 'A hand-trowelled cement-based coating, only a few millimetres thick, applied in layers and sealed. It bonds over existing tile, concrete and drywall, so there is often no tear-out. The result is one continuous surface with no grout lines — ideal for showers, floors, feature walls and counters, and tintable to almost any colour.',
  },
  {
    q: 'Do you handle permits and drawings?',
    a: 'Yes. Design, drawings, renderings and permit coordination are part of our turn-key service, and we work with the municipality on your behalf. If you already have an architect or designer, we are happy to build to their drawings instead.',
  },
  {
    q: 'Can you work around our business hours?',
    a: 'For commercial clients, yes — we phase noisy and disruptive work outside trading hours and keep the rest of the space operational. Tell us your busiest days at the walkthrough and the schedule gets built around them.',
  },
];

export const homeAreas = [
  'Vancouver', 'North Vancouver', 'West Vancouver', 'Burnaby', 'New Westminster',
  'Richmond', 'Coquitlam', 'Port Coquitlam', 'Port Moody', 'Surrey', 'White Rock',
  'Delta & Ladner', 'Langley', 'Maple Ridge', 'Pitt Meadows', 'Abbotsford', 'Mission',
];

export const marqueeItems = [
  'Soul', 'Beauty', 'Craft', 'Design. Build. Evolve.',
  'Licensed & insured', 'Family-run since 2019', 'Greater Vancouver', 'Fraser Valley',
];

/* Services page — six alternating sections.
   `ground` cycles white / concrete / ink / white / concrete / white.
   Microcement is the ink-grounded one: it is the differentiator and should
   read as the feature. `flip` puts the image first. */
export const services = [
  {
    id: 'kitchens',
    chip: 'Kitchens',
    eyebrow: 'Residential',
    title: 'Kitchen remodels',
    body: 'Turn the heart of your home into a kitchen built around how you actually cook and host. We design and construct modern, functional layouts tailored to your lifestyle, then guide you step by step from concept through to the final walkthrough — inside your budget and timeline.',
    includes: ['Layout & space planning', 'Custom cabinetry', 'Stone & surfaces', 'Appliance integration', 'Electrical & plumbing', 'Flooring & finishes'],
    cta: 'Scope my kitchen →',
    img: '/images/kitchen-island.jpg',
    alt: 'Completed kitchen remodel',
    ground: 'paper',
    flip: false,
  },
  {
    id: 'bathrooms',
    chip: 'Bathrooms',
    eyebrow: 'Residential',
    title: 'Bathroom remodels',
    body: 'Spa-like retreats that are comfortable, accessible and genuinely easy to clean. Packages are built around your budget and how long you plan to stay in the house — including aging-in-place details like curbless entries, blocking for grab bars and wider clearances.',
    includes: ['Curbless wet rooms', 'Waterproofing systems', 'Custom glass', 'Heated floors', 'Vanities & storage', 'Aging-in-place details'],
    cta: 'Scope my bathroom →',
    img: '/images/bathroom-shower.jpg',
    alt: 'Completed bathroom remodel',
    ground: 'concrete',
    flip: true,
  },
  {
    id: 'microcement',
    chip: 'Microcement',
    eyebrow: 'Our signature',
    title: 'Microcement walls & flooring',
    body: 'A hand-trowelled, cement-based coating only millimetres thick, bonded over tile, concrete or drywall and sealed to a waterproof finish. No joints, no grout, no tear-out — one continuous surface across showers, floors, feature walls and counters, tinted to your scheme.',
    includes: ['Showers & wet rooms', 'Seamless flooring', 'Feature walls', 'Counters & benches', 'Commercial interiors', 'Colour matching'],
    cta: 'Ask about microcement →',
    img: '/images/microcement-wetroom.jpg',
    alt: 'Seamless microcement wet room with no grout lines',
    ground: 'ink',
    flip: false,
  },
  {
    id: 'residential',
    chip: 'Residential',
    eyebrow: 'Residential',
    title: 'Residential renovations',
    body: 'Transform any room, suite or whole property into a modern custom space that suits your style and your budget. We specialise in the details that make a house feel finished — decorative wall coverings, built-ins, millwork and the carpentry most contractors subcontract out.',
    includes: ['Whole-home remodels', 'Secondary suites', 'Short-stay rentals', 'Built-ins & millwork', 'Basement conversions', 'New builds'],
    cta: 'Scope my project →',
    img: '/images/bedroom-suite.jpg',
    alt: 'Residential renovation',
    ground: 'paper',
    flip: true,
  },
  {
    id: 'commercial',
    chip: 'Commercial',
    eyebrow: 'Commercial',
    title: 'Commercial build-outs',
    body: 'Tenant improvements for small and mid-size businesses in health, wellness, retail and food service. As general contractors we align the build to how the space has to earn — integrating function with modern design, and phasing the disruptive work so your doors stay open.',
    includes: ['Studios & clinics', 'Retail fit-outs', 'Cafés & food service', 'Reception & millwork', 'Phased scheduling', 'Permit coordination'],
    cta: 'Discuss a build-out →',
    img: '/images/gym.jpg',
    alt: 'Commercial fitness studio fit-out',
    ground: 'concrete',
    flip: false,
  },
  {
    id: 'design',
    chip: 'Design',
    eyebrow: 'Before the build',
    title: 'Design & planning',
    body: 'Our designers work with you to develop plans that reflect how you live and what the space has to do. Concepts, detailed drawings, renderings and finish selections — decided and priced before demolition, which is the single biggest reason projects stay on budget.',
    includes: ['Concept development', 'Drawings & layouts', '3D renderings', 'Finish schedules', 'Material sourcing', 'Permit-ready plans'],
    cta: 'Book a design consult →',
    img: '/images/design-planning.jpg',
    alt: 'Design and planning work',
    ground: 'paper',
    flip: true,
  },
];

/* Projects page. `tags` drives the filter chip row.
   When this list moves to a CMS these objects are the shape to model. */
export const projectFilters = [
  { label: 'All work',    value: 'all' },
  { label: 'Commercial',  value: 'commercial' },
  { label: 'Residential', value: 'residential' },
  { label: 'Bathrooms',   value: 'bathrooms' },
  { label: 'Microcement', value: 'microcement' },
  { label: 'Kitchens',    value: 'kitchens' },
];

export const featuredProject = {
  id: 'alive',
  title: 'Alive Fitness & Wellness',
  body: 'A full studio fit-out for a wellness operator — training floor, treatment rooms, reception millwork and change facilities, phased so the business could keep running through the build.',
  img: '/images/gym.jpg',
  alt: 'Alive Fitness and Wellness studio',
  specs: [
    ['Type', 'Commercial fit-out'],
    ['Location', 'Surrey, BC'],
    ['Scope', 'Design, build, millwork'],
    ['Delivery', 'Phased, doors open'],
  ],
};

export const projects = [
  {
    id: 'pang',
    title: 'Pang residence',
    location: 'Surrey, BC',
    body: 'Full-home remodel — kitchen, bathrooms and living areas, with continuous flooring and custom built-ins throughout.',
    img: '/images/kitchen-island.jpg',
    alt: 'Pang residence remodel',
    tags: ['residential', 'kitchens'],
  },
  {
    id: 'downtown',
    title: 'Downtown suite',
    location: 'Vancouver',
    body: 'A short-stay rental rebuilt for turnover — durable finishes, hidden storage and a layout that photographs as well as it lives.',
    img: '/images/bedroom-suite.jpg',
    alt: 'Downtown Vancouver suite',
    tags: ['residential'],
  },
  {
    id: 'portcoq',
    title: 'Vanity & ensuite',
    location: 'Port Coquitlam',
    body: 'A lit-mirror vanity, undermount basin and full wall of storage, rebuilt inside the original footprint.',
    img: '/images/vanity-mirror.jpg',
    alt: 'Vanity and ensuite, Port Coquitlam',
    tags: ['residential', 'bathrooms'],
  },
  {
    id: 'ensuite',
    title: 'Kitchen & pantry',
    location: 'Surrey, BC',
    body: 'Shaker cabinetry, integrated appliances and a reworked pantry run — built for a family that cooks every night.',
    img: '/images/kitchen-shaker.jpg',
    alt: 'Kitchen and pantry remodel',
    tags: ['residential', 'kitchens'],
  },
  {
    id: 'microcement',
    title: 'Microcement wet room',
    location: 'Vancouver',
    body: 'Walls, floor and bench trowelled as one continuous surface, with a linear drain and frameless glass so nothing interrupts the finish.',
    img: '/images/microcement-wetroom.jpg',
    alt: 'Microcement wet room',
    tags: ['residential', 'bathrooms', 'microcement'],
  },
  {
    id: 'wetarea',
    title: 'Shower & wet area',
    location: 'Lower Mainland',
    body: 'Full waterproofing, large-format surfaces and frameless glass, detailed so the whole wet area drains and cleans as one.',
    img: '/images/bathroom-shower.jpg',
    alt: 'Shower and wet area',
    tags: ['residential', 'bathrooms'],
  },
];
