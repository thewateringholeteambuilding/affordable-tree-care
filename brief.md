# Demo Brief — Affordable Tree Care

**Business:** Affordable Tree Care
**Niche:** tree-service
**Address:** 2460 Chestnut Ave, Kansas City, MO 64127
**Phone:** (816) 457-4612
**Google Maps:** https://maps.google.com/?cid=14100426447436165908
**Rating:** 4.9 / 154 reviews
**Style:** industrial
**Palette:** forest
**Category:** Home-Services
**Demo path:** `Demos/Home-Services/Affordable Tree Care/Demo 1/`
**Slug:** `affordable-tree-care-demo`
**Built:** 2026-05-27

---

## Design thesis

Industrial x forest is the natural fit for tree service: heavy equipment and chainsaw work (industrial) meets the organism being worked on (forest). Dark green bg grounds the site in the craft. Gold accent gives warmth and legibility without cheapening the dark palette. Oswald uppercase headings read as workmanlike authority. Archivo body is legible and neutral.

The hero splits the page: copy left, working arborist photo right. This avoids the centered-text anti-pattern and gives the site an asymmetric editorial feel. No floating cards beyond the single Google rating badge.

Stats are used selectively: 4.9 / 154 / Free. Not padded to round numbers. No animated counters.

---

## References used

### 1. Davey Tree Expert Company (davey.com)

**URL:** https://www.davey.com
**Type:** Direct competitor (large national tree service)

Observations:
1. Photography leads everywhere — no iconography-only sections. Every service page opens with a real crew photo.
2. Service cards use prose descriptions, not benefit headlines. "We do X" rather than "Experience the difference of X."
3. The testimonial section includes reviewer's city, which grounds the social proof geographically.
4. CTAs are consistently phone-first, not form-first, matching how tree service customers actually behave (call before clicking).
5. Section spacing is generous but not extravagant — creates breathing room without the `py-32` anti-pattern.
6. No "About Us" language in the hero. It's purely service and proof.

**Apply to this build:** Phone CTA above the fold. Real crew photos in every section. Testimonials include city attribution. Prose service descriptions.

### 2. Bartlett Tree Experts (bartlett.com)

**URL:** https://www.bartlett.com
**Type:** Direct competitor (premium national tree service)

Observations:
1. Dark palette works extremely well for tree service — green+dark makes trees feel like the subject, not a metaphor.
2. No icon grids. Every services section uses photography as the primary visual element.
3. "Free consultation" CTA is persistent across all pages. Consistent conversion action, not varied page-by-page.
4. The "about" copy focuses on credentialing (ISA certification, years of practice) not values language.
5. Service page layout alternates image left / text right, then text left / image right — creates visual rhythm without being predictable.
6. Google review count and rating displayed prominently in the hero.

**Apply to this build:** Dark forest palette confirmed as correct choice. Alternating service layout in Services.tsx. Review count in hero. ISA pruning standards mentioned in services copy. "Free estimate" as the consistent CTA.

### Cross-reference design thesis

Davey represents the functional benchmark (what a serious tree service site does right). Bartlett demonstrates that a dark palette is credible and effective in this niche, not just a style choice. Both sites avoid icon-heavy design and lead with real photography. The industrial x forest pairing on this demo synthesizes both: Bartlett's dark authority with Davey's direct service descriptions. The key divergence from both is the zero-radius industrial style — Bartlett and Davey both use soft radii, but for a Kansas City price-competitive service business, the harder edges feel more honest about what the work actually is.

---

## Verified photos (HEAD-checked 200)

| Slot | Unsplash ID | Alt description (from NAPI) |
|------|-------------|---------------------------|
| Hero (arborist climbing) | photo-1626828476637-5bd713ef9f22 | man in red shirt climbing tree |
| CTA band (tree yard) | photo-1591091421731-22bf7044c1cb | brown tree on green grass field |
| Worker close (chainsaw) | photo-1684332666088-f35b252b5aca | man cutting tree with chainsaw |
| Crew machinery | photo-1748073813267-af0cd7fddbaa | tree workers operating heavy machinery |
| Large yard tree | photo-1695462935702-05bb400b81ba | large tree in lush green field |
| Residential yard | photo-1590385547262-2e33b0785dcb | tree near brown house |
| Yard/field | photo-1653751749028-d071e5209218 | grassy field with trees and hills |
| Logs post-removal | photo-1615836671441-cc13250c2158 | brown and black wood logs |
| Stacked timber | photo-1596628930480-540b65f6f0a6 | stacked timber and log pile |

