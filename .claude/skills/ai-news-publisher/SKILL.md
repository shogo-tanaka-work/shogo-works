---
name: ai-news-publisher
description: Daily AI update reports and official update notes in docs/researchを読み、公開すべきAIニュースを選別し、src/content/ai-news配下への速報記事作成、保留、見送り、必要最小限のKnowledge更新を計画または実装するときに使うSkill。ChatGPT/OpenAI、Gemini、Claude、Claude Code、Codex、GitHub Copilot、n8n、Difyなどの公式アップデートをAIニュース記事へ落とし込む。
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
- 必要最小限の追記のみ: `src/content/knowledge/ai-tools/<tool>/*.mdx`

## 基本方針

- まずAIニュース化候補を仕分けし、実装前に計画を提示します。
- 公式ソースと既存のresearchメモを優先し、必要がなければWeb再調査しません。
- 原文全文や長い翻訳は入れず、要約・再構成して説明します。
- ニュース記事は「要約」「何が変わったか」「業務インパクト（一般企業向け）」「副業・個人活用視点」の4節構成を基本とします。
- 教材化メモは公開記事に含めず、`src/content/ai-news-notes/<tool>/<slug>.mdx` へ `noteFor` 付きで分離します。
- Knowledge記事へ反映する場合は、既存教材の文体、frontmatter、sortOrder、リンク形式に合わせます。
- Knowledgeへ追記する場合は、追記箇所と理由を明示し、速報的な詳細を持ち込まないようにします。
- 自動コミット・自動pushはしません。

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
   - Knowledgeへ最小反映する場合は、既存記事の必要箇所だけを更新します。
   - 関連リンクには公式URLまたはresearchメモ由来の一次情報を残します。
   - 実装後、リンク・frontmatter・重複・TODO残りを確認します。

## 判断の粒度

ニュース速報は原則AIニュースとして扱います。Knowledgeへ直接入れるのは、読者が長く参照する教材の前提が変わる更新だけです。

例:

- モデル更新: AIニュース記事化。既存のモデル一覧や料金表が古くなる場合だけKnowledge更新。
- Workspace / Enterprise管理機能: AIニュース記事化。既存の管理者向け教材がある場合だけ短く追記。
- 小さなパッチリリース: 原則、公式更新メモに留める。
- 料金・プラン変更: AIニュース化しつつ、既存の料金・概要記事へ最小反映。
- API仕様変更: AIニュース化しつつ、開発者向けKnowledgeの該当手順だけ更新。

## 参照ファイル

- `references/publishing-map.md`: researchからAIニュース/Knowledgeへの対応表。
- `references/selection-rubric.md`: AIニュース化とKnowledge最小反映の判断基準。
- `references/output-format.md`: 仕分け計画と実装結果の出力形式。
