---
title: "Claude Code v2.1.216：sandbox.filesystem.disabledでファイルシステム分離だけ無効化・長時間セッション高速化"
tool: "claude-code"
toolLabel: "Claude Code"
date: 2026-07-20
sourceUrl: "https://github.com/anthropics/claude-code/releases/tag/v2.1.216"
summary: "Claude Code v2.1.216はパッチリリース。ネットワーク遮断は維持したままファイルシステム分離だけをスキップできる新設定sandbox.filesystem.disabledを追加し、長時間セッションでメッセージ正規化コストが二次関数的に増加していた遅延問題を修正。worktree分離subagentのgit誤操作、バックグラウンドセッションのエージェント設定リセットなど開発体験に関わる多数のバグも修正された。"
description: "sandbox.filesystem.disabled追加、長時間セッション・resumeの高速化、OAuthトークンローテーション中のauto mode誤拒否修正、worktree分離subagentのgit誤操作修正など多数のバグ修正。"
impact: "sandbox設定を運用しているチーム、長時間セッションやworktree/subagentを多用する運用者に直接影響。"
tags: ["claude-code", "sandbox", "worktree", "subagent", "auto-mode", "release"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

Claude Code v2.1.216（2026-07-20公開）はCLIのパッチリリースです。目玉は新設定`sandbox.filesystem.disabled`の追加で、ネットワークegress制御は維持したままファイルシステム分離だけをスキップできるようになりました。従来のsandbox設定は「ネットワーク遮断」と「ファイルシステム分離」がセットで機能していたため、リポジトリ外のファイル参照やシンボリックリンクを扱う運用でファイルシステム分離が邪魔になるケースがありましたが、ネットワーク制御は残したまま部分的に緩和できる選択肢が加わった形です。

もう一つの主要な変更は、長時間セッションのパフォーマンス改善です。セッションが長くなるほどメッセージ正規化のコストが二次関数的に増加し、レスポンスやresumeに数秒単位の遅延が発生していた問題が修正されました。長時間の対話や大規模なコンテキストを扱う運用ほど恩恵が大きい変更です。

このほか、OAuthトークンの期限切れ・ローテーション中にauto modeがコマンドを誤って拒否してしまう不具合、worktree分離されたsubagentが共有チェックアウトへgitコマンドを誤って向けてしまう不具合、バックグラウンドセッションやresume済みsubagentのエージェント設定・ツール制限が復元されない不具合、AskUserQuestionの自由記述回答の文言不整合、Web版Claude Codeでアイドル後に質問が重複表示される不具合など、開発体験に関わる多数のバグが修正されています。

## 何が変わったか

- ネットワークegress制御を維持しつつファイルシステム分離だけを無効化できる`sandbox.filesystem.disabled`設定を追加
- 長時間セッション・resumeの高速化（メッセージ正規化コストの二次関数的増加を修正）
- OAuthトークン期限切れ/ローテーション中にauto modeがコマンドを誤って拒否しない
- worktree分離されたsubagentが共有チェックアウトへgitコマンドを誤って向けない
- バックグラウンドセッション・resume済みsubagentのエージェント設定/ツール制限の復元
- AskUserQuestionの自由記述回答の文言不整合、Web版Claude Codeのアイドル後質問重複などを修正

## 業務インパクト（一般企業向け）

`sandbox.filesystem.disabled`は、sandbox運用を前提にしつつファイルシステム分離だけが業務フローと衝突しているチームに向けた選択肢です。ネットワーク遮断というセキュリティ上の主要な制御は維持されるため、全面的にsandboxを無効化するより安全にワークアラウンドできます。既にsandbox設定を運用ドキュメント化している組織は、この設定の追加を反映しておく価値があります。

長時間セッションの高速化とworktree/subagent周りのバグ修正は、CI/CDやバッチ処理でClaude Codeを長時間・並行運用している組織にとって地味ながら重要な信頼性改善です。特にworktreeを使った並行作業でgitコマンドが意図しないチェックアウトに向かう不具合は、リポジトリの整合性に関わるため修正の恩恵が大きいと言えます。

## 副業・個人活用視点

個人でClaude Codeの長時間セッションを多用している人は、resume時の遅延が改善される恩恵を体感しやすいはずです。worktreeを使い分けて複数プロジェクトを並行運用しているフリーランス・個人開発者は、subagentのgit誤操作修正によって「意図しないリポジトリへのコミット」といったヒヤリハットのリスクが下がります。sandbox設定を細かく調整したい人は、`sandbox.filesystem.disabled`が新しい選択肢として使えることを覚えておくとよいでしょう。
