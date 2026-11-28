---
title: "Claude が MCP の Skills・Tasks・Elicitation に対応：サーバー側がノウハウを配り、長い処理を任せ、実行前に人へ確認できる"
tool: "claude"
toolLabel: "Claude"
date: 2026-11-24
sourceUrl: "https://claude.com/resources/articles/skills-over-mcp-tasks-and-more"
summary: "Anthropic が、MCP サーバーが Claude と連携する方法を広げる3つの機能を発表した。サーバーが道具と一緒に使い方の指針を配る Skills over MCP は公開ベータ、時間のかかる処理をバックグラウンドで走らせる Tasks と、実行の途中で人に入力や承認を求める Elicitation は一般提供（GA）、Claude へのファイル送信（File Uploads）は近日提供とされた。対象は Claude と Claude Code で、Pro・Max・Ultra では先に使え、Team と Enterprise は順次展開中。"
description: "MCP の新機能3つの役割、提供状況（プラン別）、導入側が確認する点を整理する。"
impact: "MCP コネクタが「道具の一覧」から「使い方と承認の流れを含む部品」に変わる。破壊的な操作の前に人の確認を挟む設計が公式機能で組めるため、社内の MCP 運用ルールを見直す材料になる。"
tags: ["claude", "claude-code", "mcp", "skills", "elicitation", "tasks", "管理者機能"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

Anthropic は 2026-11-24、MCP（Model Context Protocol）サーバーが Claude と連携する方法を広げる更新を発表しました。公式は、サーバーが「道具を貸すだけ」から「別のエージェントのように働く」形へ近づくものと位置づけています。

- **Skills over MCP（公開ベータ）**: サーバーが道具と一緒に、ベストプラクティスや手順書を配れます。Claude が必要なときだけ読み込むため、文脈の消費を抑えられます。サーバー側で更新されるので、利用者が別途インストールする必要はありません。
- **Tasks（GA）**: 時間のかかる処理や、サーバー内のエージェントの一連の作業を、Claude が別の作業を続けている間に走らせ、終わったら結果を受け取ります。
- **Elicitation（GA）**: サーバーが呼び出しを一時停止し、フォームやリンクで人に入力や承認を求め、答えを受けて再開します。
- **File Uploads（近日提供）**: PDF、表計算、画像を、文脈に載せずに MCP サーバーへ送る拡張です。

## 何が変わったか

これまでは、ツール名と説明だけが Claude に渡り、「その場面でどう使うか」はユーザーが別に教える必要がありました。また、ツール呼び出しは終わるまで待つ形でした。

公式が挙げる例は次のとおりです。

- Shopify はストアの設計から更新まで、HubSpot は顧客のオンボーディングを、Atlassian は組織の文脈を使った分析を Skills で支援します。
- ZoomInfo は Tasks を使い、複数回に分けていたアカウント調査を1回で走らせています。
- Supabase は有料プロジェクト作成や破壊的な SQL の前に費用や内容を確認し、GitHub はリポジトリ削除の前にリポジトリ名の入力を求めます。Railway もサービス削除などの前に確認します。

## 業務インパクト（一般企業向け）

**提供状況**（公式の記載）:

- Skills over MCP: Claude と Claude Code で公開ベータ。Pro・Max・Ultra は既定でオン、Team は管理者が有効化すると使え、Enterprise は近日対応。
- Tasks と Elicitation: Pro・Max・Ultra で GA。Team と Enterprise は展開中。
- File Uploads: Pro・Max・Ultra と対象の Team・Enterprise で近日展開。

**運用上の観点**:

- 破壊的な操作（削除、課金、外部共有）を行う MCP サーバーは、Elicitation に対応しているかを選定基準に加えられます。
- Skills は「サーバー提供者が書いた指針」を Claude が読む形になります。提供元が信頼できるか、組織の運用ルールと矛盾しないかを、導入前に確認してください。
- Team で使う場合、Skills over MCP は管理者の有効化が必要です。

これらは公開の MCP 仕様と拡張に含まれ、対応するサーバーは Claude 以外のクライアントでも動く想定です。最大の処理時間やファイルサイズなどの上限は、公式記事には書かれておらず、リンク先のドキュメントで確認する必要があります。

## 副業・個人活用視点

自作の MCP サーバーがある人は、Elicitation を使って「削除や送信の前に確認を入れる」設計を試す価値があります。受託案件で外部サービスを MCP でつなぐ場合も、確認フローが標準機能で組めれば、説明責任の面で提案しやすくなります。

Pro 以上なら Skills over MCP が既定で有効です。使い方の指針を持つ対応サーバー（記事にある各社のものなど）を1つ試し、指針なしの場合と応答の安定度を比べると、自分の業務に効くかを判断できます。

## 関連リンク

- [MCP servers can now ship skills, run tasks, and more with Claude（公式）](https://claude.com/resources/articles/skills-over-mcp-tasks-and-more)
