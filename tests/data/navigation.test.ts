import { describe, it, expect } from "vitest";
import { navItems } from "@/data/navigation";

describe("navigation データ", () => {
  it("Servicesが先頭に含まれていること", () => {
    expect(navItems[0]).toEqual({
      label: "Services",
      href: "/services",
    });
  });

  it("すべてのナビ項目にlabelとhrefが存在すること", () => {
    for (const item of navItems) {
      expect(item.label).toBeTruthy();
      expect(item.href).toMatch(/^\//);
    }
  });

  it("6つのナビ項目が定義されていること", () => {
    expect(navItems).toHaveLength(6);
  });

  it("Contactリンクは Navbar の常設ボタンに集約するためナビ項目には含めないこと", () => {
    expect(navItems.find((item) => item.href === "/contact")).toBeUndefined();
  });

  it("Knowledgeリンクが含まれていること", () => {
    const knowledge = navItems.find((item) => item.label === "Knowledge");
    expect(knowledge).toEqual({
      label: "Knowledge",
      href: "/knowledge",
    });
  });

  it("AI Newsリンクが含まれていること", () => {
    const aiNews = navItems.find((item) => item.label === "AI News");
    expect(aiNews).toEqual({
      label: "AI News",
      href: "/ai-news",
    });
  });
});
