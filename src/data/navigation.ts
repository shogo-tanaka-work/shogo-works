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
        label: "はやわざ業務自動化",
        href: "/services/hayawaza-automation",
        description: "繰り返し業務をAIで自動化",
      },
      {
        label: "はやわざAI顧問",
        href: "/services/hayawaza-advisor",
        description: "AI活用の伴走アドバイザリー",
      },
      {
        label: "はやわざAI研修",
        href: "/services/hayawaza-training",
        description: "チーム向けAI活用トレーニング",
      },
      {
        label: "はやわざアプリ開発",
        href: "/services/hayawaza-dev",
        description: "業務アプリをスピード開発",
      },
      {
        label: "はやわざシステム刷新",
        href: "/services/hayawaza-renewal",
        description: "レガシーシステムのモダン化",
      },
      {
        label: "AI無料診断",
        href: "/diagnosis",
        description: "最適なAI活用法を3分で診断",
      },
    ],
  },
  // 課題起点の導線。トップの「解決できるお悩み」セクションへスクロールする。
  { label: "お悩みから探す", href: "/#problems" },
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
