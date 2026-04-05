/**
 * skills.yaml → skills.ts のカテゴリ・レベルマッピング定義
 *
 * skills.yaml にスキルを追加した場合、ここにも対応するエントリを追加する。
 * マッピングに存在しないスキル（OS 等）は HP に表示されない。
 */

import type { SkillCategoryKey, SkillLevel } from "../src/types/index.ts";

export interface SkillMappingEntry {
  category: SkillCategoryKey;
  level: SkillLevel;
  /** yaml からの自動生成ではなく固定ラベルを使用する場合 */
  labelOverride?: string;
}

export const skillMapping: Record<string, SkillMappingEntry> = {
  // --- Languages & Frameworks ---
  "JavaScript": { category: "languagesAndFrameworks", level: 4 },
  "HTML5/CSS3": { category: "languagesAndFrameworks", level: 3 },
  "Node.js": { category: "languagesAndFrameworks", level: 3 },
  "TypeScript": { category: "languagesAndFrameworks", level: 3 },
  "Python": { category: "languagesAndFrameworks", level: 2 },
  "React": { category: "languagesAndFrameworks", level: 2 },
  "LangGraph": { category: "languagesAndFrameworks", level: 2 },
  "Tailwind CSS": { category: "languagesAndFrameworks", level: 2 },
  "Nuxt.js": { category: "languagesAndFrameworks", level: 1 },
  "Remotion": { category: "languagesAndFrameworks", level: 1 },

  // --- Backend & Infrastructure ---
  "MongoDB (NoSQL)": { category: "backendAndInfra", level: 3 },
  "Supabase (PostgreSQL)": { category: "backendAndInfra", level: 2 },
  "Vercel": { category: "backendAndInfra", level: 2 },
  "Cloudflare Workers": { category: "backendAndInfra", level: 2 },
  "Microsoft Azure (Storage, Functions)": { category: "backendAndInfra", level: 2 },
  "nginx (Ubuntu)": { category: "backendAndInfra", level: 1 },

  // --- AI & Automation ---
  "Claude / Claude Code": { category: "aiAndAutomation", level: 4, labelOverride: "実務・コンサル・講師" },
  "ChatGPT": { category: "aiAndAutomation", level: 3 },
  "Dify": { category: "aiAndAutomation", level: 3 },
  "n8n": { category: "aiAndAutomation", level: 3 },
  "Make.com": { category: "aiAndAutomation", level: 3 },
  "Google Apps Script (GAS)": { category: "aiAndAutomation", level: 2 },
  "Gemini": { category: "aiAndAutomation", level: 2 },
  "Microsoft Copilot": { category: "aiAndAutomation", level: 2 },

  // --- Development Tools ---
  "GitHub": { category: "devTools", level: 3 },
  "GitLab": { category: "devTools", level: 3 },
  "Discord Bot": { category: "devTools", level: 2 },
  "Docker": { category: "devTools", level: 1 },
};

/** yaml の name → HP 表示名の変換（短縮が必要なもののみ） */
export const displayNameOverrides: Record<string, string> = {
  "HTML5/CSS3": "HTML/CSS",
  "MongoDB (NoSQL)": "MongoDB",
  "Supabase (PostgreSQL)": "Supabase",
  "Microsoft Azure (Storage, Functions)": "Azure",
  "nginx (Ubuntu)": "nginx",
  "Google Apps Script (GAS)": "Google Apps Script",
};
