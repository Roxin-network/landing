# Codex Integration Task — Taranak public landing

You have an existing monorepo with Taranak app and Caddy reverse proxy. I am providing a standalone `taranak-landing` Next.js/TypeScript package. Inspect and integrate it safely.

## Important

- Do not deploy or modify production without explicit approval.
- Before modifying routes, map how `taranak.app/`, `/reception`, `/login`, cookies, session, auth callbacks, service proxy and `/_next` assets work.
- The present app root is an authenticated workspace. Preserve all logged-in flows.
- Treat the audited repository HEAD `96bf46d` as historical context; inspect the current HEAD and reconcile differences.
- Confirm all customer-facing product claims against current implementation. Do not invent prices, trials, hardware integrations, user counts, or performance improvements.

## Steps

1. Map routes and auth/cookie boundaries and propose two safe integration approaches with tradeoffs.
2. Pick the least disruptive SEO-friendly option and document the decision **before making code changes**.
3. Ensure the public home is served with HTML text immediately (no login/JS required), and that protected routes remain protected.
4. Integrate the package, preserving Next metadata, canonical, sitemap, robots, Open Graph and structured data.
5. Set canonical public origin to `https://taranak.app` and configure the real app login URL in env.
6. Confirm all HTML titles, link destinations, Farsi/RTL layout, mobile nav and FAQ keyboard interactions.
7. Run lint/typecheck/build, targeted auth+route tests, a headless crawl and structured data checks.
8. Produce a route comparison table (before vs after) and a rollback plan.
9. Only after deployment approval, implement proxy/auth migration and verify redirects/cookies in a staging environment.

## Acceptance criteria

- `GET https://taranak.app/` responds 200 with visible server-rendered Persian content, canonical and nonempty structured data.
- `/features/*`, `/robots.txt`, `/sitemap.xml`, `/og.png` accessible publicly.
- Authenticated flows do not redirect to the new public home erroneously.
- No private workspace data indexed or exposed.
- No broken internal asset namespace or API routes.
- Staging is noindex, production indexable.
- No placeholder screenshot misrepresented as the live product UI.
- SEO is measured after launch rather than claimed as guaranteed.
