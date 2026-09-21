import { describe, it, expect } from "vitest";
import { buildPersonSchema, buildOrganizationSchema } from "@/utils/structuredData";
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
