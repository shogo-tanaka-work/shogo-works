import type { KnowledgeCategory, SubcategoryMeta } from "@/types";
import { categories, subcategories } from "@/data/knowledge";

interface KnowledgeEntry {
  id: string;
  data: {
    title: string;
    description: string;
    category: string;
    subcategory?: string;
    difficulty?: string;
    contentType?: string;
    estimatedMinutes?: number;
    prerequisites?: string[];
    tags: string[];
    sortOrder: number;
    createdAt: Date;
    updatedAt?: Date;
    draft: boolean;
    author: string;
    ogImage?: string;
  };
}

/** 一覧表示で扱う記事の形。href の生成規則をここ1か所に閉じる */
export interface KnowledgeArticle {
  id: string;
  title: string;
  description: string;
  category: KnowledgeCategory;
  subcategory?: string;
  tags: string[];
  sortOrder: number;
  createdAt: Date;
  href: string;
}

/** MDX記事を一覧表示用の形へ変換する */
export function toKnowledgeArticle(entry: KnowledgeEntry): KnowledgeArticle {
  const slug = entry.id.split("/").pop() as string;
  const { category, subcategory } = entry.data;
  const href = subcategory
    ? `/knowledge/${category}/${subcategory}/${slug}`
    : `/knowledge/${category}/${slug}`;
  return {
    id: entry.id,
    title: entry.data.title,
    description: entry.data.description,
    category: category as KnowledgeCategory,
    subcategory,
    tags: entry.data.tags,
    sortOrder: entry.data.sortOrder,
    createdAt: entry.data.createdAt,
    href,
  };
}

/** カテゴリ別の公開記事数（カテゴリ定義にあるものはすべて 0 で初期化する） */
export function getAllCategoryCounts<T extends KnowledgeEntry>(
  entries: T[],
): Record<KnowledgeCategory, number> {
  const counts = Object.fromEntries(
    categories.map((c) => [c.slug, 0]),
  ) as Record<KnowledgeCategory, number>;

  for (const entry of getPublishedArticles(entries)) {
    const category = entry.data.category as KnowledgeCategory;
    if (category in counts) {
      counts[category]++;
    }
  }

  return counts;
}

