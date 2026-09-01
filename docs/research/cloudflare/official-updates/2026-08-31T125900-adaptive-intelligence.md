---
date: 2026-08-31
title: "Cloudflare Adaptive Intelligence — 継続再学習と使い捨て検知ルールでボット攻撃の採算を崩す"
service: "Cloudflare"
product: "Bot Management"
source: https://blog.cloudflare.com/introducing-adaptive-intelligence/
fetched_at: 2026-09-01T09:20:00+09:00
published_at: 2026-08-31T12:59:00Z
date_precision: timestamp
category: release
---

# 2026-08-31 Cloudflare Adaptive Intelligence

## 公式内容の日本語要約

Cloudflare が **Adaptive Intelligence** を発表した。**すべての攻撃者をブロックすることを目指すのではなく、検知を継続的かつ予測不能にすることで、攻撃側のコストを引き上げて採算を崩す**という設計思想のボット検知エンジンである。

**中核は継続再学習。** 固定バージョンの ML モデルをリリースする方式をやめ、**ライブトラフィック上でモデルを継続的に再学習**する。これにより、新しい回避手法に対して数日単位で適応できるとしている。

**もう一つの柱が「使い捨て検知ルール（disposable rules）」。** 一時的な検知ルールを生成し、**ランダムに展開して、攻撃者がリバースエンジニアリングし終える前に引退させる。** 検知の中身が固定されないため、攻撃側は「何が見られているか」を安定して把握できない。

**判定に使うシグナルは複数時間窓にまたがる。** JA4 TLS フィンガープリント、リクエスト構造、チャレンジの結果、セッションの振る舞いを組み合わせ、分散化された攻撃を検出する。ネットワーク横断のシグナルからのパターン検出と、新規検知ルールの自動生成（マイニング）も自動化されている。

**安全な展開手順**として、新しい検知はまず shadow mode で動き、既存の検知より優れていることを証明しない限り本番トラフィックに影響しない。

Adaptive Intelligence は既存の **Bot Management** に統合され、顧客が既に利用している bot score を強化する形で効く。振る舞い検証エンジン **Precursor** と併用される。**Enterprise 向けに一般提供（GA）** され、利用には Bot Management ダッシュボードで **「Auto Update Machine Learning」を有効化**する必要がある。

## できるようになったこと

- ボット検知 ML モデルの継続再学習（固定バージョンのリリース方式からの転換）
- 使い捨て検知ルールのランダム展開と自動引退
- JA4 TLS フィンガープリント / リクエスト構造 / チャレンジ結果 / セッション挙動の複数時間窓での組み合わせ判定
- shadow mode を経た安全な検知展開

## 影響範囲

- 対象ユーザー: Cloudflare Bot Management 利用者
- 対象プラン: **Enterprise で GA**
- API / UI / 管理者機能: Bot Management ダッシュボードの「Auto Update Machine Learning」設定。既存の bot score の値がより頻繁に変動しうる

教材化メモ: src/content/ai-news-notes/cloudflare/adaptive-intelligence.mdx

## 原文確認

- 公式見出し: 「Introducing Adaptive Intelligence: Undermining the economics of every bot attack」（Mon, 31 Aug 2026 12:59:00 GMT）
- 公式URL: https://blog.cloudflare.com/introducing-adaptive-intelligence/
- 巡回スコープ判定: Bot Management はネットワーク・セキュリティ製品だが、**ML の継続学習と自動検知生成が機能の中核**であり、`source-catalog.md` の Cloudflare 節「ネットワーク・セキュリティ製品でも MCP や AI が絡む更新は対象」に該当すると判断した。
- 原文全文は公式ページで確認してください。
