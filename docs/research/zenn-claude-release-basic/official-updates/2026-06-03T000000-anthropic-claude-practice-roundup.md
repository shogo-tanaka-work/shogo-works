---
date: 2026-06-03
title: "Anthropic公式が公開したClaude実践知4本（Skills/Cowork/AIネイティブ組織/データ分析）"
service: "Claude / Anthropic"
source: https://claude.com/blog/lessons-from-building-claude-code-how-we-use-skills
fetched_at: 2026-06-04T11:20:00+09:00
published_date: 2026-06-03
date_precision: date-only
category: enhancement
---

# 2026-06-03 Anthropic公式が公開したClaude実践知4本

## 公式内容の日本語要約

2026-06-03 に claude.com/blog で、Anthropic 自身の Claude 活用実践を解説する記事が4本公開された。いずれも製品リリースではなく、社内での使い方・運用ノウハウの公開。

## できるようになったこと（=各記事の要点）

### 1. Lessons from building Claude Code: How we use skills
- https://claude.com/blog/lessons-from-building-claude-code-how-we-use-skills
- Skills を9カテゴリに分類（Library/APIリファレンス、製品検証、データ取得・分析、業務自動化、コードscaffold、品質・レビュー、CI/CD、Runbook、インフラ運用）。
- ベストプラクティス: 当たり前の内容は書かない／gotchas を集める／プログレッシブ・ディスクロージャー／`config.json` で設定保持／人間向け要約でなくモデルが選択するための記述／メモリ（log・JSON）／再構築させず合成できるスクリプトを渡す。
- 配布: `./.claude/skills` にコミット、または社内マーケットプレイスで配布。

### 2. Best practices for getting started with Claude Cowork
- https://claude.com/blog/best-practices-for-getting-started-with-claude-cowork
- Cowork は「作業に Claude を持ち込む」委任型ツール。デスクトップアプリからフォルダ/アプリ（Slack・Gmail・Notion 等）を接続し成果物を指示。
- 使い分け: 単発質問はチャット、複数ファイル・複数ステップ・複数アプリの委任は Cowork。
- ベストプラクティス: ファイル接続で文脈付与／最終成果物の形式を明示／開始前に依頼の復唱・質問をさせて曖昧さを排除。

### 3. Running an AI-native engineering org
- https://claude.com/blog/running-an-ai-native-engineering-org
- 6か月ロードマップを廃し JIT 計画（プロトタイプ→内部導入→フィードバック）へ。
- コード作成者に聞く前にまず Claude に聞く。コードレビューはスタイル/バグ/テストを Claude が担い、人間は法務・セキュリティ・製品判断に集中。
- 指標: オンボーディング期間、PR サイクルタイム、Claude 支援コミット率。採用は「スループット」より「創造性・システム専門知識」。

### 4. How Anthropic enables self-service data analytics with Claude
- https://claude.com/blog/how-anthropic-enables-self-service-data-analytics-with-claude
- 業務分析クエリの95%を Claude 自動化、精度は集計ベースで約95%。Skills 無しだと精度21%だったものが95%超へ。
- 課題はコード生成でなく「質問→正しいデータエンティティ」の対応付け。失敗モード: 概念-エンティティの曖昧さ／データの陳腐化／検索失敗。
- 鍵: 正規化された canonical データ基盤、セマンティックレイヤー等の Sources of Truth、手続き知識としての Skills、検証（オフライン評価・アブレーション・オンライン監視）。「データはソフトウェアではない」（決定的に唯一の正解が要る）。

## 影響範囲

- 対象ユーザー: 開発組織のマネージャー、Skills を設計するエンジニア、データ/分析チーム、Cowork を使う非技術ナレッジワーカー。
- 対象プラン: 該当なし（実践知の公開）。
- API / UI / 管理者機能: 該当なし。

## 教材化メモ

Skills 教材に「9カテゴリ＋ベストプラクティス（gotchas/プログレッシブ・ディスクロージャー/モデル向け記述）」を反映。Cowork 教材に「チャットとの使い分け＋復唱で曖昧排除」を追加。組織運営は AI-org-management 系の素材へ、データ分析は「Skills で精度21%→95%」を導入効果の具体例として接続。

## 原文確認

- 公式URL（4本）は上記各セクションに記載。
- 原文全文は公式ページで確認してください。
