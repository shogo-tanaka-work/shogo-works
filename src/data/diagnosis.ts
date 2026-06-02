import type {
  DiagnosisStep,
  DiagnosisNextOption,
  FaqItem,
} from "@/types";

/**
 * AI無料診断 LP（/diagnosis）のデータ。
 * 「AI導入支援」は重く検索もされないため、入口を無料診断にして
 * 研修・開発・顧問へ繋ぐ集客導線の受け皿とする。
 * nextOptions.href は services.ts の href と一致させること
 * （tests/data/diagnosis.test.ts で検証）。
 */

// 診断で分かること
export const diagnosisCheckItems: string[] = [
  "いまの業務のどこにAIが効くか（業務の棚卸し）",
  "ChatGPT など生成AIの活用状況と伸びしろ",
  "AI導入の優先順位と現実的なロードマップ",
  "研修・自動化・開発・顧問のどれが自社に合うか",
];

// 診断の流れ
export const diagnosisSteps: DiagnosisStep[] = [
  {
    title: "申し込み",
    body: "フォームから「無料診断希望」とご連絡ください。30秒で完了します。",
  },
  {
    title: "事前ヒアリング",
    body: "業種と、いま困っている業務を2〜3個ほど共有いただきます。資料の準備は不要です。",
  },
  {
    title: "オンライン診断（30分）",
    body: "業務を一緒に棚卸しし、AIが効く箇所と活用状況をその場で整理します。",
  },
  {
    title: "優先順位レポート＋次の一手",
    body: "どこから着手すべきかの優先順位と、現実的な進め方をご提案します。",
  },
];

// 診断後に繋がる選択肢（押し売りはしない）
export const diagnosisNextOptions: DiagnosisNextOption[] = [
  {
    label: "AI研修",
    href: "/services/hayawaza-training",
    description: "社内のAIリテラシーを底上げしたい場合の実践ハンズオン。",
  },
  {
    label: "業務自動化・アプリ開発",
    href: "/services/hayawaza-automation",
    description: "手作業の自動化や、業務に合わせたツール・アプリ開発。",
  },
  {
    label: "AI顧問",
    href: "/services/hayawaza-advisor",
    description: "継続的に相談したい・伴走してほしい場合の月額サポート。",
  },
];

// よくある質問
export const diagnosisFaq: FaqItem[] = [
  {
    question: "本当に無料ですか？",
    answer:
      "はい。30分のオンライン診断は無料です。その場で契約を迫ることはありません。",
  },
  {
    question: "何を準備すればいいですか？",
    answer:
      "業務の困りごとを2〜3個ほど思い浮かべてきていただければ十分です。資料の用意は不要です。",
  },
  {
    question: "特定の業種でなくても受けられますか？",
    answer:
      "対応可能です。業務の手作業やナレッジ活用の課題は業種を問わず共通します。",
  },
];
