import type { KnowledgeCategory } from "@/types";
import { categories } from "@/data/knowledge";

interface KnowledgeEntry {
  id: string;
  data: {
    title: string;
    description: string;
    category: string;
    tags: string[];
    publishedAt: Date;
    updatedAt?: Date;
    draft: boolean;
    author: string;
    ogImage?: string;
  };
}

export function getPublishedArticles<T extends KnowledgeEntry>(
  entries: T[],
): T[] {
  return entries
    .filter((entry) => !entry.data.draft)
    .sort(
      (a, b) =>
        b.data.publishedAt.getTime() - a.data.publishedAt.getTime(),
    );
}

export function getArticlesByCategory<T extends KnowledgeEntry>(
  entries: T[],
  category: KnowledgeCategory,
): T[] {
  return getPublishedArticles(entries).filter(
    (entry) => entry.data.category === category,
  );
}

export function getCategoryArticleCount<T extends KnowledgeEntry>(
  entries: T[],
): Record<KnowledgeCategory, number> {
  const published = getPublishedArticles(entries);
  const counts = Object.fromEntries(
    categories.map((c) => [c.slug, 0]),
  ) as Record<KnowledgeCategory, number>;

  for (const entry of published) {
    const cat = entry.data.category as KnowledgeCategory;
    if (cat in counts) {
      counts[cat]++;
    }
  }

  return counts;
}

export function getRelatedArticles<T extends KnowledgeEntry>(
  entries: T[],
  currentId: string,
  category: string,
  tags: string[],
  limit = 3,
): T[] {
  const published = getPublishedArticles(entries).filter(
    (entry) => entry.id !== currentId,
  );

  const scored = published.map((entry) => {
    let score = 0;
    if (entry.data.category === category) score += 2;
    for (const tag of tags) {
      if (entry.data.tags.includes(tag)) score += 1;
    }
    return { entry, score };
  });

  scored.sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map((s) => s.entry);
}
