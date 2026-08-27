---
date: 2026-08-26
title: "Z.ai GLM-5.3 Flash が Workers AI で提供開始。GLM 系初のネイティブマルチモーダル"
service: "Cloudflare"
product: "Workers AI"
source: https://developers.cloudflare.com/changelog/post/2026-08-26-glm-5.3-flash-workers-ai/
fetched_at: 2026-08-27T09:05:00+09:00
published_at: 2026-08-26T00:00:00Z
date_precision: date-only
category: release
---

# 2026-08-26 GLM-5.3 Flash on Workers AI

## 公式内容の日本語要約

`@cf/zai-org/glm-5.3-flash` が Workers AI で利用可能になった。GLM-5 系で**初のネイティブマルチモーダルモデル**で、Mixture-of-Experts 構成、**総パラメータ 320B・トークンあたり有効 18B**。

公式の位置づけでは、GLM-5.2 をベンチマークと実ワークロードの双方で上回りつつ価格は下がっており、**コーディングとエージェント系ベンチマークでは Claude Opus 4.8 に迫る**とされる。Workers AI 上の GLM 系で**マルチモーダル入力に対応するのは本モデルが最初**。

利用には **Workers 有料プラン、または AI Gateway のプリペイドクレジット**が必要。呼び出しは Workers AI バインディング（`env.AI.run()`）、REST API、OpenAI 互換エンドポイント、AI Gateway のいずれからでも可能。

## できるようになったこと

- Workers AI で 320B MoE のマルチモーダルモデルを利用（画像入力、推論、function calling）
- OpenAI 互換エンドポイント経由での呼び出し

## 影響範囲

- 対象ユーザー: Workers AI / AI Gateway 利用者
- 対象プラン: Workers 有料プラン、または AI Gateway プリペイドクレジット（無料枠は対象外）
- API / UI / 管理者機能: Workers AI バインディング / REST API / OpenAI 互換エンドポイント / AI Gateway

## 教材化メモ

- **OpenAI 互換エンドポイントで呼べる**点は、モデル差し替えの現実的な手順を示す好例。SDK を変えずにモデルだけ入れ替えられる構成にしておくと、価格・性能の変化に追随できる。**外部サービスはラッパー越しに使う**という設計原則の具体例として扱える。
- **「有効パラメータ 18B / 総パラメータ 320B」の読み方**は MoE の基礎教材になる。総パラメータが大きくても推論コストは有効パラメータで決まる、という関係を数字付きで説明できる。
- 記事化は見送った（本数上限・スコア5）。Workers AI 利用者向けのモデル追加で、同日の他更新より読者層が狭い。

## 原文確認

- 公式見出し: Z.ai GLM-5.3 Flash now available on Workers AI
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-08-26-glm-5.3-flash-workers-ai/
- 原文全文は公式ページで確認してください。
