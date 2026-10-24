# SEO, AEO & GEO Implementation Guide & Agent Instructions

> **MANDATORY INSTRUCTION FOR AGENTS (Antigravity, Cursor, Copilot, Claude):**  
> Read and adhere strictly to this document BEFORE creating, editing, or refactoring any component, page, or layout in this repository.  
> Every page and component must maintain complete alignment with the SEO (Search Engine Optimization), AEO (Answer Engine Optimization), and GEO (Generative Engine Optimization) standards defined below.

---

## 1. Asset Directory, Naming Conventions & Placement

You need to add your custom branding assets once they are ready. Two supported ways exist in this codebase:

### Method A: Standard Static Assets in `public/assets/` (Already Wired Up)
Place your files in the following folders created in `public/assets/`:

| Asset Purpose | Path in Codebase | Recommended Dimensions | File Format |
| :--- | :--- | :--- | :--- |
| **Browser Favicon** | `public/assets/icons/favicon.ico` | 32x32 or 48x48 | `.ico` |
| **High-Res App Icon** | `public/assets/icons/icon.png` | 512x512 | `.png` (square, transparent or solid) |
| **Apple Touch Icon** | `public/assets/icons/apple-touch-icon.png` | 180x180 | `.png` (square, no transparency) |
| **OpenGraph Image** | `public/assets/images/opengraph-image.png` | 1200x630 (1.91:1) | `.png` or `.jpg` (< 300KB) |
| **Twitter Card Image** | `public/assets/images/twitter-image.png` | 1200x630 (1.91:1) | `.png` or `.jpg` (< 300KB) |

> **Note:** The metadata in `src/app/layout.tsx` is already configured to read these exact file paths. Once you drop them in, they will be immediately active.

### Method B: Next.js App Router File-Based Metadata (Alternative)
Next.js App Router can also automatically detect special metadata files placed directly in `src/app/`:
- `src/app/favicon.ico` → Automatically mapped to `/favicon.ico`
- `src/app/icon.png` (or `icon.svg`) → Automatically generates `<link rel="icon">`
- `src/app/apple-icon.png` → Automatically generates `<link rel="apple-touch-icon">`
- `src/app/opengraph-image.png` → Automatically generates `<meta property="og:image">`
- `src/app/twitter-image.png` → Automatically generates `<meta name="twitter:image">`

---

## 2. Source of Truth: Resume Data & Entity Verification

When designing or populating components, NEVER hallucinate facts. All components must match the resume:

- **Entity Name**: Shravani Sutar
- **Professional Title**: Product Designer | UI/UX Designer | Visual Designer
- **Official Domain**: `https://designftshravani.com`
- **Email**: `digital.shravanisutar@gmail.com`
- **Mobile**: `+91 9653448537`
- **Location**: Navi Mumbai, Maharashtra, India (Belapur / Mumbai Metropolitan Region)
- **LinkedIn**: `https://www.linkedin.com/in/shravanisutar`
- **Bio / Value Proposition**:
  > *"A visual designer working across digital products, e-commerce, brands and campaigns, packaging, and illustration systems, combining with visual experimentation."*
- **Skillset**:
  - **Brand Creative**: Visual System, Brand Identity, Art Direction, Typography, Illustration, Design systems
  - **Research**: A/B Testing, Product Analytics, Cultural Research, Trend Research, User Behavior
  - **Tools**: Figma, Adobe Photoshop, Adobe Illustrator, After effects, Blender, Notion, Claude, Visual Studio Code, Git
- **Experience**:
  - **Kairos** (July 2026 – Present | Freelance, Hybrid): Product and Brand Designer. Partnered with founders and emerging brands to develop visual work adapting creative across products; customer-facing touchpoints for startups and established brands.
  - **PlixLife** (Aug 2021 – Nov 2022 | Lower Parel, Mumbai): Visual Designer Intern. Created 50+ marketing creatives, social media assets, and sales materials to support brand communication and campaign execution; maintained UI consistency, refining interface elements across digital experiences.
  - **Digimedic** (Aug 2024 – Oct 2024): UI/UX Intern. Designed and prototyped key user flows for Digimedic, enhancing task efficiency and user clarity.
- **Education**:
  - **Tilak University** (Belapur, Navi Mumbai | 2022 – 2025): Bachelor of Computer Applications (BCA) | CGPA: 8.4 | Grade: O (Outstanding).
- **Featured Projects**:
  - **Nepali Tales** (*Status: Live*): Led 0–1 product design, food-ordering experience from concept to launch; created brand assets & UI designs; 5K+ visitors and 150+ orders.
  - **Kora - Brand Identity** (*Status: Concept/Case Study*): Brand concept, cultural cues, consumer behavior, warm earthy aesthetic, logo, logo motion, brand assets, packaging.
  - **Redbus Case Study** (*Status: Case Study*): UX research, commuter booking flow optimization, route accessibility, mobile UI clarity.

