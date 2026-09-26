---
date: 2026-09-25
title: "Turnstile Spin をエージェントから実行できるようになった。ウィジェット設置と Siteverify のバックエンド検証をまとめて入れる"
service: "Turnstile"
product: "Turnstile"
source: https://blog.cloudflare.com/turnstile-spin/
official_url: https://blog.cloudflare.com/turnstile-spin/
fetched_at: 2026-09-26T09:10:00+09:00
published_at: 2026-09-25
date_precision: date-only
category: enhancement
---

# 2026-09-25 Turnstile Spin のエージェント実行対応

## 公式内容の日本語要約

Cloudflare は 2026-09-25、**Turnstile Spin を AI コーディングエージェントから実行できるようにした**と公式ブログで発表した。Spin 自体は 2026-07 に提供開始しており（公式は「Since July release」としてダッシュボード経由で **65,000 件超の Spin ウィジェット作成**を記録していると述べている）、今回の更新は**エージェント経由の導線が加わった点**にある。

狙いは**設定漏れの構造的な解消**である。Turnstile の導入は2段階で、フロントエンドへのウィジェット埋め込みと、バックエンドでの Siteverify API 呼び出しによる検証がある。**後者を飛ばす実装が多く**、公式は "Misconfiguring Turnstile by skipping backend validation leaves sites exposed to bots." と書いている。ウィジェットが表示されていても、サーバー側でトークンを検証していなければボットは通る。

エージェント経由の流れはこうなる。利用者が保護したい箇所を指定すると、**エージェント（Claude、Cursor、Codex など、既に使っているもの）がフロントエンドとバックエンドのコードを読み、統合プランを提示する**。承認すると、エージェントが**利用者のコードベース内で変更を行う**。公式の表現では "The agent you already use...makes the approved changes inside your codebase"。

想定シナリオは3つ挙げられている。**新規導入**（ウィジェット埋め込みと Siteverify 配線をゼロから）、**既存ウィジェットの修復**（サーバー側検証が無いものをダッシュボードで検出して修正）、**移行**（既存の CAPTCHA コードを検出して Turnstile への置き換えを提案）。

アクセス経路は3つ。**Cloudflare ダッシュボード**、**Wrangler CLI**、**GitHub でホストされている公開 Skill 経由でエージェントへ直接**。Turnstile は無料で、Spin 固有の課金は示されていない。

教材化メモ: src/content/ai-news-notes/cloudflare/turnstile-spin-agents.mdx

## できるようになったこと

- 既に使っているコーディングエージェントに Turnstile の導入作業をさせられる（公開 Skill 経由）
- フロントエンドのウィジェット埋め込みとバックエンドの Siteverify 検証を、片方だけにせずまとめて入れられる
- サーバー側検証が欠けている既存ウィジェットをダッシュボードで検出し、修復を依頼できる
- 既存 CAPTCHA コードを検出して Turnstile への置き換えを提案させられる
- ダッシュボード / Wrangler CLI / エージェント直接の3経路から実行できる

## 影響範囲

- 対象ユーザー: Turnstile を導入する / 導入済みだが検証が不完全なサイト運営者・開発者
- 対象プラン: Turnstile は無料。Spin 固有の課金の記載なし
- API / UI / 管理者機能: ダッシュボード、Wrangler CLI、公開 Skill（GitHub ホスト）

## 原文確認

- 公式見出し: Agents can now set up your website's security with Turnstile Spin
- 公式URL: https://blog.cloudflare.com/turnstile-spin/
- 原文全文は公式ページで確認してください。
