## 0. Objective

Create a **single static landing page** (`index.html` + optional `styles.css` + minimal JS) to validate interest in a product that helps people:

> **Make their household legible to institutions under stress**  
> (insurers, courts, executors, banks, etc.)

Primary goal:  
- Get visitors to **join a waitlist** by submitting their email.

Secondary goal:  
- Ask **one qualifying question** after email submit: *“What situation are you worried about?”*

No product exists yet. This is a **validation page**, not a full marketing site.


---

## 1. Tech Requirements

- Plain **HTML + CSS**, no frameworks, no build step.
- One page: `index.html`
- One stylesheet: `styles.css` (linked in `<head>`)
- Optional tiny `script.js` for:
  - smooth scroll to form
  - simple client-side form state / showing the 2nd question after email
- Responsive layout, works well on **mobile first**.
- No chatbot, no heavy libraries.
- Keep the existing embedded integrations

All assets must be usable as a static site deployed on any host (e.g. Cloudflare, Netlify).

---

## 2. Brand & Style

Tone: **calm, serious, non-hype**, like a good lawyer explaining things clearly.

Visuals:
- Clean, minimal, lots of whitespace.
- Neutral colors (white background, dark grey text, one accent color for buttons/links).
- Sans-serif font (system fonts stack).
- No stock photos. If you want a visual, use **simple icons** or subtle shapes (CSS only).

---

## 3. Page Structure

### 3.1. Hero Section (Above the Fold)

Elements:
- Small eyebrow text.
- Strong headline.
- One–two line subheadline.
- Primary CTA button: scrolls to waitlist form.
- Short credibility line under CTA.

**Copy (use as-is, can tweak wording slightly but keep meaning):**

Eyebrow:
> INSURANCE • ESTATES • EMERGENCIES

Headline:
> Make your household legible to institutions under stress

Subheadline:
> A short, practical guide on what insurers, courts, and executors actually accept as evidence — and how much is “enough” so you can stop.

Primary CTA button:
> Join the early-access list

Credibility line:
> No spam. Early research only. You’ll hear from me when the first guide is ready.

---

### 3.2. Problem Section — “Where things break today”

Three columns or stacked blocks, each with a title, 2–3 bullet points.

**Block 1 – Insurance claims**

Title:
> Insurance: “Do you have proof?”

Bullets:
- “Just take a video of your stuff” is vague and often not enough in real disputes.
- Receipts don’t prove the item still existed at the time of loss.
- Adjusters want **lists**, **values**, and **ownership signal**, not hours of footage.

**Block 2 – Death / estate / incapacity**

Title:
> Estates: “What exactly did they own?”

Bullets:
- Spouse or executor can’t turn a box of papers and photos into a clear list.
- Assets get lost, undervalued, or delayed in probate because no one can see the whole picture.
- Institutions move slowly when your household is hard to read.

**Block 3 – Moving, immigration, disruption**

Title:
> Moving / immigration: “Does this proof count here?”

Bullets:
- Foreign receipts, gifts, and inherited items often don’t match local expectations.
- Different country, different institutions, different rules of proof.
- You feel like you might be missing something important — but don’t know what.

After this section, add a short line:

> The problem isn’t “no data”. The problem is **unstructured evidence** that nobody can act on.

---

### 3.3. Solution Concept Section — “What this project is about”

Explain **what the guide will do**, without pretending it already exists.

Use a two-column layout or stacked blocks.

Section title:
> What this guide will help you do

Left side text:

> Not another app. Not a 40-day catalog of every spoon in your house.  
>  
> The goal is to define a **Minimum Defensible Inventory** — the smallest amount of structured evidence that still survives questions from insurers, courts, and executors.

Bulleted list:

- Decide **what to document** and what to safely ignore.
- Understand **what different institutions actually ask for**.
- Build a record someone else can use under stress (spouse, executor, adjuster).
- Know **when you have done enough** so you can stop.

Add a small italic note:

> This is early-stage research. The first version will likely be a short PDF + simple templates (spreadsheet / Notion), not software.

---

