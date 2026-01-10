---
title: 'Tribute V3: Re-architecting a 10-year-old product into a modern, creator-first platform'
description: 'A complete overhaul of the Tribute platform, redesigning how creators and participants use the product, how customization works, and how the platform can grow in the future.'
---

## Background

At the start of 2025, it was clear the Tribute platform had reached a breaking point.

What started almost ten years ago as a small side project has grown into a meaningful, emotional product used by millions. However, the foundation did not keep up. We made small improvements to areas such as authentication, recording, and public-viewing pages, but the overall experience—from onboarding to checkout and delivery—felt fragmented, outdated, and increasingly fragile over time.

Band-aids were starting to fall off.

Tribute V3 was a complete overhaul of the platform. It was not just a new look, but a redesign of how creators and participants use the product, how customization works, and how the platform can grow in the future.

## Problem

We identified three core issues holding the platform back.

### 1. Fragmented, aging flows

Nearly every major surface needed attention:

* Onboarding
* Publishing
* Tribute management
* Guest invitations
* Video editing and arrangement
* Checkout
* The completed Tribute experience

Each flow was improved separately over the years, which led to an experience that felt inconsistent and became harder to maintain.

### 2. Limited creative control

Tribute is an emotional and expressive product, but our customization options did not show that. Users often told us they wanted more control over themes, colors, and personality. The product felt too rigid for something meant to be personal.

### 3. Creator and participant experiences were artificially separated

Creators and participants were basically using different products. This made the experience confusing, the UI inconsistent, and caused a loss of shared context. We looked to platforms like Partiful and Paperless Post, which treat creators and guests as collaborators in the same space, with differences determined by permissions rather than separate interfaces.

## Solution

The V3 vision crystallized around a few guiding principles:

* **One shared interface, different permissions.** Creators and participants should experience the same product, with editing and management tools revealed only when appropriate.
* **Customization as a first-class feature.** Themes, colors, and visual expression should not feel like add-ons. They should be part of the main experience.
* **Delight without complexity.** Onboarding needed to be fun, expressive, and confidence-building without overwhelming users.
* **Mobile is not a fallback.** Mobile needed to feel intentional, polished, and fast, not like a weaker version of the desktop experience.

## Implementation

### Early Exploration & Journey Mapping

I spent an intensive afternoon tearing down Partiful and Paperless Post, mapping their full journeys from creation to completion. I documented decision points, emotional highs and lows, and moments of friction.

From that work, a clear structure emerged.

Instead of moving users between disconnected areas, Tribute V3 would feel like one continuous space that subtly adapts to who you are and what you can do.

I whiteboarded the entire journey end to end and sketched the first layouts in Figma to get the idea out of my head and into something tangible.

### Reimagining Onboarding

Our existing onboarding flow worked, but was not inspiring. It was basically a homemade Typeform copy. While conversion improved over time (from ~15% to ~25%), it did not reflect the product's joy.

For V3, onboarding needed to:

* Feel expressive and celebratory.
* Tease customization early
* Reduce perceived effort
* Build confidence immediately

This redesign paid off. Post-launch, onboarding conversion increased to 54%, more than doubling our historical baseline.

### Themes, Identity, and Emotional Expression

From years of user research, one insight stood out clearly: users love emojis.

That became the base for our default theme: occasion-based, animated emoji backgrounds that feel playful and lively. From there, it was easy to add more themes:

* Graduation caps
* Balloons
* Fireworks
* Seasonal motifs

We validated theme directions through lightweight discovery and preference testing, using structured prompts and early visuals to gauge emotional resonance before committing to implementation.

Themes were no longer just decoration. They became a key way for users to show intent and emotion.

### Design System & Technical Foundations

At the same time, we needed a system that could support rapid iteration.

Our CTO and I had been experimenting with modern 'vibe-coding' tools like Bolt, Lovable, Cursor, and Claude Code. We wanted a design system that worked well with AI-assisted development.

I built a lightweight design system using DaisyUI and design tokens:

* Simple theme creation
* Strong token structure
* Built-in theme controller
* Existing LLM documentation and MCP support

While we plan to use tools like Tokens Studio and deeper Figma syncing in the future, DaisyUI offered the right mix of flexibility and speed for now.

### Prototyping, Vibe Coding, and Iteration

Once the foundations were in place, we moved quickly.

I bounced between:

* Figma for layout exploration
* Bolt and Lovable for rapid UI scaffolding
* Claude Code and Cursor, for deeper engineering work, were surprisingly good at creating strong first drafts. They were not perfect, but they were almost always usable. Being able to go from idea to interactive UI quickly changed how fast we could test and drop ideas.

### User Testing & Validation

After roughly two months of iteration, we put interactive prototypes in front of users.

Using Maze, we ran:

* First-click testing
* Preference testing
* Fake-door experiments for future features

Users consistently gave the new experience higher ratings for clarity, delight, and ease of use. In tests, users completed key flows 30-40% faster and felt much more confident about what would happen next.

Qualitative feedback emphasized:

* Feeling "guided, not rushed."
* Better understanding of customization options
* Stronger emotional connection early in the process

### Supporting Tools & Research

To support velocity and alignment, we leaned on several tools:

* Relume for wireframes and sitemap exploration, helping quickly validate IA before committing to visuals.
* Uizard for rapid ideation and concept exploration
* OnBeacon for behavioral insights, helping us validate language, framing, and emotional cues

These tools let us test our ideas early and at low cost, helping us avoid costly changes later.

### Mobile-First by Design

One of the most rewarding aspects of V3 was the mobile experience.

Historically, mobile had been an afterthought. In V3, it became the primary design constraint:

* Type scales tuned specifically for mobile
* Thoughtful spacing and tap targets
* Micro-interactions designed to work seamlessly on touch

The result felt more like a native app than a typical web product. It was fast, smooth, and thoughtfully designed.

## Results

Post-launch, the platform showed meaningful gains across the board:

* Starts: +29%
* Start → publish conversion: +24%
* Purchases: +19%
* Participant engagement: +10%
* CSAT: +20%

Beyond the numbers, V3 gave the team a modern, scalable foundation. It is easier to improve, faster to update, and better matches users' experience with Tribute.

## Reflection

Tribute V3 was not about following trends or using the latest tools. It was about honoring what the product had become: emotionally meaningful and deeply personal. We wanted to build a platform that finally matched that reality. It's at the intersection of design, engineering, and emerging workflows, and it fundamentally changed how we build at Tribute going forward.
