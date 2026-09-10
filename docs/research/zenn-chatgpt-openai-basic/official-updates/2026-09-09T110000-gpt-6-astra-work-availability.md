---
date: 2026-09-09
title: "GPT-6 Astra が ChatGPT Work / Codex / API で提供開始、企業向け管理機能とプラグインも同時公開"
service: "ChatGPT / OpenAI"
source: https://openai.com/index/gpt-6-astra-next-generation-work
fetched_at: 2026-09-10T09:12:00+09:00
published_at: 2026-09-09T11:00:00Z
date_precision: timestamp
category: release
---

# 2026-09-09 GPT-6 Astra が ChatGPT Work / Codex / API で提供開始

## 公式内容の日本語要約

OpenAI は 2026-09-09、9月3日に発表した GPT-6 Astra が **ChatGPT Work、Codex、API で利用可能になった**と公式ポストで告知した。09-03 時点の公式表記は「limited set of organizations へのロールアウト、GA ではない」だったため、**提供範囲の確定を告げる発表**にあたる。

位置づけは「業務向けの最上位モデル」で、コンピュータ操作・ブラウジング・ソフトウェアエンジニアリング・サイバーセキュリティ・科学分野で state-of-the-art とされる。特徴として、**API を持たないアプリケーションでも人間と同じ画面操作で作業できる**点を挙げ、既存ワークフローへ前準備なしで組み込めることを強調している。

価格は **入力 100万トークンあたり $10、出力 $50**。「より少ないトークンとリトライでタスクを完了するよう訓練した」として、トークン単価ではなくタスクあたりコストでの効率を主張する。Terminal-Bench 4.0 で 57.9%（GPT-5.6 Sol2 は 37.3%、Claude Fable 5.1 は 55.8%）を示し、Claude Fable 5.1 比で推定 API コスト約63%減と説明している。

企業統制面では、**承認済みサイト・デスクトップアプリへのアクセス制限、アップロード/ダウンロードの管理、閲覧履歴の制御**という管理者コントロールが新設された。加えて確認ポリシー（consequential action の事前承認）と、安全でないツール呼び出しの自動レビューを備える。**Enterprise では既定で無効**で、管理者が明示的に有効化する。

同時に ChatGPT Desktop へ **Oracle Analytics / Power BI（Microsoft Fabric）/ Navan / Avalara のエンタープライズプラグイン**が追加された。また Astra は Preparedness Framework の **サイバーセキュリティ Critical しきい値に到達した初のモデル**であり、悪用と未認可行動の双方に対する保護を強化したと明記している。

## できるようになったこと

- ChatGPT Work / Codex / API から GPT-6 Astra を利用できる（API のモデル名は `gpt-6-astra`）
- Microsoft Azure と Amazon Bedrock 経由でも提供
- 管理者がアクセス可能なサイト・デスクトップアプリ、アップロード/ダウンロード、閲覧履歴を制御できる
- consequential action に事前承認を要求する確認ポリシーを設定できる
- ChatGPT Desktop で Oracle Analytics / Power BI / Navan / Avalara プラグインを利用できる
- 適格な API 顧客は対象エンドポイントで Zero Data Retention を申請できる

## 影響範囲

- 対象ユーザー: ChatGPT Work / Codex / API 利用者、Enterprise 管理者、開発者
- 対象プラン: ChatGPT Plus / Pro / Business / Enterprise（Pro / Business / Enterprise は GPT-6 Astra Pro も）。Enterprise は既定で無効、管理者が有効化
- API / UI / 管理者機能: 3面すべてに影響。価格は入力 $10 / 出力 $50 per 1M tokens

教材化メモ: src/content/ai-news-notes/chatgpt-openai/gpt-6-astra-work-availability.mdx

## 原文確認

- 公式見出し: GPT-6 Astra: The next generation in intelligence for work
- 公式URL: https://openai.com/index/gpt-6-astra-next-generation-work
- 関連（09-03 の初出発表）: https://openai.com/index/gpt-6-astra/
- 原文全文は公式ページで確認してください。
