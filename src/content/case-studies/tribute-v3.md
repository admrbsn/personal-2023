---
title: "Tribute V3: Re-architecting a 10-year-old product into a modern, creator-first platform"
description: "A full redesign and re-architecture of the Tribute platform, rethinking creation, customization, payments, and scale using modern design systems and AI-assisted workflows."
---

## At a glance

- **Role:** VP of Product Design (hands-on)
- **Scope:** End-to-end platform redesign (web-first, mobile-led)
- **Team:** Design, frontend, backend (tight collaboration)
- **Timeline:** ~3 months from concept to launch
- **Impact:**  
  - Starts: **+29%**  
  - Start → publish: **+24%**  
  - Purchases: **+19%**  
  - CSAT: **+20%**

---

## Background

At the start of 2025, it was clear the Tribute platform had reached a breaking point.

What began nearly ten years earlier as a small side project had grown into an emotionally meaningful product used by millions. However, the foundation had not kept pace with that growth. Over time, we made incremental improvements to individual areas—authentication, recording, public viewing—but the overall experience from onboarding to checkout and delivery felt fragmented, outdated, and increasingly fragile.

Band-aids were starting to fall off.

Tribute V3 was not a visual refresh. It was a full re-architecture of how creators and participants experience the product, how customization works, and how the platform could evolve moving forward.

---

## Problem

We identified three core issues holding the platform back.

### 1. Fragmented, aging flows

Nearly every major surface needed attention:

- Onboarding  
- Publishing  
- Tribute management  
- Guest invitations  
- Video editing and arrangement  
- Checkout  
- The completed Tribute experience  

Each flow had been improved independently over the years. While well-intentioned, this resulted in an experience that felt inconsistent to users and increasingly difficult to maintain internally.

> **Image placeholder:** Legacy flow map highlighting disconnected surfaces  
> `[image: legacy-flow-map.png]`

---

### 2. Limited creative control

Tribute is inherently emotional and expressive, yet customization felt rigid. Users frequently asked for more control over themes, colors, and overall personality. The product didn’t reflect the emotional weight it carried.

> **Image placeholder:** Screens showing limited theme options pre-V3  
> `[image: pre-v3-themes.png]`

---

### 3. Artificial separation between creators and participants

Creators and participants were effectively using different products. This fractured experience caused confusion, inconsistent UI patterns, and a loss of shared context.

We looked to platforms like Partiful and Paperless Post for inspiration—tools that treat creators and guests as collaborators in the same space, with differences driven by permissions rather than separate interfaces.

> **Image placeholder:** Competitive teardown screenshots  
> `[image: competitive-analysis.png]`

---

## Solution

The V3 vision crystallized around four guiding principles:

- **One shared interface, different permissions**  
  Creators and participants experience the same product, with management tools revealed contextually.
- **Customization as a first-class feature**  
  Expression should feel core, not bolted on.
- **Delight without complexity**  
  Onboarding should build confidence without overwhelming users.
- **Mobile is not a fallback**  
  Mobile needed to feel intentional, fast, and polished.

---

## Implementation

### Early Exploration & Journey Mapping

I spent an intensive afternoon tearing down Partiful and Paperless Post, mapping full journeys from creation to completion. I documented decision points, emotional highs and lows, and moments of friction.

A clear pattern emerged: the strongest experiences felt like one continuous space that adapted based on who you were and what you could do.

That became the backbone of Tribute V3.

I whiteboarded the entire journey end to end, then sketched early layouts in Figma to externalize the flow before committing to implementation.

> **Image placeholder:** Journey map + whiteboard photos  
> `[image: journey-map.png]`

---

### Rethinking the Create Experience (What Didn’t Work)

One of the earliest ideas failed.

Inspired by Partiful, I initially wanted the product page—with placeholder data—to *be* the create experience. It felt slick and modern.

In practice, it didn’t resonate.

False-door testing in Maze and moderated interviews showed users felt disoriented. Instead of feeling empowered, they weren’t sure what to do next or whether they were “doing it right.”

We reverted to a more conventional modal-based start—but with the new experience blurred in the background as a teaser. This preserved clarity while signaling what users were about to unlock.

