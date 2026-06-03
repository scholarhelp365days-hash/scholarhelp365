# Scholar Help 365 — Landing Page

Production-ready single-page website. Pure HTML, CSS, JS — no build step, no frameworks.

## Files
- `index.html` — full page (all sections, meta, Schema.org JSON-LD, OG/Twitter cards)
- `styles.css` — mobile-first responsive styles
- `script.js` — nav, services/FAQ rendering, animated counters, form→WhatsApp, modals
- `logo.png` — brand logo (also used as favicon + OG image)
- `robots.txt` — crawler directives
- `sitemap.xml` — sitemap (update `lastmod` on edits)

## Deploy to Vercel
1. Put all files in one folder (flat structure — already done).
2. Run `vercel` in the folder, or drag-drop the folder at vercel.com → New Project.
3. No framework preset needed — choose "Other". It serves as a static site.
4. Point your domain `scholarhelp365.com` in Vercel → Settings → Domains.

## After deploy — SEO checklist
- Submit `sitemap.xml` in Google Search Console.
- Verify the FAQ rich result via Google's Rich Results Test.
- Confirm OG image renders (Facebook Sharing Debugger / Twitter Card Validator).
- The OG/Twitter image points to `https://scholarhelp365.com/logo.png`; for best social previews, consider adding a 1200×630 `og-image.png` and swapping the two `og:image`/`twitter:image` URLs.

## Editing content
- **Services**: edit the `services` array in `script.js`.
- **FAQs**: edit the `faqs` array in `script.js` AND the matching FAQ JSON-LD block in `index.html` (keep them in sync for rich snippets).
- **Stats**: edit `data-target` / `data-suffix` attributes in `index.html`.
- **WhatsApp number**: change the `WA` constant in `script.js` and the `wa.me/918447711925` links in `index.html`.
