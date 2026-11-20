# Taranak — Persian SEO-first landing

A minimal, TypeScript/Next.js App Router public marketing website for **ترانک | Taranak**.

## Content provenance

Based on the Codex audit supplied on 2026-11-17 (repository HEAD `96bf46d`). Its statements are **code-backed capabilities**, not independently tested production behavior. The temporary zero-price trial is based on the product owner's statement; confirm the live catalog before publication. No real screenshots, fixed trial duration, testimonials, offline support, POS/RFID integration or guaranteed AI/search outcomes have been asserted.

## Stack

- Next.js 16.4.2, React 19.2.8, TypeScript
- App Router Server Components; no third-party UI or animation dependencies
- RTL/Farsi semantic HTML, responsive CSS, native HTML FAQ (`details`)
- Metadata API, canonical URLs, robots, sitemap, Open Graph image, factual JSON-LD for `WebSite`/`WebApplication`

## Pages

- `/` — public landing
- `/features/reception` — پذیرش و زمان بازی
- `/features/play-packages` — بسته‌های بازی
- `/features/classes` — کلاس، کارگاه و رزرو
- `/features/accounting` — صندوق، حسابداری و گزارش‌ها
- `/robots.txt`, `/sitemap.xml`, `/icon.svg`, `/og.png`

## Local run

```bash
npm install
cp .env.example .env.local
npm run dev
npm run typecheck
npm run build
```

**No installs or builds were performed automatically in the source repository.** If your environment allows dependency installation, validate the build and inspect the rendered HTML before deploying.

## Integration blocker: public root overlaps the existing app

Per the Codex audit, the original Taranak application currently owns `https://taranak.app/` as a logged-in workspace. **DO NOT replace that route in production blindly.** This package is deliberately isolated.

Two integration patterns are possible:

1. **Recommended after auth audit:** Public landing at `taranak.app/`; authenticated application at `app.taranak.app` (or another stable app URL). Recheck cookies, SameSite, auth callbacks, redirects, Caddy rules, API routing, bookmarks and session security. Update `NEXT_PUBLIC_APP_LOGIN_URL` accordingly.
2. **Keep app paths on apex:** Route only known public paths to the landing Next.js service and keep all app routes working. Updating the existing post-login fallback from `/` to `/reception` may be necessary. Watch `/_next/*` namespace collisions between Next services. Configure reverse proxy routing very carefully.

**This repository does not modify the existing Caddyfile, login flow, API, production database or domain.**

## Environment

`SITE_INDEXABLE=false` on staging (must build separately with the staging value). For the canonical public deploy use `true`. This affects both metadata robots and generated `/robots.txt` and `/sitemap.xml`.

`NEXT_PUBLIC_APP_LOGIN_URL` should be the real, verified **login** endpoint. Defaults to `https://taranak.app/login`, which was present in the Codex audit.

## SEO launch checklist

- [ ] Resolve domain/app routing without interrupting login or operational paths.
- [ ] Confirm production CTA `/login` and onboarding end to end.
- [ ] Ensure unique canonical URL and 301 redirects (HTTPS and preferred host).
- [ ] View initial server HTML: headings, links, descriptions, FAQ, structured data.
- [ ] Validate sitemap, robots and structured data after proxy integration.
- [ ] Set staging `SITE_INDEXABLE=false` and production `SITE_INDEXABLE=true`.
- [ ] Capture genuine screenshots from operational UI with **synthetic** child/family data; replace the labeled conceptual visual only if accurate.
- [ ] Confirm the current trial offer and live catalog; update the pricing section whenever prices or terms change.
- [ ] Add actual company identity, contact method, privacy terms and support conditions after verification.
- [ ] Verify cookie, authorization and personal-data boundaries in the integrated deployment.
- [ ] Measure Core Web Vitals on mobile; tune fonts and actual screenshot media.
- [ ] Verify Search Console, Bing Webmaster Tools and server log visibility for Googlebot and OAI-SearchBot.
- [ ] Submit sitemap and monitor indexing; no guaranteed ranking or AI citations.
- [ ] Conduct real keyword/intent research and adjust page copy accordingly.

## Claims to avoid without new proof

No claim of complete offline availability, native mobile apps, direct POS/printer/RFID connection, full CRM cashback, universal online storefront, legal/tax compliance, full payroll automation, working live payment for software subscriptions, fixed free trial, unverified case studies or savings statistics.

## Source files

- `src/lib/content.ts`: four feature-page content records
- `src/app/page.tsx`: home content + Schema.org data
- `src/app/globals.css`: responsive minimalist styling
- `src/lib/site.ts`: metadata, origin, indexability, login destination
- `docs/CODEX_INTEGRATION_PROMPT.md`: repository-aware integration instructions
