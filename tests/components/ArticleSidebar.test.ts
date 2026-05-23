import { describe, it, expect, beforeAll } from "vitest";
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import ArticleSidebar from "@/components/knowledge/ArticleSidebar.astro";
import type { KnowledgeTier } from "@/data/knowledgeTiers";
import type { SubcategoryNavOption } from "@/utils/knowledge";

let container: AstroContainer;

beforeAll(async () => {
  container = await AstroContainer.create();
});

const tier1: KnowledgeTier = {
  order: 1,
  label: "Getting Started",
  description: "全体像から始める",
  sortOrderStart: 0,
};
const tier2: KnowledgeTier = {
  order: 2,
  label: "Concepts",
  // description なし
  sortOrderStart: 5,
};

const navOptions: SubcategoryNavOption[] = [
  {
    category: "ai-tools",
    categoryLabel: "AI Tools",
    subcategorySlug: "claude-code",
    subcategoryLabel: "Claude Code",
    href: "/knowledge/ai-tools/claude-code",
  },
  {
    category: "ai-tools",
    categoryLabel: "AI Tools",
    subcategorySlug: "codex",
    subcategoryLabel: "OpenAI Codex",
    href: "/knowledge/ai-tools/codex",
  },
  {
    category: "web-development",
    categoryLabel: "Web開発",
    subcategorySlug: "supabase",
    subcategoryLabel: "Supabase",
    href: "/knowledge/web-development/supabase",
  },
];

const baseProps = {
  currentSlug: "intro",
  categoryLabel: "AI Tools",
  categorySlug: "ai-tools" as const,
  subcategorySlug: "claude-code",
  subcategoryLabel: "Claude Code",
  navOptions,
};

describe("ArticleSidebar.astro - dropdown navigation", () => {
  it("正常系: navOptions の件数分の <option> をレンダリングすること", async () => {
    const html = await container.renderToString(ArticleSidebar, {
      props: {
        ...baseProps,
        groups: [{ tier: tier1, articles: [{ slug: "intro", title: "入門", sortOrder: 0 }] }],
      },
    });
    expect(html).toContain('<select');
    for (const opt of navOptions) {
      expect(html).toContain(`value="${opt.href}"`);
      expect(html).toContain(opt.subcategoryLabel);
    }
  });

  it("正常系: <optgroup> でカテゴリラベルが表示されること", async () => {
    const html = await container.renderToString(ArticleSidebar, {
      props: {
        ...baseProps,
        groups: [{ tier: tier1, articles: [{ slug: "intro", title: "入門", sortOrder: 0 }] }],
      },
    });
    expect(html).toMatch(/<optgroup[^>]+label="AI Tools"/);
    expect(html).toMatch(/<optgroup[^>]+label="Web開発"/);
  });

  it("正常系: 現在のサブカテゴリの option に selected が付与されること", async () => {
    const html = await container.renderToString(ArticleSidebar, {
      props: {
        ...baseProps,
        groups: [{ tier: tier1, articles: [{ slug: "intro", title: "入門", sortOrder: 0 }] }],
      },
    });
    expect(html).toMatch(
      /<option[^>]+value="\/knowledge\/ai-tools\/claude-code"[^>]*selected/,
    );
  });
});

describe("ArticleSidebar.astro - progress badge", () => {
  it("正常系: tier ありグループで 'X / Y 記事' バッジが表示されること", async () => {
    const html = await container.renderToString(ArticleSidebar, {
      props: {
        ...baseProps,
        groups: [
          {
            tier: tier1,
            articles: [
              { slug: "intro", title: "入門", sortOrder: 0 },
              { slug: "second", title: "次", sortOrder: 1 },
            ],
          },
          {
            tier: tier2,
            articles: [{ slug: "concept", title: "概念", sortOrder: 5 }],
          },
        ],
      },
    });
    // Y = 全グループ合計 = 3
    expect(html).toContain("2 / 3 記事");
    expect(html).toContain("1 / 3 記事");
  });

  it("異常系: tier=null グループでは進捗バッジが出ないこと", async () => {
    const html = await container.renderToString(ArticleSidebar, {
      props: {
        ...baseProps,
        groups: [
          {
            tier: null,
            articles: [{ slug: "intro", title: "入門", sortOrder: 0 }],
          },
        ],
      },
    });
    // 進捗バッジ表記 "N / M 記事" は含まれないこと
    expect(html).not.toMatch(/\d+\s*\/\s*\d+\s*記事/);
  });
});

describe("ArticleSidebar.astro - tier description", () => {
  it("正常系: description ありの tier では summary 内に description が表示される", async () => {
    const html = await container.renderToString(ArticleSidebar, {
      props: {
        ...baseProps,
        groups: [
          { tier: tier1, articles: [{ slug: "intro", title: "入門", sortOrder: 0 }] },
        ],
      },
    });
    expect(html).toContain("全体像から始める");
  });

  it("異常系: description なしの tier では description ノードが出ないこと", async () => {
    const html = await container.renderToString(ArticleSidebar, {
      props: {
        ...baseProps,
        groups: [
          { tier: tier2, articles: [{ slug: "x", title: "X", sortOrder: 5 }] },
        ],
      },
    });
    expect(html).not.toContain("全体像から始める");
  });
});

describe("ArticleSidebar.astro - Phase 1 挙動の回帰", () => {
  it("正常系: 現在記事の <a> に aria-current=page と teal クラスが付くこと", async () => {
    const html = await container.renderToString(ArticleSidebar, {
      props: {
        ...baseProps,
        currentSlug: "intro",
        groups: [
          {
            tier: tier1,
            articles: [
              { slug: "intro", title: "入門", sortOrder: 0 },
              { slug: "other", title: "別記事", sortOrder: 1 },
            ],
          },
        ],
      },
    });
    expect(html).toMatch(
      /<a[^>]+href="\/knowledge\/ai-tools\/claude-code\/intro"[^>]*aria-current="page"/,
    );
    expect(html).toMatch(/border-teal-500[\s\S]*intro/);
  });

  it("正常系: hasTiers=false（全グループ tier=null）でフラットリストにフォールバックすること", async () => {
    const html = await container.renderToString(ArticleSidebar, {
      props: {
        ...baseProps,
        groups: [
          {
            tier: null,
            articles: [
              { slug: "a", title: "A", sortOrder: 0 },
              { slug: "b", title: "B", sortOrder: 1 },
            ],
          },
        ],
      },
    });
    expect(html).not.toContain("<details");
    expect(html).toContain("A");
    expect(html).toContain("B");
  });
});
