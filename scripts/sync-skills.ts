/**
 * skills.yaml → src/data/skills.ts 同期スクリプト
 *
 * 使い方: npm run sync:skills
 */

import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { parse as parseYaml } from "yaml";
import { skillMapping, displayNameOverrides } from "./skill-mapping.ts";
import type { SkillCategoryKey, SkillLevel } from "../src/types/index.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));

const SKILLS_YAML_PATH =
  "/Volumes/PortableSSD/Documents/経歴書やスキルシートに関する資料/master/skills.yaml";
const OUTPUT_PATH = resolve(__dirname, "../src/data/skills.ts");

// --- yaml の型定義 ---

interface YamlSkillItem {
  name: string;
  years?: number;
  level: string;
  note?: string;
}

interface YamlSkillCategory {
  languages?: YamlSkillItem[];
  frameworks?: YamlSkillItem[];
  databases?: YamlSkillItem[];
  infrastructure?: YamlSkillItem[];
  tools?: YamlSkillItem[];
  ai_tools_consulting?: YamlSkillItem[];
  os?: YamlSkillItem[];
}

interface YamlSkills {
  professional: YamlSkillCategory;
  personal: YamlSkillCategory;
}

// --- ラベル生成 ---

function generateLabel(yamlItems: Map<string, YamlSkillItem[]>): (name: string) => string {
  return (name: string) => {
    const items = yamlItems.get(name);
    if (!items || items.length === 0) return "";

    let years: number | undefined;
    let hasJitumu = false;
    let consultingLabel: string | undefined;
    let isPersonal = false;

    for (const item of items) {
      if (item.years !== undefined) {
        years = item.years;
      }

      const level = item.level;
      if (level === "実務") {
        hasJitumu = true;
      } else if (level === "個人開発") {
        isPersonal = true;
      } else if (level.includes("コンサル") || level.includes("講師")) {
        // "コンサル・講師・実務利用" → "コンサル・講師" に正規化
        consultingLabel = level.replace(/・実務利用$/, "");
      }
    }

    if (years !== undefined && consultingLabel) {
      return `実務・${consultingLabel}`;
    }
    if (years !== undefined) {
      return `実務 ${years}年`;
    }
    if (consultingLabel) {
      return consultingLabel;
    }
    if (isPersonal) {
      return "個人開発";
    }
    return "";
  };
}

// --- メイン処理 ---

function main(): void {
  const yamlContent = readFileSync(SKILLS_YAML_PATH, "utf-8");
  const parsed = parseYaml(yamlContent) as YamlSkills;

  // yaml の全スキルを name → YamlSkillItem[] のマップに展開
  const yamlItemMap = new Map<string, YamlSkillItem[]>();

  for (const section of [parsed.professional, parsed.personal]) {
    if (!section) continue;
    for (const items of Object.values(section)) {
      if (!Array.isArray(items)) continue;
      for (const item of items as YamlSkillItem[]) {
        const existing = yamlItemMap.get(item.name) ?? [];
        existing.push(item);
        yamlItemMap.set(item.name, existing);
      }
    }
  }

  const getLabel = generateLabel(yamlItemMap);

  // マッピングに基づいてカテゴリ別に振り分け
  const categories: Record<SkillCategoryKey, { name: string; level: SkillLevel; label: string }[]> = {
    languagesAndFrameworks: [],
    backendAndInfra: [],
    aiAndAutomation: [],
    devTools: [],
  };

  const unmapped: string[] = [];

  for (const [yamlName, mapping] of Object.entries(skillMapping)) {
    if (!yamlItemMap.has(yamlName)) {
      unmapped.push(yamlName);
      continue;
    }

    const displayName = displayNameOverrides[yamlName] ?? yamlName;
    const label = mapping.labelOverride ?? getLabel(yamlName);

    categories[mapping.category].push({
      name: displayName,
      level: mapping.level,
      label,
    });
  }

  // レベル降順でソート
  for (const items of Object.values(categories)) {
    items.sort((a, b) => b.level - a.level);
  }

  if (unmapped.length > 0) {
    console.warn(
      `[warn] マッピングに定義されているが skills.yaml に見つからないスキル: ${unmapped.join(", ")}`
    );
  }

  // skills.ts を生成
  const output = generateOutput(categories);
  writeFileSync(OUTPUT_PATH, output, "utf-8");

  const totalSkills = Object.values(categories).reduce((sum, items) => sum + items.length, 0);
  console.log(`[sync-skills] ${totalSkills}件のスキルを同期しました → ${OUTPUT_PATH}`);
}

function generateOutput(
  categories: Record<SkillCategoryKey, { name: string; level: SkillLevel; label: string }[]>
): string {
  const lines: string[] = [
    '// このファイルは自動生成されます。手動で編集しないでください。',
    '// 編集する場合: scripts/skill-mapping.ts を更新して npm run sync:skills を実行',
    '',
    'import type { SkillsByCategory } from "@/types";',
    '',
    'export const skills: SkillsByCategory = {',
  ];

  const categoryKeys: SkillCategoryKey[] = [
    "languagesAndFrameworks",
    "backendAndInfra",
    "aiAndAutomation",
    "devTools",
  ];

  for (const key of categoryKeys) {
    lines.push(`  ${key}: [`);
    for (const skill of categories[key]) {
      const nameEscaped = skill.name.replace(/"/g, '\\"');
      const labelEscaped = skill.label.replace(/"/g, '\\"');
      lines.push(`    { name: "${nameEscaped}", level: ${skill.level}, label: "${labelEscaped}" },`);
    }
    lines.push("  ],");
  }

  lines.push("};", "");
  return lines.join("\n");
}

main();
