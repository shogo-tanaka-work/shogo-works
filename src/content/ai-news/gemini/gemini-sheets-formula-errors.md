---
title: "Google Sheets に Gemini が数式エラーを診断・修正提案する機能を追加"
tool: "gemini"
toolLabel: "Gemini"
date: 2026-06-22
sourceUrl: "https://workspaceupdates.googleblog.com/2026/06/troubleshoot-formula-errors-in-sheets.html"
summary: "Google Sheets でセルに数式エラーが出た際、Gemini がエラーの原因を自然言語で説明し、修正済み数式を提案する機能がロールアウト開始。Business Standard 以上で利用可能。"
description: "#DIV/0! や #REF! などのエラーが発生したセルで Gemini がエラー内容を解説し、周辺データの構造も考慮した修正案を自動提示する。2026-06-22 からロールアウト開始で最大 15 日で全体展開される。"
impact: "スプレッドシートを業務で使う幅広いユーザーが、エラーの原因を自分で調べることなく Gemini に聞けるようになる。Excel/Sheets 利用者が AI 活用を始める入り口として普及しやすい機能。"
tags: ["gemini", "google-workspace", "sheets", "formula", "productivity"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## アップデート概要

Google Sheets に Gemini による数式エラー診断機能が追加された。エラーが発生したセルにカーソルを合わせると、Gemini がエラーの原因を説明し、修正済み数式を提案する。

## 機能詳細

数式エラー（`#DIV/0!`・`#REF!`・`#VALUE!` など）が発生したセルにフォーカスすると、Gemini がエラーの原因を自然言語で解説する。単純なメッセージではなく、周辺セルのデータ構造を考慮した具体的な説明（「参照先の列がテキスト形式になっているため数値として計算できない」など）が表示される。

修正済み数式をそのままワンクリックで適用できる。四則演算から複雑な入れ子関数まで対応している。

## 対象プランとロールアウト

**対象プラン**: Google Workspace Business Standard/Plus・Enterprise Standard/Plus・Google AI Pro/Ultra・Education Plus・AI Expanded Access

**ロールアウト**: 2026-06-22 から開始、Rapid リリースドメインと Scheduled リリースドメインの両方に同時展開。最大 15 日で全ユーザーに適用。

利用には管理コンソールで「Gemini for Workspace in Sheets」の有効化が必要。

## AI 活用の入り口として

Sheets のエラー診断はスプレッドシートを日常的に使っているユーザーが自然と AI 支援を体験できる機能設計になっている。「エラーが出た → 検索する」というフローが「エラーが出た → Gemini に聞く」に置き換わることで、AI 活用の習慣化が促進される。
