# AaltoAI — Events page

Next.js 15 (App Router) · React 18 · TypeScript · Tailwind CSS · shadcn-style components

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

## Structure

- `components/hero.tsx` — full-screen background video (autoplay, muted, looping) with the AALTOAI wordmark. The video URL is at the top of the file.
- `components/site-header.tsx` — top bar with the A\ logo mark and nav (EVENTS highlighted in orange). Responsive with a mobile menu.
- `components/history-carousel.tsx` — "Our History" carousel: cross-fading slides, prev/next arrows, dots, and the next-slide peek on the right edge. Edit the `slides` array and drop your real photos into `/public` (currently grayscale placeholders `history-1..3.svg`).
- `components/events-section.tsx` — "Current Events" grid with mock data in the `events` array; each card has an Active/Past badge, name, description, owner and date.
- `components/ui/badge.tsx` — shadcn-style badge (cva + tailwind-merge), so you can `npx shadcn@latest add ...` more components alongside it.

## Notes

- Brand tokens live in `tailwind.config.ts` (`ink`, `paper`, `accent` orange `#E8501A`) and fonts are Playfair Display / Roboto / Archivo, loaded from Google Fonts in `app/layout.tsx`.
- The background video autoplays only because it is `muted` + `playsInline` — browsers block autoplay with sound.
