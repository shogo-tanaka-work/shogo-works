---
date: 2026-10-01
title: "Copilot CLI / app / SDK に dynamic workflows（public preview、全プラン）"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-10-01-dynamic-workflows-in-copilot-cli-and-the-copilot-app
fetched_at: 2026-10-05T09:40:00+09:00
published_at: 2026-10-01T00:00:00Z
date_precision: date-only
category: release
---

# 2026-10-01 Copilot の dynamic workflows

## 公式内容の日本語要約

**dynamic workflows** が **public preview** で公開された（2026-10-01）。「タスクの進め方を定義するプログラム」で、**自動実行のステップと1つ以上のエージェントの作業を組み合わせる**。逐次・並列・その混在で動く。**ワークフローのロジックはコードで書き、分析的な判断はエージェントが担う**という分担である。

提供先は **Copilot CLI、GitHub Copilot app、GitHub Copilot SDK**。**全プランで利用でき、プレミアム枠の制限は無い。**

有効化の条件がクライアントで違う。**app は既定で利用可能**、**CLI は experimental features の有効化が必要**（`--experimental` オプションか対話セッション中の `/experimental on`）。

できることは、コマンド実行、ツール利用、他サービス呼び出し、独立タスクの並列実行、段階間での構造化結果の受け渡し、サブエージェントによる検証、利用者への入力要求、**チェックポイントでの停止とレビュー後の再開**。

利用者が「どんな dynamic workflows が使えるか」と尋ねて既存のものを探すこともできる。

ガバナンスについては、ワークフローが Copilot 拡張の内部で動くという記述のみで、固有の管理設定は changelog に書かれていない。

## できるようになったこと

- コード定義のワークフローへエージェントを組み込む（全プラン）
- 並列実行、構造化結果の受け渡し、チェックポイント停止
- サブエージェントによる検証工程の挿入

## 影響範囲

- 対象ユーザー: Copilot CLI / app / SDK の利用者
- 対象プラン: **全プラン**（プレミアム枠の制限なし）
- API / UI / 管理者機能: CLI は experimental features が前提。固有の管理設定の記載なし

## 教材化メモ

- **「エージェントに全部任せる」から「決まっている部分はコードで書く」への揺り戻し**として読める。チェックポイント停止とサブエージェント検証が標準機能に入っている点が重要で、**非決定的な部分を工程の中に閉じ込める**という設計が製品側で定型化された。ハーネス設計の教材の中心に置ける。
- **固有の管理設定が示されていない**のに全プランで使える、という組み合わせは統制上の空白になりうる。ワークフローはコマンド実行と外部サービス呼び出しができるため、**既存の Copilot 管理設定のどれで止まるのかを自社で確認する必要がある**。changelog の記載だけでは判断できない。
- app が既定有効、CLI は experimental という**クライアント間の既定値の不一致**は、「同じ機能なのに入口で挙動が違う」型の罠である。社内手順書をクライアント別に書かないと噛み合わない。

## 原文確認

- 公式見出し: Dynamic workflows in Copilot CLI and the Copilot app
- 公式URL: https://github.blog/changelog/2026-10-01-dynamic-workflows-in-copilot-cli-and-the-copilot-app
- 原文全文は公式ページで確認してください。
