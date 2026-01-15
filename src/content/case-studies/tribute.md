---
title: "Tribute.co Case Study"
description: "Lorem ipsum dolor sit amet"
role: "Director of Product Design"
scope: "Full platform redesign and rebuild (web, mobile, checkout, authentication)"
team: "2 full-time designers, design agency, engineering team"
timeline: "March 2020 - Ongoing (initial redesign ~6 months)"
impact:
  - "User-Generated Tributes: **+24%**"
  - "AOV increased by **~$30**"
  - "Invitee participation: **+21%**"
  - "Record flow completion: **89% → 98%**"
  - "Checkout conversion: **+16%**"
metrics:
  - value: "+24%"
    label: "User-Generated Tributes"
  - value: "+21%"
    label: "Invitee Participation"
  - value: "98%"
    description: "Record Flow"
    label: "Completion Rate"
  - value: "+16%"
    label: "Checkout Conversion"
liveSiteUrl: "https://tribute.co"
liveSiteText: "To view the live site and experience the improved platform, visit. See how the redesign has transformed the user experience, improved conversion rates, and made it easier for families to create meaningful video tributes."
---

## Background

In late March 2020, I joined Tribute as Director of Product Design, amidst a world gripped by the COVID-19 pandemic. Families were finding it difficult to connect in person, and this longing for connection was something we witnessed clearly at Tribute. For instance, a grandmother in Seattle, separated from her grandchildren in New York, turned to Tribute to compile a heartfelt video montage for her granddaughter's birthday. Moments like these were not unique; they were the essence of what propelled Tribute to surpass the milestone of one million videos created by that time. The company's revenue reflected this growth, climbing from approximately $250,000 in 2019 to $700,000 by May 2020.

Tribute is a video-based platform that enables users to create video montages to celebrate specific occasions and send those created videos directly to recipients. The aim and achievement of this project was to transform Tribute into a seamless and user-centric platform that effectively met user needs, ultimately strengthening its market presence. Due to a lack of staff and resources at the time of my hiring, the design team consisted of only a handful of freelance designers. I was asked to hire additional designers and rebuild the product from the ground up to capitalize on the massive growth. Below, I have included a case study detailing how I led the design team to rebuild the product, significantly improving the user experience and contributing to the company's continued success.

<span class="ipad"><span class="screen">![Old Tribute.co.](../../assets/img/old-tribute.webp)</span></span><span class="caption block -mt-12">The old Tribute.co</span>

## Problem

Before beginning the redesign project, I held a brainstorming session with the design team to discuss and define the individual pain points users were experiencing with the product. I then followed the brainstorming session with user experience research (UXR). The purpose of conducting UXR was to determine which aspects of the product were most appealing to users and which were not. The UXR results showed three major issues with the product that needed to be resolved. First, users did not understand what Tribute was about based on the website's front page. Second, the product's pricing structure was confusing. Third, the video recording process was difficult, and the record UI was unreliable and poorly designed. Although the product's backend was functional and generally well-designed, the rest of the product needed redesign. The challenge was to redesign the three main issue areas without disrupting the original product too much.

## Solution

My product vision for solving the three main issues identified during the UXR was to create a simple, seamless user experience that clearly conveys what Tribute is all about, simplify the product's pricing structure, and enhance the video recording process. I wanted to ensure we had clear analytics and funnel tracking to measure our progress and identify areas for continued improvement, so we used GA and PostHog to achieve this. Prior to the redesign, we also cleaned up our Figma files and began to develop a design system to help us create consistent user interfaces throughout the application. We used Webflow, a Sass-based tool, to build and modify the new web pages of the application.

To further improve the product, I wanted to establish a culture of continuous A/B testing. I chose to use Google Optimize to conduct A/B testing on the product. I also chose to include a mechanism to gather customer feedback regularly, allowing us to continually improve the product and ensure we were meeting users' needs and resolving their pain points. I also decided to develop a process for brainstorming, documenting, and scheduling future product feature work and PLG initiatives to ensure that we were continually working toward achieving the product vision and goals. By implementing these strategies, we were able to significantly improve the user experience, increase user engagement and retention, and ultimately contribute to the company's continued growth.

## Implementation

To implement my product vision, I rapidly hired two full-time designers from Venezuela and a small design agency from New York City to assist with some of the heavier concept work. I held weekly design sprints that used exercises such as "How might we?", Affinity Mapping, Crazy Eights, and Spicy Debates to generate and iterate on ideas. To get our design system started, I used the Pegasus design system, and I had the small design agency conceptualize the next iteration of our home page. We iterated endlessly on prototypes and concepts, refining and testing our designs until we had a few that we felt were ready for testing. To conduct these tests, we used Maze to test a number of different prototypes.

<span class="inline-img">![Spicy Debates.](../../assets/img/spicy-debates.webp)</span><span class="caption block mt-3">Spicy Debates</span>

After conducting the Maze tests and reviewing the results, we made a few minor adjustments and refinements to the designs before proceeding to implementation. The designers we hired worked very closely with our development team to ensure that the new designs were implemented correctly. We also used Google Optimize to perform A/B testing on our designs after they were implemented to further refine them. We also established a regular cadence for gathering customer feedback to ensure we were on track with our product vision and addressing emerging pain points. Through this iterative process, we successfully redesigned Tribute from end to end while preserving the core functionality users liked. The new design significantly improved user engagement and retention, and the company continued to experience strong growth.

