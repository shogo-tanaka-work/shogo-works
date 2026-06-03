---
date: 2026-06-02
title: "Workspace Studio でリストの各項目をループ処理できる「Repeat for each」ステップ"
service: "Gemini / Google Workspace"
source: https://workspaceupdates.googleblog.com/2026/06/introducing-ability-to-loop-over-list-of-items-in-Workspace-Studio.html
fetched_at: 2026-06-03T10:13:03+09:00
published_at: 2026-06-02T00:00:00Z
date_precision: date-only
category: rollout
---

# 2026-06-02 Workspace Studio に「リストをループ処理」する機能

## 公式内容の日本語要約

2026-06-02 の Google Workspace Updates で、Workspace Studio のフローに **ループ処理（「Repeat for each」ステップ）** が追加されたと告知された。リストや Google スプレッドシートの行を 1 件ずつ反復処理できる。あわせて **「Ask Gemini」ステップに「Response format」** が追加され、出力をテキスト形式またはリスト形式で返せるようになった。これにより「ミーティングノートのアクションアイテムごとにタスクを作成」「トラッキングシートの営業リードごとにメールを下書き」といった反復作業をエージェント的フローで自動化できる。

## できるようになったこと

- **Repeat for each ステップ**: リストの各項目／スプレッドシートの各行に対して同じアクション群を反復実行。
- **Ask Gemini の Response format**: Gemini の出力をテキストまたはリストで返し、後続のループ入力に渡しやすくする。
- ユースケース例: 議事録のアクションアイテムごとのタスク生成、リードリストごとのメール下書き。

## 影響範囲

- 対象エディション: Business Starter / Standard / Plus、Enterprise Standard / Plus、Education Fundamentals / Standard / Plus。アドオン: Google AI Pro for Education、Teaching and Learning、AI Expanded Access。
- ロールアウト: Rapid Release / Scheduled Release ともに 2026-06-02 から全面展開（表示まで 1〜3 日）。
- 管理者 / エンドユーザー: 管理者は Workspace Studio のステップ／スターターのアクセス管理が可能。エンドユーザーは Workspace Studio 内で直接利用。

## 教材化メモ

- Gemini / Workspace Studio の業務自動化教材に「Repeat for each（ループ）」「Ask Gemini の Response format」を追記。
- 「ノーコードの反復処理 × スプレッドシート行ループ」という、Zapier/Make 的な自動化を Workspace 内で完結できる点を強調。
- 対象エディションが Business/Enterprise/Education と広い点、ロールアウト日（6/2）を明示。

## 原文確認

- 公式見出し: Introducing the ability to loop over a list of items in Workspace Studio（2026-06-02）
- 公式URL: https://workspaceupdates.googleblog.com/2026/06/introducing-ability-to-loop-over-list-of-items-in-Workspace-Studio.html
- 原文全文は公式ページで確認してください。
