---
name: ai-news-publisher
description: Daily AI update reports and official update notes in docs/researchを読み、公開すべきAIニュースを選別し、src/content/ai-news配下への速報記事作成、保留、見送り、必要最小限のKnowledge更新を計画または実装するときに使うSkill。ChatGPT/OpenAI、Gemini、Claude、Claude Code、Codex、Cursor、GitHub Copilot、Cloudflare、n8n、Difyなどの公式アップデートをAIニュース記事へ落とし込む。
---

# AI News Publisher

## 目的

`docs/research` に蓄積されたAI公式アップデートを、まずAIニュース記事として公開できる形へ落とし込むためのSkillです。

このSkillでは、最新アップデートを教科書型のKnowledgeへ直接入れすぎないことを重視します。Knowledge更新は、既存教材の正確性や恒久的な説明に影響する最小差分だけにします。

主な入力は次です。

- `docs/research/daily-ai-updates/YYYY-MM-DD.md`
- `docs/research/<tool-folder>/official-updates/*.md`

主な出力先は次です。

- `src/content/ai-news/<tool>/*.mdx`
- `src/content/ai-news-notes/<tool>/*.mdx`
- 必要最小限の追記のみ: `src/content/knowledge/ai-tools/<tool>/*.mdx`

## 基本方針

- まずAIニュース化候補を仕分けし、実装前に計画を提示します。
- **1回の実行でAIニュース化するのは最大4本**です。候補が5件以上あるときは `references/selection-rubric.md` のスコア順に上位4件を選び、残りは `見送り（本数上限）` として日次サマリーに理由を残します。
- 公式ソースと既存のresearchメモを優先し、必要がなければWeb再調査しません。
- 原文全文や長い翻訳は入れず、要約・再構成して説明します。
- ニュース記事は「要約」「何が変わったか」「業務インパクト（一般企業向け）」「副業・個人活用視点」の4節構成を基本とします。
- 教材化メモは公開記事に含めず、`src/content/ai-news-notes/<tool>/<slug>.mdx` へ `noteFor` 付きで分離します。
- AIニュース記事を作成したら、教材化余地が明らかにない場合を除き、対応する教材化メモも同時に作成します。
- Webリサーチから直接ニュース記事を作った場合でも、対象日の `docs/research/daily-ai-updates/YYYY-MM-DD.md` に調査サマリーと公開記事化結果を残します。
- Knowledge記事へ反映する場合は、既存教材の文体、frontmatter、sortOrder、リンク形式に合わせます。
- Knowledgeへ追記する場合は、追記箇所と理由を明示し、速報的な詳細を持ち込まないようにします。
- 計画を提示する前に、コミット・pushはしません。**計画が承認されたら、実装からPR作成までは追加の確認を取らずに進めます**（下の「計画承認後の進め方」参照）。

## 手順

1. 入力を特定します。
   - 日付指定がある場合は `docs/research/daily-ai-updates/YYYY-MM-DD.md` を読みます。
   - 日付指定がない場合は、ユーザーが言及した日次レポートまたは直近の該当ファイルを確認します。
   - 日次レポートの `更新あり` から詳細ファイルを読みます。

2. 必要な参照ファイルを読みます。
   - 配置先判断が必要な場合: `references/publishing-map.md`
   - AIニュース化するかの選別が必要な場合: `references/selection-rubric.md`
   - 計画や実装結果を整形する場合: `references/output-format.md`

3. ニュースを仕分けします。
   - `AIニュース化する`: `src/content/ai-news` に新規記事を作る。
   - `Knowledgeへ最小反映`: 既存教材の前提が古くなる差分だけ短く追記する。
   - `保留`: 重要そうだが、公開先、読者像、追加情報が必要。
   - `見送り`: 小規模、対象外、読者への影響が薄い、または公式情報が足りない。
   - **派生改善も対象に含める**: 詳細メモが `category: enhancement` のものも、業務インパクトがあれば AIニュース化候補に上げる。「初出ではないから対象外」という判断は禁止。Stable 化済み機能の周辺強化、プラグイン経由の可視化、対応プラットフォーム/言語/地域の拡大などは、組織の導入決定への影響が大きいため積極的に拾う。
   - **ロールアウトニュース**: 詳細メモに `rollout_date` がある場合（公開日が窓外でロールアウトが窓内）、ロールアウトを起点に記事化を検討する。記事の `date` には `rollout_date` を使い、本文で発表日との関係を明示する。