<span class="ipad"><span class="screen">![New Tribute.co.](../../assets/img/new-tribute.webp)</span></span><span class="caption block -mt-12">The new Tribute.co</span>

## Leveraging Vue 3 & Composition API

As the redesign progressed, it became increasingly apparent that a significant technical pivot was necessary to further improve the product and meet our users' evolving requirements. We recognized that to maximize the potential of the improvements we made to our front-end design, and to provide a seamless user experience, we would need to make a significant change to our technology stack. Although Django was a solid, reliable technology stack, it primarily used server-side rendering, which could introduce delays in UI interactions, particularly with dynamic content such as videos. Therefore, we deliberately chose to move to Vue 3, a progressive JavaScript framework, for its flexibility, efficiency, and support for SPA (Single Page Application) design. This change means that pages now load faster and interactions with the platform feel instantaneous for users, especially during video-related activities.

* **Using Vue 3 and Composition API:** The Composition API, introduced in Vue 3, enabled the creation of a more logical and reusable code base for the logic in Tribute. Given that Tribute relies heavily on user interaction, such as uploading, editing, and compiling videos, this was a huge advantage. The Composition API enabled our developers to build and evolve Tribute's features more efficiently and effectively than ever before. Additionally, the reactive system in Vue 3 enabled us to bind Tribute data to the UI in real time, providing immediate, relevant feedback to users regarding their interactions with the product, including the video editing process.

* **Decoupled Structured API Calls and Architecture:** Since we moved to a client-side framework such as Vue, we were able to separate the frontend of the product from the backend of the product, which enabled us to decouple the frontend from the backend, and thus improve both the scalability and the maintainability of the product. This enabled us to more effectively optimize the product's performance and provide a more flexible development environment, allowing the frontend and backend teams to operate independently.

* **Iterative Development and Integration Using Vite and Mini Vue Apps:** One of the greatest risks associated with transitioning to a new technology is that the transition will result in a significant amount of disruption to the user and/or the product. However, I recognized this and implemented an iterative integration plan to ensure a smooth, low-risk transition to Vue. I leveraged Vite's fast build capability to develop 'mini Vue apps,' smaller versions of the full Vue app designed to be embedded within our existing Django structure. Utilizing this modular approach enabled us to prototype, test, and deploy Vue and realize its benefits without disrupting the existing architecture. Overall, the transition was nearly imperceptible to the user, and it introduced a level of sophistication to the user experience.

* **Best Practices for Developing with Vue:** Just as with any technology, the ability to utilize the full capabilities of Vue is dependent on developing according to best practices. Therefore, I ensured that the team regularly reviewed the codebase, used modular components, and leveraged Vue's lifecycle hooks. These practices not only resulted in a cleaner codebase but also greatly improved Tribute's overall performance.

* **Improved User Experience:** With the asynchronous nature of Vue, pages in Tribute loaded faster, and users no longer had to wait for the entire page to reload when interacting with the product. This, combined with Vue 3's dynamic capabilities, greatly improved the user experience and made interactions with the product more responsive and intuitive, particularly during the video compilation process.

<span class="inline-img">![Feature matrix.](../../assets/img/feature-matrix.webp)</span><span class="caption block mt-3">Feature matrix</span>

Overall, the transition to Vue 3 and the Composition API was not simply a matter of changing the product's underlying technology. Rather, it represented an evolutionary step that has empowered us to further amplify the impact of our design changes and position Tribute as the leader in providing a seamless, immersive experience for users who want to create video tributes to commemorate the special moments of their lives.

## Acknowledging What We've Accomplished

The ultimate measure of success in Product Development and Design is in what you can tangibly see. The Redesign of Tribute was much more than just an aesthetic upgrade or a simple update to how things looked. It was an opportunity to optimize how users interact with the website, streamline the process, and create a better overall experience. While we encountered many obstacles and innovative solutions throughout the process, the data we collected told us a clear story of success. Beyond the numbers, these improvements translated into families experiencing more meaningful and seamless connections. For a grandmother compiling a video tribute, it meant less time fussing with technology and more moments cherishing the heartfelt messages from loved ones. Below are a few key statistics highlighting the successes we achieved as a result of this redesign.

1. User-Generated Tributes Increased by 24%. Partly due to Typeform.
2. We have successfully raised AOV by approximately $30 after multiple rounds of pricing tests, without negatively impacting conversions.
3. Invitee participation in Tributes has been increased by 21% with the redesign of the record flow.

The rate at which invited participants completed the record flow has improved from 89% to 98%. A crucial factor in this improvement was the introduction of a simplified user interface that provided clearer instructions and feedback during the recording process. Specifically, we added a progress indicator to guide users through each step, reducing confusion and uncertainty. This actionable change has enhanced the user experience, demonstrating the impact of small yet strategic tweaks on user engagement.

5. The Conversion Rate at Checkout has increased by 16%.

These numbers not only support our Strategic and Design decisions but also provide a strong base for the next chapter of Growth and Innovation for Tribute.

## Future Design Initiatives

While we redesigned many of the user-facing areas of the website, such as the Home Page, Marketing Page, etc., there are several additional areas of the site that we also redesigned, including:

1. Authentication
2. Manage
3. Public Tribute Page
4. Record Flow
5. Checkout
6. Claim Gift
