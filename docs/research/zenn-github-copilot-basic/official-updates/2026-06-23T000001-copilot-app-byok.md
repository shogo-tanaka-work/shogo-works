---
date: 2026-06-23
title: "GitHub Copilot App — BYOK（Bring Your Own Key）サポート開始"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-06-23-github-copilot-app-support-for-byok
fetched_at: 2026-06-24T12:00:00+09:00
published_at: 2026-06-23
date_precision: date-only
category: enhancement
---

# 2026-06-23 GitHub Copilot App BYOK サポート

## 公式内容の日本語要約

GitHub Copilot アプリが BYOK（Bring Your Own Key）に対応。OpenAI・Azure・Anthropic などの自社モデルプロバイダーを接続して Copilot エージェントセッションを実行できるようになった。API キーはローカル OS のキーチェーンに保存され、UI から読み返されない。

## できるようになったこと

- 「Settings → Model Providers」でエンドポイントと API キーを追加
- 対応プロバイダー: OpenAI、Azure OpenAI、Microsoft Foundry、Anthropic、LM Studio、Ollama、および OpenAI 互換エンドポイント
- LM Studio・Ollama はホスト設定のみで接続可能
- 自社クラウドアカウント・テナント・内部ゲートウェイ経由でのルーティングが可能
- フロンティアモデルとローカルモデルの混在利用

## 影響範囲

- 対象ユーザー: Copilot Business または Enterprise プランの組織ユーザー
- 対象プラン: Business・Enterprise（組織管理者が Copilot CLI をポリシーで有効化している必要あり）
- API / UI: Copilot アプリの Settings から設定

## 教材化メモ

- データ境界要件が厳しい金融・医療・公共機関向けの Copilot 導入事例文脈で重要
- 「フロンティアモデル + ローカルモデル混在」は AI 調達コスト最適化の教材として使える
- Anthropic が BYOK プロバイダーに含まれる点は Claude API 活用の横展開として言及できる

## 原文確認

- 公式見出し: "GitHub Copilot app support for BYOK"
- 公式URL: https://github.blog/changelog/2026-06-23-github-copilot-app-support-for-byok
- 原文全文は公式ページで確認してください。
