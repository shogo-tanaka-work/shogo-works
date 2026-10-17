---
title: "Cloudflare CLI に `cf docs search` が追加 — エージェントが公式ドキュメントを読む経路が用意され、同時にコマンド名が kebab-case へ変わる破壊的変更"
tool: "cloudflare"
toolLabel: "Cloudflare"
date: 2026-10-16
sourceUrl: "https://developers.cloudflare.com/changelog/post/2026-10-16-docs-search/"
summary: "Cloudflare CLI 1.0.0-beta.16 で cf docs search が追加された。公式ドキュメント・チュートリアル・サンプルをターミナルから検索し、最大5件のランク付き JSON を返す。各件に title / description / URL が入る。公式はコーディングエージェントからの利用を明示しており、jq で URL を取り出して curl に Accept: text/markdown を付けて本文を Markdown で取得する例を示している。同じリリースで生成コマンド名が kebab-case に統一され、cf accounts billing getCredits は get-credits になる。"
description: "`cf docs search` が追加。エージェント向けの JSON 出力。同時にコマンド名が kebab-case へ。"
impact: "コーディングエージェントに Cloudflare の作業をさせるとき、ドキュメントの参照を外部検索に頼らず CLI 内で完結できるようになる。一方 kebab-case 化は破壊的変更で、camelCase のコマンド名を含む既存スクリプト・CI・エージェント定義は動かなくなる。CLI を更新する前に、保有するスクリプトの棚卸しが必要。"
tags: ["cloudflare", "cli", "エージェント", "ドキュメント", "破壊的変更", "devtools"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

Cloudflare は 2026-10-16、**Cloudflare CLI（`cf`）1.0.0-beta.16** で **`cf docs search "<クエリ>"`** を追加したと告知しました。公式ドキュメント、チュートリアル、サンプルを、ターミナルから、**あるいはコーディングエージェントから**検索できます。

**検索対象は live のドキュメント**です。結果は**最大5件のランク付き JSON** で返り、各件に title / description / ドキュメントURL が入ります。インターネット接続が必要です。公式が挙げている例のクエリは `proxy a DNS record`、`rate limit requests with WAF`、`schedule a worker` です。

**注目すべきは、公式がエージェントからの利用を明示している点です。** 示されている流れはこうです。`cf docs search` の結果を `jq` で処理して先頭の URL を取り出し、`curl` に **`Accept: text/markdown`** ヘッダを付けてそのページの本文を Markdown で取得する。**つまり「検索して候補URLを得る」「本文をMarkdownで読む」の2段が、CLI と HTTP ヘッダだけで成立します。**

これは MCP サーバーを立てる話ではありません。公式ポストに MCP への言及はありません。**エージェントがすでに持っている Bash 実行能力だけで、公式ドキュメントを一次情報として読めるようにする**という設計です。

**同じリリースに破壊的変更が入っています。** 生成されるコマンド名が **kebab-case に統一**されました。公式が挙げている例は、`cf accounts billing getCredits` が **`cf accounts billing get-credits`** になる、というものです。コマンドとフラグの変更一覧は CLI の GitHub changelog 側にあるとされています。

インストール・更新は `npm install --global cf@latest` です（Yarn / pnpm / Bun の記法も公式に記載があります）。

## 何が変わったか

- **`cf docs search "<クエリ>"` が追加**（Cloudflare CLI 1.0.0-beta.16）
- 検索対象は live のドキュメント。**最大5件のランク付き JSON**（title / description / URL）
- 公式がエージェント利用の例を提示: `jq` で URL を取り出し、`curl` に **`Accept: text/markdown`** を付けて本文を Markdown 取得
- **MCP への言及はない**
- **（破壊的変更）生成コマンド名が kebab-case へ**。`cf accounts billing getCredits` → `cf accounts billing get-credits`
- コマンド・フラグの全変更一覧は CLI の GitHub changelog 側
- インストール・更新: `npm install --global cf@latest`

## 業務インパクト（一般企業向け）

**先に対処が要るのは、`cf docs search` ではなく kebab-case 化のほうです。**

`cf` を CI やデプロイスクリプトに組み込んでいる場合、**camelCase のコマンド名が1つでも残っていると、更新した瞬間に落ちます。** しかもこの種の破壊は、**手元では気づかず、夜間のバッチで初めて出る**という出方をします。

やるべきことは単純です。

1. **リポジトリ全体を `cf ` で grep して、CLI を呼んでいる箇所を洗い出す**
2. **camelCase のサブコマンドを含むものを kebab-case へ直す**
3. **CLI のバージョンを固定しているか確認する。** `cf@latest` で引いている CI があるなら、**棚卸しが終わるまでバージョンを固定する**

**エージェント定義ファイルも対象です。** CLAUDE.md や社内のエージェント手順書に `cf` のコマンド例を書いている場合、**そこに書かれた古いコマンド名を、エージェントはそのまま実行します。** スクリプトより見落としやすい場所です。

**`cf docs search` のほうは、エージェント運用の品質に効きます。**

コーディングエージェントに Cloudflare の設定作業をさせると、**学習時点の古い情報で手順を組む**という問題が常に出ます。Workers の API も Wrangler の設定も変わり続けるからです。従来の対策は Web 検索を許可することでしたが、**検索結果には三次情報のブログ記事が混ざります。**

`cf docs search` は、**公式ドキュメントだけを返します。** エージェントの手順書に「Cloudflare の作業をする前に `cf docs search` で現行ドキュメントを確認する」と書いておけば、**一次情報を踏ませる導線が1行で作れます。** 出力が JSON である点も、エージェントに扱わせる前提として設計されています。

## 副業・個人活用視点

**受託で Cloudflare を触っている人は、まず自分の手元を守ってください。**

過去案件のデプロイスクリプトに `cf` の camelCase コマンドが残っていると、**先方の環境で CLI が更新されたタイミングで壊れます。** 自分が触っていない時期に壊れると、原因究明の手間だけがこちらに来ます。**納品済み案件の棚卸しと、「CLI のバージョンを固定しておく」という申し送り**は、今のうちにやる価値があります。

**これは請求できる仕事でもあります。** 「破壊的変更が入ったので、スクリプトの互換性確認をします」は、保守契約がある案件なら正当な作業です。契約が無くても、**連絡を入れておくこと自体が次の仕事につながります。**

**`cf docs search` は、エージェント運用を売りにしている人の武器になります。**

「AI にインフラ作業をさせると、古い手順で壊す」というのは、発注側が一番怖がる点です。**「公式ドキュメントを毎回引かせる仕組みを入れています」と言えるかどうか**は、信頼の差になります。実際の仕込みは、エージェントの手順書に数行足すだけです。**コストはほぼゼロで、説明としては強い。** こういう非対称な打ち手は積極的に取るべきです。

**個人開発でも効きます。** Cloudflare のドキュメントは量が多く、Workers / Durable Objects / Queues / AI Gateway と製品ごとに流儀も違います。**ターミナルから5件に絞って返ってくる**のは、ブラウザで探すより速い場面が多いはずです。

## 情報源の制約

本記事は **Cloudflare 公式 changelog の 2026-10-16 エントリ**を一次情報としています。

**このエントリの `pubDate` は `Fri, 16 Oct 2026 00:00:00 GMT` 固定で、時刻の情報を持ちません**（`date_precision: date-only`）。

**kebab-case 化で影響を受けるコマンドの全一覧は、本記事では確認していません。** 公式は CLI の GitHub changelog を参照するよう案内しており、**本記事が挙げた `getCredits` → `get-credits` は公式が示した例の1つです。** 自分の環境で使っているコマンドについては、GitHub changelog 側で個別に確認してください。

**対象プラン・提供条件の記載は changelog にありません。** また `cf` は 1.0.0-beta.16 という **beta 段階**であり、正式版までにさらにコマンド体系が変わる可能性があります。

## 参考

- Cloudflare changelog: https://developers.cloudflare.com/changelog/post/2026-10-16-docs-search/
