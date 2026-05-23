import type { MediaOutlet } from "@/types";

/**
 * トップページ「メディア発信」セクションに表示する媒体一覧。
 * `comingSoon: true` は枠だけ確保しグレーアウト表示。実 URL が決まったら url を埋めて
 * comingSoon を外す。
 */
export const mediaOutlets: MediaOutlet[] = [
  {
    name: "note",
    description: "現場視点の AI 活用メモを継続発信",
    url: "https://note.com/shogo123198",
    iconSlug: "note",
    brandColor: "#000000",
  },
  {
    name: "X",
    description: "日々の気づき・最新情報を投稿",
    url: "https://x.com/shogo_works",
    iconSlug: "x",
    brandColor: "#000000",
  },
  {
    name: "LinkedIn",
    description: "経歴・実績・お仕事のご相談はこちら",
    url: "https://www.linkedin.com/in/shogoworks/",
    iconSlug: "linkedin",
    brandColor: "#0A66C2",
  },
  {
    name: "Threads",
    description: "短文の発信を準備中",
    url: "#",
    iconSlug: "threads",
    brandColor: "#000000",
    comingSoon: true,
  },
  {
    name: "Zenn",
    description: "技術記事の連載を準備中",
    url: "#",
    iconSlug: "zenn",
    brandColor: "#3EA8FF",
    comingSoon: true,
  },
  {
    name: "YouTube",
    description: "解説動画を準備中",
    url: "#",
    iconSlug: "youtube",
    brandColor: "#FF0000",
    comingSoon: true,
  },
  {
    name: "Udemy",
    description: "オンライン講座を準備中",
    url: "#",
    iconSlug: "udemy",
    brandColor: "#A435F0",
    comingSoon: true,
  },
  {
    name: "Kindle",
    description: "電子書籍を準備中",
    url: "#",
    iconSlug: "amazonkindle",
    brandColor: "#00A8E1",
    comingSoon: true,
  },
];
