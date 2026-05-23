import type { RoadmapPath, RoadmapStep } from "@/data/roadmap";
import { estimateReadingMinutes } from "@/utils/readingTime";

/** ロードマップ解決時に最低限必要となる Content Entry の形 */
interface RoadmapKnowledgeEntry {
  id: string;
  body?: string;
  data: {
    title: string;
    description: string;
    category: string;
    subcategory?: string;
    draft: boolean;
    updatedAt?: Date;
    createdAt: Date;
  };
}

export interface ResolvedRoadmapStep extends RoadmapStep {
  title: string;
  description: string;
  href: string;
  readingMinutes: number;
  updatedAt: Date;
}

export interface ResolvedRoadmapPath {
  id: string;
  title: string;
  description: string;
  steps: ResolvedRoadmapStep[];
}

function buildHref(entry: RoadmapKnowledgeEntry): string {
  const slug = entry.id.split("/").pop() as string;
  const { category, subcategory } = entry.data;
  return subcategory
    ? `/knowledge/${category}/${subcategory}/${slug}`
    : `/knowledge/${category}/${slug}`;
}

/**
 * 1 つのロードマップパスを解決する。
 * 未解決 ref / draft 記事への ref が含まれる場合は throw する。
 * これにより `astro build` 時にロードマップ整合性が検証される。
 */
export function resolveRoadmap(
  path: RoadmapPath,
  entries: RoadmapKnowledgeEntry[],
): ResolvedRoadmapPath {
  const byId = new Map(entries.map((e) => [e.id, e]));

  const steps: ResolvedRoadmapStep[] = path.steps.map((step) => {
    const entry = byId.get(step.ref);
    if (!entry) {
      throw new Error(
        `[roadmap] ref "${step.ref}" in path "${path.id}" does not match any knowledge entry`,
      );
    }
    if (entry.data.draft) {
      throw new Error(
        `[roadmap] ref "${step.ref}" in path "${path.id}" points to a draft article`,
      );
    }
    return {
      ref: step.ref,
      note: step.note,
      title: entry.data.title,
      description: entry.data.description,
      href: buildHref(entry),
      readingMinutes: estimateReadingMinutes(entry.body ?? ""),
      updatedAt: entry.data.updatedAt ?? entry.data.createdAt,
    };
  });

  return {
    id: path.id,
    title: path.title,
    description: path.description,
    steps,
  };
}

export function resolveAllRoadmaps(
  paths: RoadmapPath[],
  entries: RoadmapKnowledgeEntry[],
): ResolvedRoadmapPath[] {
  return paths.map((p) => resolveRoadmap(p, entries));
}
