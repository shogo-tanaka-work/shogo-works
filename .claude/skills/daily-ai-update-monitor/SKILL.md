---
name: daily-ai-update-monitor
description: AI製品の公式アップデートを日次で確認するためのSkill。直近24時間以内に、今回リサーチしたAIツールの新リリース、ニュース、機能追加、機能拡張が出ているかを公式ソースから確認し、docs/research配下へMarkdownで記録するときに使う。対象はChatGPT/OpenAI、Gemini、Claude、Claude Code、GitHub Copilot、Genspark、Manus、Dify、n8n、Meta AI、Runway、xAI/Grok、ByteDance Seed、Pika。
---

# Daily AI Update Monitor

## 概要

このSkillは、AI製品の公式情報を毎日巡回し、更新有無をMarkdownに残すための手順です。公式Release Notes、公式Blog、公式Docs、公式GitHub Releasesを優先します。

収集前に `references/source-catalog.md` を読みます。ファイル作成前に `references/output-format.md` を読みます。

## 手順

1. 直近24時間の対象期間を決めます。
   - 現在日時は実行環境またはツールコンテキストから確認します。
   - レポート上の標準タイムゾーンは Asia/Tokyo です。
   - 正確なtimestampがあるソースは、直近24時間以内に公開された更新だけを対象にします。
   - 日付しかないソースは、より細かいtimestampが取れない場合だけ、今日または昨日の日付を対象にし、`date_precision: date-only` を付けます。

2. `references/source-catalog.md` の全ソースを確認します。
   - 公式ソースだけを使います。
   - GitHub Releasesは、可能ならAPIのpaginationを使います: `gh api -X GET 'repos/<owner>/<repo>/releases?per_page=100' --paginate`
   - WebページでGitHub Releasesを見る場合は、`?page=2` などのページネーションも明示的に確認します。1ページ目だけで完了扱いにしません。
   - raw changelogは、ファイル上部のversion見出しと日付を比較します。

3. 候補を記録対象にするか判断します。
   - 対象にするもの: 製品リリース、モデル公開、機能追加、機能拡張、API/SDK変更、料金/プラン変更、セキュリティ/管理者機能、公式ツール発表、公式Blog発表。
   - 対象外にするもの: 非公式解説、SNS投稿、重複配信、公式日付が更新されていない古い記事。
   - 確認したが更新がなかったソースは、日次サマリーに `更新なし` として残します。

4. Markdownを作成します。
   - 日次サマリーは必ず `docs/research/daily-ai-updates/YYYY-MM-DD.md` に作成します。
   - 日次サマリーは概要と索引だけにします。
   - 更新がある場合、詳細ファイルは各ツールの既存フォルダに作成します: `docs/research/<tool-folder>/official-updates/`
   - 詳細ファイル名は後から時系列で並べやすいように、timestamp付きにします: `YYYY-MM-DDTHHMMSS-service-or-version-slug.md`
   - 書式は `references/output-format.md` に従います。
   - 原文全文や全文翻訳は貼りません。日本語で要約し、公式URLを残します。

5. 検証します。
   - 新規Markdownにfrontmatterがあることを確認します。
   - 詳細ファイルに `source`、`fetched_at`、`published_at` または `published_date`、`原文確認` があることを確認します。
   - 日次サマリー内のリンクが解決することを確認します。
   - `TODO`、`FIXME`、`取得失敗`、`要確認` を検索し、残す必要があるものは理由を説明します。

## 重要ルール

- 最新情報は必ず現在の公式ソースを取得して確認します。記憶だけで判断しません。
- 検索スニペットより一次情報を優先します。
- URLと取得日時を必ず残します。
- 更新なしも有効な結果として日次サマリーに残します。
- `.env`、認証情報、秘密鍵、秘密情報ファイルは読みません。
- 自動コミットはしません。

## n8nとGitHub Releases

n8nはstable、beta/pre-release、experimental、1.x backportが並行して出ます。必ずpagination込みで `n8n@*` releaseを取得してから、直近24時間でfilterします。n8nの詳細ファイルには必ず次を入れます。

- `release_date`
- `version`
- `channel`
- `official_url`

## Claude Release Notes

Claude Release Notesは日付見出し単位で確認します。各日付見出しを更新候補として扱います。Enterprise、Analytics API、mobile、Office add-inのような小さく見える更新も飛ばしません。

## 参照ファイル

- `references/source-catalog.md`: 公式ソース一覧とツール別の詳細出力先。
- `references/output-format.md`: 日次サマリーとツール別詳細ファイルのテンプレート。
- `scripts/new_daily_report.mjs`: 日次サマリーの雛形を作る補助スクリプト。
