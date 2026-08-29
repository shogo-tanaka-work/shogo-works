---
date: 2026-08-28
title: "BotBase for Operators — ボット・AIエージェント運営者向けの申請追跡と自動審査"
service: "Cloudflare"
product: "BotBase, Application Security"
source: https://blog.cloudflare.com/botbase-for-operators/
official_url: https://blog.cloudflare.com/botbase-for-operators/
fetched_at: 2026-08-29T09:05:00+09:00
published_date: 2026-08-28
date_precision: date-only
category: release
---

# 2026-08-28 Cloudflare BotBase for Operators

## 公式内容の日本語要約

Cloudflare が **BotBase for Operators** を公開した。BotBase は Cloudflare が持つ**検証済みボット・AIエージェントの検索可能なディレクトリ**で、今回、そこへ登録する側（ボット／エージェントの運営者）向けのダッシュボードが提供された。場所は **Protect & Connect → Application Security → BotBase**。

これまで申請は「出したら音沙汰なし」の状態だったが、**申請の状態（Waiting for review / Accepted / Rejected）と却下理由が見える**ようになり、**内容の更新も再申請なしで行える**。

審査は完全な手作業から**自動審査へ移行**した。2023年以降、申請数が**7倍**に増えたことが背景にある。自動検証の内容は、重複の確認、user-agent が十分に特定的か、IP リストの妥当性、逆引き DNS の確認、そして **Web Bot Auth 署名の認証**である。

分類法（taxonomy）も更新され、運営者は**「そのボットが何をするか」「コンテンツをどう使うか」「誰が運営しているか」の3属性を申告**する必要がある。この振る舞いモデルは **Content Signals** の考え方に沿っており、ボット側が用途（検索インデックス、データ収集、モデル学習）を宣言し、サイト側が robots.txt で示した意向を尊重する形になる。

Verified 状態を得て維持するには、申告内容が実際の挙動と一致している必要があり、この状態が Cloudflare ネットワーク全体でのサイト側の受け入れ判断に効く。

## できるようになったこと

- ボット／エージェント運営者が、**申請の状態と却下理由をダッシュボードで確認**できる
- 申請内容を**再申請せずに更新**できる
- **自動審査**（重複、user-agent、IP リスト、逆引き DNS、Web Bot Auth 署名）により審査が進む
- 用途・コンテンツの扱い・運営主体の**3属性の申告**が必須になった

## 影響範囲

- 対象ユーザー: ボット・AIエージェント・クローラーの運営者、および Cloudflare 配下でサイトを運用する側
- 対象プラン: 記載なし（BotBase ディレクトリ自体は Cloudflare ネットワーク全体で参照される）
- API / UI / 管理者機能: ダッシュボード（Protect & Connect → Application Security → BotBase）

## 原文確認

- 公式見出し: BotBase for Operators: A clearer path to joining Cloudflare's directory of bots and agents
- 公式URL: https://blog.cloudflare.com/botbase-for-operators/
- 教材化メモ: src/content/ai-news-notes/cloudflare/botbase-for-operators.mdx
- 原文全文は公式ページで確認してください。
