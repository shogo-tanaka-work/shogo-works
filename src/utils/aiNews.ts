import { aiNewsStatuses, aiNewsTools } from "@/data/aiNews";
import type { AiNewsStatus, AiNewsStatusMeta, AiNewsTool } from "@/types";

export interface AiNewsEntry {
  id: string;
  data: {
    title: string;
    tool: AiNewsTool;
    toolLabel: string;
    date: Date;
    sourceUrl: string;
    summary: string;
    impact?: string;
    tags: string[];
    status: AiNewsStatus;
    relatedKnowledge: string[];
    draft: boolean;
  };
}

export function getPublishedAiNews<T extends AiNewsEntry>(entries: T[]): T[] {
  return entries
    .filter((entry) => !entry.data.draft)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function getAiNewsByTool<T extends AiNewsEntry>(
  entries: T[],
  tool: AiNewsTool,
): T[] {
  return getPublishedAiNews(entries).filter((entry) => entry.data.tool === tool);
}

export function getAiNewsToolCount<T extends AiNewsEntry>(
  entries: T[],
): Record<AiNewsTool, number> {
  const counts = Object.fromEntries(
    aiNewsTools.map((tool) => [tool.slug, 0]),
  ) as Record<AiNewsTool, number>;

  for (const entry of getPublishedAiNews(entries)) {
    counts[entry.data.tool]++;
  }

  return counts;
}

export function getAiNewsToolLabel(tool: AiNewsTool): string {
  return aiNewsTools.find((item) => item.slug === tool)?.label ?? tool;
}

export function getAiNewsStatusMeta(
  status: AiNewsStatus,
): AiNewsStatusMeta {
  const meta = aiNewsStatuses.find((item) => item.status === status);
  if (!meta) {
    throw new Error(`Unknown AI news status: ${status}`);
  }
  return meta;
}

export function getAiNewsSlug(id: string): string {
  const slug = id.split("/").pop();
  if (!slug) {
    throw new Error(`AI news entry id does not include a slug: ${id}`);
  }
  return slug;
}
