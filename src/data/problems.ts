import type { ProblemCategory } from "@/types";

/**
 * トップページ「解決できるお悩み」セクションのデータ。
 * 訪問者が自分の課題から該当サービスへ辿れるよう、
 * 各悩みは services.ts の painPoints を源泉にし、serviceHref で紐付ける。
 * serviceHref は services.ts の href と一致させること（tests/data/problems.test.ts で検証）。
 */
export const problemCategories: ProblemCategory[] = [
  {
    key: "management",
    label: "経営・DX",
    problems: [
      {
        text: "AIを始めたいが、何から手を付けどこに適用すべきか判断軸がない",
        serviceHref: "/services/hayawaza-advisor",
      },
      {
        text: "技術判断を任せられる、中立な相談相手・伴走パートナーが欲しい",
        serviceHref: "/services/hayawaza-advisor",
      },
      {
        text: "買った教材・講座が古く、最新のAIツールに追いつけていない",
        serviceHref: "/services/hayawaza-training",
      },
      {
        text: "クラウド料金や保守費が高止まりしているが、どこを減らせるか分からない",
        serviceHref: "/services/hayawaza-renewal",
      },
    ],
  },
  {
    key: "ai",
    label: "AI活用",
    problems: [
      {
        text: "ChatGPTを試したが、自社業務にどう適用すべきか判断できていない",
        serviceHref: "/services/hayawaza-advisor",
      },
      {
        text: "他社のAI研修を受けたが、現場が変わらず止まってしまった",
        serviceHref: "/services/hayawaza-training",
      },
      {
        text: "ChatGPTは使えるが、Claude CodeなどCLIツールで手が止まる",
        serviceHref: "/services/hayawaza-advisor",
      },
      {
        text: "Dify / n8n / RAG を導入したいが、自社では構築・運用できない",
        serviceHref: "/services/hayawaza-advisor",
      },
      {
        text: "社内のAIリテラシーを底上げする、実践的な研修を探している",
        serviceHref: "/services/hayawaza-training",
      },
    ],
  },
  {
    key: "automation",
    label: "業務自動化",
    problems: [
      {
        text: "手作業の繰り返し業務（転記・レポート・請求処理）に時間を取られている",
        serviceHref: "/services/hayawaza-automation",
      },
      {
        text: "自動化したいがエンジニアがいない／外注先が見つからない",
        serviceHref: "/services/hayawaza-automation",
      },
      {
        text: "Excelマクロの限界を感じているが、次の手段が分からない",
        serviceHref: "/services/hayawaza-automation",
      },
    ],
  },
  {
    key: "development",
    label: "開発・刷新",
    problems: [
      {
        text: "Webアプリを作りたいが、技術選定の段階から相談したい",
        serviceHref: "/services/hayawaza-dev",
      },
      {
        text: "既存サイトが古く、モダンな技術でリニューアルしたい",
        serviceHref: "/services/hayawaza-dev",
      },
      {
        text: "長年運用した業務システムがブラックボックス化し、改修や移行が怖い",
        serviceHref: "/services/hayawaza-renewal",
      },
    ],
  },
];