4. 公開プランを提示します。
   - 対象ニュース
   - AIニュース化理由
   - AIニュース / Knowledge最小反映 / 保留 / 見送り
   - 予定ファイル
   - 見出し案
   - 参照するresearchメモ
   - 注意点

5. ユーザー承認後に実装します。
   - `src/content/ai-news` の既存記事を確認します。
   - frontmatterは `aiNews` collection schema に合わせます。
   - `relatedKnowledge` には既存Knowledge記事への内部リンクだけを入れます。
   - `src/content/ai-news-notes/<tool>/<slug>.mdx` に教材化メモを作成し、`noteFor` をAIニュース記事の `<tool>/<slug>` と一致させます。
   - Knowledgeへ最小反映する場合は、既存記事の必要箇所だけを更新します。
   - 関連リンクには公式URLまたはresearchメモ由来の一次情報を残します。
   - Webリサーチ起点の場合は `docs/research/daily-ai-updates/YYYY-MM-DD.md` も作成または更新し、確認した更新、見送り、公開記事化、教材化メモを記録します。
   - 実装後、リンク・frontmatter・重複・TODO残りを確認します。

6. 検証、コミット、push、PR作成まで進めます（「計画承認後の進め方」参照）。

## 計画承認後の進め方

**手順4の計画が承認されたら、そこから PR 作成までは追加の確認を取らずに進めます。**「実装してよいか」「コミットしてよいか」「PRを作ってよいか」を都度聞き直しません。承認された計画が、そのまま PR までの承認です。

`daily-ai-news-pipeline` から呼ばれた場合は、そちらの Phase D / E に従います。本Skillを単体で起動した場合は、次の順で進めます。

1. **ブランチ**: `main` を最新化し、`main` から作業ブランチを切ります（`feat/ai-news-YYYY-MM-DD`）。現在のブランチに本タスクと無関係な未コミット差分がある場合は、stash や破棄をせず状況を報告してから判断を仰ぎます。
2. **検証**: `npm run check`（errors 0件）と `npm test` を実行します。errors が出たらコミットせず修正します。
3. **コミット**: `git add` はパス指定で行い、`git add .` / `git add -A` を使いません。**速報記事とその教材化メモを1組として、記事ごとにコミットを分けます。** Conventional Commits 形式、本文は日本語で「なぜその判断をしたか」まで書きます。
4. **`docs/research` の扱い**: `.gitignore` で除外されていますが、**既存運用は `git add -f` で強制追加して履歴に残しています**。日次サマリーと詳細メモも `-f` で追加し、`docs/research/` だけの独立したコミットにします。ここを飛ばすと、リサーチログが手元にしか残らず、次回実行時に「記事化済みかどうか」を履歴から判断できなくなります。
5. **push と PR**: 作業ブランチを push し、`gh pr create` で PR を作ります。`main` へ直接 push しません。

PR 本文には、記事化した速報の一覧とスコア、見送りとその理由、検証結果を書きます。**未記事化のまま残した持ち越し候補があれば「引き継ぎ事項」として明記します。**発効日・退役日が決まっているものは日付を添えます。

途中で計画から外れる判断が必要になった場合（記事の本数を変える、tool enum 外のツールが出てくる、公式情報が不足していた等）は、その時点で止めて報告します。承認済みなのは提示した計画の範囲です。

## 実装完了前チェック

AIニュース記事を作ったら、完了前に次を確認します。

- `src/content/ai-news/<tool>/<slug>.mdx` がある。
- `src/content/ai-news-notes/<tool>/<slug>.mdx` がある、または作らない理由を最終報告に書く。
- Webリサーチまたは日次調査を行った場合、`docs/research/daily-ai-updates/YYYY-MM-DD.md` に記録がある。
- 日次サマリーから公開記事と教材化メモへのリンク、またはパスが追える。
- `npm run check` など、このrepoで必要な検証を実行する。
- `docs/research` の新規ファイルを `git add -f` でコミットに含めた。記事だけをコミットして終わらない。
- 記事化しないと決めた持ち越し候補が、日次サマリーと PR 本文の両方に残っている。

## 判断の粒度

ニュース速報は原則AIニュースとして扱います。Knowledgeへ直接入れるのは、読者が長く参照する教材の前提が変わる更新だけです。

例:

- モデル更新: AIニュース記事化。既存のモデル一覧や料金表が古くなる場合だけKnowledge更新。
- Workspace / Enterprise管理機能: AIニュース記事化。既存の管理者向け教材がある場合だけ短く追記。
- 小さなパッチリリース: 原則、公式更新メモに留める。
- 料金・プラン変更: AIニュース化しつつ、既存の料金・概要記事へ最小反映。
- API仕様変更: AIニュース化しつつ、開発者向けKnowledgeの該当手順だけ更新。
- **派生改善（category: enhancement）**: 業務インパクトがあるならAIニュース記事化。本文では「初出機能との関係」「何が一段進んだか」を明示する。
- **ロールアウト（category: rollout）**: 言語・地域・GA展開はAIニュース記事化。`date` フィールドにはロールアウト日を使用。

## ユーザー認識ギャップへの対応

リサーチ依頼や PR レビューで「○○ができるようになったらしい」とユーザーが言及したが、公式上は事実が違う / 逆方向 / サードパーティ製のみ、というケースが出ることがあります。

このような場合は **AIニュース記事として記事化しない**。代わりに以下で扱います:

- 該当事例を `daily-ai-update-monitor` 側の `references/perception-gaps.md` に蓄積（記録は monitor スキル側の責任）
- 当該日の `docs/research/daily-ai-updates/YYYY-MM-DD.md` 末尾「補足メモ」に転記
- 必要に応じて、関連する既存 Knowledge 記事に「公式状況の正確な説明」を最小限追記する判断は可能（例: Codex 教材で「Claude Code → Codex 移行は公式は逆方向のみ」を1行追記）

ai-news 記事化すると「逆方向の事実」を読者が「公式新機能」として誤認する恐れがあるため、ニュース化判断はしない。

## ai-news の tool カテゴリ

`src/content.config.ts` の `aiNews.tool` enum に従う。2026-08-04 時点で対応:

- `chatgpt-openai`: ChatGPT、GPT モデル系（GPT-5.5、GPT-Realtime 等）、OpenAI Blog 全般
- `claude`: Claude（Anthropic 製品）
- `claude-code`: Claude Code（Anthropic 製の CLI / IDE 統合）
- `cloudflare`: Cloudflare の AI・エージェント・開発者プラットフォーム（Workers AI / AI Gateway / AI Search / Agents SDK / Vectorize / Workers / Durable Objects / Containers）
- `codex`: OpenAI Codex（CLI / アプリ / Hooks / プラグイン）
- `cursor`: Cursor（IDE / Composer / Agents Window / Automations / プラグイン）
- `dify`: Dify（Agent 機能 / ワークフロー / プラットフォーム）
- `gemini`: Gemini、Google Workspace AI（Workspace Updates 経由を含む）
- `github-copilot`: GitHub Copilot 全般（Chat / Edit / Agent / CLI / Code Review）
- `manus`: Manus（AIエージェント / Webアプリ生成 / プロジェクト管理）
- `n8n`: n8n
- `runway`: Runway
- `xai-grok`: xAI / Grok（Grok、xAI API、Grok Build）

新ツール追加は次の3ファイルをまとめて更新するのが前提。1つでも欠けるとビルドが通らない、または一覧ページにツールが出ない。

- `src/content.config.ts`（`aiNews.tool` の enum）
- `src/types/index.ts`（`AiNewsTool` union 型）
- `src/data/aiNews.ts`（`aiNewsTools` の slug / label / description）

enum にないツールの記事化は禁止。判断に迷ったら、この節の記載ではなく `src/content.config.ts` の実ファイルを正とする。

**Cloudflare の記事化スコープ**: Cloudflare は全製品横断で changelog を出すため、AI・エージェント・開発者プラットフォームに関わるものだけを記事化候補にする。WAF / DNS / Magic Transit / Registrar / Stream などネットワーク・セキュリティ製品単体の更新は対象外（MCP や AI が絡む場合のみ例外的に対象）。判定の詳細は `daily-ai-update-monitor/references/source-catalog.md` の Cloudflare 節を参照。

## 参照ファイル

- `references/publishing-map.md`: researchからAIニュース/Knowledgeへの対応表。
- `references/selection-rubric.md`: AIニュース化とKnowledge最小反映の判断基準。
- `references/output-format.md`: 仕分け計画と実装結果の出力形式。
- `../daily-ai-update-monitor/references/perception-gaps.md`: ユーザー認識ギャップ蓄積（参照のみ）。
