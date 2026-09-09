---
title: "GitHub Copilot Agent Finder：自然言語でMCPサーバーを発見・接続"
tool: "github-copilot"
toolLabel: "GitHub Copilot"
date: 2026-06-17
sourceUrl: "https://github.blog/changelog/2026-06-17-agent-finder-for-github-copilot-now-available/"
summary: "GitHub Copilot に Agent Finder が追加。自然言語で MCP サーバー・スキル・エージェント・ツールを検索・接続できる。ARD（Agentic Resource Discovery）仕様に準拠し、Enterprise ではプライベートレジストリも管理可能。"
description: "GitHub CopilotにAgent Finderが追加。MCPサーバーの名前や設定を知らなくても「やりたいこと」を自然言語で入力するだけで対応するサーバーやエージェントを発見・接続できる。ARD仕様対応・Enterprise向けプライベートレジストリ管理も解説。"
impact: "MCP サーバーの名前や設定を知らなくても自然言語で発見・接続できるため、AI ツール活用の入口が広がる。Enterprise ではプライベートレジストリで社内ツールを安全に管理しながら配布できる。"
tags: ["github-copilot", "agent-finder", "mcp", "ard", "enterprise"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

GitHub Copilot に Agent Finder が追加されました。MCP サーバーやスキル、エージェント、ツールを自然言語で検索して接続できる機能です。

これまで MCP サーバーを使うには「どのサーバーがあるか調べる → 設定ファイルに手で追加する → 動作確認する」という手順が必要でした。Agent Finder はこの「発見」フェーズを自動化します。使いたいことを自然言語で伝えると、対応するサーバーやエージェントが見つかります。

ARD（Agentic Resource Discovery）という仕様に準拠しており、対応しているサーバーは自動認識されます。Enterprise プランでは、組織のプライベートレジストリで社内ツールを管理・配布できます。

## 何が変わったか

- 自然言語で MCP サーバー・スキル・エージェント・ツールを検索・接続できる
- ARD（Agentic Resource Discovery）仕様への準拠でサーバーが自動認識される
- Enterprise ではプライベートレジストリで社内ツールを管理・配布可能
- 全 Copilot プランで利用可能

## 業務インパクト（一般企業向け）

MCP サーバーの導入障壁が下がります。これまでは設定に詳しい人がセットアップし、他のメンバーに展開する必要がありましたが、Agent Finder があれば「○○したい」と言えば対応ツールが見つかる入口になります。

Enterprise のプライベートレジストリは、社内システムに接続する MCP サーバーを安全に管理・配布するインフラとして機能します。IT 部門が承認済みのツールのみをレジストリに登録し、全開発者が同じ手順でアクセスできる体制が作れます。

## 副業・個人活用視点

「MCP って何があるかよくわからない」という段階から、「やりたいことを言えば見つかる」フローに変わります。MCP エコシステムをこれから使い始めたい人の入口として機能します。

副業で複数ツールを使い分けている場合、Agent Finder でその都度必要なものを探す使い方もできます。
