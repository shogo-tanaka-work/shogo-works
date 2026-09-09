---
title: "GitHub Copilot Free・Student プランの手動モデル選択が廃止 — Copilot Auto に一本化"
tool: "github-copilot"
toolLabel: "GitHub Copilot"
date: 2026-06-24
sourceUrl: "https://github.blog/changelog/2026-06-24-changes-to-model-selection-for-free-and-student-plans/"
summary: "Copilot Free・Student プランで手動モデル選択が廃止され、「Copilot Auto」（タスクに応じて最適モデルを自動選択）のみが利用可能になった。各プランの制限内で複数モデルファミリーへのアクセスは維持。Business / Enterprise は対象外。"
description: "2026-06-24 より、Free・Student プランでは Copilot Auto による自動モデル選択のみが使えるようになった。Microsoft リリースモデルから（Preview）ラベルも撤廃。Business・Enterprise プランは変更なし。"
impact: "Free・Student ユーザーは IDE 上でモデルを選ぶ UI が消え、Copilot に自動最適化を委ねる形になる。手動でモデルを選んでいたユーザーには体験の変化。有料プランとの差別化として「モデル選択権」が位置付けられる。"
tags: ["github-copilot", "model-selection", "free-plan", "policy"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## アップデート概要

GitHub は 2026-06-24、Copilot の Free および Student プランでの手動モデル選択機能を廃止した。代わりに「Copilot Auto」のみが利用できる形に変更された。Copilot Auto はタスクの性質に応じて自動的に最適なモデルを選択する仕組みで、各プランのアクセス制限の範囲内で複数のモデルファミリーを動的に使い分ける。

## 何が変わったか

### Free・Student プランでの手動モデル選択が廃止

これまで Copilot Free と Student プランのユーザーは、IDE 上でモデルを手動で切り替えることができた。この機能が 2026-06-24 をもって廃止された。

今後は「Copilot Auto」が唯一の選択肢になる。Copilot Auto はコーディング・チャット・コードレビューなどタスクの種類に応じて最適なモデルをリアルタイムで選択する。

### Business・Enterprise プランは変更なし

この変更は Free・Student プランのみが対象で、Business・Enterprise プランのユーザーは引き続き手動でモデルを選択できる。

### Microsoft モデルから "Preview" ラベルを廃止

今回の変更と同時に、Microsoft がリリースするモデルの名称から「(Preview)」というラベルが撤廃された。正式提供扱いになったことを意味する。

## 業務インパクト（一般企業向け）

組織が Copilot Business や Enterprise を使っている場合は今回の変更の影響を受けない。一方で Free プランを利用している社内メンバーや、Student ライセンスで学習中の新人・インターンが「なぜモデル選択 UI がなくなったのか」と混乱する可能性がある。変更を把握してチームに共有しておくと混乱が防げる。

## 副業・個人活用視点

Copilot Free を使っているユーザーは、IDE から自分でモデルを指定する操作ができなくなった。「GPT-4 を明示的に選んでいた」という使い方をしていた場合は体験が変わる。Copilot Auto が自動で選ぶモデルの質に満足できない場合は、有料の Business プランへのアップグレードが選択肢になる。

逆に「どのモデルを使えばいいか分からない」という初心者にとっては、選択肢の煩わしさがなくなる変更でもある。