All IDs verified via NAPI alt_description match to intended slot subject and HEAD-checked 200 before source files were written.

---

## Build standards checklist

- [x] `seo-search-console-meta` — placeholder in index.html
- [x] `seo-sitemap-xml` — public/sitemap.xml
- [x] `seo-robots-txt` — public/robots.txt
- [x] `seo-page-titles-unique` — each page has unique title (via nav routes)
- [x] `seo-meta-descriptions` — in index.html
- [x] `seo-schema-org-localbusiness` — JSON-LD in index.html
- [x] `seo-schema-org-organization` — JSON-LD in index.html
- [x] `social-og-tags` — all five OG tags present
- [x] `social-twitter-card` — all four twitter tags present
- [x] `social-theme-color` — matches forest bg hsl(150,22%,10%) = ~#141f1a
- [x] `ux-on-brand-404` — NotFound.tsx with site fonts/colors
- [x] `ux-mobile-responsive-375` — fluid layouts, Tailwind responsive grid
- [x] `ux-contact-form-spam-defense` — honeypot field `company_website`
- [x] `build-no-lorem-ipsum` — all copy is real
- [x] `build-no-placeholder-phone` — real phone (816) 457-4612 used throughout
- [x] `build-no-placeholder-address` — real address 2460 Chestnut Ave
- [x] `build-image-src-canonical-format` — all Unsplash URLs use canonical photo-ID format
- [x] `build-no-lovable-cruft` — fresh build, no Lovable artifacts
- [x] `build-no-default-wrangler-name` — name is `affordable-tree-care-demo`
- [x] `build-honeypot-canonical-pattern` — `company_website` field
- [x] `build-no-console-log` — none in src/
- [x] `build-no-todos` — none
- [x] `deploy-cloudflare-workers-config` — wrangler.jsonc present with SPA handling
- [x] `ops-wrangler-config` — name matches slug pattern
- [x] `deploy-ga4-placeholder` — G-XXXXXXXXXX with DEPLOY STEP: marker
- [x] `wrangler-account-id-explicit` — account_id b48e2aa941d2c698a4a0a9b0153c568b
- [x] `build-reference-grounded` — 2 references documented above
- [x] `a11y-skip-link` — SkipLink.tsx rendered first in AppShell
- [x] `a11y-main-tabindex` — `<main id="main" tabIndex={-1}>`
- [x] `a11y-legal-route` — /legal route with Legal.tsx
- [x] `a11y-cookie-banner` — CookieBanner.tsx in root layout
- [x] `a11y-aria-live-form-feedback` — `role="status" aria-live="polite"` on contact form
- [x] `a11y-footer-legal-link` — single `/legal` entry in footer legalLinks
- [x] `copy-no-em-dashes` — none in marketing copy
- [x] `copy-no-section-symbol-decorator` — none
- [x] `copy-no-not-just-x-but-y` — none
- [x] `copy-no-backwards-comparison` — none
- [x] `copy-no-mainland-comparison` — none (MO, not Hawaii context)
- [x] `copy-no-triadic-pre-footer-cta` — CTA is "Free Estimate. Same Week." not triadic pattern
- [x] `copy-no-virtue-overuse` — no repeated virtue phrases
- [x] `mock-no-replace-markers` — all data is real (lead data provided)
- [x] `niche-google-maps-embed` — map iframe on Home.tsx and Contact.tsx
- [x] `cohort-component-formula-variety` — NO 4-step numbered process, NO Since-XXXX kicker; uses alternating editorial layout instead
- [x] `build-multi-form-coverage` — single form, single honeypot (matched)
