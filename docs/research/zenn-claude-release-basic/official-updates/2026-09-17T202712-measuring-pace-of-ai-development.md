---
date: 2026-09-17
title: "Anthropic が「AI開発のペース」を測る3指標を公開。社内 R&D 自動化率・エージェント監視・計算資源配分の実測値つき"
service: "Claude"
source: https://www.anthropic.com/institute/measuring-pace-of-ai-development
fetched_at: 2026-09-18T09:02:00+09:00
published_at: 2026-09-17T20:27:12Z
date_precision: timestamp
category: policy
---

# 2026-09-17 AI開発ペースの測定3指標

教材化メモ: src/content/ai-news-notes/claude/measuring-pace-of-ai-development.mdx

## 公式内容の日本語要約

Anthropic は 2026-09-17、フロンティア AI ラボの内部で開発がどれだけ速く進んでいるかを外部から追跡するための**3つの測定指標**を公開し、あわせて**自社の実測スナップショット**を出した。Dario Amodei によるフロンティア開発のペース調整の呼びかけを受けた具体化にあたる。

**指標1: AI による AI R&D の自動化度**。Epoch AI の Automation Level（AL0〜AL5）を用い、社内の AI R&D 業務を棚卸ししてスコア化した「Anthropic R&D Automation Index」を試作。結果は **Claude が「leads（AL4、高レベルの指示から大半を完遂し人は監督）」に達している業務が 26%**、**「AI collaborates（AL3）」以上が 90% 超**、ただし**完全自律（AL5）に達した業務領域はゼロ**。

**指標2: エージェント監視**。2026-08 時点で、社内で最も使われているプラットフォーム上に**常時およそ 30,000 体のエージェント**が稼働。オンライン監視は**全アクションの 100% を実行前に通過**させ、10億件超の判断のうち**ブロックは 0.002%（約47,000件に1件）**。オフライン監視は**週あたり約10万トランスクリプトをフラグ**し、最優先の**週約50件が人間のレビューへエスカレーション**。ブロックされたアクションの人間レビューは1週間以内。

**指標3: 計算資源の配分**。2026-07-13〜07-20 の1週間スナップショットで、**AI R&D 向け計算資源のうち安全性向けは約 6%**、**AI 主導の AI R&D 向けに限ると約 12%**。

Anthropic は**複数組織からの独立した第三者評価者を社内に常駐させ**、内部プロセス・システム・データへ社内のリスク評価チームと同等のアクセスを与える計画も示した。

## できるようになったこと

- 他ラボが同じ定義で追随できる形で、3指標の測定方法（付録に手法詳細）が公開された
- 「エージェント監視の coverage / review latency / escalation rate」という汎用の監視指標セットが提示された

## 影響範囲

- 対象ユーザー: 政策関係者、第三者評価機関、エージェント運用のガバナンス設計者
- 対象プラン: 該当なし（製品変更ではない）
- API / UI / 管理者機能: 製品面の変更なし。**エージェント統制の設計テンプレートとして再利用できる指標定義**が主な実務価値

## 原文確認

- 公式見出し: Measurements for understanding the pace of AI development inside frontier labs
- 公式URL: https://www.anthropic.com/institute/measuring-pace-of-ai-development
- 原文全文は公式ページで確認してください。
