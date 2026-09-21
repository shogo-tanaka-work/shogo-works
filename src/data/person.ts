import { siteConfig } from "./site";

/**
 * 指名検索（shogoworks / 田中省伍）で来た人と検索エンジンに対して、
 * 各媒体のアカウントが同一人物であることを示すための情報。
 * Head.astro の Person / Organization JSON-LD だけが使う。
 *
 * 画面に出すリンクは social.ts が持つ。こちらは表示しない宣言用のため、
 * アイコンの有無に関係なく媒体を列挙できる。
 */
export const personProfile = {
  name: "田中 省伍",
  /** 表記ゆれと各媒体のハンドル。指名検索の受け皿を広げる */
  alternateName: ["田中省伍", "shogoworks", "shogo_works"],
  jobTitle: "Software Engineer & AI Instructor",
  description:
    "現役エンジニア。業務委託・受託でのアプリ開発とAI業務自動化を手がけ、あわせてAI活用の指導・講師登壇を行っています。",
  image: "/assets/images/profile.jpg",
  knowsAbout: [
    "AI業務自動化",
    "受託開発",
    "Claude",
    "ChatGPT",
    "n8n",
    "Make",
    "Cloudflare Workers",
    "Next.js",
    "Astro",
  ],
  /**
   * 同一人物として認識させたいプロフィールURL。
   * ランサーズ・ココナラは出品者プロフィールのURLが未確認のため、
   * 暫定で出品ページを置いている。プロフィールURLが分かり次第そのまま差し替える。
   */
  sameAs: [
    "https://www.linkedin.com/in/shogoworks/",
    "https://github.com/shogo-tanaka-work",
    "https://note.com/shogo_works",
    "https://www.threads.com/@shogoworks",
    "https://x.com/shogo_works",
    "https://www.instagram.com/shogoworks/",
    "https://menta.work/user/151943",
    "https://www.lancers.jp/menu/detail/1343450",
    "https://coconala.com/services/4399466",
  ],
} as const;

/** Person と Organization を founder で結ぶための識別子 */
export const schemaIds = {
  person: `${siteConfig.url}/about#person`,
  organization: `${siteConfig.url}#organization`,
} as const;
