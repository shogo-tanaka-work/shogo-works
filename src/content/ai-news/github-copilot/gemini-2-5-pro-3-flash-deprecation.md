---
title: "GitHub Copilot：Gemini 2.5 Pro / Gemini 3 Flashが2026年7月31日に廃止予告"
tool: "github-copilot"
toolLabel: "GitHub Copilot"
date: 2026-07-02
sourceUrl: "https://github.blog/changelog/2026-07-02-upcoming-deprecation-of-gemini-2-5-pro-and-gemini-3-flash"
summary: "GitHubは2026年7月31日にCopilot内のGemini 2.5 ProとGemini 3 Flashの提供を終了すると発表。Gemini 2.5 ProはGemini 3.1 Proに、Gemini 3 FlashはGemini 3.5 Flashに置き換えられる。Chat・インライン編集・コード補完を含む全Copilot体験が対象。"
description: "Copilot内のGemini 2.5 Pro / Gemini 3 Flashが2026-07-31に廃止。後継はGemini 3.1 Pro / Gemini 3.5 Flash。期限後は自動的に除外されるため、事前のモデル切り替え確認が必要。"
impact: "該当モデルを指定したワークフロー・社内ガイドラインは期限前に見直しが必要。Enterprise管理者は後継モデルのポリシー有効化を確認しておく必要がある。"
tags: ["github-copilot", "gemini", "model-deprecation", "policy"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

GitHubは2026-07-02、Copilot内で提供している**Gemini 2.5 ProとGemini 3 Flashを2026年7月31日に廃止する**と発表しました。対象はCopilot Chat、インライン編集、コード補完を含む全体験です。

後継モデルはそれぞれ、Gemini 2.5 Proが**Gemini 3.1 Pro**へ、Gemini 3 Flashが**Gemini 3.5 Flash**へと案内されています。廃止期限を過ぎると、これらのモデルは選択肢から自動的に除外されるため、利用者側の手動対応は基本的に不要ですが、モデル名を明示的に指定した設定やドキュメントがある場合は事前の見直しが必要です。

## 何が変わったか

- **Gemini 2.5 Pro / Gemini 3 Flash**をCopilotの全体験（Chat/インライン編集/コード補完）から廃止（**2026-07-31**）
- 後継モデル: Gemini 2.5 Pro → **Gemini 3.1 Pro**、Gemini 3 Flash → **Gemini 3.5 Flash**
- 期限後は**自動的に選択肢から除外**（手動削除は不要）
- Enterprise管理者は代替モデルのポリシー有効化状況を要確認

## 業務インパクト（一般企業向け）

社内でCopilotのモデル選定ガイドラインに「Gemini 2.5 Pro」「Gemini 3 Flash」と明記している場合、7月31日までに後継モデル名（Gemini 3.1 Pro / Gemini 3.5 Flash）へ更新しておく必要があります。Enterprise / Organization管理者は、Copilotのモデルポリシーで後継モデルへのアクセスがすでに有効化されているかを確認し、未有効の場合は事前に設定しておきましょう。有効化されていないと、廃止と同時にユーザーが後継モデルを選べず、別モデルへ意図せず切り替わる可能性があります。

これはGitHub Copilotで6月から続く一連のモデル整理（Opus 4.6 (fast)廃止など）の一環であり、Copilotが定期的にモデルラインナップを更新していく運用であることを改めて示す事例です。

## 副業・個人活用視点

個人プランでGemini 2.5 ProやGemini 3 Flashを速度・精度のバランスで選んでいた場合は、後継モデル（Gemini 3.1 Pro / Gemini 3.5 Flash）に切り替えて体感差を確認しておくとよいでしょう。副業のコーディング案件でモデル名を前提にした提案・見積もりをしていた場合も、7月31日の期限前に後継モデルでの検証を済ませておくと安心です。
