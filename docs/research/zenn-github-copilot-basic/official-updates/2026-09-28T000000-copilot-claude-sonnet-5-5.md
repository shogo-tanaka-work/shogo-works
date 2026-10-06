---
date: 2026-09-28
title: "GitHub Copilot に Claude Sonnet 5.5 が GA"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-09-28-claude-sonnet-5-5-in-github-copilot
fetched_at: 2026-10-05T09:40:00+09:00
published_at: 2026-09-28T00:00:00Z
date_precision: date-only
category: release
---

# 2026-09-28 GitHub Copilot に Claude Sonnet 5.5 が GA

## 公式内容の日本語要約

Claude Sonnet 5.5 が GitHub Copilot で一般提供になった。対象は **Copilot Pro / Pro+ / Max / Business / Enterprise** で、Pro を含む全有料プランに入っている。

利用できるクライアントは VS Code、Visual Studio、Copilot CLI、GitHub Copilot app、github.com、GitHub Mobile（iOS / Android）、JetBrains IDEs、Xcode、Eclipse。

課金は **provider list pricing の usage-based billing** で、プレミアムリクエストの倍率ではなくプロバイダーの定価が基準になる。

**管理者の対応が必要な点が1つある。** 新モデルは既定ポリシーでは**自動的に有効化**される。Business / Enterprise で意図しないモデルを増やしたくない場合は、model policy で全体既定を切るか当該モデルを明示的に無効化する必要がある。

公式説明では「機能実装やバグ修正のような範囲の決まった日常業務向け」で、Sonnet 5 と同等のコーディング性能をより少ない計算資源・短い時間で出すとされている。

## できるようになったこと

- Copilot Pro を含む全有料プランで Sonnet 5.5 を選択
- 9クライアントから同一モデルを利用

## 影響範囲

- 対象ユーザー: Copilot 全有料プランの利用者、Business / Enterprise 管理者
- 対象プラン: Pro / Pro+ / Max / Business / Enterprise
- API / UI / 管理者機能: model policy（既定で自動有効）

## 教材化メモ

- **「新モデルは既定で自動有効」というポリシーの既定値そのものが統制上の論点**である。モデル追加のたびに管理者が審査する運用にしたい組織は、全体既定を先に切っておく必要がある。後追いで無効化する運用は、追加から無効化までの期間が常に開く。
- 同じモデルが **2026-09-30 に Microsoft Copilot 側にも入った**。ベンダー横断で同一モデルが同週に配られる構造になっており、「どのツールで何が使えるか」をツール単位で管理する発想が合わなくなってきている。

## 原文確認

- 公式見出し: Claude Sonnet 5.5 in GitHub Copilot
- 公式URL: https://github.blog/changelog/2026-09-28-claude-sonnet-5-5-in-github-copilot
- 原文全文は公式ページで確認してください。
