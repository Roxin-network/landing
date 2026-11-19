# Landing page decisions

- The public site describes code-backed Taranak capabilities; production availability and commercial claims require independent confirmation.
- `https://taranak.app` is the intended canonical origin, but the existing application also uses that domain. Resolve routing and authentication before publishing the landing page there.
- Staging builds use `SITE_INDEXABLE=false`; the canonical production build uses `SITE_INDEXABLE=true`.
- Search and AI visibility depend on accessible, useful pages and independent credibility. Structured data and crawler access do not guarantee indexing, citations, or recommendations.