### 3.4. “Who this is for” Section

Two columns: “For you if…” and “Not a fit if…”.

Title:
> Who this is (and isn’t) for

**For you if:**
- you’ve ever worried “Would insurance actually accept my proof?”
- you manage assets across countries, languages, or institutions
- you handle paperwork for your family and don’t want to leave chaos behind
- you want a **finite, one-time effort**, not a new app to maintain every week

**Not a fit if:**
- you only want organizing / decluttering tips
- you expect a guaranteed outcome from any insurer or court
- you want a full-blown SaaS product right now

---

### 3.5. “How this will work” Section

Short 3-step visual.

Title:
> How this will work

Steps:

1. **Research & interviews**  
   I’m talking to people who’ve gone through claims, estates, and cross-border moves to map what evidence actually held up.

2. **Draft guide + templates**  
   A concise guide and simple templates to capture the essentials: items, values, ownership, and where everything lives.

3. **You test it on your household**  
   You try it on your own situation and tell me where it’s overkill, missing pieces, or just right.

End with line:
> The waitlist gets the first version and the biggest influence on what it becomes.

---

### 3.6. Waitlist Section (Primary Form)

This is the **main conversion block**. It should be visually distinct (card or subtle panel).

Title:
> Join the early-access list

Short explanation:
> If you want to be the first to see the guide — and you’re willing to give blunt feedback — drop your email below. I’ll only write when there’s something concrete to show.

Form fields (first step):
- Email (required)
- Country (optional, small select or text)

Button:
> Get on the list

**Behavior after submit:**

- Do **not** navigate to a new page.
- Hide/disable the first form, show a **second, single-question block** on the same page:

Second-step question (textarea or radio buttons):

> What situation are you most worried about?  
> (Choose one or write your own)

Radio options:
- Insurance claim (fire, theft, water damage…)
- Death / estate / “If something happens to me”
- Moving / immigration / cross-border assets
- Other (with a small free-text field)

Button:
> Submit answer

After second submit, show a short thank-you message:

> Thanks — you’re on the list.  
> I’ll reach out when the first version is ready. If you’re open to a short call later, you’ll have the option to book one from that email.

### Form implementation details

Already imlemented with Beehiv

---

### 3.7. FAQ (very short)

Keep it to 3 questions.

Title:
> Questions you might have

Q1:
> Is this legal or financial advice?

A1:
> No. This project is about organizing and presenting information so that institutions can actually use it. It’s not personalized legal or financial advice.

Q2:
> When will the first guide be ready?

A2:
> After I’ve spoken to enough people on this list and tested the first draft on real households. If you’re on the list, you’ll see it first.

Q3:
> Will this cost money?

A3:
> Most likely yes. The early versions for this list may be discounted or free in exchange for direct feedback.

---

### 3.8. Footer

Simple footer with:

- Small text:
  - “This is an early-stage personal project, not a law firm or insurance company.”
  - “You can unsubscribe from any email with one click.”
- Links (placeholder `#`):
  - “Privacy”
  - “Contact”

---

## 4. Layout & UX Notes

- Make the **primary CTA** (join the waitlist) visible:
  - in hero
  - near mid-page
  - at the dedicated form section
- Smooth scroll from any “Join the list” button to the form.
- Ensure good contrast and font size for readability.
- No popups, no chat widgets, no dark patterns.
- Keep the entire page **fast-loading** and under ~50KB CSS/JS if possible.

---

## 5. Files to Produce

1. `index.html`
   - Complete HTML structure and copy as specified.
   - Comment placeholders:
     - `<!-- TODO: Insert analytics snippet here -->`
     - `<!-- TODO: Replace form action with real email provider endpoint -->`

2. `styles.css`
   - Basic responsive layout, typography, spacing, form styling.
   - Mobile-first, with one breakpoint around 768px for wider layouts.

3. `script.js` (optional; only if needed)
   - Smooth scrolling for CTA buttons.
   - Handling first-step submit → show second-step question (without navigation).
   - No external dependencies.

Update `index.html` to link `styles.css` and `script.js` if you create them.

---
