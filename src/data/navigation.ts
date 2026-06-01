import type { NavItem } from "@/types";

export const navItems: NavItem[] = [
  { label: "Services", href: "/services" },
  // 課題起点の導線。トップの「解決できるお悩み」セクションへスクロールする。
  { label: "お悩みから探す", href: "/#problems" },
  { label: "Knowledge", href: "/knowledge" },
  { label: "AI News", href: "/ai-news" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Skills", href: "/skills" },
];
