---
date: 2026-09-24
title: "Claude API、出力前の拒否（refusal）の一部を課金対象へ拡大"
service: "Claude Platform API"
source: https://platform.claude.com/docs/en/release-notes/api
fetched_at: 2026-09-25T09:10:00+09:00
published_at: 2026-09-24
date_precision: date-only
category: policy
---

# 2026-09-24 Claude API、出力前の拒否（refusal）の一部を課金対象へ拡大

## 公式内容の日本語要約

Claude Platform の API release notes に 2026-09-24 付で、**課金対象となる拒否（refusal）の範囲を広げる**変更が掲載された。

これまで、**出力が1トークンも出る前に返る拒否は課金されなかった**。生成が始まった後に途中で止まる拒否（mid-stream refusal）だけが課金対象だった。今回の変更で、**出力前の拒否のうち `stop_details.category` が `"bio"` / `"frontier_llm"` / `"reasoning_extraction"` の3カテゴリのものが課金対象に加わる**。公式はこの3つを「誤検知（false positive）の実測量が少ないカテゴリ」と説明している。

課金額は通常のリクエストと同じで、**実行したモデルのレートが適用される**。上記3カテゴリ以外の、出力前の拒否は引き続き無課金。fallback credit の扱いにも変更はない。**この変更はすべてのプラットフォームに適用される**（Claude API、Bedrock / AWS、Google Cloud、Microsoft Foundry）。

実務上の意味は「安全側の拒否が出るたびに請求が増えうる」ことではなく、**誤検知が少ないと測定できたカテゴリから順に課金へ寄せている**という運用の方向性が読める点にある。裏を返せば、誤検知が多いカテゴリは無課金のまま残されている。

## できるようになったこと（変わったこと）

- 出力前の拒否のうち `"bio"` / `"frontier_llm"` / `"reasoning_extraction"` が**課金対象になった**
- 課金レートは実行モデルの通常レート
- mid-stream refusal は従来どおり課金（変更なし）
- 上記3カテゴリ以外の出力前拒否は**引き続き無課金**
- fallback credit は変更なし
- 全プラットフォーム（API / Bedrock / AWS / Google Cloud / Foundry）に適用

## 影響範囲

- 対象ユーザー: Claude Platform API を直接叩く開発者、クラウドプロバイダー経由の利用者
- 対象プラン: API 利用全般（プラットフォーム不問）
- API / UI / 管理者機能: 課金。`stop_details.category` を見ているコードは、拒否時のコスト計上ロジックを見直す必要がある

教材化メモ: src/content/ai-news-notes/claude/api-refusal-billing-expansion.mdx

## 原文確認

- 公式見出し: September 24, 2026（Claude API release notes）
- 公式URL: https://platform.claude.com/docs/en/release-notes/api
- 補助: https://platform.claude.com/docs/en/build-with-claude/refusals-and-fallback#how-refusals-are-billed
- 原文全文は公式ページで確認してください。
