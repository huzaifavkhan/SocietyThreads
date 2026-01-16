Society Threads ([societythreads.co.uk](https://societythreads.co.uk/))
===============
Custom apparel storefront for university societies and student organizations, built with Vite + React, TypeScript, Tailwind CSS, and shadcn/ui.

Overview
--------
Society Threads is a student-led site that lets societies design and order premium merch with no upfront cost or minimum order requirements. The experience highlights product showcases, testimonials, FAQs, and streamlined calls-to-action to book a call or submit a custom order request. The contact form is wired to EmailJS for quick responses, and SEO metadata is handled per page for shareable links.

Features
--------
- Hero with rotating gallery, strong CTAs for design requests and Calendly booking.
- Custom order modal and contact form powered by EmailJS validation and status messaging.
- Product, process, and testimonials sections tailored for student societies.
- Responsive layout with Tailwind + shadcn/ui components and Lucide icons.
- Per-page SEO via `react-helmet-async` and sensible social share defaults.

Tech Stack
----------
- React 18, TypeScript, Vite.
- Tailwind CSS with shadcn/ui (Radix primitives) and Framer Motion accents.
- React Router, TanStack Query.
- EmailJS for contact delivery.

Getting Started
---------------
1) Prerequisites: Node.js 18+ and npm.  
2) Install dependencies:
```
npm install
```
3) Run the dev server:
```
npm run dev
```
4) Lint the project:
```
npm run lint
```
5) Build for production (also runs `generate-pages.js`):
```
npm run build
```
6) Preview the production build:
```
npm run preview
```

Project Structure
-----------------
- `src/pages`: Route-level pages (`Index`, `AboutUs`, policies, 404).
- `src/components`: UI sections (Hero, Products, HowItWorks, Testimonials, FAQ, Contact) plus shadcn/ui primitives under `components/ui`.
- `public`: Static assets for hero imagery, logos, and product photography.
- `generate-pages.js`: Post-build page generation helper.

Configuration Notes
-------------------
- EmailJS keys and template IDs are set in `src/components/Contact.tsx`; replace them with your own service/template/public key before launch.
- Update SEO defaults in `src/components/SEO.tsx` and page-level props to match your domain (currently `societythreads.co.uk`).
