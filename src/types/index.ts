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

export interface NavItem {
  label: string;
  href: string;
}

// 「課題から探す」セクション用。訪問者の悩みを該当サービスへ橋渡しする。
export interface ProblemItem {
  text: string; // 訪問者目線の悩み（「〜したい」「〜が課題」）
  serviceHref: string; // 紐付くサービスの href（services.ts と整合させる）
}

export interface ProblemCategory {
  key: string; // 一意なカテゴリキー（タブ切替の data 属性に使用）
  label: string; // タブ表示名
  problems: ProblemItem[];
}

// 「他社との違い」比較セクション用。
export interface DifferenceItem {
  aspect: string; // 比較の観点
  others: string; // 一般的な外注・他社の傾向
  mine: string; // 田中省伍の提供価値
}

// AI無料診断 LP 用。
export interface DiagnosisStep {
  title: string; // ステップ名
  body: string; // 内容
}

export interface DiagnosisNextOption {
  label: string; // 診断後に繋がるサービス名
  href: string; // 該当サービスの href（services.ts と整合させる）
  description: string; // どんな人向けか
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

export type ArticlePlatform = "zenn" | "qiita" | "note";

export interface ExternalArticle {
  id: string;
  title: string;
  description: string;
  category: KnowledgeCategory;
  tags: string[];
  sortOrder: number;
  createdAt: Date;
  platform: ArticlePlatform;
  url: string;
}

export type AiNewsTool =
  | "chatgpt-openai"
  | "claude"
  | "claude-code"
  | "codex"
  | "cursor"
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

// --- Top page: featured knowledge / media outlets / resources / tech stack ---

export type FeaturedSource = "internal" | "external";
export type FeaturedPlatform = "zenn" | "qiita" | "note" | "youtube";

export interface FeaturedKnowledgeItem {
  title: string;
  description: string;
  href: string;
  source: FeaturedSource;
  platform?: FeaturedPlatform;
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

export interface ResourceItem {
  title: string;
  description: string;
  href: string;
  comingSoon: boolean;
}

export interface TechItem {
  name: string;
  iconSlug: string;
  url?: string;
}

export interface TechCategory {
  key: string;
  label: string;
  items: TechItem[];
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
