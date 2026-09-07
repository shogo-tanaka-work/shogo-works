---
date: 2026-09-02
title: "GitHub Copilot — Enterprise managed settings が任意の既定モデル指定に対応"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-09-02-enterprise-managed-settings-support-any-default-model
fetched_at: 2026-09-07T09:40:00+09:00
published_at: 2026-09-02
date_precision: date-only
category: enhancement
---

# 2026-09-02 Enterprise managed settings が任意の既定モデルに対応

## 公式内容の日本語要約

Enterprise managed settings で、**チームの既定モデルとして任意のモデルを指定できる**ようになった。管理者側のモデル選択の自由度が上がる変更である。

**同週の他の2件と組み合わせて読む必要がある。** 09-04 の GPT-6 Astra GA では「**新モデルは管理者が止めない限り自動で有効になる**」と明記されており、既定モデルを管理側で固定できることは、その自動有効化に対する制御手段になる。前週 2026-08-26 に GA となった global model policy とも連動する。

## できるようになったこと

- Enterprise managed settings で任意のモデルをチームの既定として指定する

## 影響範囲

- 対象ユーザー: Copilot Enterprise の管理者
- 対象プラン: Copilot Enterprise（managed settings）
- API / UI / 管理者機能: Enterprise managed settings

## 教材化メモ

- **「新モデルは自動で有効」という既定に対して、管理側が既定を固定できる**——この組み合わせが今週の GitHub Copilot 側の統制上の要点である。片方だけを見ると判断を誤る。**ベンダーの既定値と、それを上書きする管理機能はセットで棚卸しする**という運用則に落とせる。
- 既定モデルの固定は**コストと再現性の両方**に効く。使用量課金では既定モデルがそのまま単価になり、検証済みのプロンプトはモデルが変われば挙動が変わる。**「既定を固定する」ことが品質管理でもある**という点は、Codex の `0.153.4`（既定モデルが Astra へ変更）と並べると分かりやすい。

## 原文確認

- 公式見出し: Enterprise-managed settings support any default model
- 公式URL: https://github.blog/changelog/2026-09-02-enterprise-managed-settings-support-any-default-model
- 個別ポスト本文は未取得。一覧の記載で確認した範囲を記録している
- 原文全文は公式ページで確認してください。
