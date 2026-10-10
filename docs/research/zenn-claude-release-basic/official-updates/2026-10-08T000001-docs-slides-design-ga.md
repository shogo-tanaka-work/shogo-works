---
date: 2026-10-08
title: "Docs / Slides / Design が beta を抜け全プランへ。standalone Design は 2026-12-14 に閉鎖"
service: "Claude（Artifacts）"
source: https://claude.com/resources/articles/dashboards-and-motion
fetched_at: 2026-10-09T09:20:00+09:00
published_at: 2026-10-08
date_precision: date-only
category: policy
---

# 2026-10-08 Docs / Slides / Design が GA。standalone Design は 2026-12-14 閉鎖

## 公式内容の日本語要約

Dashboards / Motion の発表と同じ記事で、**Docs / Slides / Design が beta を抜け、Free を含む全プランで利用可能**になったことが告知された。公式は累計で 4,500 万件超の docs / decks / designs が作られたとしている。

Enterprise 向けの強化として、Artifacts の **CMEK 対応**、管理者が選ぶテンプレート、チームでの共同編集、（管理者が許可した場合の）組織外共有、書式を保つ PowerPoint / PDF 書き出し、編集可能な Google Slides への直接書き出し、モバイル編集が挙がっている。

**期限が2つある。** 1つは **2026-10-15**。Enterprise では Docs / Slides / Design が**この日に既定で有効化される**（管理者は前倒しで有効化もできる）。もう1つは **2026-12-14** で、**standalone の `claude.ai/design` が閉鎖される**。Design は 2026-09-16 から Claude の会話内で動いており、今回その移行が完了する。

移行で失われるものが明記されている。**standalone 側の Claude とのチャットとプロジェクトのコメントは移行されず、閉鎖後は参照できない。** standalone プロジェクトの公開リンクも同時に停止する。デザインシステムは Artifacts ページから移行でき、プロジェクト自体は閉鎖まで動く。

## できるようになったこと

- Docs / Slides / Design が Free を含む全プランで利用可能（GA）
- Artifacts が CMEK に対応、管理者テンプレート、共同編集、組織外共有に対応
- 書式を保った PowerPoint / PDF 書き出しと、編集可能な Google Slides への直接書き出し

## 影響範囲

- 対象ユーザー: 全プラン（Free を含む）
- 対象プラン: GA
- API / UI / 管理者機能: **2026-10-15 に Enterprise で既定有効化。2026-12-14 に `claude.ai/design` 閉鎖**（チャット・コメント・公開リンクは引き継がれない）

教材化メモ: src/content/ai-news-notes/claude/docs-slides-design-ga.mdx

## 原文確認

- 公式見出し: Docs, Slides, and Design are out of beta / Claude Design moved into Claude
- 公式URL: https://claude.com/resources/articles/dashboards-and-motion
- 原文全文は公式ページで確認してください。
