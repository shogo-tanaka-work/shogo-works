---
title: "OpenAI Codex rust-v0.145.0：`/import`でClaude Code設定を移行可能に、Bedrock連携・音声入出力・マルチエージェントV2が安定化"
tool: "codex"
toolLabel: "OpenAI Codex"
date: 2026-07-21
sourceUrl: "https://github.com/openai/codex/releases/tag/rust-v0.145.0"
summary: "Codex CLIのstableリリース。/importでCursor・Claude Codeの設定・MCPサーバー・プラグイン・セッション・コマンドを移行できるようになり、Claude CodeからCodexへの公式な移行導線が明確化された。ほかAmazon Bedrock連携（experimental）、音声入出力・realtime V3ストリーミング会話、マルチエージェントV2の安定化、スレッド履歴のページネーションを追加。"
description: "/importでCursor・Claude Code設定の移行に対応、Amazon Bedrockログイン・カスタムエンドポイント対応、音声入出力・realtime V3ストリーミング会話、マルチエージェントV2（サブエージェントのモデル/reasoning/並行数設定）の安定化、スレッド履歴ページネーション。"
impact: "Claude CodeやCursorからCodexへの移行を検討しているチーム、Amazon Bedrock経由でCodexを使う企業ユーザー、音声インターフェースやマルチエージェント運用を行う開発者に直接影響。"
tags: ["codex", "import", "bedrock", "voice", "multi-agent", "release"]
status: "candidate"
relatedKnowledge:
  - "/knowledge/ai-tools/codex/vs-claude-code"
draft: false
---

## 要約

OpenAI Codex CLIのrust-v0.145.0がstableリリースされました（2026-07-21公開）。前回stable（rust-v0.144.6、2026-07-18）以降のalpha群を集約した大型アップデートです。

最も注目すべき変更は`/import`コマンドの対象拡大です。従来からCursorの設定は移行対象でしたが、今回**Claude Codeの設定・MCPサーバー・プラグイン・セッション・コマンド・プロジェクトスコープのmemoriesも移行できる**ようになりました。これはClaude CodeからCodexへの乗り換えを検討するユーザー向けの公式移行導線が明確化された初めてのケースです。これまで公式に用意されていたのは逆方向（`openai/codex-plugin-cc`によるCodex→Claude Code方向の連携）のみで、Claude Code→Codexはサードパーティ製ツールに頼らざるを得ませんでした。ただし今回追加されたのは片方向のインポート機能であり、双方向にシームレスに行き来できる「簡単移行」を意味するものではない点には注意が必要です。

このほか、Amazon Bedrockへのログインとカスタムエンドポイント・認証対応（experimental、デフォルトモデルはGPT-5.6 Sol）、一般的なローカル音声フォーマットでの音声入力・ツール出力とストリーミングrealtime V3会話、マルチエージェントV2の安定化（サブエージェントのモデル・reasoning水準・並行数を設定可能にし、ロール復元やエージェントナビゲーションも改善、opt-in experimentalから安定版へ移行）、スレッド履歴のページネーション（experimental、検索・永続化された名前・サブエージェント対応・memories機能）、ターミナル上でクリック可能なインライン可視化リンクが追加されています。

## 何が変わったか

- `/import`でCursor・Claude Codeの設定、MCPサーバー、プラグイン、セッション、コマンド、プロジェクトスコープのmemoriesを移行可能に
- Amazon Bedrockログイン・カスタムエンドポイント対応（experimental、デフォルトはGPT-5.6 Sol）
- 音声入力・音声ツール出力・realtime V3ストリーミング会話に対応
- マルチエージェントV2（サブエージェントのモデル/reasoning水準/並行数の設定）が安定版に
- スレッド履歴のページネーション・検索・memories機能（experimental）
- ターミナル上でのクリック可能なインライン可視化リンク

## 業務インパクト（一般企業向け）

`/import`によるClaude Code設定の移行は、複数のコーディングエージェントを併用している組織や、ツール標準化を検討している組織にとって乗り換えコストを下げる変更です。ただし片方向インポートである以上、両ツールを併用する運用では設定の同期漏れに注意が必要で、移行手順やチェックリストの整備が引き続き求められます。

Amazon Bedrock連携は、Bedrockを経由したAIツール利用をガバナンスの前提にしている企業にとって、Codexを選択肢に加えやすくする変更です。マルチエージェントV2の安定化は、サブエージェントを使った並行タスク処理をCI/CDや大規模リファクタリングに本格導入する際の信頼性向上につながります。

## 副業・個人活用視点

Claude CodeとCodexを両方試したいが移行コストで踏み切れなかった個人開発者にとって、`/import`は乗り換えのハードルを下げる材料になります。音声入出力対応は、移動中や作業スペースが限られる環境でCodexを使いたい個人ユーザーにとって新しい使いどころです。マルチエージェントV2の安定化により、個人でも複数サブエージェントへの並行委譲を安心して運用に組み込みやすくなります。
