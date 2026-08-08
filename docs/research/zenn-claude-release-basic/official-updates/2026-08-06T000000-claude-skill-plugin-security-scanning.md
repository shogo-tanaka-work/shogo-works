---
date: 2026-08-06
title: "Skill and plugin security scanning（ベータ）— サードパーティ Skill / プラグインの自動セキュリティ検査"
service: "Claude"
source: https://support.claude.com/en/articles/12138966-release-notes
fetched_at: 2026-08-07T10:00:00+09:00
published_at: 2026-08-06
date_precision: date-only
category: release
---

# 2026-08-06 Skill and plugin security scanning（ベータ）

## 公式内容の日本語要約

Claude の公式リリースノートに 2026-08-06 付で「Skill and plugin security scanning (beta)」が追加された。Enterprise 契約の組織が、サードパーティ製の Skill とプラグインに対する自動セキュリティ検査を有効化できる、という内容。アップロード時および変更時に、有害となりうるコードを検出する。

リリースノート本文は短く、検出手法・検出項目の内訳・検出時の挙動（ブロックするのか警告に留めるのか）・対象サーフェス（claude.ai / API / Claude Code のどれか）についての記載はない。有効化はベータ機能として組織側で行う形。

位置づけを理解するうえで重要なのは、Claude Platform の Enterprise 向け Skills ドキュメント（`platform.claude.com/docs/en/agents-and-tools/agent-skills/enterprise`）が、2026-08-07 時点でも **人手による審査手順**を前提に書かれている点。同ドキュメントは、コード実行（`*.py` / `*.sh` / `*.js`）、指示の改変（安全ルールの無視、動作の隠蔽）、MCP サーバー参照、ネットワークアクセス、ハードコードされた認証情報、ファイルシステムのスコープ、ツール呼び出しという7つのリスク指標を挙げ、8項目の審査チェックリストを実施するよう求めている。今回のベータは、この手作業の一次スクリーニングを自動化するものと読める（ドキュメント側は未更新のため、自動検査が上記チェックリストのどこまでを代替するかは公式には未確定）。

なお、同名で紛らわしいが **Claude Security**（コードベースの脆弱性スキャン、Enterprise 向け公開ベータ）や **Claude Security プラグイン**（Claude Code 内でリポジトリを多エージェントで診断）とは別機能。今回のものは「Claude に持ち込む Skill / プラグイン自体を検査する」ものである。

## できるようになったこと

- Enterprise 組織が、サードパーティ製 Skill / プラグインの自動セキュリティ検査を有効化できる（ベータ）
- Skill / プラグインのアップロード時と変更時に、有害となりうるコードが検出される

## 影響範囲

- 対象ユーザー: Claude Enterprise の管理者、Skill / プラグイン配布者
- 対象プラン: Enterprise（ベータ、組織側で有効化）
- API / UI / 管理者機能: 管理者機能

教材化メモ: src/content/ai-news-notes/claude/skill-plugin-security-scanning.mdx

## 原文確認

- 公式見出し: Skill and plugin security scanning (beta)（2026-08-06 の日付見出し配下）
- 公式URL: https://support.claude.com/en/articles/12138966-release-notes
- 関連（人手審査手順・未更新）: https://platform.claude.com/docs/en/agents-and-tools/agent-skills/enterprise
- 原文全文は公式ページで確認してください。
