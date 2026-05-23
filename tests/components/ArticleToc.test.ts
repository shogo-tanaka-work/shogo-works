import { describe, it, expect, beforeAll } from "vitest";
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import ArticleToc from "@/components/knowledge/ArticleToc.astro";
import type { MarkdownHeading } from "astro";

let container: AstroContainer;

beforeAll(async () => {
  container = await AstroContainer.create();
});

const headings = (items: MarkdownHeading[]) => items;

describe("ArticleToc.astro", () => {
  it("renders a nav landmark with aria-label", async () => {
    const html = await container.renderToString(ArticleToc, {
      props: { headings: headings([{ depth: 2, slug: "intro", text: "Intro" }]) },
    });
    expect(html).toMatch(/<nav[^>]+aria-label="[^"]+"/);
  });

  it("renders anchor links pointing to heading slugs", async () => {
    const html = await container.renderToString(ArticleToc, {
      props: {
        headings: headings([
          { depth: 2, slug: "section-a", text: "Section A" },
          { depth: 3, slug: "section-a-1", text: "Section A.1" },
          { depth: 2, slug: "section-b", text: "Section B" },
        ]),
      },
    });
    expect(html).toContain('href="#section-a"');
    expect(html).toContain('href="#section-a-1"');
    expect(html).toContain('href="#section-b"');
    expect(html).toContain("Section A");
    expect(html).toContain("Section A.1");
    expect(html).toContain("Section B");
  });

  it("nests h3 entries inside the preceding h2 list item", async () => {
    const html = await container.renderToString(ArticleToc, {
      props: {
        headings: headings([
          { depth: 2, slug: "parent", text: "Parent" },
          { depth: 3, slug: "child", text: "Child" },
        ]),
      },
    });
    const parentIdx = html.indexOf("Parent");
    const childIdx = html.indexOf("Child");
    expect(parentIdx).toBeGreaterThan(-1);
    expect(childIdx).toBeGreaterThan(parentIdx);
    expect(html).toMatch(/<ul[^>]*>[\s\S]*<ul[^>]*>/);
  });

  it("renders nothing visible when there are no h2/h3 headings", async () => {
    const html = await container.renderToString(ArticleToc, {
      props: { headings: headings([{ depth: 1, slug: "h1", text: "H1" }]) },
    });
    expect(html).not.toContain("<a ");
  });

  it("excludes h1 and h4+ from the rendered links", async () => {
    const html = await container.renderToString(ArticleToc, {
      props: {
        headings: headings([
          { depth: 1, slug: "title", text: "Title" },
          { depth: 2, slug: "ok", text: "OK" },
          { depth: 4, slug: "too-deep", text: "TooDeep" },
        ]),
      },
    });
    expect(html).not.toContain('href="#title"');
    expect(html).not.toContain('href="#too-deep"');
    expect(html).toContain('href="#ok"');
  });
});
