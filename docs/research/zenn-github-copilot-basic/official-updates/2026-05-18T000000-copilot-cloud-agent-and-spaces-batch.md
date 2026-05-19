---
date: 2026-05-18
title: "GitHub Copilot 2026-05-18 まとめ（cloud agent / Spaces API / web chat 等6件）"
service: "GitHub Copilot"
source: https://github.blog/changelog/label/copilot/
fetched_at: 2026-05-19T10:17:48+09:00
published_at: 2026-05-18
date_precision: date-only
category: release
---

# 2026-05-18 GitHub Copilot まとめ（6件）

## 公式内容の日本語要約

GitHub Copilot changelog に 2026-05-18 付で6件が掲載された。中核は cloud agent と Spaces 関連の GA・拡張。

- **Remote control for Copilot CLI sessions が GA**: ターミナルで開始した作業を、GitHub Mobile / github.com（web）/ VS Code / JetBrains から進捗監視・途中操作・計画調整・停止・権限/プロンプト応答できる。非 GitHub リポジトリやリポジトリ未関連ディレクトリにも対応。Copilot Business / Enterprise は管理者が remote control ポリシーを有効化する必要あり。
- **Copilot Spaces API が GA**: Spaces の作成/取得/更新/削除とコラボレーター・リソース管理をプログラムから操作できる。大規模に複数 Spaces を運用する企業向け。
- **cloud agent に低コストモデル追加**: Claude Haiku 4.5 と GPT-5.4-mini（いずれもコスト乗数 0.33x）を選択可能。単純な変更には小型/高速モデル、複雑作業には高性能モデルと使い分けできる。
- **Copilot on web のコンテキスト質問**: chat が別 URL へ遷移せず、閲覧中ページ（PR / Issue / リポジトリ）にコンテキストパネルとして開く。閲覧した PR/Issue/リポジトリが会話に自動アタッチされ、複数横断の質問や agent session へのエスカレーションが可能。全 Copilot プランで GA。
- **失敗 Actions のワンクリック修正**: cloud agent で失敗した GitHub Actions をワンクリック修正できる（improvement）。
- **cloud agent 構成の REST API 監査**: リポジトリの Copilot cloud agent 構成を REST API で監査できる。

## できるようになったこと

- Copilot CLI session をモバイル/web/VS Code/JetBrains から遠隔制御（GA、非 GitHub リポジトリ対応）。
- Copilot Spaces を API で CRUD・コラボレーター/リソース管理（GA）。
- cloud agent でタスク複雑度に応じ Claude Haiku 4.5 / GPT-5.4-mini（0.33x）を選択しコスト最適化。
- web 上で閲覧中の PR/Issue/リポジトリをコンテキストに Copilot へ質問（全プラン GA）。
- 失敗した Actions をワンクリックで cloud agent に修正させる。
- cloud agent 構成を REST API で監査。

## 影響範囲

- 対象ユーザー: Copilot 利用開発者、cloud agent / Spaces を運用する企業、情シス・プラットフォーム管理者
- 対象プラン: 全 Copilot プラン（CLI remote control は Business / Enterprise で管理者有効化が必要）
- API / UI / 管理者機能: Copilot CLI / Spaces API / cloud agent モデル選択 / web chat / REST API 監査

## 教材化メモ

GitHub Copilot 教材では「cloud agent のコスト最適化（モデル使い分け）」「Spaces API による運用自動化」「CLI remote control の管理者ポリシー」を、企業導入・ガバナンス章の恒久論点として最小反映できる。6件の changelog 個別詳細は持ち込まず、運用判断に効く3点に絞る。

## 原文確認

- 公式見出し: 2026-05-18 GitHub Copilot changelog（6エントリ）
- 公式URL: https://github.blog/changelog/label/copilot/
  - https://github.blog/changelog/2026-05-18-remote-control-for-copilot-cli-sessions-now-generally-available-on-mobile-web-and-vs-code
  - https://github.blog/changelog/2026-05-18-copilot-spaces-api-now-generally-available
  - https://github.blog/changelog/2026-05-18-copilot-cloud-agent-fast-cost-efficient-models-for-simple-tasks
  - https://github.blog/changelog/2026-05-18-ask-questions-in-context-with-copilot-on-web
  - https://github.blog/changelog/2026-05-18-one-click-fixes-for-failing-actions-with-copilot-cloud-agent
  - https://github.blog/changelog/2026-05-18-audit-repository-copilot-cloud-agent-configuration-via-the-rest-api
- 原文全文は公式ページで確認してください。
