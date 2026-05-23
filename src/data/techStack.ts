import type { TechCategory } from "@/types";

/**
 * トップページ「取り扱い技術」セクション。
 * `iconSlug` は simple-icons の slug。https://cdn.simpleicons.org/<slug> で SVG を取得。
 */
export const techStack: TechCategory[] = [
  {
    key: "ai-llm",
    label: "AI / LLM",
    items: [
      { name: "Claude", iconSlug: "anthropic" },
      { name: "OpenAI", iconSlug: "openai" },
      { name: "Gemini", iconSlug: "googlegemini" },
      { name: "Dify", iconSlug: "dify" },
      { name: "n8n", iconSlug: "n8n" },
      { name: "LangChain", iconSlug: "langchain" },
    ],
  },
  {
    key: "cloud-web",
    label: "Cloud / Web",
    items: [
      { name: "Cloudflare", iconSlug: "cloudflare" },
      { name: "Vercel", iconSlug: "vercel" },
      { name: "Supabase", iconSlug: "supabase" },
      { name: "Next.js", iconSlug: "nextdotjs" },
      { name: "Astro", iconSlug: "astro" },
      { name: "React", iconSlug: "react" },
    ],
  },
  {
    key: "languages-tools",
    label: "Languages / Tools",
    items: [
      { name: "TypeScript", iconSlug: "typescript" },
      { name: "Python", iconSlug: "python" },
      { name: "Google Apps Script", iconSlug: "google" },
      { name: "PowerShell", iconSlug: "powershell" },
      { name: "Git", iconSlug: "git" },
      { name: "GitHub", iconSlug: "github" },
    ],
  },
];
