# Portfolio Memory

## Key Decisions

1. **Editorial aesthetic for portfolio** - Cream background (#faf8f5), coral accent (#e85d4c), Clash Display + Satoshi fonts. Chosen over dark cyber theme for sophistication.

2. **Broadsheet style for CV** - Newspaper editorial layout with Playfair Display serif headlines. Stands out from typical developer CVs while remaining professional.

3. **Static HTML for CV** - Placed in /public/cv.html rather than a Next.js route. Simpler, prints cleanly to PDF, no JS required.

4. **Fontshare over Google Fonts** - Used Fontshare for portfolio (Clash Display, Satoshi) and Google Fonts for CV (Playfair Display, IBM Plex). Both free, high quality.

## Learned Context

- **Framer Motion** works well for scroll-triggered animations with `whileInView`
- **Tailwind CSS 4** uses `@theme` for CSS variables instead of `tailwind.config.js`
- **Vercel aliases** need to be added as project domains, not just deployment aliases
- **Puppeteer PDF generation** requires `printBackground: true` for dark/colored backgrounds

## Tech Stack

- Next.js 15 (App Router)
- Tailwind CSS 4
- Framer Motion
- TypeScript
- Vercel (hosting)

## Gotchas & Warnings

- OG images need to be actual PNG files, not just HTML templates
- Vercel preview URLs have auth protection on team accounts - use production URL for testing
- `.next` folder must be in `.gitignore` - was missing initially

## Reflections

- Three mockup options for CV worked well - gave user real choices
- Editorial/newspaper CV style is memorable and differentiated
- Keeping CV as static HTML was the right call for printability
