---
date: 2026-06-05
title: "GitHub Copilot — GPT-5.2 / GPT-5.2-Codex を非推奨化、後継は GPT-5.5 / GPT-5.3-Codex"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-06-05-gpt-5-2-and-gpt-5-2-codex-deprecated
fetched_at: 2026-06-07T13:00:00+09:00
published_at: 2026-06-05
date_precision: date-only
category: policy
---

# 2026-06-05 GitHub Copilot GPT-5.2 / GPT-5.2-Codex 非推奨化

## 公式内容の日本語要約

GitHub Copilot で GPT-5.2 と GPT-5.2-Codex が非推奨化された。Copilot Chat、インライン編集、Ask / Agent モード、コード補完など大半の Copilot 体験で GPT-5.2 は使えなくなり、後継は GPT-5.5。GPT-5.2-Codex の後継は GPT-5.3-Codex。ただし GPT-5.2 は Copilot code review の一部としては引き続き利用可能。

## できるようになったこと（変わったこと）

- **GPT-5.2 → GPT-5.5 へ移行推奨**（Chat / インライン編集 / Ask / Agent / コード補完）。
- **GPT-5.2-Codex → GPT-5.3-Codex へ移行推奨**。
- GPT-5.2 は **Copilot code review でのみ継続利用可能**。
- 非推奨モデルの削除はシステム側で行われるため、ユーザー側の手動削除アクションは不要。
- Enterprise 管理者は、ワークフロー / 統合を後継モデルへ更新し、必要に応じてモデルポリシーで代替モデルへのアクセスを有効化する。

## 影響範囲

- 対象ユーザー: GitHub Copilot 利用者全般、特に GPT-5.2 / GPT-5.2-Codex を明示指定していた利用者・組織
- 対象プラン: 全 Copilot プラン（モデルポリシー設定は Business / Enterprise）
- API / UI / 管理者機能: モデル選択 UI、Enterprise モデルポリシー

## 教材化メモ

Copilot のモデル選択を扱う章のモデル一覧を更新し、GPT-5.2 / GPT-5.2-Codex を「非推奨（code review のみ継続）」として、後継 GPT-5.5 / GPT-5.3-Codex に置き換える。Enterprise 向けには「モデルポリシーで後継モデルを明示有効化する」運用注意を追記。

## 原文確認

- 公式見出し: GPT-5.2 and GPT-5.2-Codex deprecated
- 公式URL: https://github.blog/changelog/2026-06-05-gpt-5-2-and-gpt-5-2-codex-deprecated
- 原文全文は公式ページで確認してください。
