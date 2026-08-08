# AIニュース公開フォーマット

## 公開プラン

ユーザーが「ニュースを落とし込んで」「公開候補に仕分けして」と依頼したら、次の形式を基本にします。

```markdown
## AIニュース候補サマリー

- 対象日: YYYY-MM-DD
- 確認した更新: N件
- AIニュース化: N件
- Knowledge最小反映: N件
- 保留: N件
- 見送り: N件

## 優先してAIニュース化

| 優先度 | service | title | 理由 | 予定ファイル |
| --- | --- | --- | --- | --- |
| A | ChatGPT / OpenAI | ... | ... | `src/content/...` |

## Knowledgeへ最小反映

| service | title | 追記先 | 追記内容 |
| --- | --- | --- | --- |

## 保留

| service | title | 保留理由 | 確認したいこと |
| --- | --- | --- | --- |

## 見送り

| service | title | 理由 |
| --- | --- | --- |

## 実装前の確認

- ...
```

## AIニュース記事案

```markdown
### `src/content/ai-news/<tool>/<slug>.mdx`

- 目的:
- 対象読者:
- 参照元:
- 見出し案:
  - 要約（背景・要点・なぜ重要かを含めた詳細要約。長くてよい）
  - 何が変わったか（事実ベースの具体的変更点。箇条書き可）
  - 業務インパクト（一般企業向け）
  - 副業・個人活用視点
  - 教材化メモは公開記事には含めず `src/content/ai-news-notes/<tool>/<slug>.mdx` へ分離する
```

## Knowledge最小反映画

```markdown
### `<existing-file>.mdx`

- 追記箇所:
- 追記理由:
- 追記内容の要約:
- 既存本文との重複:
- 注意点:
```

## 実装後レポート

実装したら、最終回答では次を簡潔に報告します。

```markdown
AIニュースへ反映しました。

- 追加: `...`
- 更新: `...`
- 参照元: `...`
- 検証: frontmatter / リンク / TODO残りを確認
```

## MDX作成時の基本構成

既存のAIニュース記事のスタイルを優先します。新規記事で迷う場合は次を基本にします。

```markdown
---
title: "..."
tool: "<tool>"
toolLabel: "..."
date: YYYY-MM-DD
sourceUrl: "https://..."
summary: "..."
impact: "..."
tags: ["..."]
status: "candidate"
relatedKnowledge:
  - "/knowledge/ai-tools/<tool>/..."
draft: false
---

## 要約

背景・要点・なぜ重要かを含めて、長めに書いてよい。読者が原文を読まなくても判断できる粒度。

## 何が変わったか

- 事実ベースの具体的変更点を箇条書き
- 機能名、価格、対象プラン、提供形態などをそのまま記載

## 業務インパクト（一般企業向け）

社内マニュアル、業務フロー、ガバナンス、情シス・法務観点など、企業導入時の論点を記載する。

## 副業・個人活用視点

副業マネタイズ、フリーランス案件、個人クリエイターの活用視点での具体的な使いどころを記載する。
```

教材化メモは公開記事に書かず、`src/content/ai-news-notes/<tool>/<slug>.mdx` に `noteFor` 付きで分離する。

## 検証チェック

- frontmatterが `aiNews` collection schema と合っている
- 公式URLまたはresearchメモへの参照がある
- 原文の長文転載がない
- `TODO`、`FIXME`、`要確認` が残っていない
- `relatedKnowledge` の内部リンクが存在する、または空配列になっている
