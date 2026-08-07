# 田中省伍のHP 開発ルール

このファイルを本プロジェクトのコーディングルールの入口とする。実装前に変更対象へ該当する `rules/` を読む。

ルート直下の `CLAUDE.md` と `AGENTS.md`、および `.claude/` はこのディレクトリへのシンボリックリンクである。エージェントの種類を問わず、正本はここ1か所とする。

## 技術構成

- フレームワーク: Astro（Islands アーキテクチャ、デフォルトはゼロJS）
- UI: Astro コンポーネント中心。クライアント動作が必要な箇所だけ React Islands
- CSS: TailwindCSS 4（`@tailwindcss/vite`）
- 言語: TypeScript（strict）
- コンテンツ: Content Collections（MDX） — Knowledge / AI News
- 配信: `@astrojs/node` standalone。フォーム送信は API ルート（Resend）
- テスト: Vitest

## 構成の把握

変更前に対象側の構成メモを読む。

- `docs/SPEC.md` — 仕様と技術スタックの正本
- `docs/ARCH.md` — ディレクトリ構成とアーキテクチャ決定
- `docs/DESIGN.md` — ビジュアルデザインの正本。背景、枠線、角丸、影、余白の判断基準
- `docs/OPERATIONS.md` — 運用手順

`docs/SPEC.md` は機能要件、`docs/DESIGN.md` はビジュアル表現を定義する。視覚表現が競合する場合は `docs/DESIGN.md` を優先する。

## 必須ルール

- 実装前に設計を提示し、承認を得てから着手する。
- テストを先に書く。テストなしのコミットをしない。
- `any` を使わず、外部入力は `unknown` から検証する。
- データ定義、表示コンポーネント、ルーティングを分離する。
- エラーを握りつぶさない。空の catch を書かない。
- `.env` の値をコードへ直書きしない。
- 既存のテストを無断で削除・コメントアウトしない。
- `docs/SPEC.md` にない機能を先取りして実装しない。
- README や運用文書は、依頼の対象でない限り変更しない。
- `main` へ直接プッシュしない。

## ルール読み込み順

1. `rules/code-design.md`
2. `rules/typescript.md`
3. UI変更では `docs/DESIGN.md` と `rules/ui-design.md`
4. 変更対象に応じて `astro.md`、`react.md`、`content.md`、`data.md`
5. ブランチ・PR運用は `rules/branch-management.md`
6. 実装後に `rules/testing.md`

## AIニュース運用

AIニュースの調査・記事化は `skills/` の手順に従う。記事本体・教材化メモ・日次リサーチログの3点セットが完了条件。

- `skills/daily-ai-update-monitor/` — 公式ソース巡回と `docs/research/` への記録
- `skills/ai-news-publisher/` — `src/content/ai-news/` への記事化
- `skills/daily-ai-news-pipeline/` — 調査からPR作成までのオーケストレーション

## 基本コマンド

```bash
npm run dev       # 開発サーバー
npm run check     # 型チェック（astro check）
npm test          # Vitest
npm run build     # astro check + astro build
npm run preview   # ビルド済みサイトのプレビュー
```
