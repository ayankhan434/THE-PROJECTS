# INDUS-VALLEY-007

A premium Next.js agency website inspired by the supplied reference design.

## Stack
- Next.js App Router + TypeScript
- Tailwind CSS
- Framer Motion
- next-themes
- lucide-react
- Formspree for contact submissions

## Run
```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Formspree
1. Create a form at https://formspree.io/
2. Copy the endpoint, for example `https://formspree.io/f/xxxxxxxx`
3. Copy `.env.example` to `.env.local`
4. Set:
   `NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxxx`
5. In Formspree, set the destination email to the Gmail/inbox where you want submissions delivered.

## Main customization points
- `data/projects.ts` — portfolio projects
- `data/services.ts` — services
- `data/testimonials.ts` — testimonials
- `data/faq.ts` — FAQs
- `app/globals.css` — colors, grid, image placeholders
- `components/home/Hero.tsx` — hero artwork/content
- `components/contact/ContactForm.tsx` — form fields and Formspree endpoint

## Reference design notes
The implementation keeps the supplied visual direction:
- dark forest-green default + warm cream light theme
- yellow accent
- editorial oversized typography
- thin grid/border system
- rounded work cards
- process timeline
- testimonial slider
- yellow final CTA band
- responsive mobile navigation
- theme switch
- cursor glow
- scroll reveals and hover motion

The portfolio artwork is intentionally CSS-generated so the project runs without external image dependencies. Replace those blocks with real images inside `public/images/projects/` when your final project assets are ready.
