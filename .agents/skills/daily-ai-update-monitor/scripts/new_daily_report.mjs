#!/usr/bin/env node
import { mkdirSync, existsSync, writeFileSync } from 'node:fs';

const date = process.argv[2] ?? new Date().toISOString().slice(0, 10);
const dir = `docs/research/daily-ai-updates`;
const path = `${dir}/${date}.md`;

mkdirSync(dir, { recursive: true });

if (!existsSync(path)) {
  const fetchedAt = `${date}T00:00:00+09:00`;
  const lines = [
    '---',
    `date: ${date}`,
    `title: "AI公式アップデート日次チェック ${date}"`,
    `fetched_at: ${fetchedAt}`,
    'window_start: ""',
    'window_end: ""',
    '---',
    '',
    `# AI公式アップデート日次チェック ${date}`,
    '',
    'このファイルは日次サマリー専用です。詳細メモは各ツールの `official-updates/` 配下へ追加します。',
    '',
    '## サマリー',
    '',
    '- 対象期間: ',
    '- 更新あり: 0件',
    '- 更新なし: 0件',
    '- 取得失敗: 0件',
    '',
    '## 更新あり',
    '',
    '| service | published_at | title | detail |',
    '| --- | --- | --- | --- |',
    '',
    '## 更新なし',
    '',
    '## 取得失敗・保留',
    '',
    '## チェック対象',
    '',
  ];
  writeFileSync(path, `${lines.join('\n')}\n`);
}

console.log(path);
