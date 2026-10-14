---
date: 2026-10-07
title: "GitHub Copilot に Claude Haiku 5.5（Pro 以上の全有料プラン、9クライアント以上）"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-10-07-claude-haiku-5-5-in-github-copilot
fetched_at: 2026-10-12T09:50:00+09:00
published_at: 2026-10-07
date_precision: date-only
category: release
---

# 2026-10-07 GitHub Copilot に Claude Haiku 5.5

## 公式内容の日本語要約

**Claude Haiku 5.5** が GitHub Copilot のモデルピッカーへ追加された。対象は **Copilot Pro / Pro+ / Max / Business / Enterprise**。

選択できるクライアントは **Visual Studio Code、Visual Studio、Copilot CLI、Copilot cloud agent、Copilot app、github.com、GitHub Mobile（iOS / Android）、JetBrains IDEs、Xcode、Eclipse**。段階ロールアウトのため、まだ見えない利用者もいる。

**プレミアムリクエストの乗数は記載が無い。** 公式は「usage-based billing のもとでプロバイダーのリスト価格で課金される」と述べ、詳細はモデルと価格のドキュメントへ送っている。

**組織での既定有効化について、本告知は本モデル固有の記述を持たない。** ただし「default model enablement のもとでは、管理者が全体既定を切っているか当該モデルを明示的に無効化していない限り、新モデルは自動的に有効になる」と書かれている。**その方針に従えば、本モデルは既定で有効である。** Business / Enterprise の管理者は Copilot 設定の model policy でアクセスを管理する。

## できるようになったこと

- Pro 以上の全有料プランで Claude Haiku 5.5 をモデルピッカーから選べる

## 影響範囲

- 対象ユーザー: Copilot Pro / Pro+ / Max / Business / Enterprise
- 対象プラン: 上記（Free は対象外）
- API / UI / 管理者機能: モデルピッカー、Business / Enterprise の model policy

## 教材化メモ

- **同一モデルが同じ週に複数製品へ入る構造が、今週も再現した。** Haiku 5.5 は Anthropic 公式の公開（2026-10-07）と同日に Copilot へ入り、**Claude Code では 2.1.293 で既定 Haiku モデルへ昇格した**（同日）。**モデルの供給は横断で同時に起き、差は「どの製品の管理設定で止められるか」だけになる。**
- **「新モデルは既定で有効」という方針が、管理者の作業順序を決める。** モデル単位で後追い無効化する運用は、追加から無効化までの期間が必ず開く。**全体既定を先に切る**という判断を、この告知が繰り返し要求している。
- 乗数が告知に書かれず「プロバイダーのリスト価格」と抽象化された点は、**コスト見積りをモデル名で固定できない**ことを示す。

## 原文確認

- 公式見出し: Claude Haiku 5.5 in GitHub Copilot
- 公式URL: https://github.blog/changelog/2026-10-07-claude-haiku-5-5-in-github-copilot
- 原文全文は公式ページで確認してください。
