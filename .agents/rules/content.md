---
paths:
  - "src/content/**/*"
  - "src/content.config.ts"
---

# Content Collections

Knowledge と AI News は Content Collections（MDX）で管理する。スキーマは `src/content.config.ts` が正本。

- frontmatter の必須項目を欠かさない。スキーマにない項目を独自に足さない。
- カテゴリやツールなど選択肢のある値は zod の enum で縛る。自由文字列にしない。
- enum を増やすときは、`src/content.config.ts`・`src/types/index.ts`・`src/data/` の対応表をすべて同じ変更セットで更新する。片方だけ増やさない。
- ディレクトリ名と frontmatter の分類値を一致させる。URL は frontmatter 側から生成されるため、食い違うとリンク切れになる。
- 日付は日単位で扱い、月別集計など時刻に依存する処理は JST 基準で切る。UTC のまま扱うと月初・月末がずれる。
- 記事本文の見出しは h2 から始める。h1 はページタイトルが持つ。
- コードブロックには必ず言語を指定する。
- 外部リンクは出典として意味のあるものだけを張り、URL をそのままリンクテキストにしない。
- 公開前の記事は `draft: true` にする。ファイルを一覧から外して隠さない。

## 記事を追加したとき

1. `npm run build` でビルドが通ること（frontmatter の型エラーはここで出る）
2. 一覧ページと詳細ページの両方が生成されていること
3. 集計（件数バッジ、アーカイブ）が実データと一致していること
