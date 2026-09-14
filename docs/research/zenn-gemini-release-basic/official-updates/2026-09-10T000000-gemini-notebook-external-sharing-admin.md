---
date: 2026-09-10
title: "Gemini Notebook の外部共有を管理コンソールで4段階制御できるように"
service: "Google Workspace / Gemini Notebook"
source: https://workspaceupdates.googleblog.com/2026/09/manage-external-sharing-for-gemini-notebook-in-the-Admin-console.html
fetched_at: 2026-09-11T09:02:00+09:00
published_at: 2026-09-10
date_precision: date-only
rollout_date: 2026-09-10
category: enhancement
---

# 2026-09-10 Gemini Notebook の外部共有制御

## 公式内容の日本語要約

Google Workspace の管理者が、**Gemini Notebook の外部共有を管理コンソールから粒度をもって制御**できるようになった。

**従来は「組織全体で Gemini Notebook をオンにするかオフにするか」という単一トグルしか無かった。** 外部共有だけを止めたい場合でも、機能そのものを全面禁止するしかなかったということである。今回、その間に4段階が入った。

- **Off**: ドメイン外への共有不可（**これが既定値**）
- **Trusted Domains**: 許可リストに登録したドメインのメールアドレスに限り外部共有可
- **On**: 任意の外部メールアドレスへ共有可
- **On with public notebook sharing**: リンクを知る誰でも閲覧できる公開ノートブックを作成・共有可

設定は**ドメイン単位・組織部門（OU）単位・グループ単位**で適用できる。部署ごとに方針を変えられる。

ロールアウトは Rapid Release / Scheduled Release 両ドメインで **2026-09-10 開始、機能が見えるまで最大15日**（＝2026-09-25 前後まで）。**全 Google Workspace 顧客が対象。** エンドユーザー側の設定は無い。

教材化メモ: src/content/ai-news-notes/gemini/gemini-notebook-external-sharing-controls.mdx

## できるようになったこと

- 外部共有を Off / Trusted Domains / On / On with public sharing の4段階で制御できる
- ドメイン・OU・グループ単位で別々に適用できる
- 既定は Off（＝管理者が明示的に開けない限り外部共有は起きない）

## 影響範囲

- 対象ユーザー: Google Workspace 管理者
- 対象プラン: 全 Google Workspace 顧客
- API / UI / 管理者機能: 管理者機能

## 原文確認

- 公式見出し: Manage external sharing for Gemini Notebook in the Admin console
- 公式URL: https://workspaceupdates.googleblog.com/2026/09/manage-external-sharing-for-gemini-notebook-in-the-Admin-console.html
- 原文全文は公式ページで確認してください。
