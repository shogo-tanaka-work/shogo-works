---
date: 2026-09-22
title: "GitHub Copilot に Claude Opus 5.5 を追加。Pro+ 以上で選択可"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-09-22-claude-opus-5-5-is-now-available-in-github-copilot
fetched_at: 2026-09-28T09:40:00+09:00
published_at: 2026-09-22
date_precision: date-only
category: release
---

# 2026-09-22 GitHub Copilot に Claude Opus 5.5

## 公式内容の日本語要約

Anthropic の **Claude Opus 5.5** が GitHub Copilot のモデル選択に追加された。09-25 の週次リリースまとめによると、**提供対象は Pro+ 以上**である。

同じモデルは同週に複数の面へ同時投入されている。**Claude Code は 09-22 の v2.1.280 で Opus 5.5 を既定 Opus に切り替え**（`../zenn-claude-code-release-basic/official-updates/2026-09-22T163814-claude-code-v2-1-280.md`）、**Microsoft Copilot も 09-22 の blog で model choice への追加を告知**している（`../microsoft-copilot/official-updates/2026-09-22T000000-m365-copilot-more-models-opus-5-5-gpt-6-sol.md`）。**同一モデルが Anthropic 自社 CLI・GitHub・Microsoft の3経路へ同日前後で入る**構図である。

**前週の廃止告知と関係する。** 10-02 廃止対象に **Claude Opus 4.7** が含まれ、代替は Claude Opus 5 と案内されていた。**今週 5.5 が入ったため、残5日の移行先として 5 と 5.5 の2つが並ぶ。**

## できるようになったこと

- Copilot のモデルピッカーから Claude Opus 5.5 を選べる（Pro+ 以上）

## 影響範囲

- 対象ユーザー: GitHub Copilot 利用者
- 対象プラン: Pro+ 以上
- API / UI / 管理者機能: Business / Enterprise はモデルポリシーの設定に従う

## 教材化メモ

- **同一モデルの提供面が同週に3経路へ広がった点**を教材に使える。利用者から見ると「どこから使うのが安いか」がプラン構成で決まる。モデルの性能比較ではなく**調達経路の比較**が実務の論点になる、という読み方。

## 原文確認

- 公式見出し: Claude Opus 5.5 is now available in GitHub Copilot
- 公式URL: https://github.blog/changelog/2026-09-22-claude-opus-5-5-is-now-available-in-github-copilot
- 原文全文は公式ページで確認してください。
