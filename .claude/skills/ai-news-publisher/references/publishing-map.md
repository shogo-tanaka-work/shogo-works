# AIニュース公開マップ

## 基本対応

| research source | AIニュース出力先 | Knowledge最小反映先 | 備考 |
| --- | --- | --- |
| `docs/research/zenn-chatgpt-openai-basic/` | `src/content/ai-news/chatgpt-openai/` | `src/content/knowledge/ai-tools/chatgpt/` | ChatGPT本体、OpenAIモデル、ChatGPT機能、広告、一般ユーザー向け機能 |
| `docs/research/zenn-gemini-release-basic/` | `src/content/ai-news/gemini/` | `src/content/knowledge/ai-tools/gemini/` | Gemini app、Gemini for Workspace、Google Workspace AI機能 |
| `docs/research/zenn-claude-release-basic/` | `src/content/ai-news/claude/` | `src/content/knowledge/ai-tools/claude/` | claude.ai、Claude app、Claude Cowork、Claude for Office、Claude Platformの一般解説 |
| `docs/research/zenn-claude-code-release-basic/` | `src/content/ai-news/claude-code/` | `src/content/knowledge/ai-tools/claude-code/` | Claude Code CLI、Claude Code Enterprise、Claude Code release |
| `docs/research/zenn-openai-codex-basic/` | 未整備ならユーザー確認 | `src/content/knowledge/ai-tools/codex/` | Codex CLI、Codex Cloud、Codex SDK、Codex運用 |
| `docs/research/zenn-github-copilot-basic/` | `src/content/ai-news/github-copilot/` | 未整備ならユーザー確認 | GitHub Copilot updates |
| `docs/research/zenn-n8n-basic/` | `src/content/ai-news/n8n/` | 未整備ならユーザー確認 | n8n release |
| `docs/research/zenn-dify-basic/` | 未整備ならユーザー確認 | 未整備ならユーザー確認 | Dify updates |

## AIニュース記事にしやすい更新

- 新モデル公開、デフォルトモデル変更
- UIやワークフローが大きく変わる主要機能
- Enterprise / Team向けの管理・監査・権限機能
- 料金、プラン、利用制限、モデル退役
- API、SDK、CLIの使い方が変わる更新
- 既存教材に対応する見出しがない更新

## Knowledgeへ最小反映する更新

- 既存記事の前提が古くなるもの
- 既存モデル一覧、料金、トークン、利用制限、退役予定に影響するもの
- 既存の手順やスクリーンショット説明を変える必要があるもの
- 「使えるツール一覧」「モデル選定」「管理者設定」など恒久ページに短く入れるべきもの
- 速報の詳細ではなく、教材として残すべき結論だけを追記するもの

## 保留にする更新

- 重要そうだが、既存教材カテゴリが未整備
- 公式情報だけでは対象ユーザーや提供範囲が曖昧
- 一時的なbeta / previewで、教材化の粒度を決めにくい
- ユーザーの教材戦略に関わる新カテゴリが必要

## 見送りにする更新

- 小規模バグ修正のみ
- 非公式解説、SNS発表、噂
- すでに教材へ反映済み
- 読者の使い方や理解にほぼ影響しない
- 公式日付が古く、日次ニュースとして扱う必要がない

## 代表的な落とし込み先

ChatGPT / OpenAI:

- AIニュース: `src/content/ai-news/chatgpt-openai/<slug>.mdx`
- Knowledge最小反映: `chatgpt/overview.mdx`、モデル一覧、料金・トークン解説がある場合は該当記事
- Codex関連: `codex/` に分ける
- 企業向け・広告: AIニュース候補。教材カテゴリに入れる前に方針確認

Gemini:

- AIニュース: `src/content/ai-news/gemini/<slug>.mdx`
- Knowledge最小反映: `gemini/workspace-features.mdx`、管理者向け教材が既にある場合は該当記事
- モデル更新: 既存モデル一覧や料金記事が古くなる場合だけ反映
- NotebookLM / CLI: 既存記事に恒久差分だけ反映

Claude:

- AIニュース: `src/content/ai-news/claude/<slug>.mdx`
- Knowledge最小反映: `claude/overview.mdx`、`claude/agent-skills.mdx` など既存記事へ短く
- Office連携: AIニュース化し、Knowledgeでは概念や使い分けだけ残す
- 業界別agent: 原則AIニュース。Knowledgeには設計思想や利用パターンだけ最小反映

Claude Code:

- AIニュース: `src/content/ai-news/claude-code/<slug>.mdx`
- CLI機能: 該当既存記事へ必要最小限だけ追記
- 大型機能: AIニュース化し、Knowledgeへ恒久差分を反映
- 小規模release: 原則researchメモに留める

Codex:

- CLI / Cloud / SDK / skill / automation のどれに関係するかで既存記事へ振り分ける
- 運用ノウハウ化できる更新は実務ガイド型記事にする
