# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build
npm run lint     # ESLint
npm run start    # Start production server
```

No test framework is configured.

## Architecture

- **Next.js 16.2.4** with App Router, React 19, TypeScript strict mode
- **Tailwind CSS v4** using `@theme` inline in `app/globals.css` (no tailwind.config file — colors/fonts/radius defined as CSS variables in OKLch color space)
- **shadcn/ui** with "radix-nova" style, configured in `components.json`. Add components via `npx shadcn@latest add <component>`. UI components live in `components/ui/`.
- **Lucide React** for icons
- **Path alias:** `@/*` maps to project root (e.g., `@/components/ui/button`, `@/lib/utils`)

### File Structure

- `app/page.tsx` — homepage, imports and stacks section components
- `app/layout.tsx` — root layout, loads Geist + Geist Mono fonts via `next/font/google`
- `app/globals.css` — Tailwind v4 theme (colors, radius, font families)
- `app/components/` — homepage section components (Hero.tsx, Problem.tsx, HowItWorks.tsx, etc.)
- `components/ui/` — shadcn/ui primitives (Button, Accordion, etc.)
- `lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)

### Key Conventions

- Server components by default; use `"use client"` only for state/animation
- Single-file components, PascalCase naming
- Class merging: always use `cn()` from `@/lib/utils` for conditional Tailwind classes
- No inline custom CSS — define in Tailwind theme or use utility classes
- SVG only for illustrations (no stock images, no .webp icons)
- No emojis in user-facing copy

### Copy Rules (Critical)

- The word **"score"** must never appear in user-facing copy (legal risk — use "verified rental history," "payment history," "tenant track record" instead)
- No hype words: revolutionary, game-changing, seamless, effortless, powerful, all-in-one, cutting-edge, innovative
- No "AI-powered" unless attached to a specific shipping feature
- No credit bureau names (Equifax/TransUnion) until partnership is signed
- English only at launch

---

# joindory.com — Landing Page

This file is the primary context document for the joindory.com marketing site. Read it before generating any code or copy. Treat it as authoritative for project conventions.

This is a landing site, not the product. The product (the actual SaaS) exists separately and is being modernized in parallel. This brief is for the marketing site only.

---

## What Dory is

Dory is a property management platform for small-to-mid landlords in Quebec and Ontario. Landlords manage properties, units, tenants, rent collection, balances, and maintenance in one place. The platform's distinguishing feature: **on-time rent payments help tenants build credit toward homeownership**. Landlords get a more committed, better-screened tenant base. Tenants get a tangible upside from paying rent, instead of just paying it.

The site we're building is the public-facing marketing page that introduces this to landlords (primary audience) and signals the tenant-side benefit (secondary, but central to the differentiation).

---

## Audience and structural call

**Primary audience:** Landlords. Specifically, small-to-mid landlords in Quebec and Ontario with 2–50 doors. Duplex/triplex owners, small portfolio investors, family-run operators. NOT institutional REITs, NOT 200+ unit operators.

**Secondary audience:** Tenants — but they don't drive sign-ups directly. They're the *reason landlords sign up*. The pitch is: "Use Dory and you get tenants who treat rent payment seriously because their financial future depends on it."

This means the homepage:
- Headline and primary CTA target landlords
- A dedicated section explains the tenant credit-building loop, framed as a landlord advantage ("better tenants, better behavior, longer tenancies")
- A small tenant-facing CTA exists ("Are you a tenant? Learn more →") but is not prominent

Day-one acquisition target: landlords. Tenants follow when their landlord invites them.

---

## The wedge promise

Pick the headline from this direction (these are starting points — generate 5-8 options for review, don't lock in):

- "Manage your rentals. Help your tenants own a home one day."
- "Run every door. Build a tenant base that actually pays."
- "Modern property management for landlords who want better tenants."
- "Collect rent. Track every door. Help your tenants build credit while you're at it."

**The conceptual structure of the headline:**
- Lead clause: a clear, specific landlord benefit (manage rentals, collect rent, run every door)
- Second clause: the tenant credit-building hook, framed as a landlord upside

This is what makes Dory different from every other property management tool in 2026. Lead with it.

---

## What "verified rental history" means and how to talk about it

Dory tracks objective, receipt-backed facts about every tenancy on the platform: payments made, payments late, lease term, lease renewal, maintenance ticket history, lease violations issued in writing, damage claims at move-out (with documentation). When a tenant moves to a new Dory landlord, that history is portable and visible to the next landlord with the tenant's consent.

**Critical copy rule: the word "score" never appears in marketing copy, the homepage, the FAQ, or anywhere customer-facing.**

Instead, we say:
- "Verified rental history"
- "Tenant track record"
- "Payment history"
- "On-time payment record"
- Specific facts: "12 on-time payments across 2 properties," "Lease violations: 0," "Last rent paid: on time"

Why this matters: a numeric score on a tenant invites discrimination claims under the Quebec Charter and Ontario Human Rights Code. A list of objective, receipt-backed facts is defensible. The product internally can compute whatever signal it wants — the marketing copy and the landlord-facing UI must surface facts, not numbers.

**Inputs we DO talk about:**
- Payment timeliness (objective)
- Lease compliance (objective, must be documented)
- Maintenance request volume and resolution (objective)
- Length of tenancy and renewal history (objective)
- Damage claims at move-out, with photos (objective)

**Inputs we DO NOT talk about:**
- "Cleanliness" — too subjective
- "Good behavior" — too subjective
- "Communication style" — too subjective
- Anything that sounds like a personality assessment

If the founder wants to track soft signals internally for product reasons, that's a separate decision. It does not appear in marketing copy.

---

## The tenant credit-building loop — how to frame it

The promise: when a tenant pays rent on time through Dory, those payments help build their credit score with Canadian credit bureaus, which contributes to their future ability to qualify for a mortgage.

**What we can say on the site (today, before a credit bureau partner is signed):**
- "Your tenants' on-time rent payments help build their credit history."
- "Rent that builds toward something. Tenants who pay through Dory build credit toward their own home."
- "Verified rent reporting that helps your tenants qualify for a mortgage one day."

**What we cannot say yet (until a credit bureau partner is named):**
- "Reports to Equifax / TransUnion" (don't claim this until a contract exists)
- Specific score impact numbers ("boost your credit by 30 points")
- Any guarantee of mortgage qualification

**Default-on vs. opt-in (legal flag):** The founder wants credit reporting on by default. This likely needs to be explicit opt-in at the tenant onboarding step under PIPEDA and Quebec Law 25 — credit bureau reporting requires informed consent. Marketing copy can describe it as "automatic" or "built-in," but the actual sign-up flow needs a clear consent checkbox. Surface this for legal review before launch.

---

## Audience pain and positioning

**Geography:** Quebec and Ontario at launch. The site should feel native to both markets.

- **Quebec terminology to use:** TAL (Tribunal administratif du logement), avis de modification du bail, Section G of the lease, Régie du logement (former name still commonly used).
- **Ontario terminology to use:** LTB (Landlord and Tenant Board), N1 (notice of rent increase), N4 (notice of non-payment), Residential Tenancies Act (RTA), Ontario rent increase guideline (published annually).

Don't dump terminology into the homepage. Use it in FAQ answers, in the demo block, in microcopy. The point is to signal local credibility, not to lecture.

**Their pain (small landlord, 2–50 doors):**
- Stitching together Stripe, spreadsheets, email, Google Drive, and text messages to run their rentals
- Quebec rent increase notice timing (3–6 months before lease end depending on lease term)
- Ontario N1 notice and the annual guideline
- Section G disclosure compliance (Quebec)
- Non-payment processes (formal demand → TAL/LTB application)
- No way to tell if a new tenant applicant has actually paid rent on time before
- Existing PM software (Yardi, AppFolio, Buildium) is too expensive, too complex, and built for 200+ door operators

**Their objection to current options:** "Too expensive, too complex, built for someone with way more units than I have, doesn't help me find better tenants."

Dory's wedge: **simple, modern, dual-jurisdiction, gives landlords a real recruitment edge through the credit-building feature**.

---

## What the product actually does on day one

These features are live in the product today and can be talked about confidently in marketing copy:

- Create properties and units
- Assign tenants to units
- Collect rent (Stripe integrated for landlord payouts; tenants pay via card, ACH; cash payments tracked manually)
- View tenant balances and ledger
- Track vacancies
- Create and manage maintenance tickets
- Tenant communication (in-app messaging — confirm scope with founder before highlighting)

**Mention with care:** verified rental history (live as a concept, but the credit bureau reporting partnership is TBD)

**DO NOT mention on the homepage at launch (roadmap, not shipping):**
- Tenant marketplace / "apply to other Dory listings"
- Centris listing through realtor license
- AI features (only mention specifically if a real, shippable AI feature exists at launch — not as a general "AI-powered platform" buzzword)

If the founder wants a "What's next" or "Roadmap" footer mention, that's the place for those features. Not the main page.

---

## Pricing

**Model:** Freemium + tiered subscriptions + AI add-on upsell.

- **Free tier:** For small landlords (1-3 doors). Core features: properties, units, tenants, rent collection, basic balance tracking. No AI features, possibly limited maintenance tickets.
- **Paid tiers:** Per-door pricing or flat monthly. Tiers unlock more doors, advanced features, priority support. Specific numbers TBD.
- **AI add-on:** Monthly upsell on top of any paid tier. Specific AI features are TBD — this needs to be a real, named capability before it goes on the site (e.g., "AI-drafted notices," "AI maintenance triage," "AI tenant screening summary"). Generic "AI-powered" without specifics gets cut.
- **Tenant-side fees:** Possible cut of rent processing as a tenant-side fee. Not the lead pricing message — landlord-facing pricing is the headline.

For the homepage at launch:
- Either show a simple 3-tier pricing block (Free / Pro / AI add-on) with placeholder numbers the founder approves before launch
- OR omit pricing entirely and use waitlist messaging ("Founding pricing locked for early users") — this is the safer call until pricing is finalized

Default to the second option unless pricing is locked at brief-write time.

---

## Conversion goal

**Primary CTA everywhere:** "Join the waitlist."

- No live self-serve signup at launch
- No "book a demo" CTA at launch (we're not at the high-touch sales stage yet)
- A small tenant-facing secondary path may exist ("Are you a tenant? →") but routes to a separate explainer or just the same waitlist with a "I'm a tenant" radio option

**On the waitlist form:**
- Name
- Email
- City (helps gauge launch geography)
- Role: Landlord / Tenant / Both / Other
- If landlord: "How many doors do you have?" (1-3, 4-10, 11-25, 26-50, 50+)
- Optional: "What's the biggest pain you'd want Dory to solve?" (free text — this is product research gold)

After submit: confirmation state, no redirect. Optional: a one-line "Tell a landlord/tenant about Dory" share prompt.

---

## Voice and tone

Match Brikli's level of confidence and specificity, but with original phrasing. Don't lift their words.

- **Founder-direct, but not corny.** Avoid "we built this because" hero copy. Just say what the thing does.
- **Specific over generic.** "Track rent across every unit" is OK. "Effortless property management" is banned. Every claim should reference a specific feature, action, jurisdiction, form, or outcome.
- **Quebec/Ontario-aware.** Use real industry terms when they're the actual term. TAL, LTB, N1, avis de modification.
- **No hype words.** Banned: revolutionary, game-changing, next-generation, seamless, effortless, powerful, all-in-one, cutting-edge, innovative, AI-powered (unless attached to a specific shipping feature).
- **No emojis** in copy or as bullets.
- **Confident, not breathless.** Short sentences. Strong verbs. Periods. Not exclamation marks.
- **English only at launch.** Bilingual is post-launch. Don't add a language toggle UI yet.

---

## Stack

- **Next.js 15** with App Router, TypeScript
- **Tailwind CSS** for styling
- **shadcn/ui** for components (Button, Card, Input, Select, Accordion, Form, Dialog, Tabs)
- **Framer Motion** for subtle scroll-fade animations and the live demo block
- **Lucide React** for icons
- **Form handling:** waitlist posts to Resend, Formspree, or a Vercel Edge Function
- **Deploy to Vercel** (free tier handles this)
- **Domain:** joindory.com (currently registered at Hostinger; DNS will point to Vercel)

### Conventions
- Single-file components where possible
- All components in `app/components/` or `components/` named in PascalCase
- Sections of the homepage as separate components: `Hero.tsx`, `Problem.tsx`, `HowItWorks.tsx`, `TenantBenefit.tsx`, `LiveDemo.tsx`, `WhyDory.tsx`, `FAQ.tsx`, `Waitlist.tsx`, `Footer.tsx`
- Page composition in `app/page.tsx` — just imports and stacks the sections
- Server components by default; mark `"use client"` only where state or animation requires it
- Tailwind config defines the color system, typography, spacing — no inline custom CSS unless absolutely necessary

---

## Visual design

Modern, hand-built, not template. Brikli is the structural reference for visual quality (clean typography, generous whitespace, hand-drawn SVG illustrations, custom interactive elements). Match the level of polish, not the literal design.

- **Color system:** Define in Tailwind config. Pick a primary brand color that's NOT the generic SaaS blue (#3F8CFF) the old site uses. Suggested directions: deep teal, warm slate, near-black with a single accent. Avoid pure black (use #0a0a0a or #111827). Generate 3-5 color palette options for founder review before locking.
- **Typography:** One sans-serif from `next/font/google`. Suggested: Inter, Geist, Manrope, or General Sans. Big hero headlines (60-80px desktop). Comfortable body text (16-18px). Generous line-height.
- **Imagery:** Inline SVG only. No stock illustrations. No clipart. No `.webp` icon sets. If we need a "dashboard mockup" in the hero, hand-draw it as SVG. If we need icons, use Lucide.
- **Backgrounds:** Plain or with a single subtle gradient. No mesh gradients, no aurora effects, no glassmorphism.
- **Animations:** Subtle fade-up on scroll for sections. The live demo block can have orchestrated animation (file ingest, payment processing visual, etc.) — keep the rest calm.
- **Mobile-first:** Test every section at 375px before considering a section done.

---

## Page structure

### 1. Hero
- Top nav: Dory logo, anchor links (How it works, Why Dory, FAQ), CTA button "Join the waitlist"
- Two-column layout on desktop, stacked on mobile
- Left: headline + subhead + primary CTA + secondary anchor CTA
- Right: hand-drawn SVG illustration of a stylized property dashboard showing 3-4 doors with status indicators (rent paid, lease ending, maintenance ticket open). NOT a screenshot.
- Headline: landlord-targeted, with the tenant credit-building hook in the second clause (see "The wedge promise" section)
- Sub-headline: 1-2 sentence explainer naming the actual features (collect rent, manage units, verified tenant history)
- Primary CTA: "Join the waitlist"
- Secondary: "See how it works" (anchor link)

### 2. The problem
A short section that names the actual landlord experience. 3-4 specific pain points as a list with brief 1-2 sentence descriptions. Examples: "Your rent collection lives in Stripe, your lease lives in Word, your maintenance lives in text messages." This earns trust by showing we understand the work.

### 3. How it works
Three steps for the landlord:
- **01 — Add your properties.** Add units, assign tenants, upload leases.
- **02 — Collect rent your way.** Stripe-powered. Tenants pay by card or ACH. Cash payments tracked manually.
- **03 — Run every door.** Balances, vacancies, maintenance tickets, communication — one place.

Each step gets a short paragraph and a small SVG illustration or Lucide icon.

### 4. The tenant difference (the differentiator section)
This is the Dory-specific section that sets us apart from every other PM tool. Frame it as a landlord benefit, not a tenant feature.

Headline direction: "Better tenants, by design." or "The only PM platform where rent payments help tenants own a home one day."

The section explains:
- Tenants on Dory are paying rent that builds their credit history
- This changes their behavior — on-time payments matter more, tenancies last longer, communication improves
- Landlords see verified rental history when a tenant applies (with their consent)
- The result: a tenant base that's more invested, more transparent, and more likely to behave like future homeowners

Include a small visual showing the loop: Tenant pays rent → on-time payment recorded → credit history builds → tenant moves toward homeownership → landlord gets a tenant who treated this place like an investment in their future.

Avoid any specific bureau name until a partnership is signed. Avoid the word "score" entirely.

### 5. Live demo / product preview
This is the showpiece. Two options — pick one based on what the founder's product UI looks like:

Option A (preferred if the existing UI is clean enough): an animated mockup of the Dory dashboard, showing 3 doors with live status updates (rent collected, maintenance ticket created, tenant message arrived). Hand-built in SVG/HTML, not a screenshot.

Option B (fallback if the existing UI isn't ready): a simpler animated illustration of "what Dory replaces" — a cluttered desk with Stripe, spreadsheet, email, Word doc lease, text messages, transitioning to a clean Dory dashboard.

This section is where modern design quality matters most. Spend extra design attention here.

### 6. Why Dory (vs. spreadsheets, vs. enterprise PM software)
A simple comparison block with three columns:
- Spreadsheets + Stripe + Email
- Enterprise PM (Yardi, AppFolio, Buildium)
- Dory

Rows: setup time, monthly cost (rough), tenant credit reporting, Quebec/Ontario forms, designed for small landlords, modern UI

Don't trash the alternatives. Just show where each fits. Dory's column should clearly win on simplicity, modern UX, and the credit-reporting differentiator.

### 7. FAQ
Real questions a Quebec or Ontario landlord would ask. Build with shadcn `Accordion`. Examples:

- Does Dory work in Quebec and Ontario?
- How does the credit reporting work for tenants?
- Do tenants have to opt in to credit reporting?
- What payment methods can tenants use?
- How is rent paid out to me?
- What forms does Dory generate? (TAL avis de modification, LTB N1, etc.)
- How do you handle non-payment situations?
- Can I import existing tenants and leases?
- Is my tenant data secure? Where is it stored?
- What happens after the waitlist?
- How much does it cost?

### 8. Waitlist
- Heading: a confident, short statement ("Join the waitlist." or "Be among the first.")
- Subhead: what they get (founding pricing, early access, direct line to the founder)
- Form fields as defined in "Conversion goal" section
- After submit: clean confirmation state with a thanks message

### 9. Footer
Logo, contact email, social links (LinkedIn, Instagram), copyright, basic legal links (terms, privacy — placeholders until lawyer-reviewed). Optional: tiny "Roadmap: Centris listings, tenant marketplace, AI tools — coming 2026" line if the founder wants to tease it.

---

## What NOT to do

- ❌ No stock illustrations, Storyset, unDraw, or generic SaaS clipart
- ❌ No generic copy: "all-in-one platform," "revolutionary," "seamless," "effortless," "powerful"
- ❌ No "AI-powered" framing unless attached to a specific shipping feature
- ❌ No mesh gradients, aurora effects, or glassmorphism overload
- ❌ No emojis as bullets or section accents
- ❌ No fake testimonials. No fake logo carousel. No "Trusted by 10,000+ landlords."
- ❌ No founder story, no "About us" section. Save for a future about page if needed.
- ❌ No mention of Centris or the tenant marketplace on the main page (footer roadmap line is the most we mention)
- ❌ The word "score" never appears in user-facing copy, ever
- ❌ Don't copy Brikli's literal words. Match their level of specificity with our own phrasing.

---

## Quebec & Ontario specifics to leverage in copy

These are touchstones that signal local credibility. Use them in FAQ answers, in microcopy in the demo, and in the "what Dory does" details. Do not dump them all on the homepage.

**Quebec:**
- TAL (Tribunal administratif du logement), formerly Régie du logement
- Avis de modification du bail (rent increase / lease modification notice) — sent 3-6 months before lease end depending on lease term
- Section G of the lease — rent disclosure requirement (must show what previous tenant paid)
- TAL annual rent increase calculation guideline
- Non-payment process: formal demand → TAL application
- Lease automatic renewal unless modification notice sent in proper window

**Ontario:**
- LTB (Landlord and Tenant Board)
- Residential Tenancies Act (RTA)
- N1 — notice of rent increase
- N4 — notice of non-payment
- N12, N13 — termination notices for landlord's own use, demolition, or major repair
- Annual rent increase guideline (published by Ministry of Municipal Affairs and Housing)
- AGI (Above-Guideline Increase) applications
- Standard Form of Lease (mandatory for most residential tenancies)

When generating copy that asserts a specific rule, deadline, or form requirement, double-check current rules. Tenancy law evolves. When unsure, use language like "depending on your lease term" or "based on your jurisdiction" rather than asserting a hard number.

---

## Build order

Build in this sequence. Get each section working and committed before moving on. Use `/clear` between sections to reset context.

1. Tailwind config: colors, fonts, spacing scale (founder reviews 3-5 palette options before locking)
2. Layout shell: `app/layout.tsx`, font loading, metadata, base styles
3. Hero section
4. Problem section
5. How it works (3-step landlord flow)
6. The tenant difference section (the differentiator)
7. Live demo block (the animated showpiece)
8. Why Dory comparison
9. FAQ
10. Waitlist form (with email submission via Resend or Formspree)
11. Footer
12. Mobile pass — review every section at 375px and fix
13. Performance pass — image optimization, font loading, Lighthouse audit
14. SEO basics — metadata, OpenGraph image, sitemap.xml, robots.txt
15. Deploy to Vercel
16. Point joindory.com DNS at Vercel from Hostinger panel

---

## Reference URLs

- Existing site (to replace): https://joindory.com/
- Structural and tone reference (do NOT copy literal copy): https://brikli.com/
- shadcn/ui: https://ui.shadcn.com/
- Next.js App Router: https://nextjs.org/docs/app
- Tailwind: https://tailwindcss.com/docs
- TAL (Quebec): https://www.tal.gouv.qc.ca/
- LTB (Ontario): https://tribunalsontario.ca/ltb/

---

## Open items to resolve before launch (flag, don't block)

These don't block the site build. Surface them when relevant.

1. **Credit bureau partner.** Not signed yet. Marketing copy stays vague ("helps build credit history") until a partner is confirmed.
2. **Tenant credit reporting consent flow.** Default-on as the founder wants, but legal review needed for explicit opt-in at sign-up under PIPEDA + Quebec Law 25.
3. **Pricing numbers.** Tiers conceptually defined (Free + Paid + AI add-on) but specific dollar amounts TBD. Default homepage to "founding pricing locked at signup" messaging until set.
4. **AI add-on specifics.** Need a named, shipping AI feature before AI gets mentioned on the homepage. Generic "AI-powered" is banned.
5. **Quebec real estate / privacy lawyer review.** Before the site goes live with any copy about tenant rental history, a Quebec lawyer should review for Charter compliance and Law 25 compliance. Budget $300-500 for a 1-hour consult, or $2-5K for a full review.
6. **Existing product UI quality.** Founder is aware the current product UI is dated. The live demo section in the marketing site can use either the modernized product UI (if ready in time) or a hand-built mockup. Decide before that section is built.
