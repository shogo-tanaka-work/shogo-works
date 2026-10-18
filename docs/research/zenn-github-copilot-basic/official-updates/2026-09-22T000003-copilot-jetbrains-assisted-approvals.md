---
date: 2026-09-22
title: "Copilot for JetBrains 1.18.0 — assisted approvals（低リスク操作の自動承認、public preview）、メッセージ再編集での巻き戻し、組織スキルの対応"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-09-22-new-features-and-improvements-in-copilot-for-jetbrains
fetched_at: 2026-09-28T09:40:00+09:00
published_at: 2026-09-22
date_precision: date-only
category: release
---

# 2026-09-22 Copilot for JetBrains 1.18.0

## 公式内容の日本語要約

JetBrains 向け Copilot プラグイン **1.18.0** が公開された。**権限まわりに直接関わる追加が1件ある。**

**assisted approvals（public preview）** は、**低リスクのツール呼び出しを自動承認し、リスクの高い操作では確認を求める**機能である。**公式告知は「低リスク」と「高リスク」を分ける基準を示しておらず、既定で有効かどうかも明記していない。** 判定基準が公開されていないため、**「何が自動承認されるか」を利用者側で事前に列挙できない。** 導入判断にあたってはこの点を前提にする必要がある。

**メッセージの再編集による巻き戻し**が入った。エージェントセッション中の過去のユーザーメッセージを編集すると、**会話履歴とファイル変更の両方が巻き戻る**。追加メッセージでチャットを膨らませずに方針を修正できる。

**組織・エンタープライズのスキルと組織管理のカスタム指示が、ローカルセッションとエージェントセッションの双方で有効**になった。統制を両方の経路へ揃える変更である。

その他、Codex エージェントの plan モード（実装前のレビューと承認）、内蔵 GitHub MCP Server の個別トグルとツール単位の永続管理、チャットパネルの並列表示、IntelliJ 2026.3 EAP 対応の復旧が含まれる。

## できるようになったこと

- assisted approvals で低リスクのツール呼び出しを自動承認（public preview）
- 過去メッセージの再編集で会話履歴とファイル変更を巻き戻す
- 組織・エンタープライズのスキルと組織管理のカスタム指示をローカル / エージェント両セッションで利用
- Codex エージェントの plan モード、GitHub MCP Server の個別トグルとツール単位管理

## 影響範囲

- 対象ユーザー: JetBrains IDE で Copilot を使う開発者
- 対象プラン: 公式告知に明記なし。組織スキルは Business / Enterprise 前提
- API / UI / 管理者機能: 承認フロー（assisted approvals）、MCP ツールの有効範囲、組織管理のカスタム指示

## 教材化メモ

- **「低リスクは自動承認」の基準が公開されていない**点が、この機能の実務上の核心である。**承認の省略は利便性だが、省略される範囲が不明なら統制としては評価できない。** 公式が基準を示していないことを、導入可否のチェックポイントとしてそのまま扱う。
- **統制の適用範囲が「ローカル」と「エージェント」で別だった**という事実そのものが教材になる。組織のカスタム指示を入れたつもりで、片方の経路では効いていなかった。**統制は入れた時点ではなく、経路ごとに効いているか確認する対象**である。

## 原文確認

- 公式見出し: New features and improvements in Copilot for JetBrains
- 公式URL: https://github.blog/changelog/2026-09-22-new-features-and-improvements-in-copilot-for-jetbrains
- 原文全文は公式ページで確認してください。
