---
title: "Claude Code v2.1.219：Opus 5がデフォルトに、sandbox厳格allowlist・DirectoryAddedフック・subagentネストdepth 3対応"
tool: "claude-code"
toolLabel: "Claude Code"
date: 2026-07-24
sourceUrl: "https://github.com/anthropics/claude-code/releases/tag/v2.1.219"
summary: "Claude Code v2.1.219は、同日発表のClaude Opus 5を新しいデフォルトOpusモデルとして統合した大型リリース。sandbox.network.strictAllowlist設定によるネットワーク制御強化、DirectoryAddedフック追加、subagentのネスト生成がデフォルトでdepth 3まで対応するなど、開発者・エンタープライズ運用者向けの機能拡張が多数含まれる。"
description: "Opus 5統合（1M context、Fast mode $10/$50）、sandbox.network.strictAllowlistで許可リスト外ホストへのアクセスを拒否、DirectoryAddedフック追加、subagentネストがデフォルトでdepth 3対応（従来は1）、workflowSizeGuideline設定追加。"
impact: "sandbox/フック/subagentを活用する開発者・エンタープライズ運用者に直接影響。特にsubagentネスト拡大は複雑なマルチエージェントワークフローの設計自由度を高める。"
tags: ["claude-code", "opus-5", "sandbox", "hooks", "subagent", "release"]
status: "candidate"
relatedKnowledge:
  - "/knowledge/ai-tools/claude-code/hooks"
  - "/knowledge/ai-tools/claude-code/subagents"
draft: false
---

## 要約

Claude Code v2.1.219は、同日発表されたClaude Opus 5を新しいデフォルトOpusモデルとして統合した大型リリースです（1M context対応、Fast modeは$10/$50/百万トークン）。モデル統合以外にも、sandbox・フック・subagent周りの機能拡張が多数含まれています。

セキュリティ面では、`sandbox.network.strictAllowlist`設定が追加され、sandbox化されたコマンドで許可リスト外ホストへのアクセスをプロンプトなしで拒否できるようになりました。新しい`DirectoryAdded`フックは、`/add-dir`コマンドやSDKの`register_repo_root`でセッション中に新しい作業ディレクトリが登録された際に発火します。headless stream-jsonのinitイベントには`mcp_server_errors`が追加され、`--mcp-config`で設定検証により除外されたMCPサーバーを一覧表示できるようになりました。

マルチエージェント運用に関わる変更としては、subagentのネスト生成がデフォルトでdepth 3まで対応しました（従来は1、`CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH=1`で無効化可能）。stream-jsonでもネストしたsubagent転送に対応し、depth-2以降で生成されたsubagentも`--forward-subagent-text`指定時に表示されるようになっています。Dynamic workflowのデフォルトサイズガイドラインは「medium」（15エージェント未満推奨）に変更され、`workflowSizeGuideline`設定キーで任意のファイルから指定することも可能になりました。なお、翌日リリースのv2.1.220はバグ修正のみの軽微パッチです。

## 何が変わったか

- Claude Opus 5を新しいデフォルトOpusモデルとして統合（1M context、Fast mode $10/$50/百万トークン）
- `sandbox.network.strictAllowlist`設定を追加、許可リスト外ホストへのアクセスをプロンプトなしで拒否
- `DirectoryAdded`フックを追加（`/add-dir`・`register_repo_root`での新規ディレクトリ登録時に発火）
- headless stream-jsonに`mcp_server_errors`を追加、設定検証で除外されたMCPサーバーを一覧表示
- subagentのネスト生成がデフォルトでdepth 3まで対応（従来は1）
- Dynamic workflowのデフォルトサイズガイドラインを「medium」に変更、`workflowSizeGuideline`で任意指定可能に
- Opus 4.7をFast modeから削除、`/fast`はOpus 5とOpus 4.8に適用

## 業務インパクト（一般企業向け）

`sandbox.network.strictAllowlist`は、企業のセキュリティポリシーに沿ってClaude Codeのネットワークアクセスを厳格に制御したい組織にとって重要な追加です。許可リスト外へのアクセスをプロンプトなしで拒否する挙動は、うっかり承認してしまうヒューマンエラーのリスクを下げます。sandbox設定を運用ドキュメント化している組織は、この設定の追加を反映しておく価値があります。

subagentのネスト対応がdepth 3まで拡大したことで、複雑なマルチエージェントワークフロー（サブエージェントがさらにサブエージェントを起動する構成）を組みやすくなりました。大規模なコードベースの並行リファクタリングやマルチステップの調査タスクをClaude Codeに委任している組織にとって、設計の自由度が広がる変更です。

## 副業・個人活用視点

個人でClaude Codeを使い倒している開発者にとって、Opus 5への即時アップグレードはコストを増やさず性能向上を得られる恩恵です。subagentのネスト拡大は、個人開発でも複数の専門タスクを階層的に分解して並行処理させるような凝ったワークフローを組みたい人にとって新しい選択肢になります。sandbox設定を細かく調整したい人は、`sandbox.network.strictAllowlist`を使ってネットワークアクセスを厳格化しつつ、意図しない外部通信のリスクを下げる運用ができます。
