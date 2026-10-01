---
date: 2026-09-28
title: "BEACON: 上位1万サイトの匿名化 RUM データを BigQuery で日次公開"
service: "Cloudflare（Web Analytics / RUM）"
product: "Web Analytics"
source: https://blog.cloudflare.com/how-fast-is-the-web/
official_url: https://blog.cloudflare.com/how-fast-is-the-web/
fetched_at: 2026-09-29T10:53:00+09:00
published_at: 2026-09-28T14:43:05Z
date_precision: timestamp
category: release
---

# 2026-09-28 BEACON

## 公式内容の日本語要約

**BEACON は Cloudflare の匿名化 Real User Monitoring データセット**で、ネットワーク上の**上位1万サイトにわたる数十億件の実測パフォーマンス計測**を含む。公開データは **Core Web Vitals（LCP / CLS / INP）のフルヒストグラム**、ブラウザ・デバイス・国・業種別の内訳、LCP と INP のサブコンポーネント。

**Google BigQuery 上で公開され、日次更新**。コミュニティ主導の RUM Archive プロジェクトの標準に従う。**Google Cloud アカウントがあれば誰でもアクセスでき**、発表本文に明示的なライセンス制限の記載はない。対象は研究者・開発者・ブラウザベンダー・標準化団体。

## 影響範囲

- 対象ユーザー: Web パフォーマンスを扱う開発者、研究者、ベンチマークを必要とする制作者
- 対象プラン: 無償公開（BigQuery のクエリ費用は利用者負担）
- API / UI / 管理者機能: BigQuery データセット

## 教材化メモ

- **単独記事は見送り（スコア4）。** AI / エージェント文脈から距離があり、読者の実務判断を変える度合いが小さい。
- ただし**「自社サイトが業種平均に対して速いのか遅いのか」を公開データで示せる**点は、Web 制作の提案書で使える材料になる。Knowledge 側で Core Web Vitals を扱う回の参照先として記録しておく。

## 原文確認

- 公式見出し: How fast is the web? Explore billions of real-user measurements with BEACON
- 公式URL: https://blog.cloudflare.com/how-fast-is-the-web/
- 原文全文は公式ページで確認してください。
