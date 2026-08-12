---
date: 2026-08-11
title: "GitHub Copilot for JetBrains に Copilot Memory と Ollama BYOK を追加"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-08-11-copilot-memory-and-ollama-in-github-copilot-for-jetbrains
fetched_at: 2026-08-12T10:05:00+09:00
published_at: 2026-08-11
date_precision: date-only
category: enhancement
---

# 2026-08-11 JetBrains 版の 2026 年 8 月更新

## 公式内容の日本語要約

GitHub Copilot for JetBrains の 8 月リリースで、複数の機能が追加された。

Copilot Memory はチャットセッションをまたいで情報を保持する機能で、プロジェクトの前提や個人の好みを毎回説明し直す必要がなくなる。有効・無効は Copilot の設定ポータルから切り替える。

Ollama が BYOK プロバイダーとして使えるようになり、ローカルモデルを JetBrains 上のプロバイダー設定とモデル選択の両方から扱える。

Enterprise 管理者向けには、サーバー側から組織全体を制御する managed settings が入った。プラグインの利用可否、MCP サーバーへのアクセス、権限バイパスの挙動、OpenTelemetry 設定を管理できる。

このほか、Codex ワークフローのセッションがデバッグログに表示されるようになり、カスタム指示と Skill に対応した。Copilot CLI は macOS / Linux / Windows の統合ターミナルから自動インストールできる。

## できるようになったこと

- Copilot Memory でチャットセッションをまたいだ文脈保持ができる
- Ollama を BYOK プロバイダーとして選び、ローカルモデルを使える
- Enterprise 管理者がプラグイン・MCP・権限バイパス・OpenTelemetry をサーバー側から制御できる
- Codex ワークフローのセッションがデバッグログに出る（カスタム指示 / Skill 対応）
- 統合ターミナルから Copilot CLI を自動インストールできる

## 影響範囲

- 対象ユーザー: JetBrains IDE で Copilot を使う開発者と Enterprise 管理者
- 対象プラン: 記載なし（managed settings は Enterprise 向け）
- API / UI / 管理者機能: IDE プラグイン + 管理者設定

## 教材化メモ

- Ollama の BYOK 対応は「ローカルモデルをどこまで実務に使えるか」を扱う題材になる。ただし JetBrains 限定の話に閉じるとつぶしが効かないため、教材にするなら BYOK という概念の側を主題にする。
- Copilot Memory は Claude Code の CLAUDE.md / memory と対比すると理解が早い。「設定ファイルで明示的に渡す記憶」と「暗黙に蓄積される記憶」の違いは、企業導入時のレビュー可能性に直結する論点として使える。
- Enterprise managed settings は、IDE ごとに管理面が分散する問題の実例。VS Code / JetBrains / CLI で設定面が別々にあることを整理しておかないと、情シス向け教材で抜けが出る。

## 原文確認

- 公式見出し: Copilot memory and Ollama in GitHub Copilot for JetBrains
- 公式URL: https://github.blog/changelog/2026-08-11-copilot-memory-and-ollama-in-github-copilot-for-jetbrains
- 原文全文は公式ページで確認してください。
