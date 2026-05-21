---
date: 2026-05-20
title: "Copilot Chat (web) で全 Gemini モデル / GPT-5.2 Codex / GPT-5.4 nano が利用停止"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-05-20-updates-to-available-models-in-copilot-on-web
fetched_at: 2026-05-21T11:30:00+09:00
published_date: 2026-05-20
date_precision: date-only
category: policy
---

# 2026-05-20 Copilot Chat (web) のモデル整理：Gemini 系・一部 GPT 系を retire

## 公式内容の日本語要約

GitHub Copilot Chat (web) 上の利用可能モデルから、**全 Gemini モデル**および **GPT-5.2 Codex / GPT-5.4 nano** が削除された。OpenAI 系と Claude 系のモデルは価格帯を問わず引き続き利用可能。GitHub は「より一貫性のある高品質な応答」のためモデル選択肢を絞ったと説明。

## 影響範囲

- 対象: Copilot Chat (web) 利用者
- 対象プラン: 全プラン
- IDE / VS Code 統合版は対象外（こちらでは前日 5/19 に Gemini 3.5 Flash GA したばかり）
- Web 上で Gemini を選んでいたユーザーは強制的に OpenAI / Claude に切替

## 注意点

- 5/19 の「**Gemini 3.5 Flash が Copilot で GA**」と同時期に **web 版では Gemini 一括除外**が走った形。チャネルによってモデル戦略が分かれているため、社内で「Copilot のモデル選択方針」を整理している組織は web / IDE で別ルールを敷く必要あり。
- VS Code 等の IDE 統合版で Gemini 3.5 Flash を使う運用は継続可能。

## 教材化メモ

「Copilot のチャネル別モデル一覧」を扱う教材は、web / IDE / Mobile で対応モデルが異なる前提を明示する必要あり。モデル選択ガイドの教材では「web では OpenAI / Claude のみ」と明記。

## 原文確認

2026-05-21T11:30:00+09:00 時点で確認。
