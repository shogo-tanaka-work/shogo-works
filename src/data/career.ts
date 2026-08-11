import type {
  CareerExperience,
  Certification,
  EducationRecord,
} from "@/types";

/**
 * 職務経歴。正本は職務経歴書（2026-07-03 版）で、案件単位・新しい順に並べる。
 * 客先は業種表記にとどめ、実名を出さない。所属先は自社のため実名で記載する。
 */
export const careerExperiences: CareerExperience[] = [
  {
    period: "2026年9月 - 入社予定",
    company: "バレットグループ株式会社",
    role: "システムエンジニア",
    employment: "正社員",
    summary: "2026年9月より正社員として入社予定です。",
    highlights: [],
    technologies: [],
    upcoming: true,
  },
  {
    period: "2025年6月 - 現在",
    company: "某AIスクール（業務委託）",
    role: "AI活用講師・コンサルタント・社内SE",
    employment: "業務委託",
    teamSize: "1名（主担当）",
    summary:
      "法人・個人向けのAI活用レクチャーとコンサルティングに加え、社内SEとして業務自動化ツール・AIエージェントの開発を担当。2026年9月以降も副業として継続します。",
    highlights: [
      "法人・個人向けにAIツール活用のレクチャー・コンサルティングを実施（業務ヒアリング、As-Is/To-Be分析、改善提案）",
      "マーケティング効率化ツールを開発（GA4・Google広告・Microsoft Clarity のデータを取得するMCPサーバ構築）",
      "LangGraph を用いたAIエージェントの構築",
      "CRMシステムの内製化",
      "Zoom会議後の議事録Discord通知、Googleオーガニック検索の定期通知をGASで構築",
      "Discord BOT からAIエージェントを呼び出すカスタムBotを構築",
      "n8n によるX投稿自動化エージェント（画像生成を含む）を構築",
      "AI最新ニュースの自動取得によるブログ記事自動作成エージェントを構築",
      "Remotion を使った動画制作のAI効率化",
    ],
    technologies: [
      "TypeScript",
      "Python",
      "Next.js",
      "LangGraph",
      "n8n",
      "Dify",
      "GAS",
      "Supabase",
      "Vercel",
      "Cloudflare",
      "Claude Code",
      "Remotion",
    ],
    current: true,
  },
  {
    period: "2025年3月 - 2025年5月",
    company: "Web制作会社（業務委託）",
    role: "フロントエンドエンジニア",
    employment: "業務委託",
    teamSize: "12名",
    summary:
      "モダンなWebサイトのフロントエンド実装を担当。あわせてAIに関する調査・検証とノウハウ蓄積を行いました。",
    highlights: [
      "Nuxt.js と Tailwind CSS / SCSS を用いたフロントエンド実装",
      "AIに関する調査・検証、社内向けノウハウの蓄積",
    ],
    technologies: [
      "Nuxt.js",
      "Tailwind CSS",
      "SCSS",
      "HTML5",
      "CSS3",
      "JavaScript",
      "GitHub",
      "Cursor",
    ],
  },
  {
    period: "2024年3月 - 2025年3月",
    company: "横山システム経営研究所株式会社 / 精密機械メーカー向け",
    role: "チームリーダー・メンバー（インフラ領域）",
    employment: "正社員",
    teamSize: "7名（マネジメント3名）",
    summary:
      "精密機械メーカー向けWebブラウザシステムのインフラ領域で、構築・テスト・運用・保守を約1年担当。",
    highlights: [
      "顧客折衝・技術選定・要件ヒアリングを通じ、インフラ構成と運用方針の整理に携わる",
      "構築手順書・パラメータシート・テスト仕様書・運用手順書を作成し、構築と運用作業を標準化",
      "インシデント対応・問い合わせ対応・障害対応で、原因調査から復旧、再発防止確認まで実施",
      "課題管理・進捗管理・品質管理・要員管理を担当",
    ],
    technologies: [
      "Microsoft Azure",
      "Windows Server",
      "Linux",
      "Nginx",
      "GitLab",
    ],
  },
  {
    period: "2023年4月 - 2024年9月",
    company: "横山システム経営研究所株式会社 / 複数の製造メーカー向け",
    role: "チームリーダー",
    employment: "正社員",
    teamSize: "4名",
    summary:
      "複数社向けWebブラウザシステムの開発を、4名体制の開発チームリーダーとして約1年6ヶ月推進。",
    highlights: [
      "顧客折衝・要件ヒアリングで業務要望を整理し、設計・開発タスクへ落とし込み",
      "基本設計・詳細設計・実装・テスト・運用保守までを担当",
      "課題管理・進捗管理・品質管理・要員管理を行い、チーム全体の作業状況を把握しながら開発を進行",
      "機能追加・システム改修・障害対応を、対応方針の整理から実装・テスト・保守まで一貫して対応",
      "組織体制の改善に取り組む",
    ],
    technologies: [
      "JavaScript",
      "jQuery",
      "Node.js",
      "MongoDB",
      "Microsoft Azure",
      "HTML5",
      "CSS3",
      "GitLab",
    ],
  },
  {
    period: "2023年3月 - 2023年5月",
    company: "横山システム経営研究所株式会社 / 購買管理システム カスタマイズ開発",
    role: "メンバー（詳細設計・実装）",
    employment: "正社員",
    teamSize: "3名",
    summary:
      "web-EDIによる購買管理システムのカスタマイズ開発で、詳細設計と実装を担当。",
    highlights: ["DB定義と各画面の詳細機能設計", "Node.js / MongoDB による実装"],
    technologies: [
      "JavaScript",
      "Node.js",
      "MongoDB",
      "HTML5",
      "CSS3",
      "GitLab",
    ],
  },
  {
    period: "2022年1月 - 2023年3月",
    company: "横山システム経営研究所株式会社 / 眼鏡機器メーカー向け",
    role: "サブリーダー",
    employment: "正社員",
    teamSize: "5名",
    summary:
      "眼鏡機器メーカー向けWebブラウザシステムの開発を、5名体制のサブリーダーとして約1年5ヶ月支援。",
    highlights: [
      "要件定義・基本設計・詳細設計・実装・テスト・運用保守まで幅広く担当（要件定義書・基本設計書の作成にも一部携わる）",
      "機能追加・改修・問い合わせ対応・障害対応を継続的に行い、システムの安定稼働に貢献",
      "課題管理・進捗管理・品質管理の一部を担当し、開発チーム内の状況整理と品質担保を支援",
    ],
    technologies: [
      "JavaScript",
      "jQuery",
      "Node.js",
      "MongoDB",
      "Microsoft Azure",
      "HTML5",
      "CSS3",
      "GitLab",
    ],
  },
  {
    period: "2021年10月 - 2021年12月",
    company: "横山システム経営研究所株式会社 / 電子部品製造メーカー向け",
    role: "メンバー（詳細設計・実装）",
    employment: "正社員",
    teamSize: "2名",
    summary:
      "電子部品製造メーカー向けWebブラウザシステムの開発で、詳細設計から運用保守までを担当。",
    highlights: [
      "詳細設計・実装・テスト・運用保守まで一連の工程を担当",
      "機能追加・システム改修で、実装からテストまで対応し既存システムの改善に貢献",
      "ユーザー問い合わせ・障害対応で、原因調査から改修・テストまで対応",
    ],
    technologies: [
      "JavaScript",
      "jQuery",
      "Node.js",
      "MongoDB",
      "HTML5",
      "CSS3",
      "GitLab",
      "Linux",
    ],
  },
  {
    period: "2021年4月 - 2021年10月",
    company: "横山システム経営研究所株式会社 / 大手製造メーカー向け",
    role: "サポートメンバー",
    employment: "正社員",
    teamSize: "3名",
    summary:
      "大手製造メーカー向けWebブラウザシステムの開発・保守業務に、サポートメンバーとして参画。",
    highlights: [
      "詳細設計・実装・テスト・運用保守まで一連の工程を担当",
      "担当機能ごとにテスト仕様書を作成し、不具合の早期発見と品質向上に寄与",
      "ユーザー問い合わせ・障害対応で、原因調査から改修・テストまで対応し安定稼働に貢献",
    ],
    technologies: [
      "JavaScript",
      "jQuery",
      "Node.js",
      "MongoDB",
      "HTML5",
      "CSS3",
      "GitLab",
      "Linux",
    ],
  },
  {
    period: "2016年4月 - 2020年12月",
    company: "ダイキン工業株式会社",
    role: "生産ライン現場管理・改善",
    employment: "正社員",
    summary:
      "滋賀製造部にて、ルームエアコン室外機ラインを中心に生産・現場改善・新人教育に従事。",
    highlights: [
      "新生産ライン立ち上げ応援（RA室内機）。作業手順・レイアウト変更によるサイクルタイム短縮を実施",
      "RA室外機ラインでの生産業務・現場改善・突発的な設備/製品不具合対応",
      "新人メンバーへの作業手順・品質・安全教育",
      "危険予知トレーニング（KYT）のチームリーダーを担当",
    ],
    technologies: ["生産管理", "現場改善", "KYT", "新人教育"],
  },
];

export const educationHistory: EducationRecord[] = [
  {
    period: "2011年4月 - 2016年3月",
    school: "佐世保工業高等専門学校",
    department: "電子制御工学科",
    status: "卒業",
  },
];

export const certifications: Certification[] = [
  { name: "応用情報技術者", date: "2023年10月" },
  { name: "基本情報技術者", date: "2022年6月" },
  { name: "品質管理検定3級", date: "2019年9月" },
  { name: "普通自動車免許一種", date: "2015年3月" },
];
