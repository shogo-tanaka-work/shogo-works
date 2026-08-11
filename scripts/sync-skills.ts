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
  "/Users/shogo/Documents/キャリア/履歴書_職務経歴書/master/skills.yaml";
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

const MONTHS_PER_YEAR = 12;

/** 1年未満は「Nヶ月」で表す。0.25年を「0.25年」と書くより実感に近い */
function formatDuration(years: number): string {
  if (years >= 1) return `実務 ${years}年`;
  return `実務 ${Math.max(1, Math.round(years * MONTHS_PER_YEAR))}ヶ月`;
}

interface SkillSummary {
  years?: number;
  /** 講師・登壇としての実績。「コンサル」は HP では使わない方針のため落とす */
  teachingLabel?: string;
  isPersonal: boolean;
}

/** yaml 上で別名に分かれている実績（例: Claude と Claude Code）を1件へまとめる */
function collectItems(
  yamlItems: Map<string, YamlSkillItem[]>,
  name: string,
  mergeFrom?: string[],
): YamlSkillItem[] {
  return [name, ...(mergeFrom ?? [])].flatMap((key) => yamlItems.get(key) ?? []);
}

function summarize(items: YamlSkillItem[]): SkillSummary {
  const summary: SkillSummary = { isPersonal: false };

  for (const item of items) {
    if (item.years !== undefined) {
      summary.years = item.years;
    }

    const level = item.level;
    if (level === "個人開発") {
      summary.isPersonal = true;
    } else if (level.includes("講師")) {
      summary.teachingLabel = "講師";
    }
  }

  return summary;
}

function generateLabel(
  yamlItems: Map<string, YamlSkillItem[]>,
): (name: string, mergeFrom?: string[]) => string {
  return (name: string, mergeFrom?: string[]) => {
    const items = collectItems(yamlItems, name, mergeFrom);
    if (items.length === 0) return "";

    const { years, teachingLabel, isPersonal } = summarize(items);

    // 講師実績があるものも、実務年数を併記して経験の裏付けを示す
    if (years !== undefined && teachingLabel)
      return `${formatDuration(years)}・${teachingLabel}`;
    if (years !== undefined) return formatDuration(years);
    if (teachingLabel) return teachingLabel;
    if (isPersonal) return "個人開発";
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
  const categories: Record<
    SkillCategoryKey,
    { name: string; level: SkillLevel; label: string; years: number }[]
  > = {
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
    const label = mapping.labelOverride ?? getLabel(yamlName, mapping.mergeFrom);
    const { years } = summarize(
      collectItems(yamlItemMap, yamlName, mapping.mergeFrom),
    );

    categories[mapping.category].push({
      name: displayName,
      level: mapping.level,
      label,
      // 実務年数を持たない（個人開発のみの）スキルは 0 として最後に回す
      years: years ?? 0,
    });
  }

  // 実務経験のあるスキルを上に出す。同条件ではレベル降順 → 年数降順
  for (const items of Object.values(categories)) {
    items.sort(
      (a, b) =>
        Number(b.years > 0) - Number(a.years > 0) ||
        b.level - a.level ||
        b.years - a.years,
    );
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
