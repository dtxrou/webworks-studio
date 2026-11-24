# Hill Country Coffee

## Live Development Site

**GitHub Pages URL:**  
[https://dtxrou.github.io/webworks-studio/hill-country-coffee/]

# Hill Country Coffee — QA Report

**GitHub Pages URL:**
[https://github.com/dtxrou/webworks-studio/blob/main/hill-country-coffee/docs/qa-report.md]

## WebWorks Studio Client Project

This folder is the **single continuing client project** for the final WebWorks Studio sprints.

Do not create a new copy of the project each week. Continue developing this folder as the project moves from planning into production, quality assurance, and final delivery.

## Client

**Hill Country Coffee**  
A regional Texas coffee company focused on quality coffee, welcoming neighborhood experiences, and connections to the Texas Hill Country.

## Week 13 Status

**Sprint:** Discovery & Planning  
**Role:** Junior Web Designer / Developer

### Current Deliverable

Complete:

`docs/client-project-plan.md`

This week you are deciding **what the site needs to accomplish, why it needs to accomplish it, how its content should be organized, and how the remaining work should be planned**.

**Do not design or build the interface yet.** Formal interface design is not a Week 13 deliverable. Production begins in Week 14, when you will apply the UX, responsive-design, and interface skills developed earlier in WebWorks Studio.

## Project Structure

```text
hill-country-coffee/
├── README.md
├── docs/
│   └── client-project-plan.md
├── assets/
│   ├── client-brief.md
│   ├── personas.md
│   ├── approved-content.md
│   └── asset-notes.md
└── [production files added in later sprints]
```

## Week 13 Planning Flow

Use the supplied evidence to move through this professional planning sequence:

1. **Discovery** — understand the client, goals, users, needs, supplied content, and constraints.
2. **Requirements & Scope** — define what the site must do and separate required work from optional or out-of-scope ideas.
3. **Content Inventory & Organization** — identify the content available, what is missing, and how information should be grouped.
4. **Sitemap / Information Architecture** — turn those content groups into a clear page hierarchy and navigation structure.
5. **Technology Decision** — select an appropriate approach based on project requirements.
6. **Production Plan** — identify milestones, risks, dependencies, backlog priorities, and completion criteria.

## Important

Read the complete client package in `assets/` before completing the Client Project Plan.

Do not invent client facts, prices, locations, services, policies, or content that are not included in the supplied materials.

Missing information should be documented as a **question, assumption, risk, or dependency**.

Your sitemap is a **planning artifact, not a wireframe**. Show pages and hierarchy; do not design page layouts.

# Hill Country Coffee

## WebWorks Studio Final Client Project

**Current Sprint:** Week 14 — Production  
**Role:** Junior Front-End Developer

This repository continues the Hill Country Coffee client project begun in Week 13.

---

## Project Summary

Briefly summarize the client need and the MVP you are building.

[The client needs a modern, responsive site that makes practical visit information easy to find on all devices while communicating a relaxed, distinctly local feel — without clutter, formality, or complexity that's hard to maintain. The MVP I am building is a four-page static site (Home, Menu, Locations, About) built with semantic HTML5, hand-written mobile-first CSS, and a single small JS script for the nav toggle.]

---

## Live Development Site

**GitHub Pages URL:**  
[https://dtxrou.github.io/webworks-studio/hill-country-coffee/]

Test this URL before submitting.

---

## MVP Production Status

Update this section using your Week 13 MVP.

### Complete

- [ All four pages (Home, Menu, Locations, About) built with semantic HTML5 ]
- [ Mobile-first responsive CSS ]
- [ Mobile navigation toggle (hamburger) with keyboard and Escape support ]
- [ Full accessibility implementation ]
- [ Approved content populated for Home, Menu, Locations, and About ]

### In Progress

- [ Locations page — structure and hours table built, awaiting final addresses, phone numbers, and business hours from client ]
- [ Final photography — layout is text-first and fully functional without images; alt text strategy ready for when assets arrive ]

### Known Issues / Dependencies

- [ Final location details (addresses, phones, hours) not yet supplied by client; placeholders marked with [To be confirmed] (Client approved now) ]
- [ Final menu descriptions and prices not supplied; only approved category names and item names are present (Not yet approved) ]
- [ No photography inserted yet; site is designed to be fully functional without imagery (Client approved now) ]

### Intentionally Deferred / Out of Scope

- Online ordering / e-commerce
- Customer accounts / loyalty program
- Online table reservations
- Newsletter signup
- Social media API integrations
- Live inventory / real-time availability
- Blog or news section
- ***

## Technology Used

### HTML

[Semantic HTML5 with proper landmark elements (<header>, <nav>, <main>, <section>, <footer>), exactly one <h1> per page, logical heading hierarchy with no skipped levels,<address> for location info.]

### CSS

[Hand-written, mobile-first CSS with no framework. Custom properties for colors, spacing, and type scale. One media query (700px) to enhance layout at larger widths. All sizing in rem and fluid units to support 200% zoom and 320px reflow without horizontal scrolling.]

### JavaScript

[A small script for the mobile navigation toggle: toggles the .is-open class, updates aria-expanded, closes on link tap, and closes on Escape key with focus returned to the toggle button. No other JavaScript is used.]

### Additional Libraries

[None.]

---

## Accessibility Built Into Production

Confirm what is already implemented before Week 15 QA.

- [ x ] Semantic HTML
- [ x ] Logical heading hierarchy
- [ x ] Keyboard-operable navigation
- [ x ] Visible focus
- [ x ] Accessible color contrast
- [ x ] Meaningful alternative-text decisions
- [ x ] Descriptive links/buttons
- [ x ] Responsive reflow
- [ x ] Accessible states/labels for custom interaction, if used

---

## Week 13 Discovery

The project plan remains here:

[Discovery & Sprint Plan](docs/client-project-plan.md)

---

## Week 14 Production Handoff

Before submitting:

- [ x ] All MVP pages exist.
- [ x ] Approved content is present.
- [ x ] Navigation works.
- [ x ] Responsive layout works at narrow, medium, and wide widths.
- [ x ] Required interaction works.
- [ x ] Major accessibility requirements are implemented.
- [ x ] I used multiple meaningful Git commits.
- [ x ] Backlog status is current.
- [ x ] The published GitHub Pages site works.
- [ x ] Known issues are documented above.
