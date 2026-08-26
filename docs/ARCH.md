# 田中省伍のHP — アーキテクチャ決定記録

## ディレクトリ構成
```
src/
├── components/
│   ├── icons/        # カスタムアイコン（Astroコンポーネント）
│   ├── islands/      # React Islands（クライアントインタラクティブ）
│   ├── knowledge/    # Knowledge Base 専用の表示コンポーネント
│   ├── sections/     # ページセクション（Astroコンポーネント）
│   └── ui/           # 汎用UIコンポーネント（Astroコンポーネント）
├── content/          # Content Collections（MDX）
│   ├── ai-news/      # AIニュース速報
│   ├── ai-news-notes/# 速報の教材化メモ
│   └── knowledge/    # Knowledge Base の記事
├── content.config.ts # Collections のスキーマ定義（正本）
├── data/             # 静的データ定義（TypeScript）
├── layouts/          # レイアウト（BaseLayout, KnowledgeLayout, LegalLayout）
├── pages/            # ルーティング（Astroページ + APIルート）
│   └── api/          # APIエンドポイント
├── styles/           # グローバルCSS
├── types/            # 型定義
└── utils/            # ユーティリティ関数
```

## アーキテクチャ方針

### Astro Islands パターン
- デフォルトはAstroコンポーネント（ゼロJS）
- クライアント側インタラクションが必要な場合のみReact Islandsを使用
- React Islands は `src/components/islands/` に配置
- 現在のIslands: `ContactForm.tsx`, `MobileMenu.tsx`, `ScrollNavbar.tsx`

### データ管理
- 静的データは `src/data/` にTypeScriptファイルとして定義
- サイト情報、ナビゲーション、ポートフォリオ、サービス等を分離管理
- 型定義は `src/types/index.ts` に集約

### スタイリング
- TailwindCSS 4 を Vite プラグインとして使用（`@tailwindcss/vite`）
- ユーティリティ関数 `cn()` で条件付きクラス名を結合（clsx + tailwind-merge）
- グローバルスタイルは `src/styles/global.css`

### サーバーサイド
- `@astrojs/cloudflare` アダプタで Cloudflare Workers 上に SSR 配信する
  （設定は `wrangler.jsonc`）
- テスト実行時（`VITEST`）はアダプタを外し、静的ビルドとして検証する
- APIルート（`src/pages/api/`）でサーバーサイド処理（メール送信等）

### レイアウト構成
- `BaseLayout.astro` — 全ページ共通レイアウト
- `KnowledgeLayout.astro` — Knowledge 記事用（サイドバー / 本文 / 目次の3カラム）
- `LegalLayout.astro` — 法的ページ（プライバシーポリシー、利用規約）用

### Content Collections
- スキーマの正本は `src/content.config.ts`。表示側の対応表は `src/data/` に置く
- 分類体系・`contentType`・`difficulty`・`sortOrder` の設計判断は `docs/SPEC.md` を参照
- **記事側に tier（章）フィールドは持たせない。**`knowledgeTiers.ts` の
  `sortOrderStart` の範囲で帰属が決まる。新規記事は `sortOrder` を選ぶだけで
  正しい章へ入る一方、既存記事の `sortOrder` 変更は章の移動になる
- 記事URLの slug は**ファイル名のみ**から生成する（`entry.id.split("/").pop()`）。
  ディレクトリの深さは無視されるため、**サブディレクトリを掘って同名ファイルを
  置くとパスが衝突してビルドが落ちる**。分けたい場合はファイル名自体を変える
- `prerequisites` の参照が切れても、その分だけ落として描画を続ける。
  記事のリネームでページ全体が壊れるのを避けるため

### Knowledge の導線
- サブカテゴリの `index` は**目次ページ**。tier ごとに記事を並べ、
  「最初から読む」で先頭記事へ入れる
- 記事ページの前後ナビとサイドバーは `sortOrder` 順。
  いずれも同一カテゴリ・同一サブカテゴリ内で閉じる
