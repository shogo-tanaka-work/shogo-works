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
}

export interface NavItem {
  label: string;
  href: string;
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
