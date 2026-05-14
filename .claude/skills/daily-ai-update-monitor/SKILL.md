---
name: daily-ai-update-monitor
description: AI製品の公式アップデートを日次で確認するためのSkill。直近24時間以内に、今回リサーチしたAIツールの新リリース、ニュース、機能追加、機能拡張が出ているかを公式ソースから確認し、docs/research配下へMarkdownで記録するときに使う。対象はChatGPT/OpenAI、OpenAI Codex、Gemini、Claude、Claude Code、GitHub Copilot、Genspark、Manus、Dify、n8n、Meta AI、Runway、xAI/Grok、ByteDance Seed、Pika。
---

# Daily AI Update Monitor

## 概要

このSkillは、AI製品の公式情報を毎日巡回し、更新有無をMarkdownに残すための手順です。公式Release Notes、公式Blog、公式Docs、公式GitHub Releasesを優先します。

ユーザーがWebリサーチとして依頼した場合でも、日次AIアップデート調査に該当するなら、最終的に `docs/research/daily-ai-updates/YYYY-MM-DD.md` を作成または更新します。公開記事を作るだけで完了扱いにしません。

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
   - 対象にするもの（追加）: **既存機能の派生改善**（Stable化済み機能の周辺強化、プラグイン経由の可視化、対応プラットフォーム拡大、対応言語拡大、地域ロールアウト等）。`category: enhancement` として記録します。「初出ではないから対象外」と判断するのを禁止します。
   - 対象外にするもの: 非公式解説、SNS投稿、重複配信、公式日付が更新されていない古い記事。
   - 確認したが更新がなかったソースは、日次サマリーに `更新なし` として残します。
   - **窓判定の二軸化**: 「公開日（published_at）」が窓内のものを基本対象とします。加えて「ロールアウト日 / 適用開始日 / 言語・地域展開日」が窓内に明記されている発表は、公開日が窓外でも追補対象として記録します。詳細ファイルの frontmatter に `rollout_date` を加え、サマリーの「速報記事化済み」「更新あり」テーブルに含めます。

4. Markdownを作成します。
   - 日次サマリーは必ず `docs/research/daily-ai-updates/YYYY-MM-DD.md` に作成します。
   - 日次サマリーは概要と索引だけにします。
   - Webリサーチで得た更新も、同じ日次サマリーに `更新あり`、`更新なし`、`保留`、`公開記事化済み` として記録します。
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
- OpenAI / ChatGPT は公式BlogやChatGPT Release Notesだけでなく、必要に応じてDeveloper Docs、API model docs、pricingも確認します。API公開・モデル公開・価格変更を見落とさないためです。**`openai.com/news/` トップだけでなく、`openai.com/news/<category>/` カテゴリページ、日本語トップ `openai.com/ja-JP/news/`、`openai.com/index/<slug>/` 個別ポストの URL を必ず取得して日付・本文を確認します**（限定プレビュー・特化版モデル発表は個別ポスト側、Engineering / Security の技術記事はカテゴリ面に目立つ形で出ることがあります）。
- **OpenAI Newsカテゴリ巡回**: Company / Research / Product / Safety / Engineering / Security / Global Affairs / AI Adoption を確認します。Engineering / Security に出る Codex / sandbox / agent runtime / API infrastructure / security implementation の記事は、製品リリースではなくても導入判断に影響する場合 `category: enhancement` として拾います。
- **OpenAI は `openai.com/<section>/<slug>/` 型の公式ページも巡回対象にします**。`openai.com/academy/`、`openai.com/stories/`、`openai.com/business/`、`openai.com/solutions/` など、1階層目セクション配下に日付付きの Academy guide / customer story / enterprise use case が出ることがあります。Codex / ChatGPT / API / 業務導入に関わる内容は更新候補として扱います。
- **OpenAI Codex は GitHub Releases が一次情報**で、stable（`rust-vX.Y.Z`）と alpha が並行で出ます。stable のみ詳細ファイル化し、alpha は日次サマリーで件数のみ言及します。Hooks や Plugin など既存機能の派生改善は `category: enhancement` で拾います。
- **Claude は `support.claude.com` と `anthropic.com/news` だけで完了扱いにしない**。Claude Platform / Claude API / AWS・Bedrock・Vertex・Foundry 連携 / Console / Managed Agents / Skills / MCP connector など開発者向け発表は `claude.com/blog` やクラウドプロバイダー公式（特に AWS What's New / AWS Machine Learning Blog）に出ることがあります。`Claude Platform on AWS`、`Claude API AWS generally available`、`site:aws.amazon.com Anthropic Claude` のような逆引きを必ず行います。
- **Claude Code は GitHub Releases本文の What's changed を読む**。`claude agents` / agent view / `/goal` / hooks / plugin / MCP など複数機能が1リリースにまとまるため、タグ名や日付だけで「更新あり」と済ませず、主要機能を抽出して記事化候補を判断します。
- **Workspace Updates Blog は週次Recap だけで完了扱いにしない**。個別ポスト URL（`workspaceupdates.googleblog.com/2026/MM/<slug>.html`）の方が情報が詳細で日付もはっきりするため、個別ポストを必ず確認します。多言語対応・地域ロールアウト・GA切替などは個別ポスト側の参照が前提です。
- **二次ソース → 一次ソース逆引き**: 二次ソース（Bloomberg / 9to5系 / Help Net Security 等、`source-catalog.md` 末尾の許可リスト参照）で更新を見つけたら、必ず公式 URL を特定してから記録します。公式が確認できない場合は `status: 保留（公式未確認）` で日次サマリーに残し、二次ソース URL も併記します。
- **ユーザー認識ギャップの記録**: リサーチ依頼や PR レビューで「○○ができるようになったらしい」とユーザーが言及したが、公式上は事実が違う / 逆方向 / サードパーティ製のみ、というケースは `references/perception-gaps.md` にエントリ追加で蓄積します。同じ誤認が繰り返されないよう、日次サマリー末尾「補足メモ」に該当があれば必ず転記します。
- 調査からAIニュース記事へ進む場合は、`src/content/ai-news/` だけでなく `src/content/ai-news-notes/` と日次サマリーの記録も完了条件に含めます。
- `.env`、認証情報、秘密鍵、秘密情報ファイルは読みません。
- 自動コミットはしません。

