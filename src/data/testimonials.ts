import type { Testimonial } from "@/types";

// MENTA に投稿された実レビューの引用。
// 投稿者名・アイコン・ユーザーIDは載せず、属性表記だけを掲載する。
// 本文は改変せず、長いレビューは冒頭から連続した範囲を抜粋する。
// 社名は掲載許諾を得たものだけを記載する（原則は属性表記）。
export const testimonials: Testimonial[] = [
  {
    id: "menta-student-01",
    audience: "beginner",
    rating: 5,
    quote:
      "自分の作りたいデバイスについて相談したところ、誰よりも早く丁寧な回答をしていただきました。今回は学習方法の簡単な質問だけでしたが、私の要望に対して真摯に考えていただき、実装方法までも具体的に手順を考えて回答してくださったので非常に参考になりました。",
    authorAttribute: "大学生",
    serviceId: "personal-support",
    source: "MENTAレビューより",
  },
  {
    id: "menta-owner-01",
    audience: "individual",
    rating: 5,
    quote:
      "AIについては初心者の私にも分かりやすく、こちらのレベルに合わせて様々な助言やご提案をいただき、誠にありがとうございました。おかげさまで、検討していた各種アプリについても、実用化に向けて具体的に進められそうです。",
    authorAttribute: "株式会社テイクパート 代表",
    serviceId: "personal-support",
    source: "MENTAレビューより",
  },
  {
    id: "menta-agency-01",
    audience: "individual",
    rating: 5,
    quote:
      "エンジニアさんとしてのプロの視点もさることながら、お人柄が非常に穏やかでなんでも聞きやすく、いろいろ相談したくなる魅力があります。",
    authorAttribute: "広告代理店勤務・女性",
    serviceId: "personal-support",
    source: "MENTAレビューより",
  },
  {
    id: "menta-engineer-01",
    audience: "developer",
    rating: 5,
    quote:
      "フルスタックの開発レクチャーだけではなく、AIの活用についても教えていただき大変参考になりました。受講者のことを考えて親身になって対応いただけるメンターでした。",
    authorAttribute: "システムエンジニア",
    serviceId: "personal-support",
    source: "MENTAレビューより",
  },
];
