---
title: "Claude Managed Agents：Self-hosted sandboxes・MCP tunnels追加"
tool: "claude"
toolLabel: "Claude"
date: 2026-05-26
sourceUrl: "https://claude.com/blog/code-w-claude-london-2026-rethinking-how-we-build"
description: "Claude Managed AgentsにSelf-hosted sandboxes（public beta）とMCP tunnels（research preview）が追加。自社インフラやCloudflare等で実行環境を保ちながらManaged Agentsを使えるようになり、社内MCP serverを外部公開せずに接続できる仕組みも解説。"
summary: "Anthropic は 2026-05-26 のロンドンイベント **Code w/ Claude London 2026** で、Claude Managed Agents の機能拡張を 2 点発表した。1 つ目は **Self-hosted sandboxes（public beta）** で、Managed Agents の tool execution を **ユーザー側がカスタマイズした sandbox 環境**で走らせる仕組み。自社の自前インフラに加え、Cloudflare、Daytona、Modal、Vercel 等が想定先として挙げられている。これまで Managed Agents の実行環境は Anthropic ホスト側に限定されており、依存・ネットワーク・データ局所性などの要件を持つ組織は「Managed の使い勝手は欲しいが実行環境は外せない」というジレンマを抱えていた。public beta としての提供で、その制約を解く第一歩になる。2 つ目は **MCP tunnels（research preview）** で、Managed Agents から **private network 内の MCP server** に、インターネット露出なしの暗号化トンネル経由で到達できる機能。社内 MCP server（内部 API ラッパー、社内 DB を持つ MCP）を外部公開しなくても Managed Agents から呼び出せる設計が現実的になる。research preview のため本番運用には Anthropic 側の追加調整が必要。同イベントでは Boris Cherny（Claude Code 責任者）の基調講演に加え、Cat Wu、Katelyn Lesse、Angela Jiang、Lisa Crofoot らが登壇し、Spotify、Base44、Legora、Amplitude、Clay、Rogo などの参加企業の事例が共有された。次回は東京（2026-06-05〜06）でも同等のイベントが続く予定。"
impact: "Claude Managed Agents の **「実行環境はどこか」「社内 MCP にどう繋ぐか」** という 2 つの根源的なアーキ判断が動いた。**Self-hosted sandboxes** は、コンプライアンス・データ局所性・社内システム連携が論点になるエンタープライズで「Managed の使い勝手のまま、実行は自社/許可済みクラウドで」というオプションを開く。Cloudflare / Daytona / Modal / Vercel が想定先に挙がっているのは、すでにこれらで agent ランタイムを運用している組織にとって移行コストが下がるメッセージとして読める。**MCP tunnels** は社内 MCP server をインターネットに露出させずに Managed Agents から呼べる仕組みで、社内 API ラッパー / 社内 DB 系の MCP を Managed Agents で活用する道筋が現実化する。research preview のため即時導入は早いが、社内 MCP の設計を進めている組織は「将来 MCP tunnel に乗せる前提」で MCP 単位の権限境界を整理しておく価値がある。Self-hosted sandboxes は public beta、MCP tunnels は research preview と、提供段階の差を取り違えないよう注意。"
tags: ["claude", "managed-agents", "mcp", "self-hosted", "sandbox", "enterprise", "code-w-claude", "public-beta", "research-preview"]
status: "candidate"
relatedKnowledge:
  - "/knowledge/ai-tools/claude/managed-agents"
  - "/knowledge/ai-tools/claude/mcp"
draft: false
---

## 要約

Anthropic は 2026 年 5 月 26 日のロンドンイベント **Code w/ Claude London 2026** で、Claude Managed Agents の機能拡張を 2 点発表しました。Managed Agents の「実行環境」と「社内ネットワーク連携」という根源的なアーキ判断に直接効く変更です。

1 点目は **Self-hosted sandboxes（public beta）** です。Managed Agents の tool execution を、**ユーザー側がカスタマイズした sandbox 環境**で走らせる仕組みで、想定デプロイ先として:

- 自社の自前インフラ
- **Cloudflare**
- **Daytona**
- **Modal**
- **Vercel**

が挙げられています。これまで Managed Agents の実行環境は Anthropic ホスト側に閉じており、依存・ネットワーク・データ局所性などの要件を持つ組織は「Managed の使い勝手は欲しいが、実行環境を外せない」というジレンマを抱えていました。Self-hosted sandboxes はそこを解く第一歩で、Managed Agents の運用と sandbox 実体を切り出して別軸で持てるようになります。提供段階は **public beta** です。

