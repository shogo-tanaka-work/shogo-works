---
title: "Codex on Windows：サンドボックス設計と専用ユーザー・Firewall制御"
tool: "codex"
toolLabel: "OpenAI Codex"
date: 2026-05-13
sourceUrl: "https://openai.com/index/building-codex-windows-sandbox/"
summary: "OpenAIがCodexをWindows上で安全に動かすためのサンドボックス設計を公開した。専用Windowsユーザー、restricted token、firewall rule、setup binary、command runnerを組み合わせ、ファイル書き込みとネットワークアクセスを制御する。"
description: "OpenAIがWindows上でCodexを安全に動かすためのサンドボックス設計を公開。専用Windowsユーザー・restricted token・Firewall ruleを組み合わせることで、AI coding agentのファイル書き込みと外部通信を制限できる仕組みを理解できます。"
impact: "WindowsでCodexを使う企業は、AI coding agentのローカル実行を許可する際に、管理者権限、専用ユーザー、firewall rule、workspace境界をレビューしやすくなる。"
tags: ["codex", "openai", "windows", "sandbox", "security", "engineering"]
status: "candidate"
relatedKnowledge:
  - "/knowledge/ai-tools/codex/approval-modes-sandbox"
  - "/knowledge/ai-tools/codex/security-threat-model"
draft: false
---

## 要約

OpenAIは2026年5月13日、CodexをWindows上で安全かつ実用的に動かすためのサンドボックス設計を解説するEngineering / Security記事を公開しました。

Codexは、CLI、IDE extension、desktop appを通じて、開発者のローカルマシン上でテスト実行、ファイル読み書き、Git操作、ビルドなどを行います。便利な一方で、AI coding agentが実ユーザー権限でコマンドを動かす以上、ワークスペース外への書き込みや不要なネットワークアクセスをどう制限するかが重要になります。

記事では、AppContainer、Windows Sandbox、Mandatory Integrity Controlなど既存のWindows分離機構を検討したものの、Codexのような自由度の高い開発者ワークフローには合わなかったと説明しています。最終的には、専用Windowsユーザー、restricted token、firewall rule、sandbox setup binary、command runner binaryを組み合わせた設計に落ち着いています。

## 何が変わったか

- Codex on Windowsのサンドボックス設計が公式に解説された
- 既存Windows機構がCodex用途に合わなかった理由が整理された
- 初期案ではsynthetic SIDとwrite-restricted tokenでファイル書き込みを制限
- ネットワーク制限は環境変数だけでは弱く、最終設計ではWindows Firewallを利用
- `CodexSandboxOffline` / `CodexSandboxOnline`という専用Windowsユーザーを使う
- `codex-windows-sandbox-setup.exe`と`codex-command-runner.exe`でsetupと実行を分離

## 業務インパクト（一般企業向け）

企業がWindows端末でAI coding agentを許可する場合、「AIがどこまでローカル環境を触れるのか」は避けて通れません。今回の記事は、CodexがWindowsでどのようにファイル書き込みとネットワークアクセスを制限しているかを、OSレベルの仕組みまで踏み込んで説明しています。

特に重要なのは、ネットワーク制限です。環境変数でproxyを潰すだけでは、独自にsocketを開くプログラムを止められません。OpenAIはこの点を理由に、最終設計で専用ユーザーとfirewall ruleを使う方向に進めています。企業の情シスやセキュリティ担当は、Codex導入時に「workspace外への書き込み」「外部通信」「管理者権限が必要なsetup」「専用ローカルユーザーの作成」を確認項目にできます。

Windows中心の開発組織にとっては、CodexがMac / LinuxだけでなくWindowsでも安全な自律実行に寄せてきたことが大きいです。AI coding agentを本格導入するうえで、セキュリティレビューに使える一次情報が増えました。

## 副業・個人活用視点

個人でWindows環境のCodexを使う場合も、Full Access modeで何でも許すより、サンドボックスの考え方を理解しておく価値があります。AIにテストやビルドを任せるほど、実行されるコマンドの範囲は広がります。

副業でクライアント端末やWindows開発環境を扱う人は、Codexの導入手順だけでなく、「どのディレクトリを書き込み可能にするか」「ネットワークアクセスをいつ許可するか」「管理者権限のsetupをどう説明するか」まで含めて提案できると信頼されやすいです。

また、Windows向けのAI開発環境整備やセキュリティチェックリストを作る題材としても使えます。単なる新機能紹介ではなく、AI coding agentを安全に運用するための設計事例として読むのがよさそうです。
