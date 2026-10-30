---
date: 2026-10-29
title: "Agents SDK: Agent Skills が Workspace のファイルに"
service: "Agents"
source: https://developers.cloudflare.com/changelog/post/2026-10-29-agent-skills-from-files/
fetched_at: 2026-10-30T09:10:00+09:00
published_at: 2026-10-29
date_precision: date-only
category: enhancement
---

# 2026-10-29 Agents SDK: Agent Skills が Workspace のファイルに

## 公式内容の日本語要約

/workspace/.agents/skills/ に SKILL.md を含むフォルダを置くと、ビルド・デプロイなしで次のターンから使える。読み込み元は Workspace、R2、コード。仕様違反は警告つきで読み込む。agents/skills 直接利用には破壊的変更（agents:skills の Vite import、SkillRegistry などを削除）。Agents SDK v0.32.0 以上、Think v0.23.0 以上が必要。

## 原文確認

- 公式URL: https://developers.cloudflare.com/changelog/post/2026-10-29-agent-skills-from-files/
- 原文全文は公式ページで確認してください。

教材化メモ: src/content/ai-news-notes/cloudflare/agents-sdk-skills-as-files.mdx
