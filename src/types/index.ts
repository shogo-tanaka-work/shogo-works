import type { IconName } from "@/components/icons/paths";

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  comingSoon?: boolean;
}

export interface WebApp {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  url: string;
}

export interface TeachingExperience {
  title: string;
  organization: string;
  period: string;
  students: string;
  description: string;
  type: "toB" | "toC";
  url?: string;
}

export interface Seminar {
  title: string;
  date: string;
  time: string;
  venue: string;
  capacity: string;
  price: string;
  status: string;
}

export type SkillLevel = 1 | 2 | 3 | 4 | 5;

export interface SkillItem {
  name: string;
  level: SkillLevel;
  label: string;
}

export type SkillCategoryKey =
  | "languagesAndFrameworks"
  | "backendAndInfra"
  | "aiAndAutomation"
  | "devTools";

export type SkillsByCategory = Record<SkillCategoryKey, SkillItem[]>;

export interface StatItem {
  value: string;
  label: string;
  description?: string;
}

export type TestimonialRating = 1 | 2 | 3 | 4 | 5;

// 顧客属性。属性別にレビューを並べて「自分ごと」として刺さるようにする
export type TestimonialAudience = "beginner" | "individual" | "developer";

export interface Testimonial {
  id: string;
  quote: string; // レビュー本文（MENTA実テキスト）
  rating: TestimonialRating;
  authorAttribute: string; // 例: "40代・会社員"（フルネーム/IDは載せない）
  audience: TestimonialAudience;
  serviceId?: string; // 関連サービスLPに差し込む用
  // 加工済みスクショ。未準備時は未設定で、引用のみ表示にフォールバックする
  screenshot?: string;
  source?: string; // 例: "MENTAレビューより"
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  heading: string;
  body: string;
}

// 申込を受け付ける販売プラットフォーム。サイトからの外部リンク先として使う。
export type SalesPlatform = "lancers" | "coconala" | "menta";

export interface PlatformLink {
  platform: SalesPlatform;
  href: string;
}

// お問い合わせページで案内する「どのサービスをどのプラットフォームで受けるか」
export interface PlatformRoute {
  serviceName: string;
  links: PlatformLink[];
}

export interface PricingPlan {
  name: string;
  price: string;
  // プラン内訳など価格の補足（任意）
  note?: string;
  // 申込先の販売プラットフォーム。未設定のプランは /contact（直接契約）で受ける
  links?: PlatformLink[];
}

export interface TechnologiesMore {
  note: string;
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  href: string;
  title: string;
  description: string;
  icon: string;
  longDescription: string;
  targetAudience: string;
  painPoints: string[];
  details: ServiceDetail[];
  pricing: PricingPlan[];
  // サービス全体の主CTAの申込先。未設定なら /contact へ案内する
  primaryPlatform?: PlatformLink;
  technologies?: string[];
  // 使用技術を主要なものに絞るときの補足と、詳細（スキル一覧など）への内部リンク
  technologiesMore?: TechnologiesMore;
  excludes?: string[];
  // --- LP拡張（任意。未設定のサービスは該当セクションを描画しない）---
  achievements?: string[]; // 実績サマリ（数字ファースト表示用）
  testimonialIds?: string[]; // このサービスに紐づくレビューID
  faq?: FaqItem[];
}

// ドロップダウン内のサブ項目。description はパネル内の補足1行（任意）。
export interface NavChild {
  label: string;
  href: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
  // children を持つ項目はデスクトップでドロップダウン、モバイルでアコーディオン表示になる
  children?: NavChild[];
}

// 「他社との違い」比較セクション用。
export type DifferenceCounterpart = "システム開発会社" | "研修会社";

export interface DifferenceItem {
  aspect: string; // 比較の観点
  counterpart: DifferenceCounterpart; // 比較相手の業態
  others: string; // 比較相手の傾向
  mine: string; // shogoworks の提供価値
}

