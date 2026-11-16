---
date: 2026-11-13
title: "GitHub Copilot、6モデルを 2026-12-14 に廃止（代替モデルを提示）"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-11-13-upcoming-deprecation-of-selected-github-copilot-models-in-december
fetched_at: 2026-11-16T09:50:00+09:00
published_at: 2026-11-13
date_precision: date-only
category: incident
---

# 2026-11-13 GitHub Copilot の6モデル廃止予告（2026-12-14 発効）

## 公式内容の日本語要約

GitHub が Copilot から6モデルを **2026-12-14 に廃止**すると告知した。対象と推奨代替は次のとおり。

| 廃止モデル | 推奨代替 |
| --- | --- |
| Claude Fable 5 | Claude Fable 5.2 |
| Claude Haiku 4.5 | Claude Haiku 5.5（下記の例外あり） |
| Gemini 3.8 Flash | Gemini 4 Hydrogen |
| Gemini 4 Argon | Gemini 4 Carbon |
| Grok 4.6 | Grok 4.7 |
| Kimi K3 | 未定（追って告知） |

**例外**: Claude Haiku 4.5 は、年払いプランの個人 Copilot 契約者には引き続き提供される。

適用範囲は Copilot Chat、インライン編集、ask / agent モード、コード補完を含む**すべての Copilot 体験**である。

## 利用者側の対応

- **Enterprise / Business**: 既定のモデル有効化が効いている組織では、代替モデルが自動で有効になる。グローバル既定を切っている組織、または個別にモデルを無効化している組織は、Copilot 設定のモデルポリシーで代替を有効化する必要がある。
- 廃止日までに、ワークフローと連携（API / 拡張）が参照するモデル名を supported なものへ更新する。
- 廃止後に旧モデルを削除する作業は不要。有効化後は Copilot Chat のモデルセレクターに新モデルが出る。

## 影響範囲

- 対象ユーザー: Copilot 利用者全般（モデル名を固定している自動化・社内手順を持つ組織は特に）
- 対象プラン: 全プラン（Haiku 4.5 の年払い個人プラン例外を除く）
- 期限: **2026-12-14。本サマリー作成時点（2026-11-16）で残り28日**

## 教材化メモ

記事化しない（本Skillの記事化対象は Claude Code / Codex のロールアップのみ）。モデル退役の棚卸しを扱う教材では、「止まるか / 自動で代替へ流れるか / 流れた先が同等か」の3段で読む例として使える。今回は代替が自動で有効になる型だが、**グローバル既定を切っている組織では自動で流れない**点が実務の分かれ目になる。

## 原文確認

- 公式見出し: Upcoming deprecation of selected GitHub Copilot models in December
- 公式URL: https://github.blog/changelog/2026-11-13-upcoming-deprecation-of-selected-github-copilot-models-in-december
- 原文全文は公式ページで確認してください。
