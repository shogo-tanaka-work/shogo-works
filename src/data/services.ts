import type { ServiceItem } from "@/types";

export const services: ServiceItem[] = [
  {
    id: "automation",
    title: "自動化・効率化ツール開発",
    description:
      "GAS / PowerShell / Webアプリで業務を自動化。AI活用のフルサイクル開発で、要件定義から運用保守まで一貫対応します。",
    icon: "wrench",
    longDescription:
      "手作業で行っている業務プロセスを、最適な技術で自動化・効率化します。Google Apps Script や PowerShell によるスクリプト開発から、Webアプリケーションによる本格的な業務システムまで対応。AIを活用した開発手法で、要件定義から導入・運用保守まで一貫してお任せいただけます。",
    targetAudience: "小規模法人（従業員5〜30名）、個人事業主",
    painPoints: [
      "手作業の繰り返し業務に時間を取られている（データ転記、レポート作成、請求処理など）",
      "自動化したいがエンジニアがいない / 外注先が見つからない",
      "Excelマクロの限界を感じているが、次の手段が分からない",
    ],
    details: [
      {
        heading: "GAS / PowerShell スクリプト開発",
        body: "Google Workspace や Microsoft 365 と連携した業務自動化スクリプトを開発します。データ転記、レポート自動生成、メール自動送信など、日常業務の手間を削減します。",
      },
      {
        heading: "Webアプリ開発",
        body: "ブラウザから使える業務管理ツールやダッシュボードを構築します。スプレッドシートでは管理しきれなくなったデータを、使いやすいWebアプリに移行します。",
      },
      {
        heading: "AI活用フルサイクル開発",
        body: "AIを駆使した開発手法で、要件定義から設計・実装・テスト・導入・運用保守まで一貫して対応します。開発コストを抑えながら、高品質なツールを短期間で提供します。",
      },
    ],
    pricing: [
      {
        name: "ライト（GAS/スクリプト単体）",
        price: "8万円〜",
        monitorPrice: "5万円〜",
      },
      {
        name: "スタンダード（中規模ツール）",
        price: "20万円〜",
        monitorPrice: "15万円〜",
      },
      {
        name: "フルサイクル（要件定義〜運用保守）",
        price: "50万円〜",
        monitorPrice: "35万円〜",
      },
    ],
    technologies: ["Google Apps Script", "PowerShell", "TypeScript", "React"],
    excludes: ["スマホアプリ", "ネイティブデスクトップアプリ"],
  },
  {
    id: "ai-support",
    title: "AI伴走支援",
    description:
      "AI駆動開発の支援からノーコードツール導入まで。AIの活用を一緒に進め、ビジネスの課題を解決します。",
    icon: "bot",
    longDescription:
      "AIを活用したいけれど何から始めればいいか分からない。そんな企業や個人の方に寄り添い、一緒にAI活用を進めます。AI駆動開発のセキュリティ対策から、Dify・n8n・Copilot Studio などのノーコードツール導入、社内ナレッジのAI活用まで幅広くサポートします。",
    targetAudience:
      "非エンジニア / ジュニアクラスのエンジニア、AI活用を始めたい中小企業",
    painPoints: [
      "AI駆動開発を始めたいがセキュリティや品質が不安",
      "ChatGPT/Copilotを使い始めたが、うまく活用できていない",
      "Dify/n8n/Copilot Studioを導入したいが自社では構築できない",
      "社内に蓄積されたナレッジをAIで活用したいが何から始めれば良いか分からない",
    ],
    details: [
      {
        heading: "AI駆動開発サポート",
        body: "AI を使った開発を始める方に向けて、セキュリティ対策や品質管理のベストプラクティスをお伝えします。安全にAIを活用するための体制づくりを支援します。",
      },
      {
        heading: "ノーコードツール構築・導入支援",
        body: "Dify / n8n / Copilot Studio など、ノーコード・ローコードツールの選定から構築・運用までサポートします。プログラミング不要で業務を自動化できる環境を整えます。",
      },
      {
        heading: "企業ナレッジのAI活用",
        body: "社内に蓄積されたドキュメントやデータをAIに活用し、チャットボットやナレッジベースとして業務に役立てる仕組みを構築します。",
      },
    ],
    pricing: [
      {
        name: "スポット相談（1時間）",
        price: "2万円",
        monitorPrice: "1.5万円",
      },
      {
        name: "月額伴走支援",
        price: "20万円/月",
        monitorPrice: "15万円/月",
      },
      {
        name: "ノーコードツール構築（スポット）",
        price: "15万円〜",
        monitorPrice: "10万円〜",
      },
    ],
    technologies: ["Dify", "n8n", "Copilot Studio", "ChatGPT", "Claude"],
  },
  {
    id: "training",
    title: "企業向け研修",
    description:
      "AI活用や技術研修を実践的なハンズオン形式で開催。すぐに業務に活かせるスキルを提供します。",
    icon: "graduation-cap",
    longDescription:
      "AI時代に対応した実践的な研修プログラムを提供します。座学だけでなくハンズオン形式で、受講後すぐに業務に活かせるスキルを身につけていただけます。新人研修からマネージャー向けAI活用研修まで、企業のニーズに合わせたカスタマイズが可能です。",
    targetAudience:
      "企業の人事・教育担当、新人〜中堅社員のスキルアップを検討している企業",
    painPoints: [
      "AI時代に対応した新人研修プログラムがない",
      "社内のAIリテラシーを底上げしたい",
      "座学だけでなく実践的なハンズオン研修を探している",
    ],
    details: [
      {
        heading: "新人研修・社内研修",
        body: "AI活用の基礎からプログラミング入門まで、企業の新人・中堅社員向けの研修を実施します。実務で使えるスキルを、ハンズオン形式で効率的に習得できます。",
      },
      {
        heading: "AI活用セミナー",
        body: "ChatGPTをはじめとする生成AIの業務活用セミナーを開催します。プロンプトエンジニアリングの基礎から、業種別の活用事例まで実践的に学べます。",
      },
      {
        heading: "カスタマイズ研修",
        body: "企業の業種・課題に合わせたオーダーメイドの研修プログラムを企画・実施します。事前ヒアリングで最適なカリキュラムを設計します。",
      },
    ],
    pricing: [
      {
        name: "半日セミナー（3時間）",
        price: "15万円",
        monitorPrice: "10万円",
      },
      {
        name: "1日研修（6時間）",
        price: "25万円",
        monitorPrice: "18万円",
      },
      {
        name: "カスタマイズ研修（複数日）",
        price: "個別見積もり",
      },
    ],
  },
  {
    id: "web-development",
    title: "Web開発",
    description:
      "Next.js / React を中心に、要件定義から設計・実装・運用まで対応。モダンな技術スタックで高品質なWebアプリケーションを構築します。",
    icon: "code",
    longDescription:
      "Next.js や React を中心としたモダンな技術スタックで、高品質なWebアプリケーションを構築します。要件定義から設計・実装・テスト・運用まで一貫して対応。パフォーマンスとユーザー体験を重視した開発を行います。",
    targetAudience:
      "Webサービスを立ち上げたい個人・スタートアップ、既存サイトのリニューアルを検討する企業",
    painPoints: [
      "Webアプリを作りたいが技術選定から相談したい",
      "既存サイトが古く、モダンな技術でリニューアルしたい",
      "小規模だが品質の高いWebサイトが欲しい",
    ],
    details: [
      {
        heading: "モダンWebアプリケーション構築",
        body: "Next.js / React を活用し、SEOに強くパフォーマンスの高いWebアプリケーションを開発します。レスポンシブ対応はもちろん、アクセシビリティにも配慮します。",
      },
      {
        heading: "フルスタック対応",
        body: "フロントエンドからバックエンド、インフラ構築まで一貫して対応します。API設計、データベース設計、CI/CDパイプライン構築も含めてお任せいただけます。",
      },
    ],
    pricing: [
      {
        name: "LP / 小規模サイト",
        price: "50万円〜",
        monitorPrice: "35万円〜",
      },
      {
        name: "小規模Webアプリ",
        price: "150万円〜",
        monitorPrice: "100万円〜",
      },
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Astro",
      "TailwindCSS",
      "Node.js",
    ],
  },
];