export type KnowledgeCategory =
  | "ai-tools"
  | "web-development"
  | "devops"
  | "career"
  | "prompt-engineering"
  | "context-engineering"
  | "harness-engineering"
  | "loop-engineering"
  | "graph-engineering"
  | "ai-governance"
  | "security";

export interface CategoryMeta {
  slug: KnowledgeCategory;
  label: string;
  description: string;
  icon: string;
}

export interface SubcategoryMeta {
  slug: string;
  label: string;
  description: string;
}

/** 想定読者のレベル */
export type KnowledgeDifficulty = "beginner" | "intermediate" | "advanced";

/** 記事の性格。読んで学ぶものと、必要なときに引くものを区別する */
export type KnowledgeContentType =
  | "course"
  | "reference"
  | "docs-digest"
  | "news";

export interface DifficultyMeta {
  value: KnowledgeDifficulty;
  label: string;
  /** 星5段階のうち塗る数 */
  stars: number;
  /** 前提知識の目安。難易度の補足として併記する */
  note: string;
}

export interface ContentTypeMeta {
  value: KnowledgeContentType;
  label: string;
  description: string;
}

export type AiNewsTool =
  | "chatgpt-openai"
  | "claude"
  | "claude-code"
  | "cloudflare"
  | "codex"
  | "cursor"
  | "dify"
  | "gemini"
  | "github-copilot"
  | "manus"
  | "microsoft-copilot"
  | "n8n"
  | "runway"
  | "xai-grok";

export type AiNewsStatus = "captured" | "candidate" | "promoted";

export interface AiNewsToolMeta {
  slug: AiNewsTool;
  label: string;
  description: string;
}

export interface AiNewsStatusMeta {
  status: AiNewsStatus;
  label: string;
  description: string;
}

// --- Top page: featured knowledge / media outlets / tech stack ---

export interface FeaturedKnowledgeItem {
  title: string;
  description: string;
  href: string;
  categoryLabel?: string;
}

export interface MediaOutlet {
  name: string;
  description: string;
  url: string;
  iconSlug: string; // simple-icons の slug
  brandColor?: string;
  comingSoon?: boolean;
  // simple-icons が配信していない媒体（LinkedIn など）は、リポジトリ内のアイコンで代替する
  inlineIcon?: IconName;
}

export interface TechItem {
  name: string;
  url?: string;
}

export interface TechCategory {
  key: string;
  label: string;
  items: TechItem[];
}

// --- 導入事例 / 指導実績（/cases）---

export type CaseCategory = "導入支援" | "開発" | "研修・指導";

export interface CaseStudy {
  slug: string; // /cases/[slug] の URL に使用
  title: string;
  category: CaseCategory;
  clientType: string; // 例: "AIベンチャー企業"（実名・特定可能情報は載せない）
  period?: string;
  summary: string; // 一覧カード用の短い説明
  challenge: string; // 課題・背景
  support: string[]; // 支援内容
  outcomes: string[]; // 成果
  technologies?: string[];
  serviceHref?: string; // 関連サービスLP（services.ts と整合させる）
}

// --- About page: career / education / certifications ---

export type EmploymentType = "正社員" | "業務委託" | "フリーランス";

export interface CareerExperience {
  period: string;
  company: string;
  role: string;
  employment: EmploymentType;
  teamSize?: string;
  summary: string;
  highlights: string[];
  technologies: string[];
  current?: boolean;
  // 入社が決まっているが着任前の経歴。「現職」ではなく「入社予定」として表示する
  upcoming?: boolean;
}

export interface EducationRecord {
  period: string;
  school: string;
  department?: string;
  status: string;
}

export interface Certification {
  name: string;
  date: string;
}

/**
 * About で「何を作ってきたか」を一画面に並べるための項目。
 * 営業資料としての詳細は CaseStudy（/cases）と note が持ち、ここは要約に留める。
 */
export interface Build {
  title: string;
  summary: string;
  technologies: string[];
  /** 詳細を読める外部URL。無い実績は省略する */
  href?: string;
  hrefLabel?: string;
}
