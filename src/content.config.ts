import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const knowledge = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/knowledge" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum([
      "ai-tools",
      "web-development",
      "devops",
      "career",
      "prompt-engineering",
      "context-engineering",
      "harness-engineering",
    ]),
    tags: z.array(z.string()).default([]),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    author: z.string().default("田中省伍"),
    ogImage: z.string().optional(),
  }),
});

export const collections = { knowledge };
