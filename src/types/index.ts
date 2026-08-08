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

export interface PricingPlan {
  name: string;
  price: string;
  monitorPrice?: string;
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
  technologies?: string[];
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
export interface DifferenceItem {
  aspect: string; // 比較の観点
  others: string; // 一般的な外注・他社の傾向
  mine: string; // 田中省伍の提供価値
}

export type KnowledgeCategory =
  | "ai-tools"
  | "web-development"
  | "devops"
  | "career"
  | "prompt-engineering"
  | "context-engineering"
  | "harness-engineering"
  | "ai-governance";

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
}

export interface TechItem {
  name: string;
  iconSlug: string;
  url?: string;
  // 設定されたツールは /tech/[slug] の詳細ページへ内部リンクする（techToolDetails.ts と整合させる）
  detailSlug?: string;
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

// 主要ツールの詳細ページ（/tech/[slug]）用。
export interface TechUseCase {
  title: string;
  description: string;
}

export interface TechToolDetail {
  slug: string;
  name: string;
  iconSlug: string; // simple-icons の slug
  tagline: string; // 1行キャッチ
  overview: string; // ツール概要
  strengths: string[]; // 田中省伍の強み・経験
  useCases: TechUseCase[]; // 活用例
  relatedServiceHref?: string; // 関連サービスLP（services.ts と整合させる）
  relatedKnowledgeHref?: string; // 関連 Knowledge ページ
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
