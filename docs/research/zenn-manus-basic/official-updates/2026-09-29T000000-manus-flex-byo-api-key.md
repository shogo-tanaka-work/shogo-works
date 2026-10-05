---
date: 2026-09-29
title: "Manus Flex — 自前の API キーで Manus を動かす（OpenRouter / Fireworks / Modal）"
service: "Manus"
source: https://manus.im/blog/introducing-manus-flex
fetched_at: 2026-10-05T09:40:00+09:00
published_at: 2026-09-29T00:00:00Z
date_precision: date-only
category: release
---

# 2026-09-29 Manus Flex

## 公式内容の日本語要約

**Manus Flex** が公開された（2026-09-29）。**利用者が自前の API キーで Manus を動かすためのモジュール**で、既存の推論プロバイダー契約を Manus のプロジェクト・ツール・エージェントワークフローへ接続する。Manus 側のエージェント基盤はそのまま使う。

**初期の Flex Inference Partner Program の対象プロバイダーは3社**である。

- **OpenRouter**
- **Fireworks**
- **Modal**

**課金の分かれ方が要点である。** **モデル推論はそのプロバイダーから直接請求される。** ただし**タスク中に使う Manus 側のサービスとインフラは、引き続き Manus クレジットを消費する。**

設定は、接続したプロバイダーに対して**モデルと reasoning-effort を指定**する形。

提供段階は「launching」とされ、ベータ表記やロールアウト期限の記載はない。**データ取り扱い・コンプライアンス・エンタープライズ向けの条件についての記載はない。**

## できるようになったこと

- 自前の API キー（OpenRouter / Fireworks / Modal）で Manus を動かす
- プロバイダーごとにモデルと reasoning-effort を指定

## 影響範囲

- 対象ユーザー: 既に推論プロバイダー契約を持つ Manus 利用者
- 対象プラン: 記載なし
- API / UI / 管理者機能: **課金が2系統に分かれる**（推論はプロバイダー直課金、Manus インフラはクレジット）

## 教材化メモ

- **BYOK（Bring Your Own Key）が「安くなる」とは限らない構造**がはっきり書かれている。推論はプロバイダー直課金になるが、**Manus のインフラ分はクレジットを消費し続ける。** つまり**請求が2本に分かれるだけで、合計が下がる保証はない。** BYOK を検討するときに最初に確認すべき点として、そのまま使える実例である。
- **同じ週に Microsoft Copilot 側でも課金の2分割（USL と Copilot Credits）が展開段階に入っている。** 方向は違うが、**「1つの製品の利用料が複数の請求経路に分かれる」**という変化が同時に起きている。社内の AI 費用管理を「ツール単位の月額」で設計していると、どちらでも破綻する。
- **データ取り扱いの記載が無い点は BYOK で特に効く。** 自前キーを渡すということは、**プロバイダー側のログに自社のプロンプトが残る**経路が増えることでもある。キーの持ち主が誰かではなく、**どこにデータが落ちるか**で審査する必要がある。

## 原文確認

- 公式見出し: Introducing Manus Flex: Use your own API key in the Manus workspace
- 公式URL: https://manus.im/blog/introducing-manus-flex
- 原文全文は公式ページで確認してください。
