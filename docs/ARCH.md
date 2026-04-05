# 田中省伍のHP — アーキテクチャ決定記録

## ディレクトリ構成
```
src/
├── components/
│   ├── icons/        # カスタムアイコン（Astroコンポーネント）
│   ├── islands/      # React Islands（クライアントインタラクティブ）
│   ├── sections/     # ページセクション（Astroコンポーネント）
│   └── ui/           # 汎用UIコンポーネント（Astroコンポーネント）
├── data/             # 静的データ定義（TypeScript）
├── layouts/          # レイアウト（BaseLayout, LegalLayout）
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
- `@astrojs/node` アダプタ（standalone mode）でSSR対応
- APIルート（`src/pages/api/`）でサーバーサイド処理（メール送信等）

### レイアウト構成
- `BaseLayout.astro` — 全ページ共通レイアウト
- `LegalLayout.astro` — 法的ページ（プライバシーポリシー、利用規約）用
