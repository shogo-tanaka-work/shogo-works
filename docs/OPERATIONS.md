# 運用手順書

## 外部記事リンクの追加

Zenn・Qiita・note 等に公開した記事をサイトに掲載する手順。

### 編集ファイル

`src/data/knowledge.ts` の `externalArticles` 配列にエントリを追加する。

### フィールド一覧

| フィールド | 型 | 説明 | 例 |
|---|---|---|---|
| `id` | `string` | ユニークID | `"zenn-claude-code-intro"` |
| `title` | `string` | 記事タイトル | `"Claude Codeで開発ワークフローを変える"` |
| `description` | `string` | 概要（1〜2文） | `"公式CLIツールの使い方と活用パターン"` |
| `category` | `KnowledgeCategory` | カテゴリ（下表参照） | `"ai-tools"` |
| `tags` | `string[]` | タグ配列 | `["claude", "cli"]` |
| `publishedAt` | `Date` | 公開日 | `new Date("2026-04-07")` |
| `platform` | `ArticlePlatform` | プラットフォーム（下表参照） | `"zenn"` |
| `url` | `string` | 記事URL | `"https://zenn.dev/..."` |

### カテゴリ（`KnowledgeCategory`）

| 値 | 内容 |
|---|---|
| `ai-tools` | AIツール |
| `web-development` | Web開発 |
| `devops` | DevOps / インフラ |
| `career` | キャリア |

### プラットフォーム（`ArticlePlatform`）

| 値 | 対象 |
|---|---|
| `zenn` | Zenn |
| `qiita` | Qiita |
| `note` | note |

### 追加例

```typescript
export const externalArticles: ExternalArticle[] = [
  {
    id: "zenn-claude-code-intro",
    title: "Claude Codeで開発ワークフローを変える",
    description: "Anthropic公式CLIツールの基本的な使い方と活用パターン",
    category: "ai-tools",
    tags: ["claude", "cli", "ai-coding"],
    publishedAt: new Date("2026-04-07"),
    platform: "zenn",
    url: "https://zenn.dev/username/articles/claude-code-intro",
  },
];
```

## 内部MDX記事の追加

サイト内にホストする記事を追加する手順。

### 手順

1. `src/content/knowledge/{category}/` に `.mdx` ファイルを作成
2. frontmatter を記述して本文を書く

### frontmatter

```yaml
---
title: "記事タイトル"
description: "概要"
category: "ai-tools"        # KnowledgeCategory
tags: ["tag1", "tag2"]
publishedAt: 2026-04-08
draft: false                 # true にすると非公開
author: "田中省伍"
---
```

`updatedAt`（更新日）と `ogImage`（OGP画像パス）はオプション。

## 追加後の確認

```bash
npm run dev      # 開発サーバーで表示確認
npm run build    # ビルドが通ることを確認
```

`/knowledge` ページおよび該当カテゴリページに記事が表示されていれば完了。
