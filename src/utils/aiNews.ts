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

const JST_OFFSET_MINUTES = 9 * 60;

export interface AiNewsArchiveMonth {
  key: string; // "2026-08"
  label: string; // "2026年8月"
  count: number;
}

/**
 * 記事の日付から月キー（YYYY-MM）を JST 基準で求める。
 * frontmatter の date はタイムゾーン指定なしの日付文字列（= UTC 0時）で書かれることが多く、
 * UTC のまま切ると JST の月初・月末が隣の月に吸われるため、+9h してから月を取る。
 */
export function getAiNewsMonthKey(date: Date): string {
  const jst = new Date(date.getTime() + JST_OFFSET_MINUTES * 60 * 1000);
  const year = jst.getUTCFullYear();
  const month = String(jst.getUTCMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
}

export function getAiNewsMonthLabel(key: string): string {
  const [year, month] = key.split("-");
  if (!year || !month) {
    throw new Error(`Invalid AI news month key: ${key}`);
  }
  return `${year}年${Number(month)}月`;
}

/** 公開記事を月別に集計し、新しい月から順に返す */
export function getAiNewsArchive<T extends AiNewsEntry>(
  entries: T[],
): AiNewsArchiveMonth[] {
  const counts = new Map<string, number>();

  for (const entry of getPublishedAiNews(entries)) {
    const key = getAiNewsMonthKey(entry.data.date);
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }

  return [...counts.entries()]
    .sort(([a], [b]) => b.localeCompare(a))
    .map(([key, count]) => ({ key, label: getAiNewsMonthLabel(key), count }));
}

export function getAiNewsByMonth<T extends AiNewsEntry>(
  entries: T[],
  key: string,
): T[] {
  return getPublishedAiNews(entries).filter(
    (entry) => getAiNewsMonthKey(entry.data.date) === key,
  );
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
