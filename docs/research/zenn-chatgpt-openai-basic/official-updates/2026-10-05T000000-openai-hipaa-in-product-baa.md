---
date: 2026-10-05
title: "OpenAI API に HIPAA 対応の製品内フローが追加（BAA を管理者が自分で受諾）"
service: "OpenAI Platform (API)"
source: https://developers.openai.com/api/docs/changelog
fetched_at: 2026-10-06T09:40:00+09:00
published_at: 2026-10-05
date_precision: date-only
category: enhancement
---

# 2026-10-05 OpenAI API に HIPAA 対応の製品内フローが追加

## 公式内容の日本語要約

OpenAI は 2026-10-05 付の API changelog で、**HIPAA 対応のための製品内フローを Platform 設定へ追加した**と告知した。掲載場所は `Organization settings > General` で、原文は「Added an in-product flow for HIPAA compliance support in API [Organization settings > General]」である。

**対象となる組織の管理者が、標準の BAA（Business Associate Agreement、事業提携契約）を受諾し、HIPAA compliance support を有効化できる**ようになった。従来この手続きは営業・サポート経由だったが、管理者が設定画面で完結できる。

**Anthropic は同趣旨の変更を 2026-07-15 に実施している**（Claude Enterprise / Claude Platform の HIPAA 設定のセルフサーブ化、`zenn-claude-release-basic/official-updates/2026-07-15T000000-hipaa-self-serve.md`）。主要2社が同じ方向（コンプライアンス手続きのセルフサーブ化）へ揃った形になる。

**changelog の記述は2文程度で、公式に明示されていない点が残る。** 「eligible（対象となる）組織」の条件、対象プラン、地域の制約、PHI を扱える API / モデルの範囲は本文に書かれていない。設計判断に使う前に Platform 側のコンプライアンス文書で裏取りが必要である。

## できるようになったこと

- 管理者が `Organization settings > General` から標準 BAA を受諾できる
- 同じ画面から HIPAA compliance support を有効化できる

## 影響範囲

- 対象ユーザー: 対象となる組織の管理者（医療・ヘルスケア領域で PHI を扱う組織）
- 対象プラン: 公式に明記なし（「eligible organization admins」のみ）
- API / UI / 管理者機能: 管理者機能（Platform の Organization settings）

教材化メモ: src/content/ai-news-notes/chatgpt-openai/openai-hipaa-in-product-baa.mdx

## 原文確認

- 公式見出し: Added an in-product flow for HIPAA compliance support in API [Organization settings > General]
- 公式URL: https://developers.openai.com/api/docs/changelog
- 参考（Anthropic の同趣旨の変更、2026-07-15）: https://support.claude.com/en/articles/13296973-hipaa-ready-enterprise-plans
- 原文全文は公式ページで確認してください。
