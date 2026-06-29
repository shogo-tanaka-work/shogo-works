---
date: 2026-06-29
title: "GitHub Copilot：Opus 4.6 (fast) 廃止実施（2026-06-29）"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-06-18-upcoming-deprecation-of-opus-4-6-fast/
fetched_at: 2026-06-29T12:00:00+09:00
published_at: 2026-06-18T00:00:00Z
rollout_date: 2026-06-29
date_precision: date-only
category: incident
---

# 2026-06-29 GitHub Copilot：Opus 4.6 (fast) 廃止実施

## 公式内容の日本語要約

GitHub は 2026-06-18 に予告していた通り、2026-06-29 に Opus 4.6 (fast) を GitHub Copilot の全体験から廃止した。対象は Copilot Chat、インライン編集、コード補完を含む全 Copilot 機能。廃止後、Opus 4.6 (fast) はモデル選択肢から自動的に除外される。推奨の代替モデルは Opus 4.8 (fast)。

## できるようになったこと（変化した点）

- Copilot Chat、インライン編集、コード補完から Opus 4.6 (fast) が削除された
- モデル選択画面で Opus 4.6 (fast) が表示されなくなった
- Enterprise / Organization 管理者は Copilot 設定から Opus 4.8 (fast) へのアクセスを有効化できる
- 廃止後の管理者側での手動削除操作は不要（自動除外）

## 影響範囲

- 対象ユーザー: Opus 4.6 (fast) を使用していた全 Copilot ユーザー
- 対象プラン: Copilot Individual / Business / Enterprise
- API / UI / 管理者機能: Enterprise 管理者はモデルポリシーを更新して Opus 4.8 (fast) を有効化する必要がある

## 教材化メモ

- モデル廃止時の Enterprise 管理者アクション（ポリシー更新）の具体例として使える
- 「廃止後は自動除外されるが、代替を事前に有効化しないとユーザーが選択できない」というアーキテクチャの説明材料

## 原文確認

- 公式見出し: "Upcoming deprecation of Opus 4.6 (fast)"
- 公式URL: https://github.blog/changelog/2026-06-18-upcoming-deprecation-of-opus-4-6-fast/
- 原文全文は公式ページで確認してください。
