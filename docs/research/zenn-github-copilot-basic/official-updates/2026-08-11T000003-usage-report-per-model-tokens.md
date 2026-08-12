---
date: 2026-08-11
title: "AI usage report にモデル別のトークン内訳を追加"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-08-11-per-model-token-breakdown-in-the-usage-report
fetched_at: 2026-08-12T10:05:00+09:00
published_at: 2026-08-11
date_precision: date-only
category: enhancement
---

# 2026-08-11 usage report のモデル別トークン内訳

## 公式内容の日本語要約

課金設定の AI usage ページからダウンロードできる利用レポートに、モデル別のトークン内訳が加わった。従来は AI クレジットの合算消費量しか出ておらず、その内訳をたどれなかった。

追加されたのは入力トークン、出力トークン、キャッシュ読み取りトークン、キャッシュ書き込みトークンと、それぞれに対応して消費された AI クレジットである。公式は、入力・出力・キャッシュのトークンが各モデルのコストにどう積み上がったかを正確に追跡し、その内訳を関係者へ共有できるとしている。

閲覧できるのは Copilot Business / Copilot Enterprise の管理者と、Copilot for Individuals の全利用者である。API 側の変更は告知されていない。

## できるようになったこと

- 利用レポートでモデル別に入力 / 出力 / キャッシュ読み取り / キャッシュ書き込みトークンを確認できる
- 各モデルのトークン内訳と消費 AI クレジットの対応を追跡できる

## 影響範囲

- 対象ユーザー: Copilot Business / Enterprise の管理者、Copilot for Individuals の全利用者
- 対象プラン: Copilot Business / Enterprise / Individuals
- API / UI / 管理者機能: 課金設定の AI usage ページ（レポートのダウンロード）

## 教材化メモ

- キャッシュ読み取り / 書き込みが独立して出るようになったことは、prompt caching の効果を実測する題材になる。「キャッシュを効かせると何が安くなるのか」を数字で示せる材料は貴重。
- コスト教材では「クレジット」という抽象単位のまま説明を終えがちだが、トークン内訳が出る以上、トークン → クレジット → 金額の3段階で説明する構成へ改める余地がある。
- Copilot for Individuals でも全利用者が見られる点は、個人利用者向けのコスト管理教材で使える。組織向けの話に限定しない。

## 原文確認

- 公式見出し: Per-model token breakdown in the usage report
- 公式URL: https://github.blog/changelog/2026-08-11-per-model-token-breakdown-in-the-usage-report
- 原文全文は公式ページで確認してください。