## 追補リサーチ手順

初回パスで漏れることを前提に、二段階リサーチを正規化します。

1. **First pass**: `references/source-catalog.md` の全ソースを巡回し、日次サマリー初版を作成。
2. **Review checkpoint**: ユーザー or 自分のレビューで具体トピック指摘を受ける（例:「○○の限定プレビューが出ていなかった？」「Codex で hooks がサポートされたらしい」）。
3. **Second pass**: 指摘トピックを一次情報で裏取り。見つかれば日次サマリーに追補注記を入れて追加。

### 追補時の検索クエリパターン例

- 限定プレビュー系: `"limited preview" OR "now available" OR "trusted access" site:openai.com 2026-MM`
- 機能拡大系: `"now in" OR "expanded to" OR "available in more" site:googleblog.com 2026-MM`
- 言語/地域ロールアウト: `"available in <Japanese|Korean|...>" site:<vendor>.com`
- 派生機能: `"now show" OR "now display" <feature> site:github.com/<vendor>`
- 既存機能の Stable 化後の進化: `"stable" OR "GA" OR "now generally available" <feature> site:<vendor>.com`
- Claude Platform / AWS: `"Claude Platform on AWS" OR "Claude API AWS" site:claude.com OR site:aws.amazon.com 2026-MM`

### 追補時のサマリー更新ルール

- 既存の `2026-MM-DD.md` のフロントマター直下に `> YYYY-MM-DDTHH:mm 更新: 追補リサーチで N 件追加` 注記を追加
- サマリー数値の `更新あり: N件` を `N件（追補X件）` に更新
- 「速報記事化済み」「更新あり」テーブルに追補分を追加
- ユーザー認識ギャップに該当があれば末尾「補足メモ」へ転記

## n8nとGitHub Releases

n8nはstable、beta/pre-release、experimental、1.x backportが並行して出ます。必ずpagination込みで `n8n@*` releaseを取得してから、直近24時間でfilterします。n8nの詳細ファイルには必ず次を入れます。

- `release_date`
- `version`
- `channel`
- `official_url`

## Claude Release Notes

Claude Release Notesは日付見出し単位で確認します。各日付見出しを更新候補として扱います。Enterprise、Analytics API、mobile、Office add-inのような小さく見える更新も飛ばしません。

## 参照ファイル

- `references/source-catalog.md`: 公式ソース一覧とツール別の詳細出力先、二次ソース許可リスト。
- `references/output-format.md`: 日次サマリーとツール別詳細ファイルのテンプレート、`rollout_date`、`category` フィールド。
- `references/research-learnings.md`: リサーチ実走で発見した新ソースURL・取りこぼしの原因と対処を蓄積。月次で source-catalog 本体に取り込む候補。
- `references/perception-gaps.md`: ユーザー認識と公式状況のギャップを蓄積。同じ誤認が繰り返されないようにする。
- `scripts/new_daily_report.mjs`: 日次サマリーの雛形を作る補助スクリプト。
