import type {
  CareerExperience,
  Certification,
  EducationRecord,
} from "@/types";

export const careerExperiences: CareerExperience[] = [
  {
    period: "2025年6月 - 現在",
    company: "某AIスクール（業務委託）",
    role: "AI活用講師・コンサルタント・社内SE",
    employment: "業務委託",
    summary:
      "中小企業向けのAI活用伴走支援を軸に、AI顧問契約・PoC推進・社内SE業務・研修コンサルまでを一貫して提供。",
    highlights: [
      "中小企業1社・個人1名とAI顧問契約を締結し、業務課題の整理から導入方針策定までを継続支援",
      "AIベンチャー企業とのPoC（実証実験）を1年以上継続するなど、複数社で本格導入に向けた検証フェーズを伴走",
      "ChatGPT / Gemini / Claude / Claude Code / Microsoft Copilot / Dify / Make.com / n8n / Microsoft Copilot Studio など10種類以上のAIツールについて研修・コンサルを実施",
      "GA4・Google広告・Microsoft ClarityのデータをMCPサーバ経由で取得するマーケティング効率化ツールを開発",
      "LangGraph・n8nを用いたAIエージェントを複数構築（X投稿自動化、AIニュース自動収集・記事化、Discord連携カスタムBotなど）",
      "営業CRMを内製化し、SaaS費用を抑えつつ業務フローに最適化したシステムを構築",
      "Zoom議事録のDiscord通知やGoogle検索の定期通知などGASによる業務自動化を多数実装",
      "Remotionを活用した動画制作ワークフローのAI効率化を推進",
    ],
    technologies: [
      "TypeScript",
      "Python",
      "LangGraph",
      "n8n",
      "Dify",
      "Make.com",
      "Supabase",
      "Vercel",
      "Cloudflare Workers",
      "GAS",
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
    summary:
      "Nuxt.js と Tailwind CSS / SCSS を用いた Web サイト制作のフロントエンド実装を担当。",
    highlights: [
      "Nuxt.js による Web サイト構築・実装",
      "HTML/CSS によるレスポンシブデザインの実装",
      "詳細設計から実装・テスト・運用保守まで対応",
    ],
    technologies: [
      "Nuxt.js",
      "Tailwind CSS",
      "SCSS",
      "HTML5",
      "CSS3",
      "JavaScript",
    ],
  },
  {
    period: "2023年3月 - 2023年5月",
    company: "横山システム経営研究所株式会社 / TDS社向け hWAO",
    role: "メンバー（詳細設計・実装）",
    employment: "正社員",
    teamSize: "3名",
    summary:
      "web-EDIによる購買管理システム hWAO の TDS 社向けカスタマイズで詳細設計と実装を担当。",
    highlights: [
      "DB定義と各画面の詳細機能設計",
      "Node.js / MongoDB による実装",
    ],
    technologies: ["JavaScript", "Node.js", "MongoDB", "HTML5", "CSS3"],
  },
  {
    period: "2021年11月 - 2023年3月",
    company: "横山システム経営研究所株式会社 / NDK社向け hWAO",
    role: "サブリーダー",
    employment: "正社員",
    teamSize: "5名",
    summary:
      "購買管理システム hWAO の NDK 社向け開発でサブリーダーを担当。要件定義から本番リリース・不具合対応まで一連の工程を経験。",
    highlights: [
      "要件定義・詳細設計・実装・システムテスト・本番リリース対応",
      "実装フェーズから参画したメンバーへの仕様説明、追加要件の仕様検討、お客様ヒアリング",
      "システム利用トレーニングと本番稼働後の不具合対応",
      "Microsoft Azure（Storage / Functions）を利用したシステム構成",
    ],
    technologies: [
      "JavaScript",
      "Node.js",
      "MongoDB",
      "Microsoft Azure",
      "HTML5",
      "CSS3",
    ],
  },
  {
    period: "2021年10月 - 2021年12月",
    company: "横山システム経営研究所株式会社 / HDK社向け hWAO",
    role: "メンバー（詳細設計・実装）",
    employment: "正社員",
    teamSize: "2名",
    summary:
      "購買管理システム hWAO の HDK 社向け開発で詳細設計と実装を担当。",
    highlights: ["DB定義と各画面の詳細機能設計", "Node.js / MongoDB による実装"],
    technologies: ["JavaScript", "Node.js", "MongoDB", "HTML5", "CSS3"],
  },
  {
    period: "2021年4月 - 2021年10月",
    company: "横山システム経営研究所株式会社 / KD社向け hWAO",
    role: "サポートメンバー",
    employment: "正社員",
    teamSize: "3名",
    summary:
      "購買管理システム hWAO の KD 社向け開発に要件定義サポートから参画し、詳細設計・実装・不具合対応を担当。",
    highlights: [
      "仕様の検討・仕様書作成・お客様向けの機能説明",
      "Node.js / MongoDB による実装と不具合対応",
    ],
    technologies: ["JavaScript", "Node.js", "MongoDB", "HTML5", "CSS3"],
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
