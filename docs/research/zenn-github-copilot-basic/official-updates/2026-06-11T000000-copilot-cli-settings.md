---
date: 2026-06-11
title: "Copilot CLI に /settings 統一設定コマンド — テーマ・実験的機能・自動更新を1か所で管理"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-06-11-copilot-cli-configure-everything-from-one-place-with-settings
fetched_at: 2026-06-12T13:50:31+09:00
published_at: 2026-06-11
date_precision: date-only
category: enhancement
---

# 2026-06-11 Copilot CLI `/settings` 統一設定コマンド

## 公式内容の日本語要約

GitHub Copilot CLI に **`/settings`** コマンドが追加された。これまで `/theme`・`/streamer-mode`・`/experimental` など複数のコマンドに分散していた設定が1か所に統合された。

**3つの使用方法:**
1. **フルスクリーン対話型**: `/settings` のみで実行するとセクション分けされたダイアログが開き、全設定を一覧・編集できる。検索（`/`キー）・リセット（Ctrl+R）・エディタ起動（Ctrl+E）に対応。
2. **インラインコマンド**: `/settings autoUpdate true` のように直接値を設定可能。
3. **スクリプト実行**: `copilot -p` 呼び出しでの自動化設定に対応。

設定タイプごとにカスタマイズされたエディタ（ブール値トグル・列挙値ピッカー・テキスト入力等）が用意されている。

**更新方法**: `copilot update` → `/settings` で利用開始。

## できるようになったこと

- 分散していた CLI 設定を `/settings` 1か所で管理できる
- フルスクリーン・インライン・スクリプトの3モードで設定を変更できる
- 検索・リセット・エディタ起動のキーバインドで設定変更が効率化された

## 影響範囲

- 対象ユーザー: GitHub Copilot CLI ユーザー（`copilot update` で更新後に利用可能）
- 対象プラン: 公開記事に明記なし
- API / UI / 管理者機能: CLI UX 改善。既存の `/theme` 等のコマンドへの影響は不明（統合後も残るか要確認）。

## 教材化メモ

- CLI ツールの設定 UX 統合として、テーマ・実験的機能・自動更新などを設定する際の参照先が明確になった。
- スクリプト実行モードは CI/CD や dotfiles での Copilot 設定自動化に使えるパターン。

## 原文確認

- 公式見出し: "Copilot CLI: Configure everything from one place with /settings"
- 公式URL: https://github.blog/changelog/2026-06-11-copilot-cli-configure-everything-from-one-place-with-settings
- 原文全文は公式ページで確認してください。
