import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { buildLlmsTxt } from "@/utils/llmsTxt";
import { categories } from "@/data/knowledge";
import { services } from "@/data/services";
import { personProfile } from "@/data/person";
import { siteConfig } from "@/data/site";

describe("buildLlmsTxt", () => {
  const text = buildLlmsTxt();

  it("正常系: llms.txt の形式どおり、H1 のサイト名と引用ブロックの概要で始まること", () => {
    const [h1, , summary] = text.split("\n");

    expect(h1).toBe(`# ${siteConfig.name}`);
    expect(summary).toMatch(/^> /);
  });

  it("正常系: About・サービス一覧・事例・Knowledge の主要ページを絶対URLで含むこと", () => {
    ["/about", "/services", "/cases", "/knowledge"].forEach((path) => {
      expect(text).toContain(`(${siteConfig.url}${path})`);
    });
  });

  it("正常系: 各サービスページへのリンクを含むこと", () => {
    services.forEach((service) => {
      expect(text).toContain(`[${service.title}](${siteConfig.url}${service.href})`);
    });
  });

  it("正常系: Knowledge の全カテゴリへのリンクを含むこと", () => {
    categories.forEach((category) => {
      expect(text).toContain(`(${siteConfig.url}/knowledge/${category.slug})`);
    });
  });

  it("正常系: 著者名と肩書きを含むこと", () => {
    expect(text).toContain(personProfile.name);
    expect(text).toContain(personProfile.jobTitle);
  });

  it("正常系: robots.txt の Content-Signal（学習利用は不可）と同じ方針を書くこと", () => {
    expect(text).toContain("search=yes,ai-input=yes,ai-train=no");
  });
});

describe("robots.txt との整合", () => {
  it("public/robots.txt の Content-Signal が siteConfig.contentSignal と一致すること", () => {
    const robots = readFileSync(resolve(__dirname, "../../public/robots.txt"), "utf-8");

    expect(robots).toContain(`Content-Signal: ${siteConfig.contentSignal}`);
  });
});