---

## 3. SEO (Search Engine Optimization) Standards

Every new component or page must adhere to these SEO rules:

1. **Semantic HTML5 Landmarks**:
   - Exactly one `<main id="main-content">` per page.
   - Use `<header>`, `<nav>`, `<section id="...">`, `<article>`, `<figure>`, `<footer>`, `<address>`, `<time>`.
2. **Strict Heading Hierarchy**:
   - Exactly one `<h1>` per page.
   - Must contain the target primary query: e.g. `Shravani Sutar — Product Designer & UI/UX Designer`.
   - Never skip heading levels (`h1` → `h2` → `h3`).
3. **Internal Linking & IDs**:
   - Every major section MUST have a distinct `id` attribute (e.g. `id="about"`, `id="projects"`, `id="experience"`, `id="skills"`, `id="education"`, `id="faq"`, `id="contact"`).
   - Use Next.js `<Link>` for internal links and standard `<a>` with `target="_blank" rel="noopener noreferrer"` for external links.
4. **Images**:
   - Always use `next/image` (`import Image from "next/image"`).
   - Always supply descriptive `alt` text incorporating relevant context (e.g., `alt="Nepali Tales food ordering mobile interface design by Shravani Sutar"`).
   - Use `sizes` attribute for responsive layouts and `priority` only for above-the-fold hero images.

---

## 4. AEO (Answer Engine Optimization) Standards

Answer engines (Perplexity, ChatGPT Search, Claude, Google AI Overviews) extract concise, direct, authoritative answers. When building UI components:

1. **Direct Answer Blocks (TL;DR)**:
   - Provide direct 1–2 sentence factual answers near the top of sections so LLMs can extract answers without hallucination.
2. **Definition Lists (`<dl>`)**:
   - Use `<dl>`, `<dt>`, and `<dd>` for key metadata (e.g. Role, Location, Education, Metrics, Contact). LLMs parse definition lists with 99%+ accuracy.
3. **Structured Q&A (FAQ)**:
   - When creating FAQ components, use semantic `<details>` and `<summary>` tags.
   - Keep answers self-contained and factual.
   - Synchronize any new FAQ items with `siteConfig.faqs` and `src/components/seo/JsonLd.tsx`.
4. **Quantifiable Evidence**:
   - Highlight exact statistics (e.g. "5,000+ visitors", "150+ orders", "50+ marketing creatives", "CGPA 8.4"). Answer engines prioritize verifiable numbers.

---

## 5. GEO (Generative Engine Optimization) Standards

Generative Engine Optimization targets generative multi-modal models to ensure Shravani Sutar is cited accurately in generative answers:

1. **Entity Associations**:
   - Whenever "Shravani Sutar" is mentioned in a component, associate her name with target entity keywords: `Product Designer`, `UI/UX Designer`, `Navi Mumbai`, `0-1 Product Design`, `Design Systems`, `Visual Identity`.
2. **Centralized Configuration**:
   - Store all data in `src/config/site.ts`. Never hardcode duplicate strings across multiple files.
3. **Machine-Readable AI Context**:
   - Update `public/llms.txt` if new projects or career milestones are added.
4. **Schema.org JSON-LD Synchronization**:
   - All projects, credentials, and organizations created in UI components must have a matching entry in `src/components/seo/JsonLd.tsx`:
     - `Person`
     - `ProfilePage`
     - `WebSite`
     - `ItemList` (Projects)
     - `FAQPage`
5. **Local GEO Tags**:
   - The `<head>` includes geographic meta tags: `geo.region: IN-MH`, `geo.placename: Navi Mumbai, Maharashtra, India`, `geo.position: 19.0330;73.0297`, `ICBM: 19.0330, 73.0297`. Any location-based component must reflect Navi Mumbai / Mumbai Metropolitan Region.

---

## 6. Pre-Commit Checklist for Any Future Page or Component

Before completing any task that creates or modifies pages/components, verify:
- [ ] No hardcoded personal or project facts that contradict `src/config/site.ts`.
- [ ] Exactly one `<h1>` exists on the page.
- [ ] All images have descriptive `alt` tags.
- [ ] Section container has a valid `id` anchor for citation linking.
- [ ] Semantic HTML tags used instead of generic nested `<div>`s where appropriate.
- [ ] If a new route is added, it is registered in `src/app/sitemap.ts`.
- [ ] `bun run build` runs with 0 errors and 0 type warnings.
