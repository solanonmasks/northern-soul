# Northern Soul Renovation — website

The rebuilt marketing site for Northern Soul Renovation, built from the
`design_handoff_northern_soul` package. Five pages: Home, Services, Projects,
About and Estimate.

Built with [Astro](https://astro.build). It compiles to plain static HTML —
no server, no database — so it can be hosted anywhere (Netlify, Vercel,
Cloudflare Pages, GitHub Pages, or any web host that serves files).

---

## Running it

You need [Node.js](https://nodejs.org) 18 or newer. Then, in this folder:

```bash
npm install        # once, to download the dependencies
npm run dev        # start a local preview at http://localhost:4321
```

Leave `npm run dev` running while you work — it reloads the page as you save.

```bash
npm run build      # produce the finished site in dist/
npm run preview    # serve dist/ exactly as a host would
```

Everything you upload lives in `dist/` after a build.

---

## Where things live

```
src/
  data/
    site.js        Business details — phone, email, hours, nav, form endpoint
    content.js     Page copy: services, projects, FAQ, testimonials, areas
  styles/
    global.css     Every colour, font size and spacing value (design tokens)
  layouts/
    Base.astro     The page shell: <head>, SEO tags, JSON-LD, header + footer
  components/      Header, Footer, Logo, Mark, FAQ, before/after slider, …
  pages/           One file per page. The filename becomes the URL.
public/
  images/          All photography
  js/motion.js     Scroll reveals, counters, parallax, magnetic buttons
scripts/
  fetch-photos.sh  Pulls the remaining photos off the old Squarespace CDN
```

**Most edits are content, not code.** Changing the phone number, a service
description or an FAQ answer means editing `src/data/site.js` or
`src/data/content.js` — no HTML involved.

---

## Before this goes live

These are the things that still need doing. The first two matter most.

### 1. Connect the estimate form  ⚠️ blocks launch

Lead generation is the whole point of the site, and **the form currently
submits nowhere**. Open `src/data/site.js` and set:

```js
export const formEndpoint = 'https://…';
```

to whatever will receive the leads — a [Formspree](https://formspree.io)
endpoint, a Netlify form handler, or the client's CRM webhook. Until it is
set, the page shows a visible "not connected yet" notice so a broken form
can't quietly go live.

Already built and working: three-step flow, chip selection, a honeypot field
for spam, email and phone validation, partial answers saved to
`sessionStorage`, and a `estimate_submitted` conversion event pushed to
`window.dataLayer` on success.

### 2. Two photos still outstanding

Eight of the ten photo slots are filled with the client's own photography.
**Two still show a dark "PHOTO PENDING" card:**

| Filename | What it needs to be | Used on |
|---|---|---|
| `hero-interior.jpg` | Wide, moodier interior. It sits under a dark gradient with white text over it, so a bright shot will fight the headline. | Home hero (full-bleed) |
| `crew-site.jpg` | Crew at work on site. | Home "A family name on every job site", About band |

Both still exist on the client's old Squarespace CDN — which will stop working
when that subscription lapses. To pull them in, from a machine with normal
internet access:

```bash
bash scripts/fetch-photos.sh
npm run build
```

Or drop your own files in with those exact names. **Replacing any photo is
just dropping a file into `public/images/` with the matching filename** — the
code references filenames, so nothing else changes.

Photos already in place: `kitchen-island.jpg`, `kitchen-shaker.jpg`,
`bathroom-shower.jpg`, `vanity-mirror.jpg`, `bedroom-suite.jpg`, `gym.jpg`,
`design-planning.jpg`, `norbert.jpg`, plus `kitchen-before.jpg`,
`microcement-wetroom.jpg`, `microcement-wall-floor.jpg` and `michelle.png`
from the handoff bundle.

### 3. The before/after slider is not a matched pair

`kitchen-before.jpg` and `kitchen-shaker.jpg` — the two layers of the homepage
slider — are not the same kitchen. Both are shot across an island from a
similar angle, so the composite reads convincingly as a dated kitchen becoming
a finished one, but the rooms differ (the window sits on opposite sides) and
anyone looking closely will notice.

The handoff flagged this as a thing to fix: the before shot should ideally be
taken from the same position as the finished kitchen. A genuine before/after
pair from a past job would make the strongest single piece of proof on the
site. Worth doing when a suitable job comes up; not worth blocking launch.

### 4. Still needed from the client

- **Real Google reviews** — the three homepage testimonials in
  `src/data/content.js` are marked `PLACEHOLDER` and must be replaced.
- **The real Google rating and review count** — the "5.0 Google" tile on the
  homepage is unverified. Confirm it or pull it live from the Places API.
- **A vector version of the mark** for print, vehicle livery and the favicon.
  The current mark is drawn as inline SVG in `src/components/Mark.astro`,
  which is fine for the web but is not a print-ready asset.

### 5. Check the redirect map

`astro.config.mjs` redirects the old Squarespace URLs. Only `/services-4` is
confirmed from the handoff; the rest are the conventional Squarespace slugs.
**Check them against the live old sitemap before switching DNS.**

Astro emits these as meta-refresh pages, which work on any host. If you deploy
somewhere that supports real 301s — Netlify or Cloudflare `_redirects`,
Vercel `vercel.json` — move them there instead; 301s pass on more SEO value.

### 6. Set the domain

`site:` in `astro.config.mjs` is `https://northernsoulrenovation.com`. It
feeds the canonical tags, the sitemap and the Open Graph URLs, so it has to
match the real domain.

---

## The design system

All of it lives at the top of `src/styles/global.css` as CSS custom
properties. Change a value there and it updates everywhere.

**Colour** — Ink `#0B0D10`, Signal Blue `#1B4DE4`, Beam Blue `#7FA0FF`
(on dark grounds only), Concrete `#F2F3F5`, Paper `#FFFFFF`.
Roughly paper 60 / ink 20 / concrete 13 / signal blue 7. Signal Blue is an
accent, never a background wash — the only full-blue areas are the closing
CTA bands.

**Type** — Archivo (variable width axis) for display only: always uppercase,
`font-stretch` 112–125%, weight 700, tight tracking. Instrument Sans for
everything else. Buttons and nav are sentence case with no letter-spacing.

**Three rules that are easy to break by accident:**

1. **Border radius is 0 everywhere.** Sharp corners are core to the identity.
   No rounded cards, no pill buttons.
2. **No monospace, no tracked-out uppercase micro-labels, and no `01 / 02 / 03`
   step numbering.** An earlier revision had them; they were removed on purpose
   because they made the site read as templated. The one exception is
   "RENOVATION" in the logo, letter-spaced at `0.42em` — that is a logotype
   detail, not a label style.
3. **Every animation is wrapped in `prefers-reduced-motion`.** If you add
   motion, add it to that block too.

---

## Accessibility notes

- Skip link, visible focus rings, and `aria-current` on the active nav item.
- The before/after slider has a keyboard-reachable range input behind it, so
  it is not mouse-only.
- The FAQ renders with the first answer already open in the HTML, so the
  content is readable before (and without) JavaScript.
- The project filters and the estimate form both work without JavaScript:
  unfiltered, and as one long form that submits in a single go.

---

## A note on how this was built

The `.dc.html` files in the handoff are design references with every style
inlined — that was a constraint of the tool they were authored in, not an
instruction. This site recreates those designs using a real stylesheet, real
components and a token file, as the handoff asks. The prototypes are worth
opening in a browser when you want to check an interaction's intended feel.
