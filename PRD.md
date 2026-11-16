# PRD — Centre for the Creative Economy website

Status: Draft v1 · Owner: [Product owner] · Design reference: the "Centre for the Creative Economy — Website UI" canvas (design system + 9 pages + 2 templates, desktop and mobile)

> All names, figures, dates, partners and stories in the design are illustrative placeholders. Items in [brackets] need real content or a decision.

## 1. Summary

The Centre for the Creative Economy (CCE) is an Indian knowledge institution. The website is a **national knowledge platform** for research, policy, data, practitioners, partnerships and public engagement, not an institutional brochure. It must feel contemporary, editorial and culturally rooted, and must give equal standing to traditional practitioners (craft clusters, guru–shishya lineages, festivals, indigenous knowledge, informal enterprise) and contemporary industries (film, design, games, music, publishing, digital creators).

## 2. Goals and non-goals

**Goals**

1. Make the Centre's research, data and policy work discoverable and reusable (search, filter, download).
2. Give practitioners visibility through long-form, credited profiles (Creative India Stories).
3. Drive collaboration: partnership enquiries, fellowship/residency applications, consultation responses.
4. Build an audience (newsletter "Taana-Baana") and set up the Observatory data platform launch.
5. Be bilingual-ready: English at launch, Hindi added without redesign.

**Non-goals (v1)**: user accounts, paid products, a full CMS-less editorial workflow, the Observatory data platform itself (only a coming-soon page), regional languages beyond Hindi.

## 3. Users

| Persona                                       | Needs                                                                                          |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Researcher / academic                         | Find reports, datasets, methods; cite; download                                                |
| Policymaker / official                        | Briefs, consultations, evidence they can act on quickly                                        |
| Practitioner (artisan, guru, creator, studio) | See themselves represented; apply to programmes; respond to consultations; find fair-pay tools |
| Industry / platform / technology partner      | Understand partnership routes; enquire                                                         |
| International institution                     | Comparative work, exchanges                                                                    |
| Journalist / public                           | Stories, press contact, events                                                                 |
| Student                                       | Programmes, field schools, reading lists                                                       |

Practitioners may have low bandwidth, older phones and limited English: performance and mobile-first layout are requirements, not polish.

## 4. Information architecture

Top nav: About · Research · Knowledge Hub · Observatory (marked "Soon") · Policy Lab · Stories · Programmes · Partners; plus search, EN/हिन्दी toggle and a prominent **Collaborate** button. Footer: sitemap, newsletter, social links, legal.

