import type { NavItem } from "@/types";

export const navItems: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "サービス一覧",
        href: "/services",
        description: "提供サービスをまとめて見る",
      },
      {
        label: "マンツーマンAIサポート",
        href: "/services/personal-support",
        description: "個人向けのAI活用伴走",
      },
      {
        label: "アプリ開発（業務委託）",
        href: "/services/app-development",
        description: "Next.js / React の開発参画・受託",
      },
      {
        label: "講師・セミナー登壇",
        href: "/services/lecture",
        description: "スクール・企業向けの登壇",
      },
    ],
  },
  {
    label: "Knowledge",
    href: "/knowledge",
    children: [
      {
        label: "Knowledge トップ",
        href: "/knowledge",
        description: "カテゴリ一覧と最新記事",
      },
      {
        label: "学習ロードマップ",
        href: "/knowledge/roadmap",
        description: "おすすめの学習順序",
      },
      {
        label: "AI Tools",
        href: "/knowledge/ai-tools",
        description: "Claude Code / Codex などの実践知識",
      },
      {
        label: "Web開発",
        href: "/knowledge/web-development",
        description: "Cloudflare / Supabase / Vercel",
      },
      {
        label: "タグから探す",
        href: "/knowledge/tags",
        description: "タグ別に記事を横断検索",
      },
    ],
  },
  { label: "AI News", href: "/ai-news" },
  {
    label: "About",
    href: "/about",
    children: [
      {
        label: "About",
        href: "/about",
        description: "経歴・実績・自己紹介",
      },
      {
        label: "Portfolio",
        href: "/portfolio",
        description: "開発したWebアプリの実例",
      },
      {
        label: "Skills",
        href: "/skills",
        description: "対応できる技術スタック",
      },
    ],
  },
];
