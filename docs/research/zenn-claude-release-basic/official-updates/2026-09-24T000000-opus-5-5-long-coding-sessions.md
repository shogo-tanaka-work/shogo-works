---
date: 2026-09-24
title: "Opus 5.5 は「長くなったコーディングセッション」を前提に価格とキャッシュを組み直した"
service: "Claude / Claude Platform"
source: https://claude.com/blog/claude-opus-5-5-built-for-coding-sessions-that-use-more-context
fetched_at: 2026-09-25T09:10:00+09:00
published_at: 2026-09-24
date_precision: date-only
category: enhancement
---

# 2026-09-24 Opus 5.5 は「長くなったコーディングセッション」を前提に価格とキャッシュを組み直した

## 公式内容の日本語要約

Claude Opus 5.5 のモデル公開自体は 2026-09-22（Release Notes 掲載済み）。本ポストはその**2日後に出た、価格とキャッシュ設計の理由を説明する公式解説**である。モデル発表ではなく「なぜこの値付けなのか」を数字で示したもので、コーディング用途のコスト見積もりを立て直す材料になる。

出発点は利用実態の変化である。Claude Code の**入力トークン対出力トークンの比率が、半年で 189:1 から 324:1 へ上がった**。セッションが長くなり、読む量が書く量を大きく上回るようになった。ここを前提に、Opus 5.5 は**トークン課金のワークロードで Opus 5 より約40%安く**、**キャッシュ済みトークンの単価は60%下落**して、競合モデルのキャッシュ単価の5分の1になったとしている。出力生成は Opus 5 比で**30%高速**。

コスト削減の本体は単価より**キャッシュの当たり方**にある。入力のキャッシュミスが**50%以上減少**した。加えて、これまでキャッシュを不意に壊していた操作（ログインのリフレッシュ、会話途中での指示追加、ツールの読み込み）がキャッシュを壊さなくなった。**effort レベルを会話の途中で変えてもキャッシュがリセットされない**。API とクラウドプロバイダー利用者は**キャッシュ TTL を1時間に設定**できる。フォークしたサブエージェントは、親のキャッシュ済みコンテキストから開始するため、再処理が不要になる。

外部の実測として Zeta Labs の観測が引用されている。**タスクあたりのターン数とツール呼び出しが Opus 5 より少なく、コストはほぼ半分**。複雑なタスクの完了率はほぼ2倍。Claude が1プロンプトあたり**3.3倍長く**動作し、モデル呼び出しは40%増、コーディングセッション中の**中断は68%減**とされる。

## できるようになったこと

- キャッシュ済みトークン単価が60%下落（競合のキャッシュ単価の1/5）
- トークン課金のワークロードで Opus 5 比 約40%安、出力生成は30%高速
- 入力のキャッシュミスが50%以上減少
- ログインリフレッシュ / 会話途中の指示追加 / ツール読み込みでキャッシュが壊れなくなった
- **effort を会話途中で変えてもキャッシュが維持される**
- API・クラウドプロバイダー利用者は**キャッシュ TTL を1時間**に設定可能
- フォークしたサブエージェントが親のキャッシュ済みコンテキストから開始する

## 影響範囲

- 対象ユーザー: Claude Code 利用者、Claude Platform API 利用者、クラウドプロバイダー経由の利用者
- 対象プラン: Claude Code および Claude Platform API（2026-09-24 時点で利用可能）
- API / UI / 管理者機能: API（キャッシュ TTL 設定、effort パラメータ）、Claude Code の既定モデル

教材化メモ: src/content/ai-news-notes/claude/opus-5-5-coding-session-economics.mdx

## 原文確認

- 公式見出し: Coding sessions are longer and use more context. Claude Opus 5.5 is built with that in mind.
- 公式URL: https://claude.com/blog/claude-opus-5-5-built-for-coding-sessions-that-use-more-context
- 補助: https://platform.claude.com/docs/en/release-notes/api（2026-09-22 の Opus 5.5 エントリ。$4/$20 per MTok、1M コンテキスト、128k 出力）
- 原文全文は公式ページで確認してください。
