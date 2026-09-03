---
date: 2026-09-02
title: "Claude でコマースエージェントを構築するブループリントを公開"
service: "Claude"
source: https://claude.com/blog/claude-for-commerce-agents
fetched_at: 2026-09-03T09:32:00+09:00
published_at: 2026-09-02
date_precision: date-only
category: release
---

# 2026-09-02 Claude のコマースエージェント・ブループリント

## 公式内容の日本語要約

Anthropic が、**Claude 上でコマースエージェントを構築するためのブループリント**を公開した。小売事業者と EC プラットフォームが、買い物客向けエージェントと事業者向けエージェントを短期間で立ち上げられるようにするものである。実装一式は **GitHub の `anthropics/commerce-agents`** で公開されており、小売・旅行・通信・チケットの各業種向けのデモが用意されている。

同日、設計思想を解説する記事「A guide to the anatomy of effective commerce agents」も併せて公開されている。

成果として、Claude を使った買い物エージェントの導入顧客で **カートが最大35%大きくなり、購入完了率が60%高くなった**という数値を挙げている。

**ショッピングエージェント側**の機能は、カタログ検索と複数商品の組み立て、顧客の好みに応じたパーソナライズ、会話内での商品表示と比較、カート構築とチェックアウト連携、注文追跡・返品・返金ポリシーといったカスタマーサービスである。**操作的なアップセルを防ぐガードレールが組み込まれている**点が明示されている。

**マーチャントエージェント側**は、売上分析、在庫の追跡とアラート、価格・プロモーションの提案、マーケティング施策のドラフト作成を担う。**提案された変更には人間による承認（human-in-the-loop）を挟む**設計である。

デプロイ先は幅広い。**Claude Messages API、Claude Agent SDK、Claude Managed Agents（ベータ）、Amazon Bedrock、Microsoft Foundry、Google Cloud Vertex AI** に対応し、カスタマイズ用の Claude Code プラグインも含まれる。

パートナーとして **Shopify、Priceline、Accenture、Mastercard、Visa** が挙げられ、Intuit、Klaviyo、Wix、Zomato、Fetch、Square からも支持が示されている。**価格は公表されておらず、営業への問い合わせに案内されている**。

## できるようになったこと

- **GitHub 公開のブループリント**（`anthropics/commerce-agents`）から、ショッピング／マーチャント両エージェントを構築できる
- **Messages API / Agent SDK / Managed Agents（ベータ）/ Bedrock / Foundry / Vertex AI** で動かせる
- **操作的アップセルの防止ガードレール**と、事業者側変更の**人間承認フロー**が既定で組み込まれている
- 小売・旅行・通信・チケットの**業種別デモ**が参照できる

## 影響範囲

- 対象ユーザー: 小売・EC 事業者、EC プラットフォーム、それらの開発を受託する側
- 対象プラン: Claude Platform（API）と主要3クラウド。Managed Agents はベータ
- API / UI / 管理者機能: API / SDK 中心。参照実装とプラグインの提供

教材化メモ: src/content/ai-news-notes/claude/commerce-agents-blueprint.mdx

## 原文確認

- 公式見出し: Building commerce agents with Claude
- 公式URL: https://claude.com/blog/claude-for-commerce-agents
- 併載記事: https://claude.com/blog/the-anatomy-of-effective-commerce-agents
- 参照実装: https://github.com/anthropics/commerce-agents
- 原文全文は公式ページで確認してください。
