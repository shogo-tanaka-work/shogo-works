---
date: 2026-10-29
title: "Cursor VS Code Extension Marketplace で Claude Code 拡張の改ざん版が配布（SSH バックドア）"
service: "Cursor"
source: https://cursor.com/blog/claude-code-extension-security-notice
fetched_at: 2026-11-02T09:45:00+09:00
published_at: 2026-10-29T00:00:00Z
date_precision: date-only
category: incident
---

# 2026-10-29 Cursor Marketplace で Claude Code 拡張の改ざん版が配布（SSH バックドア）

## 公式内容の日本語要約

Cursor は 2026-10-29、自社の VS Code Extension Marketplace で **`Anthropic.claude-code` の 2.1.312 および 2.1.313（Windows / macOS 版）に改ざん版が配布された**インシデントを公表した。**これらは Anthropic が作ったものではない。** cursor.com/marketplace からダウンロードした他の拡張、Grok Bot、Grok、その他 SpaceXSI 製品には影響しないとしている。

**期間は同日の 2:27am PT 〜 1:35pm PT（約11時間）。** 改ざん版は永続的な SSH バックドアの設置を試みるコードを実行する。具体的には (1) ホスト名・ユーザー名・OS・アーキテクチャ・ホームディレクトリのパス・環境変数名・作業ディレクトリ・設定された Git メールアドレス・パブリック IP を収集して送信、(2) 攻撃者の SSH 鍵を `authorized_keys` へ追加し、ローカルの SSH サービスを有効化してリバース SSH トンネルを開く、(3) macOS は LaunchAgent、Windows は SYSTEM として実行を試みるスケジュールタスク（Startup スクリプトへフォールバック）で永続化し、バックグラウンドスクリプトが約60秒ごとにトンネルを再試行する。

**緩和要因**: 攻撃者サーバーはホスティング事業者と連携して停止済みで、リバースシェルとホスト情報の POST は機能しない。ローカル SSH サービスの有効化には管理者権限が必要で、Cursor を管理者権限で起動していない大半のホストではその手順は失敗する。**ただし、鍵の追加・永続化の設置・ホスト情報の送信は成立しうるため、公式は条件にかかわらず対応手順の実施を求めている。**

**Cursor 側の対応**: 検知後ただちに marketplace から削除して配布を停止、念のため marketplace 全体を停止、他の拡張に改ざんが無いことを確認、鍵をローテーションして marketplace を再構築し復旧。

**利用者側の対応**（該当期間に macOS / Windows で 2.1.312 または 2.1.313 を導入・更新した場合）: (1) 影響確認スクリプトを実行、(2) エンドポイント・ネットワーク・拡張インストールのテレメトリを横断して指標を検索、(3) ペイロード実行やバックドア設置の痕跡があるホストを隔離、(4) 不正な SSH 鍵・永続化機構・稼働中のトンネルプロセスを削除し、ホストを再構築すべきか評価する（**拡張のアンインストールだけでは不十分。ペイロードは独立した永続化スクリプトを置いて動き続ける**）、(5) 当該ホストからアクセスできる資格情報とセッションを、信頼できる別システムからローテーションする。

**影響確認**: 攻撃者の公開鍵は `svc-telemetry` というラベルで `authorized_keys` に追記される。macOS は `grep -qs svc-telemetry ~/.ssh/authorized_keys`、Windows は PowerShell で `$HOME\.ssh\authorized_keys` と `C:\ProgramData\ssh\administrators_authorized_keys` を `svc-telemetry` で検索する。公式は macOS / Windows 向けの修復スクリプト（`remediate-macos.sh` ほか）も提供している。

## 影響範囲

- 対象ユーザー: Cursor の VS Code Extension Marketplace から `Anthropic.claude-code` 2.1.312 / 2.1.313（Windows / macOS）を 2026-10-29 2:27am PT 〜 1:35pm PT に導入・更新した利用者
- 対象外: Anthropic の公式配布、cursor.com/marketplace の他の拡張
- 必要な対応: 鍵の有無の確認 → 該当すれば隔離・永続化の除去・資格情報のローテーション

## 教材化メモ

週次ロールアップ（Claude Code）の「今週の要点」冒頭で扱う。詳細はそちらに集約する。

## 原文確認

- 公式見出し: Security notice — malicious version of Anthropic.claude-code (2.1.312 and 2.1.313) identified in the Cursor VS Code Extension Marketplace
- 公式URL: https://cursor.com/blog/claude-code-extension-security-notice
- 原文全文は公式ページで確認してください。
