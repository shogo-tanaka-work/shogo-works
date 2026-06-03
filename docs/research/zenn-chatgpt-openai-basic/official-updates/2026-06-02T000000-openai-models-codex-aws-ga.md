---
date: 2026-06-02
title: "OpenAI フロンティアモデルと Codex が AWS（Amazon Bedrock）で GA"
service: "ChatGPT / OpenAI"
source: https://openai.com/index/openai-frontier-models-and-codex-are-now-available-on-aws/
fetched_at: 2026-06-03T10:13:03+09:00
published_at: 2026-06-01T00:00:00Z
date_precision: date-only
category: rollout
---

# 2026-06-02 OpenAI モデルと Codex が Amazon Bedrock で GA

## 公式内容の日本語要約

OpenAI と AWS が、OpenAI のフロンティアモデル **GPT-5.5 / GPT-5.4** と **Codex**（OpenAI のコーディングエージェント）を **Amazon Bedrock で一般提供（GA）** したと告知した。2026-04 の Limited Preview からの昇格。企業は、すでに使っている AWS のセキュリティ・ガバナンス・調達・課金のワークフローの中で OpenAI モデルと Codex を本番利用できる。GPT-5.5 は「OpenAI の最も高度なフロンティアモデル」と位置づけられ、Bedrock 上の価格は OpenAI ファーストパーティ料金と一致し、AWS 側の追加マージンはない。Codex はシート課金なしの従量課金（pay-per-token）。

（注: openai.com / help.openai.com は当環境では本文取得が制限されたため、一次確認は AWS 公式 ML ブログ（GA 告知, 2026-06-01）と OpenAI 公式 index ページの URL で行い、両者を出典として記録している。）

## できるようになったこと

- **対象モデル**: GPT-5.5、GPT-5.4、および Codex が Amazon Bedrock で GA。
- **価格**: GPT-5.5 / GPT-5.4 は OpenAI 直販と同額で、AWS の追加課金なし。Codex はシートライセンス不要の従量課金。
- **エンタープライズ統制**: IAM 権限、VPC 分離、KMS 暗号化、CloudTrail 監査など既存の AWS ガバナンスをそのまま適用。プロンプト・応答はモデル学習に使われず、モデル提供元とも共有されない。
- **Codex の開発統合**: VS Code / JetBrains / Xcode の IDE 連携に対応し、選択リージョン内でデータレジデンシーを維持しつつ大規模コードベースで記述・デバッグ・リファクタが可能。
- **基盤**: Bedrock の推論基盤（隔離キュー、自動キャパシティ管理、耐久的な状態保持）上で動作。

## 影響範囲

- 対象ユーザー / プラン: AWS commit と Bedrock アクセスを持つ企業全般。
- リージョン: GPT-5.5 は US East (Ohio)、GPT-5.4 は US East (Ohio) / US West (Oregon) で提供（詳細は AWS Regions ページ）。
- API / UI / 管理者機能: Amazon Bedrock の API・コンソール経由。AWS のセキュリティ／調達フローに統合。

## 教材化メモ

- Codex / OpenAI モデルのエンタープライズ導入教材に「Amazon Bedrock での GA」を追記。「OpenAI 直販 / Azure / Bedrock」という調達経路の選択肢として整理。
- 「既存の AWS 契約・ガバナンス（IAM/VPC/KMS/CloudTrail）の中でフロンティアモデルを本番投入できる」点を、情シス・調達向けの論点として記述。
- リージョン制約（GPT-5.5 は Ohio のみ等）とデータレジデンシーは導入判断の前提として明示。

## 原文確認

- 公式見出し: OpenAI frontier models and Codex are now available on AWS
- 公式URL: https://openai.com/index/openai-frontier-models-and-codex-are-now-available-on-aws/
- AWS 一次: https://aws.amazon.com/blogs/machine-learning/openai-models-and-codex-on-amazon-bedrock-are-now-generally-available/
- 原文全文は公式ページで確認してください。
