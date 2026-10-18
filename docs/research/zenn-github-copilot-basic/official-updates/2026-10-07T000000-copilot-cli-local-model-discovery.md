---
date: 2026-10-07
title: "Copilot CLI の /model がローカル Ollama のモデルを発見。ただしオフライン化もテレメトリ停止もしない"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-10-07-discover-local-models-in-github-copilot-cli
fetched_at: 2026-10-12T09:50:00+09:00
published_at: 2026-10-07
date_precision: date-only
category: enhancement
---

# 2026-10-07 Copilot CLI のローカルモデル発見

## 公式内容の日本語要約

**CLI 1.0.94-0 以降**で、`/model` コマンドが**稼働中のローカル Ollama インスタンスのモデルを一覧できる**ようになった。設定済みのモデルと Copilot のクラウドモデルと並んで表示され、CLI を離れずに選べる。

**発見は自動追加ではない。** 候補を選ぶとプロバイダーとエンドポイントを確認する画面が出て、**「Add and use for this session」か「Add without switching」のどちらかを選ぶ**。CLI を再起動せずに現在のセッションで使える。プロバイダーへの接続に失敗した場合は、何を直す必要があるかの説明がピッカー内に出る。

前提は、**CLI 1.0.94-0 以降**、**Ollama と対象モデルが既にインストール済み**（本機能はランタイムの導入やモデルのダウンロードを行わない）、**モデルが tool calling と streaming に対応していること**である。

**重要な注意が2点ある。** **ローカルモデルを選んでもオフラインモードにはならず、GitHub のテレメトリも止まらない。** オフラインモードは `COPILOT_OFFLINE=true` の設定が必要である。さらに**オフラインモードでも、リモートプロバイダーがプロンプトとコード文脈をネットワーク越しに受け取りうる。**

あわせて「ローカルモデルを使った intelligent routing」が Microsoft Command Line のブログで紹介され、提供は後続とされている。

## できるようになったこと

- `/model` からローカル Ollama のモデルを選んでセッション内で使える
- 接続失敗の理由がピッカー内に表示される

## 影響範囲

- 対象ユーザー: Copilot CLI でローカルモデルを併用する利用者
- 対象プラン: 記載なし
- API / UI / 管理者機能: CLI（`/model`）、Copilot app の Settings > Model providers

## 教材化メモ

- **「ローカルモデル = 外に出ない」という誤解を、公式が自分で否定している**点が最も使える。モデルの実行場所とデータの送信先は別の軸であり、**ローカルモデルの選択はテレメトリ停止を意味しない。** さらに**オフラインモードでもリモートプロバイダーへ渡る経路が残る**と明記された。機密データの扱いを説明する教材で、この一次情報は強い。
- **「発見しても自動追加しない」という作りは、エージェント製品の良い既定の例である。** 検出と採用を分けると、意図しないエンドポイントへ接続する事故が減る。
- tool calling と streaming の要件は、**ローカルモデルがエージェント用途に使えるかの最低条件**として覚えておく価値がある。

## 原文確認

- 公式見出し: Discover local models in GitHub Copilot CLI
- 公式URL: https://github.blog/changelog/2026-10-07-discover-local-models-in-github-copilot-cli
- 原文全文は公式ページで確認してください。
