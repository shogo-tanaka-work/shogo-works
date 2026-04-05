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
| アダプタ | @astrojs/node | 10.x（standalone mode） |

## 主要ライブラリ

| ライブラリ | 用途 |
|---|---|
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
```
