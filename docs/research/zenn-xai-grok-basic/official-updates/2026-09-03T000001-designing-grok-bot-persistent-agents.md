---
date: 2026-09-03
title: "xAI — Designing Grok Bot for a world of persistent agents（設計解説）"
service: "xAI / Grok"
source: https://x.ai/news/designing-grok-bot
fetched_at: 2026-09-07T09:55:00+09:00
published_at: 2026-09-03
date_precision: date-only
category: enhancement
---

# 2026-09-03 Designing Grok Bot for a world of persistent agents

## 公式内容の日本語要約

Grok Bot の**設計解説**。「セッションを越えて存続し、自ら責任を負えるエージェント」をどう設計したかを述べている。

**5つの基本オブジェクトに絞った。** Bots（固有の identity / メモリ / ランタイム / ツールを持つ永続エージェント）、Chats（Bot と作業するための会話面）、Prompts（一度きり、Skills として保存、Routines として自動起動）、Tools、Artifacts（Bot が作る永続的な成果物）。**chats / sessions / context windows / memories / system prompts など既存の語彙を製品概念として露出させない**という判断である。

**主オブジェクトは会話ではなく Bot。** サイドバーには Bot の名簿（roster）が並ぶ。アバターの動きが状態（idle / thinking / working / waiting / blocked / done）を表す。

**Bot のコンピュータは3段階の可視性**で扱う。Status（タイトルバーのアイコンが紫になる）、Preview（サイドパネルで作業を追う）、Takeover（全画面で操作を引き取り、また返す）。**目立たせるほど利用者が「監督」してしまう**ため、あえて前面に出さない設計にしたという。

**能力とコンテキストで境界を分けている。** Tools と Skills はアカウント単位（多くの Bot が共用）、**メモリと Routines は Bot 単位**（その役割が知っていること）。

**Routines により、プロンプト以外からも仕事が始まる。** スケジュール、イベント、他の Bot が起点になりうる。

制約として、**アカウントあたり約50 Bot、グループチャットあたり6 Bot**という上限が明記されている。

## できるようになったこと

- （設計解説。製品変更の告知ではない）

## 影響範囲

- 対象ユーザー: Grok Bot 利用者、およびエージェント製品を設計する側
- 対象プラン: 記載なし
- API / UI / 管理者機能: 変更なし

## 教材化メモ

- **「監督させない」ことを目的に、あえて情報の可視性を下げた**という判断が、この記事のいちばん強い部分である。**画面に出せば出すほど人は見てしまい、委任が成立しない。** エージェント導入で「結局ずっと見ている」という状態に陥る組織は多く、**それが UI の問題でもある**という視点は実務で効く。3段階（Status / Preview / Takeover）という具体的な設計に落ちているため、そのまま参考にできる。
- **能力（Tools / Skills）はアカウント単位、文脈（メモリ / Routines）は Bot 単位**という分割は、社内でエージェントを複数運用するときの設計指針としてほぼそのまま使える。**共有すべきものと、役割に閉じるべきもの**を分けないと、Bot を増やすたびに設定が重複するか、文脈が混ざる。
- **「Stop now は以後の行動を止めるが、完了済みの行動は取り消せない」**という制約（関連ドキュメント記載）は、自律エージェントの統制設計で最初に押さえるべき点。**停止は取り消しではない。** 承認境界をどこに置くかは、この非可逆性を前提に決める必要がある。
- **上限50 Bot / 6 Bot という数字を公開している**点も実務的。**エージェントを増やせば増やすほど良い、という発想への牽制**として読める。記事自身が「これは委任の助けになるか、それとも管理対象を1つ増やすだけか」を判断基準にしたと述べている。

## 原文確認

- 公式見出し: Designing Grok Bot for a world of persistent agents
- 公式URL: https://x.ai/news/designing-grok-bot
- 一覧: https://x.ai/news
- 取得制約: `x.ai` は本環境の WebFetch が HTTP 403 を返すため、Exa 経由で公式ページ本文を取得した
- 原文全文は公式ページで確認してください。
