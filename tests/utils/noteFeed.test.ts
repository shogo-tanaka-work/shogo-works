import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { fetchNoteFeed, parseNoteFeed } from "@/utils/noteFeed";

const sampleRss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/" xmlns:note="https://note.com/">
  <channel>
    <title>note - shogo123198</title>
    <item>
      <title><![CDATA[最新記事タイトル1]]></title>
      <link>https://note.com/shogo123198/n/n0000001</link>
      <guid>https://note.com/shogo123198/n/n0000001</guid>
      <pubDate>Sat, 23 May 2026 10:00:00 +0900</pubDate>
      <description><![CDATA[<p>概要1のテキスト</p>]]></description>
      <media:thumbnail>https://assets.st-note.com/img/1.jpg</media:thumbnail>
    </item>
    <item>
      <title><![CDATA[2件目のタイトル]]></title>
      <link>https://note.com/shogo123198/n/n0000002</link>
      <guid>https://note.com/shogo123198/n/n0000002</guid>
      <pubDate>Wed, 20 May 2026 09:00:00 +0900</pubDate>
      <description><![CDATA[概要2]]></description>
      <media:thumbnail>https://assets.st-note.com/img/2.jpg</media:thumbnail>
    </item>
    <item>
      <title><![CDATA[3件目]]></title>
      <link>https://note.com/shogo123198/n/n0000003</link>
      <guid>https://note.com/shogo123198/n/n0000003</guid>
      <pubDate>Tue, 01 Apr 2026 08:00:00 +0900</pubDate>
      <description><![CDATA[概要3]]></description>
      <media:thumbnail>https://assets.st-note.com/img/3.jpg</media:thumbnail>
    </item>
    <item>
      <title><![CDATA[4件目]]></title>
      <link>https://note.com/shogo123198/n/n0000004</link>
      <guid>https://note.com/shogo123198/n/n0000004</guid>
      <pubDate>Mon, 01 Mar 2026 08:00:00 +0900</pubDate>
      <description><![CDATA[概要4]]></description>
    </item>
  </channel>
</rss>`;

describe("parseNoteFeed", () => {
  it("正常系: RSS文字列を受け取ったとき、各itemをNoteArticleにパースすること", () => {
    const articles = parseNoteFeed(sampleRss);

    expect(articles).toHaveLength(4);
    expect(articles[0]).toEqual({
      title: "最新記事タイトル1",
      link: "https://note.com/shogo123198/n/n0000001",
      pubDate: new Date("Sat, 23 May 2026 10:00:00 +0900"),
      thumbnail: "https://assets.st-note.com/img/1.jpg",
      description: "概要1のテキスト",
    });
  });

  it("正常系: media:thumbnailが無いitemでも、thumbnailがundefinedで返ること", () => {
    const articles = parseNoteFeed(sampleRss);
    const fourth = articles[3];
    expect(fourth.thumbnail).toBeUndefined();
    expect(fourth.title).toBe("4件目");
  });

  it("正常系: descriptionのHTMLタグを除去すること", () => {
    const articles = parseNoteFeed(sampleRss);
    expect(articles[0].description).toBe("概要1のテキスト");
  });

  it("異常系: 空文字を渡したとき、空配列を返すこと", () => {
    expect(parseNoteFeed("")).toEqual([]);
  });

  it("異常系: 不正なXMLを渡したとき、空配列を返すこと", () => {
    expect(parseNoteFeed("<<<not xml>>>")).toEqual([]);
  });
});

describe("fetchNoteFeed", () => {
  const originalFetch = globalThis.fetch;

  beforeEach(() => {
    vi.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    globalThis.fetch = originalFetch;
    vi.restoreAllMocks();
  });

  it("正常系: limitを指定したとき、その件数までに絞り込まれること", async () => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      text: async () => sampleRss,
    }) as typeof fetch;

    const articles = await fetchNoteFeed("https://note.com/x/rss", 3);
    expect(articles).toHaveLength(3);
    expect(articles[0].title).toBe("最新記事タイトル1");
  });

  it("異常系: fetchがokでないとき、空配列を返すこと", async () => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 500,
      text: async () => "",
    }) as typeof fetch;

    const articles = await fetchNoteFeed("https://note.com/x/rss", 3);
    expect(articles).toEqual([]);
  });

  it("異常系: fetchがthrowしたとき、空配列を返すこと", async () => {
    globalThis.fetch = vi.fn().mockRejectedValue(new Error("network down")) as typeof fetch;

    const articles = await fetchNoteFeed("https://note.com/x/rss", 3);
    expect(articles).toEqual([]);
  });
});