> **Image placeholder:** Maze false-door test results + rejected concept  
> `[image: maze-create-test.png]`

---

### Reimagining Onboarding

The existing onboarding technically worked, but lacked personality. It was effectively a homemade Typeform. Conversion improved over time (from ~15% to ~25%), but it didn’t reflect the product’s joy.

For V3, onboarding needed to:

- Feel expressive and celebratory  
- Tease customization early  
- Reduce perceived effort  
- Build confidence immediately  

Post-launch, onboarding conversion increased to **54%**, more than doubling the historical baseline.

> **Image placeholder:** Old vs new onboarding comparison  
> `[image: onboarding-comparison.png]`

---

### Payments, Commitment, and Reducing Friction

Historically, payment happened at the very end of the experience. While generous, it caused issues:

- Ad spend included abandoned tributes  
- Late-stage abandonment was high  
- **16% of checkouts were accidental**

Users were literally throwing money at us earlier in the flow.

We moved payment to just after the draft stage—keeping the product free to start, but aligning payment with intent. This reduced abandonment, clarified expectations, and respected user behavior.

> **Image placeholder:** Checkout flow before/after  
> `[image: payment-flow.png]`

---

### Themes, Identity, and Emotional Expression

Years of research revealed a simple insight: users love emojis.

That insight became the foundation of our default theme—animated, occasion-based emoji backgrounds. From there, we expanded into:

- Graduation caps  
- Balloons  
- Fireworks  
- Seasonal motifs  

Themes became a primary way users expressed intent and emotion—not decoration.

> **Image placeholder:** Theme exploration + final theme screens  
> `[image: themes.png]`

---

### Design System & Technical Foundations

To support rapid iteration, we needed a system that balanced speed and consistency.

I built a lightweight design system using DaisyUI and design tokens:

- Simple theme creation  
- Clear token structure  
- Built-in theme controls  
- Strong compatibility with AI-assisted development  

While deeper Figma syncing is planned, this foundation allowed us to move quickly without sacrificing cohesion.

> **Image placeholder:** Design tokens + component examples  
> `[image: design-system.png]`

---

### Prototyping, Vibe Coding, and Iteration

Once foundations were in place, we moved quickly.

I bounced between:

- Figma for layout exploration  
- Rapid UI scaffolding tools  
- AI-assisted coding environments for deeper implementation  

Vibe coding wasn’t about skipping rigor. It accelerated the first 60–70% of the work so more time could be spent refining, validating, and shipping with confidence.

As complexity grew, quality required discipline. Weak prompts could introduce regressions, so I continuously tightened constraints, updated the design system, and supplemented prompts with Figma screens to remove ambiguity.

> **Image placeholder:** Prompt → UI iterations  
> `[image: vibe-coding.png]`

---

### User Testing & Validation

After ~2 months, we tested interactive prototypes with users.

Using Maze, we ran:

- First-click testing  
- Preference testing  
- Fake-door experiments  

Users completed key flows **30–40% faster** and reported feeling “guided, not rushed.”

> **Image placeholder:** Maze results + heatmaps  
> `[image: maze-results.png]`

---

### Mobile-First by Design

Mobile became the primary constraint:

- Type scales tuned for small screens  
- Thoughtful spacing and tap targets  
- Touch-first micro-interactions  

The result felt closer to a native app than a web product—fast, smooth, and intentional.

> **Image placeholder:** Mobile screens  
> `[image: mobile-ui.png]`

---

## Results

Post-launch improvements were consistent and measurable:

- Starts: **+29%**  
- Start → publish: **+24%**  
- Purchases: **+19%**  
- Participant engagement: **+10%**  
- CSAT: **+20%**

More importantly, V3 gave us a scalable foundation. Iteration became safer, experimentation cheaper, and future improvements easier to ship.

---

## Reflection

Tribute V3 wasn’t about trends or tools. It was about aligning the platform with what the product had already become—emotionally meaningful and deeply personal.

It also changed how we build. Design and engineering now operate around shared systems, experimentation carries less risk, and ideas move from concept to reality faster without sacrificing quality.

V3 set a new baseline for how we work at Tribute going forward.
