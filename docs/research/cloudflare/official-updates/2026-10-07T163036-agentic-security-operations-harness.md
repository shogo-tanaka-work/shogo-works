---
date: 2026-10-07
title: "エビデンス接地型のエージェント型セキュリティ運用ハーネス（Managed Defense の早期ベータも告知）"
service: "Cloudflare"
product: "Workers, Workers AI, Workflows, D1, R2, Durable Objects, AI Search"
source: https://blog.cloudflare.com/agentic-security-operations/
fetched_at: 2026-10-08T09:30:00+09:00
published_at: 2026-10-07T16:30:36Z
date_precision: timestamp
category: enhancement
---

# 2026-10-07 エージェント型セキュリティ運用ハーネス

## 公式内容の日本語要約

Cloudflare が、自社の Managed Defense アナリストがセキュリティアラートをトリアージ・調査するために内製したマルチエージェントハーネスの構成を公開した。**事例解説が主体だが、対象顧客向けに Managed Defense の早期ベータも告知している。**

構成は次の順で動く。

1. **決定論的な recon**: モデルを1回も呼ぶ前に、バージョン管理された API 呼び出しで顧客 ID、検知履歴、トラフィックのベースライン、適用結果、ネットワーク観測を収集する
2. **Clef トリアージ**: 各アラートを誤検知らしさでスコアリングし、ノイズと判定されたものは専門エージェントの分析を飛ばす
3. **4つの専門エージェントを並列実行**: トラフィック分析、顧客コンテキスト、グローバルテレメトリ（集計値のみ）、脅威インテリジェンス
4. **synthesis エージェント**: 型付きの所見を1つのアドバイザリへ統合する。**新しい証拠を取りに行くことはできず、承認された語彙の外から分類を選ぶこともできない**
5. **ケース集約**: 関連アラートをまとめ、実際の影響範囲はアナリストが確認する

**中核にある「エビデンス接地（evidence grounding）」は、モデル推論の前に決定論的コードが証拠を集めてスコープを固定するという設計である。** 各調査にはバージョン付きの証拠パッケージが与えられ、専門エージェントはそこから引用しなければならない。アプリケーションコード側が、**すべての引用が実在し、その調査に属し、主張を裏づけているかを検証する。** さらにアドバイザリは「未確認」「確認したが一致なし」「不在の証拠を確認」を区別し、**データ欠損がクリーンな結果と誤読されないようにしている。** モデルはテナント境界を越えられず、アナリストの代わりに行動もできない。最終判断の責任はアナリストに残る。

使用製品は Workers（アプリコードが証拠を受け入れ結果を検証）、Workers AI（Clef を実行）、Workflows（段階の調整と完了分の保存による再開）、D1（調査・アドバイザリの状態）、R2（境界付きコンテキストと証拠アーティファクト）、Durable Objects（ケースチャットの状態）、Flue と AI Search（ケースチャットと enrichment）。外部モデルとして OpenAI の GPT-5.6 Cyber と Anthropic の Mythos を併用している。**Agents SDK、AI Gateway、Containers は言及されていない。**

顧客向けには、WAF / DDoS protection / Magic Transit などを使っている場合にアカウントチームへ Managed Defense の追加を相談できるとしている。Custom Managed レベルと継続稼働型エージェントは今後の予定。**Clef はオープンソースの決定モデルだが、ハーネス本体のコードは公開されていない。**

## できるようになったこと

- 対象製品の利用者が Managed Defense の早期ベータを相談できる
- 引用検証付きマルチエージェント構成の実装詳細を、製品名レベルで参照できる

## 影響範囲

- 対象ユーザー: Cloudflare のアプリケーションセキュリティ利用者、エージェント基盤を設計する開発者
- 対象プラン: Managed Defense は早期ベータ（WAF / DDoS / Magic Transit 等の利用が前提、アカウントチーム経由）
- API / UI / 管理者機能: 事例解説が主体。顧客側の設定変更は不要

教材化メモ: src/content/ai-news-notes/cloudflare/agentic-security-operations-harness.mdx

## 原文確認

- 公式見出し: "Building an evidence-grounded agentic security operations harness on Cloudflare"
- 公式URL: https://blog.cloudflare.com/agentic-security-operations/
- 原文全文は公式ページで確認してください。
