# 田中省伍のHP — 仕様書

## 概要
田中省伍の個人ホームページ。ポートフォリオ、スキル、セミナー情報、お問い合わせフォーム等を掲載する。

## 技術スタック

| カテゴリ | 技術 | バージョン |
|---|---|---|
| フレームワーク | Astro | 6.x |
| UIライブラリ | React | 19.x |
| CSS | TailwindCSS | 4.x |
| 言語 | TypeScript | 5.x |
| アダプタ | @astrojs/cloudflare | 13.x（Cloudflare Workers） |

## 主要ライブラリ

| ライブラリ | 用途 |
|---|---|
| @astrojs/mdx | Content Collections（Knowledge / AI News） |
| zod | バリデーション |
| resend | メール送信（お問い合わせフォーム） |
| lucide-react | アイコン |
| clsx + tailwind-merge | クラス名ユーティリティ |

## ページ構成

| パス | 内容 |
|---|---|
| `/` | トップページ（Hero, Services, Skills, Portfolio, Seminars, CTA等） |
| `/about` | 自己紹介 |
| `/portfolio` | ポートフォリオ一覧 |
| `/skills` | スキル一覧 |
| `/contact` | お問い合わせフォーム |
| `/privacy` | プライバシーポリシー |
| `/terms-of-service` | 利用規約 |

### Knowledge Base

| パス | 内容 |
|---|---|
| `/knowledge` | トップ。カテゴリ一覧と最近更新された記事 |
| `/knowledge/roadmap` | 目的別の学習パス |
| `/knowledge/tags` | タグ一覧 |
| `/knowledge/tags/[tag]` | タグ別の記事一覧 |
| `/knowledge/[category]` | カテゴリトップ。サブカテゴリ一覧とカテゴリ直下記事 |
| `/knowledge/[category]/[subcategory]` | **サブカテゴリの目次**。tier（章）ごとに記事を並べる |
| `/knowledge/[category]/[subcategory]/[slug]` | 記事詳細 |
| `/knowledge/[category]/[slug]` | 記事詳細（サブカテゴリを持たない記事） |

### AI News

| パス | 内容 |
|---|---|
| `/ai-news` | 速報一覧 |
| `/ai-news/[tool]` | ツール別の速報一覧 |
| `/ai-news/[tool]/[slug]` | 速報詳細 |

## コンテンツ設計（Knowledge）

`src/content.config.ts` がスキーマの正本。`src/data/knowledge.ts`（カテゴリ・サブカテゴリ・
表示メタ）、`src/data/knowledgeTiers.ts`（章構成）、`src/data/roadmap.ts`（学習パス）が
表示側の対応表を持つ。

### 分類の3軸

記事は次の3軸で置き場所が決まる。**同じトピックを複数の軸へ独立に書かない。**
どの軸に置くか迷ったら、想定読者が「何をしたくてこの記事に来るか」で決める。

| 軸 | 置き場所 | 想定される来訪動機 |
|---|---|---|
| 学習コース | `ai-tools/claude-code-curriculum/` | 順番に読んで身につけたい |
| ツール別リファレンス | `ai-tools/<tool>/` | 特定ツールの機能を調べたい |
| 概念別リファレンス | `prompt-engineering/` ほか `*-engineering/` | 手法・設計論を知りたい |

同一トピックを複数の軸で扱う場合は、**本体を1本決めて残りは参照に寄せる**。
たとえば MCP は `ai-tools/claude-code/mcp.mdx` を本体とし、カリキュラム側は
非エンジニア向けの導入に徹して深掘りしない。

### contentType

読者が「読んで学ぶもの」と「必要なときに引くもの」を区別できるようにする。

| 値 | 意味 | 該当 |
|---|---|---|
| `course` | 順番に読む学習コース | `claude-code-curriculum` |
| `reference` | 機能・概念のリファレンス | `ai-tools/<tool>`、`*-engineering` |
| `docs-digest` | 公式ドキュメントの要約 | `web-development/*-docs` |
| `news` | 製品アップデート解説 | `ai-tools/claude`・`chatgpt`・`gemini` の個別記事 |

### difficulty

| 値 | 星 | 前提知識の目安 |
|---|---|---|
| `beginner` | ★☆☆☆☆ | 前提知識ゼロでも読める |
| `intermediate` | ★★★☆☆ | 基本的な操作を一度試したことがある |
| `advanced` | ★★★★★ | 開発の実務経験がある |

前提知識は独立した見出しにせず、難易度表記へ畳んで見せる。表示は記事ページの
見出し下（`ArticleMeta.astro`）。

### sortOrder と tier

`sortOrder` は**サブカテゴリ内での並び順**を表す。記事側に tier フィールドは持たず、
`knowledgeTiers.ts` の `sortOrderStart` の範囲で章の帰属が決まる。

**`sortOrder` の意味はサブカテゴリごとに閉じている。**カリキュラムは章番号×10
（第1章=10〜、第2章=20〜）、`*-docs` はファイル名の数字接頭辞と一致させる。
既存記事の `sortOrder` を変えると所属する章が黙って変わるため、章をまたぐ移動は
`knowledgeTiers.ts` と同じ変更セットで行う。

### 新規記事を追加するとき

1. 3軸のどこに属するかを決める（既存トピックの重複でないか確認する）
2. `category` / `subcategory` をディレクトリ構成と一致させる
3. `contentType` と `difficulty` を必ず設定する
4. `sortOrder` は既存記事の並びと `knowledgeTiers.ts` を見てから決める
5. 学習コースの記事は `estimatedMinutes` と `prerequisites` も入れる
6. `npm run build` を通す（frontmatter の型エラーはここで出る）

## APIエンドポイント

| パス | メソッド | 内容 |
|---|---|---|
| `/api/contact` | POST | お問い合わせフォーム送信（Resend経由） |

## 開発コマンド
```bash
npm run dev       # 開発サーバー起動
npm run build     # ビルド（astro check + astro build）
npm run check     # 型チェック（astro check）
npm run preview   # ビルド済みサイトのプレビュー
npm test          # Vitest
```
