---
date: 2026-07-15
title: "Grok Build プライバシー問題を受けてオープンソース化、データ保持デフォルトOFFへ"
service: "xAI / Grok"
source: https://x.ai/news/grok-build-open-source
fetched_at: 2026-07-16T13:43:23+09:00
published_at: 2026-07-15
date_precision: date-only
category: incident
---

# 2026-07-15 Grok Build オープンソース化（プライバシー問題対応）

## 公式内容の日本語要約

xAIのコーディングエージェントCLI「Grok Build」に、ユーザーの明示的同意なくディレクトリ全体（SSH鍵、パスワードマネージャーDB、文書、写真、Gitの全履歴・コミット済みシークレットを含む）をGoogle Cloud Storageへアップロードしてしまう不具合があったことが、セキュリティ研究者のワイヤーレベル分析（2026-07-12公開）により発覚した。コーディングタスクに実際必要なデータ量の約27,800倍にあたる量が送信されていたと報告されている。

xAIは2026-07-12付でGrok Build全ユーザーのデータ保持をデフォルトOFFに変更し、これまでにアップロードされた全ユーザーデータを削除すると発表。Elon Musk氏も「これまでSpaceXAIにアップロードされた全ユーザーデータは完全に削除される」とコメントした。あわせて2026-07-15、信頼回復策としてGrok Build本体（約84万行のRustコード、うちベンダー化コードは約3%）をApache 2.0ライセンスでGitHub（xai-org/grok-build）に全面公開し、ローカルファースト運用（自前ビルド・ローカル推論接続）を可能にした。利用制限もリセットされた。

## できるようになったこと

- Grok Buildのソースコード全体をApache 2.0で確認・自前ビルド可能に（github.com/xai-org/grok-build）
- データ保持がデフォルトOFFになり、過去アップロード分は削除済み
- ローカル推論接続によるローカルファースト運用が可能に

## 影響範囲

- 対象ユーザー: Grok Build（コーディングエージェントCLI）の全利用者、特に問題発覚前の非ZDR（Zero Data Retention）設定利用者
- 対象プラン: Grok Build全プラン
- API / UI / 管理者機能: データ保持設定、ローカル推論接続、CLIビルド

## 教材化メモ

- コーディングエージェントCLIが「読み取ったファイルだけでなくディレクトリ・リポジトリ全体を無断送信していた」という事例は、他社エージェントCLI（Claude Code、Codex等）を使う際の「どこまでデータが送信されるか」を確認する重要性を伝える教材ネタとして価値が高い。
- xAIの対応（謝罪+データ削除+オープンソース化+ローカルファースト化）は、インシデント後の信頼回復策の一事例として紹介できる。
- selection-rubricメモ: 重要度・実務影響ともに高い（セキュリティ/プライバシー、利用者のデータ送信リスクへの認識に直結）が、公式情報が二次報道・GitHub Issue経由中心で一次情報（x.ai/news）本文の直接確認ができていない点に留意。記事化する場合は追加の一次情報確認を推奨。

## 原文確認

- 公式見出し: "Grok Build is Now Open Source"（x.ai/news、直接WebFetchは403でブロックされたためタイトル・URLはWebSearch経由で確認）
- 公式URL: https://x.ai/news/grok-build-open-source
- 補足裏取りURL: https://simonwillison.net/2026/Jul/15/grok-build/ 、https://github.com/xai-org/grok-build 、https://thehackernews.com/2026/07/grok-build-uploads-entire-git.html
- 原文全文は公式ページで確認してください（本ファイル作成時点でx.ai/news本文の直接WebFetchは403のため未確認。二次ソース複数で内容は一致）。
