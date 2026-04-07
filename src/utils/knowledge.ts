import type { KnowledgeCategory, ExternalArticle, ArticlePlatform } from "@/types";
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

/** 外部記事・内部MDX記事を統一的に扱うための型 */
export interface UnifiedArticle {
  id: string;
  title: string;
  description: string;
  category: KnowledgeCategory;
  tags: string[];
  publishedAt: Date;
  source: "external" | "internal";
  platform?: ArticlePlatform;
  href: string;
  isExternal: boolean;
}

/** 外部記事をUnifiedArticleに変換 */
export function toUnifiedFromExternal(
  article: ExternalArticle,
): UnifiedArticle {
  return {
    id: article.id,
    title: article.title,
    description: article.description,
    category: article.category,
    tags: article.tags,
    publishedAt: article.publishedAt,
    source: "external",
    platform: article.platform,
    href: article.url,
    isExternal: true,
  };
}

/** MDX記事をUnifiedArticleに変換 */
export function toUnifiedFromInternal(entry: KnowledgeEntry): UnifiedArticle {
  const slug = entry.id.split("/").pop() as string;
  return {
    id: entry.id,
    title: entry.data.title,
    description: entry.data.description,
    category: entry.data.category as KnowledgeCategory,
    tags: entry.data.tags,
    publishedAt: entry.data.publishedAt,
    source: "internal",
    href: `/knowledge/${entry.data.category}/${slug}`,
    isExternal: false,
  };
}

/** 外部記事 + MDX公開記事を統合してソート */
export function mergeArticles(
  externalArticles: ExternalArticle[],
  mdxEntries: KnowledgeEntry[],
): UnifiedArticle[] {
  const external = externalArticles.map(toUnifiedFromExternal);
  const internal = getPublishedArticles(mdxEntries).map(toUnifiedFromInternal);
  return [...external, ...internal].sort(
    (a, b) => b.publishedAt.getTime() - a.publishedAt.getTime(),
  );
}

/** カテゴリでフィルタした統合記事 */
export function mergeArticlesByCategory(
  externalArticles: ExternalArticle[],
  mdxEntries: KnowledgeEntry[],
  category: KnowledgeCategory,
): UnifiedArticle[] {
  return mergeArticles(externalArticles, mdxEntries).filter(
    (a) => a.category === category,
  );
}

/** カテゴリ別の統合記事数 */
export function getUnifiedCategoryCount(
  externalArticles: ExternalArticle[],
  mdxEntries: KnowledgeEntry[],
): Record<KnowledgeCategory, number> {
  const all = mergeArticles(externalArticles, mdxEntries);
  const counts = Object.fromEntries(
    categories.map((c) => [c.slug, 0]),
  ) as Record<KnowledgeCategory, number>;

  for (const article of all) {
    if (article.category in counts) {
      counts[article.category]++;
    }
  }

  return counts;
}

// --- 以下はMDX記事専用のユーティリティ（内部記事ルーティング用） ---

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
