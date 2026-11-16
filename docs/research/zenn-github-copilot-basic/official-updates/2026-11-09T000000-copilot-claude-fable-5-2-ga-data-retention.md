---
date: 2026-11-09
title: "GitHub Copilot で Claude Fable 5.2 が GA。データ保持が既定で、ZDR は年内までの時限免除"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-11-09-claude-fable-5-2-in-github-copilot
fetched_at: 2026-11-16T09:50:00+09:00
published_at: 2026-11-09
date_precision: date-only
category: release
---

# 2026-11-09 GitHub Copilot の Claude Fable 5.2 GA

## 公式内容の日本語要約

Anthropic の Claude Fable 5.2 が GitHub Copilot で一般提供になった。大規模コードベースでの複雑・多段のコーディング作業向けで、GitHub の初期検証では Fable 5.1 より少ない手数・ツール呼び出しで多くのタスクを解いたとしている。課金はプロバイダー定価の usage-based billing。

対象は Copilot Pro+ / Max / Business / Enterprise。モデルセレクターに出る場所は VS Code、Visual Studio、Copilot CLI、Copilot coding agent、GitHub Copilot app、github.com、GitHub Mobile（iOS / Android）、JetBrains IDEs、Xcode、Eclipse。段階展開。

## 利用者側の対応（データ保持の条件が本体）

- **Copilot Enterprise / Business の管理者は、Copilot 設定で Claude Fable 5.2 のポリシーを有効化する必要がある。既定はオフ。**
- **Fable 5.2 は既定でデータ保持（data retention）を要求する。** Anthropic が安全性分類器の運用のためにプロンプトと出力を保持する。保持データはモデル学習には使わないとされる。**ポリシーを有効化することが、この要件への同意とみなされる。**
- Fable 5 / 5.1 / 5.2 を除く他の Claude モデルは、従来どおりゼロデータ保持（ZDR）で動く。
- **ZDR の時限免除**: 適格なエンタープライズは Fable 5 / 5.1 / 5.2 を**暦年末まで**ZDR で利用できる。以降は Enterprise Frontier Safeguards（EFS）が前提となり、自社管理の鍵によるストレージ・暗号化などの選択肢が提供される予定。適格性の判定と有効化は GitHub アカウントチームの担当で、GitHub Support では対応できない。

## 影響範囲

- 対象ユーザー: Copilot Pro+ / Max / Business / Enterprise
- 対象プラン: 上記。管理者のポリシー有効化が前提（Business / Enterprise）
- 期限: **ZDR の時限免除は 2026-12-31 まで。本サマリー作成時点（2026-11-16）で残り45日**

## 教材化メモ

記事化しない（本Skillの記事化対象は Claude Code / Codex のロールアップのみ）。「モデルを有効化すると、データ保持の条件も一緒に受け入れることになる」型の例として使える。モデル選定の教材では、性能表ではなくデータ取り扱い条件が意思決定を決めるケースとして置ける。

## 原文確認

- 公式見出し: Claude Fable 5.2 in GitHub Copilot
- 公式URL: https://github.blog/changelog/2026-11-09-claude-fable-5-2-in-github-copilot
- 原文全文は公式ページで確認してください。
