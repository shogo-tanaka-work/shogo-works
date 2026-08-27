---
date: 2026-08-26
title: "Claude in Chrome が一般提供。全有料プランで利用でき、承認なしの自律操作に対応"
service: "Claude"
source: https://claude.com/blog/claude-in-chrome-generally-available
fetched_at: 2026-08-27T09:05:00+09:00
published_at: 2026-08-26T00:00:00Z
date_precision: date-only
category: release
---

# 2026-08-26 Claude in Chrome 一般提供

## 公式内容の日本語要約

2025年にパイロットとして発表された Chrome 拡張「Claude in Chrome」が一般提供になった。**すべての有料 Claude プラン**で利用でき、Chrome ウェブストアからインストールする。

最大の変更は、**Claude がブラウザ操作を自律的に実行できるようになった**こと。従来は1操作ごとに人の承認が必要だったが、Claude Code の auto mode と同じ仕組みの安全性分類器が各操作を事前に検証し、安全かつ依頼内容に合致すると判定した操作は自動承認される。設定でオフにして従来の都度承認に戻せる。

一般提供に踏み切れた根拠として、プロンプトインジェクション対策の評価結果を公開している。追加の保護なしの素の状態で、モデルに到達した攻撃の成功率は **Opus 4.5 が 17.6%、Opus 5 が 3.8%**。保護を全て有効にすると **Sonnet 5 / Opus 5 / Mythos 5 では成功 0 件**、**Fable 5 で 0.3%** に下がった。防御は3層で、(1) 攻撃ライブラリによるモデル訓練、(2) ツール実行結果を走査して注入を検知するプローブ（Opus 4.5 で初導入、対象攻撃種別を拡大）、(3) 実行前の操作検証分類器。

用途は、コネクタが無い社内ダッシュボード・レガシーシステム・ベンダーポータルなど、既存ログインを使ってページを読み・入力し・クリックする操作。**Enterprise は管理者が Organization Settings で有効化し、許可ドメインを限定できる**。ファイル操作にはデスクトップアプリが必要で、Chrome 以外の Chromium 系ブラウザとモバイルは非対応。

## できるようになったこと

- 全有料プランで Claude in Chrome を利用（パイロット終了）
- 安全と判定された操作を承認なしで自律実行（設定でオフ可）
- Enterprise 管理者による組織単位の有効化と許可ドメイン制限

## 影響範囲

- 対象ユーザー: すべての有料 Claude プラン利用者、Enterprise 管理者
- 対象プラン: 有料プラン全般（無料プランは対象外）
- API / UI / 管理者機能: Chrome 拡張（UI）+ Organization Settings（管理者機能）

教材化メモ: src/content/ai-news-notes/claude/claude-in-chrome-generally-available.mdx

## 原文確認

- 公式見出し: Claude in Chrome is generally available
- 公式URL: https://claude.com/blog/claude-in-chrome-generally-available
- 原文全文は公式ページで確認してください。