export function getPublishedArticles<T extends KnowledgeEntry>(
  entries: T[],
): T[] {
  return entries
    .filter((entry) => !entry.data.draft)
    .sort(
      (a, b) =>
        a.data.sortOrder - b.data.sortOrder ||
        b.data.createdAt.getTime() - a.data.createdAt.getTime(),
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

/**
 * カテゴリ＋サブカテゴリで記事をフィルタする。
 * subcategory 省略時はカテゴリ直下（subcategory 未指定）の記事のみを返す。
 */
export function getArticlesByCategoryAndSubcategory<T extends KnowledgeEntry>(
  entries: T[],
  category: KnowledgeCategory,
  subcategory?: string,
): T[] {
  return getArticlesByCategory(entries, category).filter((entry) =>
    subcategory === undefined
      ? entry.data.subcategory === undefined
      : entry.data.subcategory === subcategory,
  );
}

/**
 * サブカテゴリを contentType で分ける。
 * 「読んで学ぶもの」と「必要なときに引くもの」を同じ棚に並べないための集計。
 * サブカテゴリ内で最も多い contentType をそのサブカテゴリの性格とみなす。
 */
export function getSubcategoryContentType<T extends KnowledgeEntry>(
  entries: T[],
  category: KnowledgeCategory,
  subcategory: string,
): string | undefined {
  const matches = getPublishedArticles(entries).filter(
    (e) => e.data.category === category && e.data.subcategory === subcategory,
  );
  if (matches.length === 0) return undefined;

  const counts = new Map<string, number>();
  for (const entry of matches) {
    const type = entry.data.contentType;
    if (type === undefined) continue;
    counts.set(type, (counts.get(type) ?? 0) + 1);
  }

  let dominant: string | undefined;
  let max = 0;
  for (const [type, count] of counts) {
    if (count > max) {
      dominant = type;
      max = count;
    }
  }
  return dominant;
}

/** 指定カテゴリに登録されたサブカテゴリメタ情報を返す */
export function getSubcategories(
  category: KnowledgeCategory,
): SubcategoryMeta[] {
  return subcategories[category] ?? [];
}

/**
 * サブカテゴリ切替ドロップダウン等で使う、全カテゴリ×全サブカテゴリの
 * フラットな選択肢リスト。カテゴリ定義順 → サブカテゴリ定義順で返す。
 */
export interface SubcategoryNavOption {
  category: KnowledgeCategory;
  categoryLabel: string;
  subcategorySlug: string;
  subcategoryLabel: string;
  href: string;
}

/**
 * カテゴリトップページのサブカテゴリカード等で使う、サブカテゴリ単位の集計情報。
 *
 * - `articleCount`: 公開状態の MDX 記事数（draft は除外）
 * - `lastUpdatedAt`: 公開記事の `updatedAt ?? createdAt` の最大値。記事ゼロなら null
 *
 * 外部記事は subcategory を持たない仕様のため対象外。
 */
export interface SubcategoryMetrics {
  articleCount: number;
  lastUpdatedAt: Date | null;
}

export function getSubcategoryMetrics<T extends KnowledgeEntry>(
  entries: T[],
  category: KnowledgeCategory,
  subcategory: string,
): SubcategoryMetrics {
  const matches = getPublishedArticles(entries).filter(
    (e) =>
      e.data.category === category && e.data.subcategory === subcategory,
  );
  if (matches.length === 0) {
    return { articleCount: 0, lastUpdatedAt: null };
  }
  const lastUpdatedAt = matches.reduce<Date>((acc, e) => {
    const d = e.data.updatedAt ?? e.data.createdAt;
    return d.getTime() > acc.getTime() ? d : acc;
  }, new Date(0));
  return { articleCount: matches.length, lastUpdatedAt };
}

export function getAllSubcategoryNavOptions(): SubcategoryNavOption[] {
  const options: SubcategoryNavOption[] = [];
  for (const cat of categories) {
    const subs = subcategories[cat.slug] ?? [];
    for (const sub of subs) {
      options.push({
        category: cat.slug,
        categoryLabel: cat.label,
        subcategorySlug: sub.slug,
        subcategoryLabel: sub.label,
        href: `/knowledge/${cat.slug}/${sub.slug}`,
      });
    }
  }
  return options;
}

/**
 * 記事配列を tier 単位でグループ化する。
 * tier 定義の各エントリの `sortOrderStart` をしきい値にして区切る。
 *
 * tier 定義に該当しない sortOrder の記事（最初の tier の start より小さい場合のみ）は
 * 先頭の `null` グループに入れる。
 */
export function groupArticlesByTier<T extends Pick<KnowledgeArticle, "sortOrder">>(
  articles: T[],
  tiers: import("@/data/knowledgeTiers").KnowledgeTier[],
): Array<{ tier: import("@/data/knowledgeTiers").KnowledgeTier | null; articles: T[] }> {
  if (tiers.length === 0) {
    return [{ tier: null, articles }];
  }

  // tier 定義は order 昇順とは限らないので sortOrderStart 昇順でソート
  const sorted = [...tiers].sort((a, b) => a.sortOrderStart - b.sortOrderStart);

  const groups: Array<{
    tier: import("@/data/knowledgeTiers").KnowledgeTier | null;
    articles: T[];
  }> = [];

  // 最初の tier より前の sortOrder を持つ記事は null グループに
  const beforeFirst = articles.filter(
    (a) => a.sortOrder < sorted[0].sortOrderStart,
  );
  if (beforeFirst.length > 0) {
    groups.push({ tier: null, articles: beforeFirst });
  }

  for (let i = 0; i < sorted.length; i++) {
    const tier = sorted[i];
    const next = sorted[i + 1];
    const inTier = articles.filter(
      (a) =>
        a.sortOrder >= tier.sortOrderStart &&
        (next === undefined || a.sortOrder < next.sortOrderStart),
    );
    groups.push({ tier, articles: inTier });
  }

  return groups;
}

/**
 * タグを URL の 1 セグメントに収まる形へ正規化する。
 * `CI/CD` のようにスラッシュを含むタグを素通しすると、Astro の [tag] が
 * パスを割れずビルドが落ちるため、記号は必ずハイフンへ畳む。
 * 併せて小文字化することで `Codex` と `codex` の表記ゆれを同じページへ寄せる。
 */
export function getKnowledgeTagSlug(tag: string): string {
  return tag
    .toLowerCase()
    .replace(/[\s/\\._]+/g, "-")
    .replace(/[^\p{Letter}\p{Number}-]/gu, "")
    .replace(/-{2,}/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * タグ一覧の絞り込みで、タグ名が検索語に一致するかを判定する。
 * 記号やスペースを畳んで比較し、「claude code」「claudecode」のどちらでも引けるようにする。
 */
export function matchesTagQuery(tag: string, query: string): boolean {
  const normalize = (value: string): string =>
    value.toLowerCase().replace(/[\s/\\._-]+/g, "");

  const normalizedQuery = normalize(query);
  if (normalizedQuery === "") return true;

  return normalize(tag).includes(normalizedQuery);
}

export interface KnowledgeTag {
  /** 表示用のラベル（最も多く使われている表記） */
  tag: string;
  /** URL に使う正規化済みスラッグ */
  slug: string;
  count: number;
}

/** 全タグと出現回数を取得する（公開記事のみ、件数降順→タグ名昇順） */
export function getAllTags<T extends KnowledgeEntry>(
  entries: T[],
): KnowledgeTag[] {
  // slug 単位で集計し、表記ゆれを1ページへ寄せる
  const groups = new Map<string, { labels: Map<string, number>; count: number }>();

  for (const entry of getPublishedArticles(entries)) {
    for (const tag of entry.data.tags) {
      const slug = getKnowledgeTagSlug(tag);
      if (!slug) continue;

      const group = groups.get(slug) ?? { labels: new Map(), count: 0 };
      group.labels.set(tag, (group.labels.get(tag) ?? 0) + 1);
      group.count += 1;
      groups.set(slug, group);
    }
  }

  return Array.from(groups.entries())
    .map(([slug, group]) => {
      const [tag] = Array.from(group.labels.entries()).sort(
        ([labelA, countA], [labelB, countB]) =>
          countB - countA || labelA.localeCompare(labelB),
      )[0];
      return { tag, slug, count: group.count };
    })
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

/** 指定タグ（スラッグまたは元の表記）を含む公開記事を返す */
export function getArticlesByTag<T extends KnowledgeEntry>(
  entries: T[],
  tag: string,
): T[] {
  const slug = getKnowledgeTagSlug(tag);
  return getPublishedArticles(entries).filter((entry) =>
    entry.data.tags.some((entryTag) => getKnowledgeTagSlug(entryTag) === slug),
  );
}

/**
 * 同カテゴリ（または同サブカテゴリ）内で前後の記事を返す（sortOrder順）。
 * subcategory 省略時はカテゴリ直下の記事のみを対象にする。
 */
/** 前提レッスンとして表示する記事の最小情報 */
export interface PrerequisiteLink {
  title: string;
  href: string;
}

/**
 * frontmatter の prerequisites（slug の配列）を、表示に必要な title と href へ解決する。
 * 同一カテゴリ・同一サブカテゴリ内から探し、見つからない slug は黙って落とす。
 * 記事の移動やリネームで参照が切れても、ページ全体は壊さない方針。
 */
export function resolvePrerequisites<T extends KnowledgeEntry>(
  entries: T[],
  entry: T,
): PrerequisiteLink[] {
  const slugs = entry.data.prerequisites ?? [];
  if (slugs.length === 0) return [];

  const siblings = getPublishedArticles(entries).filter(
    (candidate) =>
      candidate.data.category === entry.data.category &&
      candidate.data.subcategory === entry.data.subcategory,
  );

  const bySlug = new Map(
    siblings.map((candidate) => [candidate.id.split("/").pop() as string, candidate]),
  );

  return slugs.flatMap((slug) => {
    const match = bySlug.get(slug);
    if (match === undefined) return [];
    return [{ title: match.data.title, href: toKnowledgeArticle(match).href }];
  });
}

export function getAdjacentArticles<T extends KnowledgeEntry>(
  entries: T[],
  currentId: string,
  category: KnowledgeCategory,
  subcategory?: string,
): { previous: T | null; next: T | null } {
  const list = getArticlesByCategoryAndSubcategory(
    entries,
    category,
    subcategory,
  );
  const idx = list.findIndex((e) => e.id === currentId);
  if (idx === -1) return { previous: null, next: null };
  return {
    previous: idx > 0 ? list[idx - 1] : null,
    next: idx < list.length - 1 ? list[idx + 1] : null,
  };
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

/**
 * 公開記事を「最終更新日」の降順で返す。
 * 各記事の最終更新日は `updatedAt ?? createdAt` で評価する。
 * 外部記事は updatedAt を持たないため対象外（MDX のみ）。
 */
/** 1つのサブカテゴリが「最近更新」を占有できる上限 */
const MAX_PER_SUBCATEGORY = 2;

/**
 * 「最近更新」の一覧を返す。
 * 記事はサブカテゴリ単位でまとめて投入されることが多く、素直に日付順で並べると
 * 同じ日に入った1サブカテゴリだけで埋まってしまうため、まず各サブカテゴリから
 * 上限数までを拾い、枠が余ったら残りを日付順で埋める。
 */
export function getRecentlyUpdatedArticles<T extends KnowledgeEntry>(
  entries: T[],
  limit: number,
): T[] {
  const byDateDesc = entries
    .filter((entry) => !entry.data.draft)
    .sort((a, b) => {
      const aDate = (a.data.updatedAt ?? a.data.createdAt).getTime();
      const bDate = (b.data.updatedAt ?? b.data.createdAt).getTime();
      return bDate - aDate;
    });

  const perGroup = new Map<string, number>();
  const picked: T[] = [];
  const rest: T[] = [];

  for (const entry of byDateDesc) {
    const groupKey = `${entry.data.category}/${entry.data.subcategory ?? "-"}`;
    const used = perGroup.get(groupKey) ?? 0;

    if (used < MAX_PER_SUBCATEGORY) {
      perGroup.set(groupKey, used + 1);
      picked.push(entry);
    } else {
      rest.push(entry);
    }
  }

  // 枠が余る場合だけ、はみ出した記事を日付順で戻す
  return [...picked, ...rest]
    .slice(0, limit)
    .sort((a, b) => {
      const aDate = (a.data.updatedAt ?? a.data.createdAt).getTime();
      const bDate = (b.data.updatedAt ?? b.data.createdAt).getTime();
      return bDate - aDate;
    });
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