2 点目は **MCP tunnels（research preview）** です。Managed Agents から **private network 内の MCP server** に、インターネット露出なしの暗号化トンネル経由で到達できる機能で、これまで Managed Agents から社内 MCP を呼ぶには「社内 MCP を外部に公開する」「逆方向接続のための専用構成を用意する」のいずれかが必要でしたが、tunnel 経由でその構成が一段スッキリします。社内 API ラッパー、社内 DB を持つ MCP server、社内専用の検索 MCP などを Managed Agents から実用的に扱える道筋が開けます。提供段階は **research preview** のため、本番運用には Anthropic 側の追加調整が必要です。

同イベントは Boris Cherny（Claude Code 責任者）の基調講演に加え、Cat Wu（Claude Code 製品責任者）、Katelyn Lesse / Angela Jiang（Claude 開発者プラットフォーム）、Lisa Crofoot（リサーチプロダクトマネージャー）らが登壇しました。参加企業として **Spotify、Base44、Legora、Amplitude、Clay、Rogo** などが紹介され、各社の Claude / Managed Agents 活用事例が共有されました。次回は **東京（2026-06-05〜06）** でも同等のイベントが続く予定で、日本側組織にとっては現地で詳細を確認できる機会になります。

## 何が変わったか

- **Self-hosted sandboxes（public beta）** — Managed Agents の tool execution 環境を、自社インフラ・Cloudflare・Daytona・Modal・Vercel 等のユーザー指定 sandbox で走らせられるように。
- **MCP tunnels（research preview）** — Managed Agents から private network 内の MCP server へ、インターネット露出なしの暗号化トンネル経由で到達できる。
- Code w/ Claude のロンドン開催（2026-05-26）に続き、東京開催（2026-06-05〜06）が予定。

## 業務インパクト（一般企業向け）

**Self-hosted sandboxes** は、Managed Agents 採用の前提を変えます。これまで「Managed なら開発コストが下がるが、実行環境を社外に置けない」とブロックしていた組織にとって、**「Managed の使い勝手」 + 「自社が許可した実行環境」** を両立する選択肢が出てきました。Cloudflare / Daytona / Modal / Vercel が想定デプロイ先に挙がっているのは、既存のクラウド資産・コンプライアンス資産を流用しやすいメッセージとして読めます。public beta のため、現時点では「PoC で当てる」「将来本番に乗せる前提で設計しておく」フェーズです。

**MCP tunnels** は、社内 MCP server の設計判断に影響します。社内 API・社内 DB を MCP として公開する設計を進めている組織は、これまで「いずれ外部公開できる構成」をベースに考えていた箇所を、「MCP tunnel に乗せる前提」で **MCP 単位の権限境界** を整理しておく価値があります。research preview の段階で本番投入は早いものの、設計上の前提に組み込むことはすでに可能です。

Code w/ Claude London 2026 そのものは、Claude 開発者プラットフォーム周辺の方向性を読むための材料です。社内で Managed Agents・Claude Code・MCP 周辺を扱うチームは、登壇内容を一次ソースとして資料に組み込む価値があります。**2026-06-05〜06 の東京開催** は、日本拠点の組織にとって現地参加・関係構築のチャンスです。

## 副業・個人活用視点

Self-hosted sandboxes と MCP tunnels はどちらも **enterprise 寄りの機能** ですが、副業・個人開発の視点でも追っておく価値があります。Cloudflare / Modal / Vercel など個人プランで触りやすいクラウドが Self-hosted sandbox の想定先に挙がっているため、**個人で Managed Agents を試す前提のサンドボックス設計** を、将来の business 案件に持ち込める形で先に作っておけます。

社内副業案件で MCP 設計に関わっている人は、**「MCP tunnel に乗せる前提」** を最初から設計に入れておくと、本採用フェーズで設計差し戻しを受けにくくなります。「権限境界が MCP 単位で切れているか」「private network 内に閉じている前提の MCP か」を整理する観点が、tunnel 提供の登場で改めて重要になりました。

Code w/ Claude 東京開催（2026-06-05〜06）は、副業 / 個人として Claude エコシステムに関わっている人にとって現地参加 / レポート発信の機会です。Anthropic の登壇者リスト（Claude Code / 開発者プラットフォーム責任者）からも、Claude Code・Managed Agents・MCP 周辺の話が中心になる見込みです。
