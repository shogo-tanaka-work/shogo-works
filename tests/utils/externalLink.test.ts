import { describe, it, expect } from "vitest";
import { isExternalSource, externalLinkAttrs } from "@/utils/externalLink";

describe("isExternalSource", () => {
  it("正常系: source が 'external' のとき、true を返すこと", () => {
    expect(isExternalSource("external")).toBe(true);
  });

  it("正常系: source が 'internal' のとき、false を返すこと", () => {
    expect(isExternalSource("internal")).toBe(false);
  });
});

describe("externalLinkAttrs", () => {
  it("正常系: 外部リンクのとき、target/rel 属性を返すこと", () => {
    expect(externalLinkAttrs("external")).toEqual({
      target: "_blank",
      rel: "noopener noreferrer",
    });
  });

  it("正常系: 内部リンクのとき、空オブジェクトを返すこと", () => {
    expect(externalLinkAttrs("internal")).toEqual({});
  });
});
