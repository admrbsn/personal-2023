import { defineCollection, z } from "astro:content";

const caseStudyCollection = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
		description: z.string(),
    cover: image().refine((img) => img.width >= 1080, {
      message: "Cover image must be at least 1080 pixels wide!",
    }),
    coverAlt: z.string(),
    role: z.string().optional(),
    scope: z.string().optional(),
    team: z.string().optional(),
    timeline: z.string().optional(),
    impact: z.array(z.string()).optional(),
    metrics: z.array(z.object({
      value: z.string(),
      label: z.string(),
      description: z.string().optional(),
    })).optional(),
    liveSiteUrl: z.string().optional(),
    liveSiteText: z.string().optional(),
  }),
});

export const collections = {
  caseStudies: caseStudyCollection,
};