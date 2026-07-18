---
date: 2026-07-17
title: "GitHub Copilot CLI v1.0.72-1（prerelease）— plugin/mcp/skillフラグ追加、vimキー誤操作修正"
service: "GitHub Copilot CLI"
source: https://github.com/github/copilot-cli/releases/tag/v1.0.72-1
fetched_at: 2026-07-18T10:58:20+09:00
published_at: 2026-07-17T17:33:31Z
date_precision: timestamp
category: enhancement
---

# 2026-07-17 GitHub Copilot CLI v1.0.72-1（prerelease）

## 公式内容の日本語要約

`github/copilot-cli`のprereleaseチャンネルでの更新。プラグイン管理系のCLIフラグとして`--plugin`・`--mcp`・`--skill`をplugin mutation系コマンドに追加し、`copilot plugins remove --skill`でskillの個別削除もできるようになった。UI改善として、圧縮表示された編集行を展開した際にフルパスを表示するようにし、モデルをまたいでplan承認メニューの挙動を決定的にし、`/add-dir`で追加したディレクトリがターン間でagentコンテキストに表示され続けるようにした。バグ修正としては、ask-user/elicitation入力がsplit-paneチャットビューで折り返されない不具合、Ctrl+Kや大文字J/Kなどの修飾キー付きvimキーがツール権限プロンプト等の選択メニューでカーソルを動かしてしまっていた不具合（無修飾のj/k・矢印キー・Ctrl+P/Ctrl+Nのみがナビゲートするよう修正）、JSON構文エラーを含むVS Code `keybindings.json`に対して`/terminal-setup`が誤って書き換えて成功報告してしまっていた不具合（文書化通り拒否するよう修正）を含む。

## できるようになったこと

- `copilot plugins`系コマンドに`--plugin`・`--mcp`・`--skill`フラグ、skill個別削除サポートを追加
- 圧縮編集行展開時のフルパス表示、plan承認メニューのモデル間一貫性、`/add-dir`ディレクトリのターン間保持
- vimキー誤操作・split-paneチャット表示・`/terminal-setup`の不正JSON処理を修正

## 影響範囲

- 対象ユーザー: GitHub Copilot CLIでplugin/skillを管理する開発者、vimキーバインドを使う利用者、VS Code連携利用者
- 対象プラン: 制限なし（prereleaseチャンネル利用者）
- API / UI / 管理者機能: `copilot plugins`コマンド、split-paneチャットビュー、`/terminal-setup`

## 教材化メモ

- prereleaseチャンネルのため単独記事化は見送るが、plugin/skill管理フラグの追加はCopilot CLI活用ガイドの更新候補としてメモしておく。

## 原文確認

- 公式見出し: "v1.0.72-1"
- 公式URL: https://github.com/github/copilot-cli/releases/tag/v1.0.72-1
- 原文全文は公式ページで確認してください。
