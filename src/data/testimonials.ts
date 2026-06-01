import type { Testimonial } from "@/types";

// TODO(プレースホルダー): MENTAの実レビュー本文・属性・評価に差し替える。
// 加工済みスクショが用意でき次第、各レビューに screenshot を設定する
// （個人情報のフルネーム / アイコン / ユーザーID / 顔写真は除去すること）。
export const testimonials: Testimonial[] = [
  {
    id: "beginner-01",
    audience: "beginner",
    rating: 5,
    quote:
      "何を質問したらいいか分からない状態でしたが、業務で毎日AIを使えるようになりました。（※MENTA実レビューに差し替え予定）",
    authorAttribute: "40代・会社員",
    serviceId: "training",
    source: "MENTAレビューより",
  },
  {
    id: "individual-01",
    audience: "individual",
    rating: 5,
    quote:
      "資料作成にかかっていた時間を大幅に短縮できました。実務にそのまま落とし込める内容で助かりました。（※MENTA実レビューに差し替え予定）",
    authorAttribute: "50代・個人事業主",
    serviceId: "ai-support",
    source: "MENTAレビューより",
  },
  {
    id: "developer-01",
    audience: "developer",
    rating: 5,
    quote:
      "Claude Code や MCP の理解が一気に進み、開発の進め方が変わりました。（※MENTA実レビューに差し替え予定）",
    authorAttribute: "30代・エンジニア",
    serviceId: "ai-support",
    source: "MENTAレビューより",
  },
];
