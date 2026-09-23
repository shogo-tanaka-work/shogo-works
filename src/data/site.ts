export const siteConfig = {
  name: "shogoworks",
  title: "shogoworks | Web開発 × AI エンジニア",
  description:
    "shogoworks - 開発歴5年以上のエンジニアが、業務委託・受託でのアプリ開発を主軸に、AI活用の指導・講師登壇まで対応します。企業・個人向けのAI活用セミナーやマンツーマンサポートも実施中。",
  url: "https://shogoworks.com",
  ogImage: "/og-image.png",
  twitter: "@shogo_works",
  // 第三者プラットフォーム上の評価への導線として使用する
  mentaUrl: "https://menta.work/user/151943/review/recieves",
  // AI クローラへの利用方針。public/robots.txt の Content-Signal と llms.txt で同じ値を使う
  contentSignal: "search=yes,ai-input=yes,ai-train=no",
} as const;
