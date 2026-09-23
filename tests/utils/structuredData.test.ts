import { describe, it, expect } from "vitest";
import {
  buildArticleSchema,
  buildPersonSchema,
  buildOrganizationSchema,
} from "@/utils/structuredData";
import { personProfile, schemaIds } from "@/data/person";
import { siteConfig } from "@/data/site";

describe("buildPersonSchema", () => {
  it("正常系: schema.org の Person として必要な項目が揃っていること", () => {
    const schema = buildPersonSchema();

    expect(schema["@context"]).toBe("https://schema.org");
    expect(schema["@type"]).toBe("Person");
    expect(schema["@id"]).toBe(schemaIds.person);
    expect(schema.name).toBe(personProfile.name);
    expect(schema.jobTitle).toBe(personProfile.jobTitle);
  });

  it("正常系: sameAs に各媒体のURLがすべて含まれること", () => {
    const schema = buildPersonSchema();

    expect(schema.sameAs).toEqual([...personProfile.sameAs]);
  });

  it("正常系: image と url が絶対URLに解決されること", () => {
    const schema = buildPersonSchema();

    expect(schema.url).toBe(`${siteConfig.url}/about`);
    expect(schema.image).toBe(`${siteConfig.url}${personProfile.image}`);
  });

  it("正常系: worksFor が Organization の @id を参照すること", () => {
    const schema = buildPersonSchema();

    expect(schema.worksFor).toEqual({ "@id": schemaIds.organization });
  });
});

describe("buildOrganizationSchema", () => {
  it("正常系: founder で Person の @id を参照すること", () => {
    const schema = buildOrganizationSchema();

    expect(schema["@type"]).toBe("Organization");
    expect(schema["@id"]).toBe(schemaIds.organization);
    expect(schema.founder).toEqual({ "@id": schemaIds.person });
  });

  it("正常系: name と url が siteConfig と一致すること", () => {
    const schema = buildOrganizationSchema();

    expect(schema.name).toBe(siteConfig.name);
    expect(schema.url).toBe(siteConfig.url);
  });
});

describe("buildArticleSchema", () => {
  const input = {
    title: "記事タイトル",
    description: "記事の説明",
    path: "/knowledge/ai-tools/sample",
    createdAt: new Date("2026-05-01T00:00:00.000Z"),
  };

  it("正常系: author が Person の @id を参照し、publisher が Organization を参照すること", () => {
    const schema = buildArticleSchema(input);

    expect(schema["@type"]).toBe("Article");
    expect(schema.author).toEqual({
      "@type": "Person",
      "@id": schemaIds.person,
      name: personProfile.name,
      url: `${siteConfig.url}/about`,
    });
    expect(schema.publisher).toEqual({ "@id": schemaIds.organization });
  });

  it("正常系: url と mainEntityOfPage が記事の絶対URLになること", () => {
    const schema = buildArticleSchema(input);

    expect(schema.url).toBe(`${siteConfig.url}/knowledge/ai-tools/sample`);
    expect(schema.mainEntityOfPage).toBe(schema.url);
  });

  it("正常系: updatedAt が無いときは dateModified を出さないこと", () => {
    const schema = buildArticleSchema(input);

    expect(schema.headline).toBe("記事タイトル");
    expect(schema.datePublished).toBe("2026-05-01T00:00:00.000Z");
    expect(schema).not.toHaveProperty("dateModified");
  });

  it("正常系: updatedAt があるときは dateModified を出すこと", () => {
    const schema = buildArticleSchema({
      ...input,
      updatedAt: new Date("2026-06-01T00:00:00.000Z"),
    });

    expect(schema.dateModified).toBe("2026-06-01T00:00:00.000Z");
  });
});
