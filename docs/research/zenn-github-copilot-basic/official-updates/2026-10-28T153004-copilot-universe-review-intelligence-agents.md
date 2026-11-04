---
date: 2026-10-28
title: "GitHub Universe 2026: code review の Max と承認、Agent Merge、Agentic Workflows GA、GitHub intelligence"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-10-28-copilot-code-review-merge-with-confidence-with-max-and-approvals
fetched_at: 2026-11-02T09:40:00+09:00
published_at: 2026-10-28T15:30:00Z
date_precision: timestamp
category: release
---

# 2026-10-28 GitHub Universe 2026: code review の Max と承認、Agent Merge、Agentic Workflows GA、GitHub intelligence

## 公式内容の日本語要約

**Copilot code review に Max（public preview）、Copilot approvals が GA。** Max は Lite / Balanced に続く3番目の effort で、**複数プロバイダーのモデルにまたがる独立したレビューエージェントを並列で走らせ、集約エージェントが所見を突き合わせ、不一致を解消し、正確性を再確認してから1本のレビューにまとめる。** 認証ロジックや共有ライブラリのような risk の高い変更向け。**Copilot approvals が GA** になり、マージ可能と判断した PR を Copilot が承認できる。対象は Pro / Pro+ / Max / Business / Enterprise。

**Agent Merge が GitHub の PR 画面に統合。** PR のマージボックスで Watch and fix を選ぶと、失敗した Actions ワークフローやマージコンフリクトといったブロッカーが現れた時点で、Copilot がクラウド開発環境で修正に入る。Actions の修正・コンフリクト解消のどちらを任せるかを選べる。**Copilot 設定から全 PR で既定有効にできる。** auto-merge と併用すると、Copilot がマージ可能状態を維持し、要件が揃った時点で GitHub がマージする。

**GitHub Agentic Workflows が GA**（GitHub Next の OSS）。自動化を自然言語の Markdown で定義し、標準の Actions YAML へコンパイルする。**GitHub Actions なので既存の runner group とポリシー制約をそのまま再利用する。** Copilot でも自前のコーディングエージェントでも動かせる。

**GitHub intelligence** は GitHub データのグラフから来る文脈・学習レイヤー。(1) Memory がセッション間で知識を運ぶ、(2) Dreaming が文脈を最新に保つ、(3) Code search がチェックアウトの外へ届く。エージェントがアクセスできる範囲は統制できる。

**Issue artifacts が public preview。** エージェントが生成した成果物や文脈を issue に直接添付する。Markdown（計画・調査・原因分析）、Slack / Teams スレッドやプロトタイプへのリンク、HTML（可視化・フローチャート、レンダリング表示とソース表示を切替可）。GitHub App のセッション中に作られた artifact は自動で当該 issue へ添付される。**`gh issue artifact` コマンド**（create / edit / list / view / download / delete）も追加。

**Copilot app に GitHub security extension（public preview）。** リポジトリの code scanning アラートを Copilot app から離れずに扱える。重大度順に一覧・検索・絞り込みし、複数選択して Copilot に Explain / Fix を依頼できる。**Copilot の修正はローカルの作業コピーのみで、commit も push もしない。**

## 影響範囲

- 対象ユーザー: Copilot 有料プラン、GitHub Actions 利用組織
- 管理者: Copilot approvals の GA により、PR 承認の主体に Copilot が入る。ブランチ保護・レビュー必須設定の見直し対象

## 教材化メモ

記事化しない（週次ソースの巡回記録）。**「Copilot が PR を承認できる」が GA になった**のは統制上いちばん重い。レビュー必須を満たす主体に Copilot が入るため、「人のレビューを1件必須」としている組織は、その要件が Copilot で満たされてよいかを明示的に決める必要がある。Max の実装（複数プロバイダーのモデルを並列に走らせ集約エージェントが突き合わせる）は、**単一モデルの盲点を別モデルで埋めるという多数決型の設計**で、自作のレビューハーネスの参考になる。Agentic Workflows が「自然言語 Markdown → Actions YAML へコンパイル」なのは、既存のポリシー・runner 統制を壊さずにエージェントを入れる方法として筋がよい。

## 原文確認

- 公式URL: https://github.blog/changelog/2026-10-28-copilot-code-review-merge-with-confidence-with-max-and-approvals 、https://github.blog/changelog/2026-10-28-agent-merge-watches-and-fixes-pull-requests-in-the-cloud 、https://github.blog/changelog/2026-10-28-github-agentic-workflows-generally-available 、https://github.blog/changelog/2026-10-28-github-intelligence-puts-your-code-context-and-history-to-work 、https://github.blog/changelog/2026-10-28-issue-artifacts-are-now-in-public-preview 、https://github.blog/changelog/2026-10-28-security-extension-for-the-github-copilot-app
- 原文全文は公式ページで確認してください。
