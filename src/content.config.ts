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
    subcategory: z.string().optional(),
    tags: z.array(z.string()).default([]),
    sortOrder: z.number().int().default(0),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    author: z.string().default("田中省伍"),
    ogImage: z.string().optional(),
  }),
});

const aiNews = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/ai-news" }),
  schema: z.object({
    title: z.string(),
    tool: z.enum([
      "chatgpt-openai",
      "claude",
      "claude-code",
      "gemini",
      "github-copilot",
      "n8n",
      "runway",
    ]),
    toolLabel: z.string(),
    date: z.coerce.date(),
    sourceUrl: z.string().url(),
    summary: z.string(),
    impact: z.string().optional(),
    tags: z.array(z.string()).default([]),
    status: z.enum(["captured", "candidate", "promoted"]).default("captured"),
    relatedKnowledge: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const aiNewsNotes = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/ai-news-notes" }),
  schema: z.object({
    title: z.string(),
    noteFor: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { knowledge, aiNews, aiNewsNotes };