| Page                        | Purpose                     | Key content                                                                                                                                                                        |
| --------------------------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Home                        | State purpose, route people | Hero, sector taxonomy, RECI strip (Research/Enable/Convene/Influence), featured research, stories carousel, events, partner logos, newsletter                                      |
| About                       | Trust and governance        | Vision, mission, mandate, leadership, 4-tier advisory structure (incl. Practitioners' Assembly), team grid                                                                         |
| Research                    | Overview                    | 7 clusters: Creative Economy & Public Policy; Creative Entrepreneurship; Creative Technologies & AI; Creative Cities; Culture & Heritage; Creator Livelihoods; Creative Leadership |
| Research cluster (template) | Per-cluster hub             | Leads, key questions, projects, outputs, practitioner voices, team, partners, follow                                                                                               |
| Knowledge Hub               | Library                     | Search + filters by type, theme, year; 6 types: reports, datasets, case studies, policy documents, recommended books, global references                                            |
| Observatory                 | Coming-soon                 | Teaser charts (labelled illustrative), planned modules, roadmap, email signup                                                                                                      |
| Policy Lab                  | Influence                   | Briefs, white papers, consultations (open/closed, deadlines), roundtables                                                                                                          |
| Stories                     | Profiles                    | Filter by practice (artists, artisans, filmmakers, designers, musicians, writers, creators) and region                                                                             |
| Story detail (template)     | Long-form                   | Hero image, byline/credits, drop cap, pull quote, captioned photo sets, Q&A, fact box, related research                                                                            |
| Programmes                  | Engagement                  | Conferences, workshops, fellowships, residencies, lectures, student programmes; card and calendar views; open calls                                                                |
| Partners                    | Collaborate                 | 6 entry paths (academia, government, industry, creators/practitioners, technology, international), process, enquiry form                                                           |

**Sector taxonomy** (shared across Hub, Stories, Research tags): _Living traditions & livelihoods_ — craft & textile clusters; performing arts & guru–shishya lineages; festivals, fairs & ritual economies; indigenous knowledge & ecology; informal cultural enterprise; food & culinary heritage. _Contemporary industries & platforms_ — film & audiovisual; design & architecture; games & animation; music & sound; publishing & literature; digital creators & platforms.

## 5. Functional requirements

**Global**

- FR-1 Responsive, mobile-first; breakpoints 600 / 900 (grid) / 1180 (full nav).
- FR-2 Language toggle EN / हिन्दी. v1 ships English; all strings externalised; Hindi renders with Noto Devanagari fallbacks.
- FR-3 Light theme only (dark mode removed).
- FR-4 Site search (header panel) across Hub, Stories, Events, Policy.
- FR-5 Newsletter signup (footer, Home, cluster pages) with interest selection; double opt-in; unsubscribe link.

**Knowledge Hub** — FR-6 text search; type, theme, year filters combinable; counts reflect other active filters; removable filter chips; empty state with reset; shareable URL state; mobile uses scrolling chips plus selects. FR-7 each resource has type, theme, year, author/source, summary, primary action (download / open / visit external).

**Stories** — FR-8 filter by practice and region with live counts; masonry grid; each story needs photograph(s) with caption and photographer credit; person's consent recorded. FR-9 story template supports pull quotes, Q&A, fact box, related research links.

**Programmes** — FR-10 card and calendar views; type filter shared by both; month navigation; agenda list for month; statuses (open, closing soon, closed); open-calls strip; registration/application link per event.

**Policy Lab** — FR-11 consultation shows status, deadline, days left; response via form, email, audio or video; responses published anonymised on request.

**Partners** — FR-12 selecting a path preselects partner type in the enquiry form; fields: name, organisation, email, partner type, area of interest, message, consent; confirmation state; email routed to partnerships desk; auto-acknowledgement; 5-working-day SLA.

**Observatory** — FR-13 email signup with role; confirmation; placeholder charts must stay labelled "Illustrative sample" until real data exists.

**Carousel (Home)** — FR-14 scroll-snap, previous/next buttons, keyboard and touch operable.

## 6. Design requirements

- Editorial, asymmetric, generous whitespace; not a government look.
- Type: Fraunces (display) + Hanken Grotesk (text); Devanagari partners Noto Serif/Sans Devanagari.
- Palette: indigo, madder, turmeric, lac (+ neem for data/status) on warm neutrals; tokens in `cci.css`.
- Motifs (jaal, twill, rangoli, plaid, miniature border) only as dividers/backgrounds at low opacity; one motif per surface.
- Imagery: real people and places; every photo has caption, name, place and photographer credit. No stock. Placeholder frames in the design show the intended shot.
- Components: buttons, tags, chips, form fields, six cards (research cluster, report, policy brief, story, event, partner) — see design system board.
- Motion: scroll reveals, card lift, image zoom; fully disabled under `prefers-reduced-motion`.

## 7. Non-functional requirements

- **Accessibility**: WCAG 2.1 AA minimum (contrast measured in design system), semantic landmarks, visible 3px focus ring, 44px touch targets, labelled icon buttons, `lang="hi"` on Hindi runs, alt/captions on all images, no information by colour alone.
- **Performance**: LCP < 2.5 s on mid-range Android over 4G; images responsive (AVIF/WebP, lazy below fold); fonts subsetted incl. Devanagari; no layout shift on cards.
- **SEO/sharing**: per-page metadata, Open Graph images, structured data for events and articles, sitemap, RSS for stories and policy.
- **Privacy**: consent for newsletter and enquiries; analytics privacy-friendly and cookie-light; compliant with India's DPDP Act 2023.
- **Content licensing**: research CC BY-NC-SA 4.0 unless stated; photographer credit rules enforced in CMS.
- **Browser support**: last 2 versions of Chrome, Safari, Firefox, Edge; scroll-driven reveals are progressive enhancement.

## 8. Content model (CMS)

Resource (type, themes, sectors, year, authors, files, language, licence) · Cluster · Project · Policy item (brief/white paper/consultation/roundtable, status, deadline) · Story (practice, region, sector, body blocks, images with credits, consent) · Event/Programme (type, dates, venue/online, status, link) · Person (role, group, bio, portrait) · Partner (type, logo, blurb) · Page blocks. Taxonomies: theme (7 clusters), sector (12 above), practice (7), region (6), year.

## 9. Open questions

1. Tenth page: the brief says ten pages but lists nine; is there another (Contact, Media, Careers)?
2. Platform/CMS and hosting (suggest a headless CMS + Next.js/Astro; datasets stored separately).
3. Who moderates consultation responses and publishes them?
4. Data sources and partners for the Observatory; launch date.
5. Hindi scope at launch: nav only, or full translation of Home and About?
6. Photography plan and consent process for story subjects.
7. Event registration: in-house form or third-party ticketing?
8. Legal name, logo and registered address (current mark and wordmark are placeholders).

## 10. Success metrics (suggested; set targets after baseline)

- Resource downloads and Hub search-to-download rate
- Newsletter signups and 90-day retention
- Partnership enquiries and conversion to scoping call
- Consultation responses received; programme applications
- Story read-through and shares
- Share of traffic from mobile; share of Hindi-interface sessions
- Accessibility audit pass; Core Web Vitals "good" on key pages

## 11. Release plan (suggested)

1. **Foundation**: design tokens, components, nav/footer, Home, About, Research + cluster template.
2. **Library & stories**: Knowledge Hub, Stories + template, search.
3. **Engagement**: Programmes, Policy Lab, Partners and forms.
4. **Launch**: Observatory coming-soon, SEO, accessibility audit, content load.
5. **Next**: Hindi, Observatory platform, regional languages.

## 12. Design assets

Canvas pages: Design system · Home (light/dark, desktop/mobile) · About · Research (+cluster) · Knowledge Hub · Observatory · Policy Lab · Stories (+detail) · Programmes · Partners. Shared stylesheet: `cci.css`.
