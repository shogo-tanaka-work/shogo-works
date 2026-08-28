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
      "loop-engineering",
      "graph-engineering",
      "ai-governance",
      "security",
    ]),
    subcategory: z.string().optional(),
    /** 想定読者のレベル。記事ページの見出し下に星で表示する */
    difficulty: z
      .enum(["beginner", "intermediate", "advanced"])
      .optional(),
    /**
     * 記事の性格。読者が「読んで学ぶもの」と「必要なときに引くもの」を
     * 区別できるようにする。
     * course: 順番に読む学習コース / reference: 機能や概念のリファレンス /
     * docs-digest: 公式ドキュメントの要約 / news: 製品アップデート解説
     */
    contentType: z
      .enum(["course", "reference", "docs-digest", "news"])
      .optional(),
    /** 実際に手を動かした場合の所要時間（分） */
    estimatedMinutes: z.number().int().positive().optional(),
    /** 先に読んでおくべき記事の slug（同一サブカテゴリ内） */
    prerequisites: z.array(z.string()).default([]),
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
      "cloudflare",
      "codex",
      "cursor",
      "dify",
      "gemini",
      "github-copilot",
      "manus",
      "microsoft-copilot",
      "n8n",
      "runway",
      "xai-grok",
    ]),
    toolLabel: z.string(),
    date: z.coerce.date(),
    sourceUrl: z.string().url(),
    summary: z.string(),
    description: z.string().optional(),
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
