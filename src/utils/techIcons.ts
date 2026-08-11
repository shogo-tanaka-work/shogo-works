import type { IconName } from "@/components/icons/paths";

/**
 * 技術名からアイコンの取得元を解決する。
 * skills.ts は自動生成のためデータ側にアイコン情報を持てない。表示名をキーにここで一元管理する。
 */
export type TechIconSource =
  | { kind: "image"; url: string; wide?: boolean }
  | { kind: "inline"; name: IconName };

/** simple-icons（CC0）で配信されている技術。表示名 → slug */
const SIMPLE_ICON_SLUGS: Record<string, string> = {
  HTML: "html5",
  CSS: "css",
  "HTML/CSS": "html5",
  JavaScript: "javascript",
  TypeScript: "typescript",
  React: "react",
  "Next.js": "nextdotjs",
  "Node.js": "nodedotjs",
  Python: "python",
  "Tailwind CSS": "tailwindcss",
  jQuery: "jquery",
  LangGraph: "langchain",
  Supabase: "supabase",
  "Supabase (PostgreSQL)": "supabase",
  MongoDB: "mongodb",
  "Linux (Ubuntu)": "ubuntu",
  nginx: "nginx",
  Cloudflare: "cloudflare",
  "Cloudflare Workers": "cloudflare",
  Vercel: "vercel",
  Git: "git",
  GitHub: "github",
  GitLab: "gitlab",
  Docker: "docker",
  "Discord Bot": "discord",
  Claude: "claude",
  "Claude Code": "claude",
  "Claude / Claude Code": "claude",
  Gemini: "googlegemini",
  Dify: "dify",
  n8n: "n8n",
  "Make.com": "make",
  "Google Apps Script": "googleappsscript",
};

/** devicon（MIT）で配信されている技術。simple-icons が商標上の理由で配信していないものを補う */
const DEVICON_PATHS: Record<string, string> = {
  "Microsoft Azure": "azure/azure-original",
  Azure: "azure/azure-original",
  "VS Code": "vscode/vscode-original",
  "Windows Server": "windows8/windows8-original",
  "Nuxt.js": "nuxtjs/nuxtjs-original",
};

/** 縦横比が正方形でないアイコン。高さを揃えて幅を可変にする */
const WIDE_DEVICON_PATHS: Record<string, string> = {
  AWS: "amazonwebservices/amazonwebservices-original-wordmark",
};

/**
 * LobeHub Icons（MIT）で配信されている技術。
 * OpenAI 系と Microsoft Copilot は simple-icons / devicon のどちらにも無いため、ここで補う。
 */
const LOBE_ICON_NAMES: Record<string, string> = {
  ChatGPT: "openai",
  Codex: "codex",
  "Microsoft Copilot": "copilot-color",
};

/** 配信元がなく、リポジトリ内の汎用アイコンで代替する技術 */
const INLINE_ICONS: Record<string, IconName> = {
  Remotion: "code",
};

const SIMPLE_ICONS_CDN = "https://cdn.simpleicons.org";
const DEVICON_CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
const LOBE_ICONS_CDN =
  "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg/icons";

/** 技術名に対応するアイコンの取得元を返す。未登録の技術は汎用アイコンにフォールバックする */
export function resolveTechIcon(techName: string): TechIconSource {
  const simpleSlug = SIMPLE_ICON_SLUGS[techName];
  if (simpleSlug) {
    return { kind: "image", url: `${SIMPLE_ICONS_CDN}/${simpleSlug}` };
  }

  const lobeName = LOBE_ICON_NAMES[techName];
  if (lobeName) {
    return { kind: "image", url: `${LOBE_ICONS_CDN}/${lobeName}.svg` };
  }

  const deviconPath = DEVICON_PATHS[techName];
  if (deviconPath) {
    return { kind: "image", url: `${DEVICON_CDN}/${deviconPath}.svg` };
  }

  const widePath = WIDE_DEVICON_PATHS[techName];
  if (widePath) {
    return { kind: "image", url: `${DEVICON_CDN}/${widePath}.svg`, wide: true };
  }

  return { kind: "inline", name: INLINE_ICONS[techName] ?? "code" };
}
