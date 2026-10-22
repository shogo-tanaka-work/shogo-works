---
title: "Agents SDK に createAI が登場 — workers-ai-provider と ai-gateway-provider は非推奨（機能凍結）に"
tool: "cloudflare"
toolLabel: "Cloudflare"
date: 2026-10-21
sourceUrl: "https://developers.cloudflare.com/changelog/post/2026-10-21-createai/"
summary: "Cloudflare changelog の 2026-10-21 エントリで、Agents SDK に createAI が追加された。AI SDK と Pi AI の両方で使える単一の関数で、Workers AI のモデル、AI Gateway のカタログモデル、dynamic/<route> 形式の動的ルート、ベンダーのモデルオブジェクトを扱える。AI バインディング、またはアカウント ID と API トークンで接続する。これにより workers-ai-provider と ai-gateway-provider は機能凍結・非推奨となった。削除日は示されておらず、公式は都合のよいときに移行するよう案内している。ゲートウェイのオプション（キャッシュ、ログ、メタデータ、リトライ、byokAlias、zdr、vendorKey、fallback）を渡せ、バインディング経由ならストリームが途中で切れても再開できる。AI Search は別パッケージ ai-search-provider の createAISearchNamespace へ移る。"
description: "Workers AI と AI Gateway を createAI 1つで扱えるようになり、旧プロバイダー2つは非推奨になった。"
impact: "削除日は未定のため急ぎではないが、新規コードは createAI で書くのが前提になる。既存コードは import と関数名の置き換えが中心で、AI Search を使う場合だけパッケージが変わる。"
tags: ["cloudflare", "agents", "workers-ai", "ai-gateway", "非推奨", "移行"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

Cloudflare は 2026-10-21、**Agents SDK に `createAI`** を追加しました。AI SDK と Pi AI の両方で使える単一の関数です。これにより、**`workers-ai-provider` と `ai-gateway-provider` は機能凍結・非推奨**になりました。

公式は削除日を示さず、「都合のよいときに移行してください」と案内しています。

## 何が変わったか

- **1つの関数で複数の入口を扱う**: Workers AI の `@cf/` モデル、AI Gateway のカタログモデル、`dynamic/<route>` 形式の動的ルート、ベンダーのモデルオブジェクト（`ai(anthropic("..."))` の形）に対応
- **接続方法**: `AI` バインディング、またはアカウント ID と API トークン。別アカウントのゲートウェイや Worker の外からの呼び出しは後者
- **ゲートウェイのオプション**: キャッシュ、ログ、メタデータ、リトライ、`byokAlias`、`zdr`、`vendorKey`、`fallback`（モデルの一覧）
- **ストリームの再開**: バインディング経由なら、カタログモデルや動的ルートでストリームが途中で切れても再開できる
- **モデルの種類**: AI SDK 側では埋め込み、画像、音声、文字起こし、リランキングにも対応。Pi AI では画像
- **移行の対応表**: `createWorkersAI({ binding })` は `createAI({ binding })`。`createWorkersAI({ accountId, apiKey })` は `createAI({ accountId, apiToken })`。`createAiGateway(...)` は `createAI(...)` で、モデルの一覧は `fallback` に移す。`workers-ai-provider` の `createAISearch` は `ai-search-provider` の `createAISearchNamespace` へ
- 利用は `npm i agents` のあと `agents/models/ai-sdk` から import する

## 業務インパクト（一般企業向け）

**緊急対応は不要ですが、棚卸しは始めてください。** 機能凍結とは、新機能も不具合修正も入らなくなるという意味です。削除日が未定でも、旧パッケージに依存したコードは徐々に取り残されます。

進め方は、まず自社の Worker で旧2パッケージを使っている箇所を検索します。次に、対応表に沿って置き換え、ステージングで動作を確認します。複数モデルの切り替えを自前で書いている場合は、`fallback` に寄せると設定が減ります。AI Search を使っているコードだけは、パッケージ自体が変わる点に注意してください。

## 副業・個人活用視点

**これから作るエージェントは、最初から `createAI` で書く**のが無難です。ゲートウェイ経由でベンダーを切り替えたり、ダメなときに別のモデルへ回したりする設計が、1つの関数にまとまります。

納品済みの案件に旧パッケージが入っている場合は、保守の提案ネタになります。削除日が決まってから慌てるより、先に移行しておく方が見積もりも交渉もしやすくなります。

## 情報源の制約

本記事は Cloudflare changelog の該当エントリを根拠にしています。移行ガイド全文、旧パッケージの削除予定日、各オプションの詳細は確認できていません。
