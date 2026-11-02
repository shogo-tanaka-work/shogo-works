---
date: 2026-10-28
title: "GitHub Universe 2026: Enterprise に Copilot 同梱、プラグイン統制 GA、コネクタ、SDK 改称"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-10-28-github-enterprise-now-includes-access-to-github-copilot
fetched_at: 2026-11-02T09:40:00+09:00
published_at: 2026-10-28T15:30:00Z
date_precision: timestamp
category: policy
---

# 2026-10-28 GitHub Universe 2026: Enterprise に Copilot 同梱、プラグイン統制 GA、コネクタ、SDK 改称

## 公式内容の日本語要約

**GitHub Enterprise に Copilot が同梱。** GitHub / Microsoft のアカウントチーム経由の enterprise では、ライセンスを持つ全利用者に Copilot が含まれる。これまで「Copilot の座席数」と「その利用者の AI 使用量」の2つを管理する必要があったが、**プラットフォームに含まれることで、管理対象は enterprise 予算に対する使用量が主になる。** セルフサーブ提供は段階的で、既存のセルフサーブ契約には影響しない。Copilot Business / Copilot Enterprise も引き続き提供。Enterprise ライセンスを持たない利用者は **Copilot Standalone（1ユーザー月10ドル）** で同じアクセスを得る。**Enterprise 経由・Standalone はいずれも Copilot Enterprise と同じ機能・モデルだが、座席あたりの月次 AI クレジットは含まれない。** 使用量は最初のリクエストから enterprise 予算に対して課金される（含まれる無償枠は無い）。

**リポジトリのプラグイン既定値と enterprise のプラグイン統制が GA**（VS Code / Copilot CLI / Copilot app）。信頼されたリポジトリは貢献者向けの既定プラグインをインストール・有効化でき、貢献者はポリシーが許す範囲で既定を無効化できる。**enterprise 管理者は承認済みマーケットプレイスを指定し、プラグインを必須化またはブロックできる。必須プラグインは自動でインストール・有効化され、利用者は無効化できない。managed settings はリポジトリ・個人の選択より優先される。**

**GitHub 検証済み MCP サーバー（コネクタ）が public preview。** MCP サーバーを探し、サインインを設定し、ツールごとに繰り返す作業が不要になり、**一度つなげば Copilot app / CLI / VS Code / クラウド / GitHub Mobile すべてで使える。** ローカルにインストールするものも管理する資格情報も無い。**開始時点で26サービス**（Slack、Figma、Notion、Sentry、Linear、Atlassian Rovo、Cloudflare、Vercel、Work IQ など）。

**GitHub Copilot SDK が Microsoft Copilot SDK へ移行。** GitHub Copilot ハーネスの SDK から、Microsoft と GitHub 製品を横断する共有エージェント基盤「Microsoft Copilot ハーネス」のプログラマブルなインターフェースへ位置づけが変わる。SDK リポジトリは Microsoft organization への移管に向けて更新が始まっている。**移行は段階的で、既存のパッケージ名・名前空間・一部ドキュメントは移行中も GitHub Copilot SDK を参照し続ける。既存利用者に即時の対応は不要。** サポート体制は変更なし。

## 影響範囲

- 対象ユーザー: GitHub Enterprise 契約者、Copilot Business / Enterprise 管理者
- 管理者: 必須プラグインは利用者が無効化できない。コネクタで外部サービス接続が容易になる（統制対象が増える）
- 課金: Enterprise 同梱は月次 AI クレジットを含まない。最初のリクエストから予算消費

## 教材化メモ

記事化しない（週次ソースの巡回記録）。**課金モデルの転換**が本体で、「座席を買う」から「使用量を予算で抑える」へ移った。無償枠が無いため、導入初月から使用量の可視化と上限設定が必須になる。**プラグイン必須化は、利用者が無効化できない形で管理者の設定が降りてくる最初の GA 機能**であり、Claude Code の managed settings と同じ構図。コネクタ26サービスは利便性と同時に**「どの外部サービスへ社内データが流れうるか」の統制対象が一気に増える**ことを意味する。

## 原文確認

- 公式URL: https://github.blog/changelog/2026-10-28-github-enterprise-now-includes-access-to-github-copilot 、https://github.blog/changelog/2026-10-28-repository-plugin-defaults-and-enterprise-plugin-controls-generally-available 、https://github.blog/changelog/2026-10-28-connect-your-tools-to-copilot-without-all-the-setup 、https://github.blog/changelog/2026-10-28-github-copilot-sdk-is-becoming-microsoft-copilot-sdk
- 原文全文は公式ページで確認してください。
