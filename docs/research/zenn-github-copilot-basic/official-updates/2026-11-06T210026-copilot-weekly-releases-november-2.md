---
date: 2026-11-06
title: "Copilot weekly releases（11/2 版） — アプリ・CLI・VS Code 1.145 の更新"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-11-06-github-copilot-weekly-releases-november-2
fetched_at: 2026-11-09T09:40:00+09:00
published_at: 2026-11-06T21:00:26Z
date_precision: timestamp
category: enhancement
---

# 2026-11-06 Copilot weekly releases（11/2 版）

## 公式内容の日本語要約

複数プロダクトをまとめた週次ロールアップ。表題の「November 2」はリリース版の呼称で、期限ではない。

**Copilot アプリ**: Agent Merge がチェック待ちの間も有効なままになり、PR からレビュアーの状態確認と追加レビュー依頼ができる。コンテキスト上限エラーで compaction を提案するようになり、CSV / TSV はテーブルとして開く。セッション管理が整理され、**assisted tool approval がオプトインの設定として提供**された。

**Copilot CLI**: `/settings` がプラグイン・MCP サーバー・その他設定の統合ダッシュボードになり、検索が付いた。

**JetBrains**: JetBrains Air でローカル / クラウドのエージェントセッションを追跡・実行できる（別エントリで詳述）。

**Xcode**: Xcode 内蔵のコーディングアシスタントで public preview（別エントリで詳述）。

**VS Code 1.145**: 実験的な chat view モード、Agents ウィンドウでのリモートアプリプレビューと canvases（preview）、**cron 式によるローカル automations**、Add Context からのファイル添付、ターミナル出力の描画高速化。

## できるようになったこと

- CLI の設定を1画面で検索しながら触れる
- VS Code で cron 式のローカル automation を組める
- assisted tool approval をオプトインで有効化できる

## 影響範囲

- 対象ユーザー: Copilot アプリ / CLI / VS Code 利用者
- 対象プラン: 公式記載はプロダクト単位。プラン別の明記なし
- API / UI / 管理者機能: **`assisted tool approval` はツール承認の判定を LLM に委ねる方向の設定**で、オプトインである。既定で入らないため当面の影響はないが、有効化の可否は組織で決める対象になる

## 教材化メモ

- **`assisted tool approval` がオプトインで入ったことは、流れとして押さえておく価値がある。** 2026-10-26 に GA になった assisted permissions（LLM が承認要求を判定）と同じ系列で、**「承認の判断自体を AI に任せる」層が各ツールに広がっている。** Claude Code の auto mode と同じ問題圏で、**どこまでを人間の承認に残すかを組織として決めていないと、設定の既定値に委ねることになる。**
- **cron 式のローカル automation は、エディタがスケジューラになるという変化である。** 動く場所が開発者の端末なので、**組織から見えないバッチが増えうる。** 「どこで何が定期実行されているか」の棚卸し対象に、IDE が入り始めている。
- 週次ロールアップ形式の公式告知は、**個別エントリと重複する**（JetBrains Air / Xcode は別エントリにもある）。巡回する側は重複排除の判断が要る、という運用上の実例。

## 原文確認

- 公式見出し: "GitHub Copilot weekly releases — November 2"
- 公式URL: https://github.blog/changelog/2026-11-06-github-copilot-weekly-releases-november-2
- 原文全文は公式ページで確認してください。
