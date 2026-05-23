import { describe, it, expect } from "vitest";
import { getTocHeadings } from "@/utils/headings";
import type { MarkdownHeading } from "astro";

const h = (depth: number, slug: string, text: string): MarkdownHeading => ({
  depth,
  slug,
  text,
});

describe("getTocHeadings", () => {
  it("returns empty array when given empty input", () => {
    expect(getTocHeadings([])).toEqual([]);
  });

  it("includes h2 and h3, excludes h1/h4/h5/h6", () => {
    const input: MarkdownHeading[] = [
      h(1, "title", "Title"),
      h(2, "intro", "Intro"),
      h(3, "background", "Background"),
      h(4, "detail", "Detail"),
      h(5, "deeper", "Deeper"),
      h(6, "deepest", "Deepest"),
    ];
    const result = getTocHeadings(input);
    expect(result).toHaveLength(1);
    expect(result[0].slug).toBe("intro");
    expect(result[0].children).toHaveLength(1);
    expect(result[0].children[0].slug).toBe("background");
  });

  it("nests consecutive h3 entries under the preceding h2", () => {
    const input: MarkdownHeading[] = [
      h(2, "a", "A"),
      h(3, "a1", "A1"),
      h(3, "a2", "A2"),
      h(2, "b", "B"),
      h(3, "b1", "B1"),
    ];
    const result = getTocHeadings(input);
    expect(result.map((r) => r.slug)).toEqual(["a", "b"]);
    expect(result[0].children.map((c) => c.slug)).toEqual(["a1", "a2"]);
    expect(result[1].children.map((c) => c.slug)).toEqual(["b1"]);
  });

  it("places orphan h3 (no preceding h2) at root level", () => {
    const input: MarkdownHeading[] = [
      h(3, "orphan", "Orphan"),
      h(2, "later", "Later"),
      h(3, "child", "Child"),
    ];
    const result = getTocHeadings(input);
    expect(result.map((r) => r.slug)).toEqual(["orphan", "later"]);
    expect(result[0].children).toEqual([]);
    expect(result[1].children.map((c) => c.slug)).toEqual(["child"]);
  });

  it("preserves heading text exactly", () => {
    const input: MarkdownHeading[] = [h(2, "slug", "見出しテキスト")];
    expect(getTocHeadings(input)[0].text).toBe("見出しテキスト");
  });

  it("does not mutate the input array", () => {
    const input: MarkdownHeading[] = [h(2, "a", "A"), h(3, "a1", "A1")];
    const snapshot = JSON.parse(JSON.stringify(input));
    getTocHeadings(input);
    expect(input).toEqual(snapshot);
  });
});
