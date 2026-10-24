<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Mandatory Rules for UI Components, Pages, and Layouts

Before creating or modifying any component or page in this repository:
1. **Always read [SEO_AEO_GEO_GUIDE.md](file:///Users/ankitbhavarthe/kairos/shravani/SEO_AEO_GEO_GUIDE.md)** for instructions on SEO, AEO (Answer Engine Optimization), GEO (Generative Engine Optimization), and structured data requirements.
2. **Never hallucinate facts**: Use [siteConfig](file:///Users/ankitbhavarthe/kairos/shravani/src/config/site.ts) as the sole ground truth for Shravani Sutar's resume, metrics, projects, and contact info.
3. **Follow Semantic HTML and Accessibility**: Exactly one `<h1>` per page, proper heading hierarchy (`h1` -> `h2` -> `h3`), semantic landmarks (`<main>`, `<section id="...">`, `<article>`, `<header>`, `<footer>`), and accessible `alt` attributes on all images.
4. **Synchronize Structured Data**: Any new page, project, or FAQ added to UI components must be updated in `src/config/site.ts`, `src/components/seo/JsonLd.tsx`, and `public/llms.txt`.

