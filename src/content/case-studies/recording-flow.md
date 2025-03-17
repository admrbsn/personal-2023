# Recording Flow Redesign: Tribute's Video Submission System Overhaul

## Background & Challenge

At Tribute, video submissions are really the heart of what we offer, with over 5 million videos collected so far. The recording flow isn't just another feature - it's the fundamental interaction that makes our platform what it is.

But our existing system had some serious problems:

- The user interface and flow felt outdated
- We had poor technical reliability because we depended on Ziggeo and an old CDN integration
- Conversion rates were low - only about 40% of people who started recording actually submitted
- Bugs were frustrating our users
- The mobile experience was pretty rough
- We only offered recording, with no option to upload videos

These issues were creating major friction for our users and hurting our metrics.

## Project Objectives

I used the SMART framework to set clear goals for the redesign:

1. **Boost conversion rates** from 40% to at least 65% for users who start recording to actually submitting
2. **Make the tech more reliable** by moving away from problematic dependencies
3. **Add new features** including:
   - Photo uploads
   - Gift card integration

## User Research & Analysis

### The Value of User Path Analysis

User path analysis was truly worth it throughout this redesigning process since it allowed us to actually observe how users were traveling through our app and identifying exactly where friction was occurring. By mapping out each step of the recording flow, we didn't just get to observe where users were dropping off, but also get insight into the context behind the abandonment points.

This technique revealed important information that would otherwise not have been apparent from aggregate conversion rates. For instance, we could distinguish between users who dropped off immediately after looking at the recording interface and those who attempted to record but encountered technical problems along the way.

### Funnel Analysis with PostHog

When we dug into the data using PostHog's funnel tools, the picture became really clear:

1. 100% of users intended to record a video (where they entered our funnel)
2. 79% made it past the initial video record screen
3. But only 42% of those users actually completed submitting a video

That gave us an overall conversion of about 33% from start to finish - pretty low for such a core feature.

Using PostHog, we could break things down by device type and saw that mobile users were having an even harder time than desktop users. We also tracked time spent at each step and noticed that users who eventually gave up were spending a lot of time waiting for video processing - a clear signal that something was wrong.

### Setting Realistic Conversion Goals

We aimed to increase our overall submission rate from 33% to at least 65%. That might not sound super ambitious for a core feature, but our research gave us important context.

Our customer surveys showed that many users, especially those who consider themselves introverts, get hesitant when it comes to recording themselves on video. Recording creates a sense of vulnerability and pressure that causes some people to back out.

This psychological barrier created a unique challenge. We needed to:

1. **Make recording feel more approachable and less intimidating** with a better UI, clearer guidance, and reliable tech
2. **Add alternatives like photo uploads** for those not comfortable with video, while still keeping video as the main option
3. **Balance these carefully** so we didn't accidentally discourage video submissions, which are what make a Tribute special

We needed to acknowledge these emotional barriers while guiding users toward completion. That's why we designed the photo upload as a complementary feature rather than highlighting it as a primary alternative - we wanted to preserve the emphasis on video while giving options to users who might otherwise abandon the process.

### Prototype Testing with Maze

We used Maze, a result-oriented usability testing tool, to test our prototype with real users. The results were encouraging, with high success and sentiment rates across the different tasks in our new recording flow.

Beyond confirming our main design decisions, the testing gave us one key piece of feedback: users wanted a clearer progress bar with labels so they could understand where they were in the process and what steps were coming up. This insight helped us refine the interface to give better orientation and reduce uncertainty.

## Solution Design

Based on our research findings, I created a detailed flow diagram that:
- Marked the existing pain points
- Highlighted the areas with poor conversion rates
- Incorporated all the new features we wanted to add

Rather than spending a lot of time in Figma making pixel-perfect mockups, I used Bolt.new for rapid prototyping, which let us iterate and validate much faster.

## Technical Implementation

For the new recording flow, we built with a modern tech stack:
- Vue.js and Tailwind CSS for the frontend
- Pinia for state management
- FormKit for forms
- VideoRecord-js for recording functionality
- Custom dropzone/upload implementation
- Vimeo for direct resumable uploads
- Backblaze and Bunny for photo uploads
- Stripe for e-commerce integration

One of our best decisions was our approach to mobile: while our desktop flow used a custom recording interface, the mobile experience tapped into native HTML inputs to capture video directly through iOS and Android's capabilities. This was a huge improvement because it worked with the operating systems instead of fighting against them - why reinvent what the OS already does so well?