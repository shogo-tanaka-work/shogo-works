import { describe, it, expect } from "vitest";
import { navItems } from "@/data/navigation";
import { services } from "@/data/services";

describe("navigation データ", () => {
  it("Servicesが先頭でドロップダウン（children）を持つこと", () => {
    expect(navItems[0]?.label).toBe("Services");
    expect(navItems[0]?.href).toBe("/services");
    expect(navItems[0]?.children?.length).toBeGreaterThanOrEqual(2);
  });

  it("すべてのナビ項目にlabelとhrefが存在すること", () => {
    for (const item of navItems) {
      expect(item.label).toBeTruthy();
      expect(item.href).toMatch(/^\//);
    }
  });

  it("5つのトップレベル項目が定義されていること（ドロップダウン導入で集約）", () => {
    expect(navItems).toHaveLength(5);
  });

  it("課題導線「お悩みから探す」がトップの #problems アンカーへ向くこと", () => {
    const problemNav = navItems.find((item) => item.href === "/#problems");
    expect(problemNav).toEqual({
      label: "お悩みから探す",
      href: "/#problems",
    });
  });

  it("Contactリンクは Navbar の常設ボタンに集約するためナビ項目には含めないこと", () => {
    expect(navItems.find((item) => item.href === "/contact")).toBeUndefined();
  });

  it("Knowledgeリンクがドロップダウン付きで含まれていること", () => {
    const knowledge = navItems.find((item) => item.label === "Knowledge");
    expect(knowledge?.href).toBe("/knowledge");
    expect(knowledge?.children?.length).toBeGreaterThanOrEqual(2);
  });

  it("AI Newsリンクが含まれていること", () => {
    const aiNews = navItems.find((item) => item.label === "AI News");
    expect(aiNews).toEqual({
      label: "AI News",
      href: "/ai-news",
    });
  });

  it("トップレベルの label と href が重複していないこと", () => {
    const labels = navItems.map((item) => item.label);
    const hrefs = navItems.map((item) => item.href);
    expect(new Set(labels).size).toBe(labels.length);
    expect(new Set(hrefs).size).toBe(hrefs.length);
  });

  it("すべての子項目の href が内部リンク（/ 始まり）であること", () => {
    const childHrefs = navItems.flatMap(
      (item) => item.children?.map((c) => c.href) ?? [],
    );
    childHrefs.forEach((href) => {
      expect(href, `不正な href: ${href}`).toMatch(/^\//);
    });
  });

  it("各ドロップダウン内で子項目の href が重複していないこと", () => {
    navItems
      .filter((item) => item.children)
      .forEach((item) => {
        const childHrefs = item.children!.map((c) => c.href);
        expect(
          new Set(childHrefs).size,
          `${item.label} 配下で href が重複`,
        ).toBe(childHrefs.length);
      });
  });

  it("children を持つ項目は2件以上の子項目を持つこと（1件ならフラットにすべき）", () => {
    navItems
      .filter((item) => item.children)
      .forEach((item) => {
        expect(item.children!.length, item.label).toBeGreaterThanOrEqual(2);
      });
  });

  it("Services ドロップダウンのサービスLPリンクが services.ts と整合していること", () => {
    const serviceHrefs = new Set(services.map((s) => s.href));
    const servicesNav = navItems.find((item) => item.label === "Services");
    expect(servicesNav?.children).toBeDefined();

    // /services/ 配下の子リンクは実在するサービスLPを指すこと
    servicesNav!.children!
      .filter((c) => /^\/services\/.+/.test(c.href))
      .forEach((c) => {
        expect(
          serviceHrefs.has(c.href),
          `存在しないサービスLP: ${c.href}`,
        ).toBe(true);
      });
  });
});
