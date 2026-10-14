---
date: 2026-10-10
title: "Copilot for JetBrains に enterprise 既定モデルと MCP 自動起動の停止。JetBrains 2025.1 のサポート終了"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-10-10-new-controls-and-chat-improvements-in-copilot-for-jetbrains
fetched_at: 2026-10-12T09:50:00+09:00
published_at: 2026-10-10
date_precision: date-only
category: enhancement
---

# 2026-10-10 Copilot for JetBrains の制御とチャット改善

## 公式内容の日本語要約

JetBrains IDE 向け Copilot プラグインの更新である。プラン名の明示は無い。

**管理者向けの追加**: **managed settings から、利用可能な Copilot agent モデルのいずれかを新規会話の既定モデルに指定できる**ようになった。利用者は明示的に別のモデルを選ぶこともできる。

**利用者向けの追加**: 診断の intention メニューに **Fix アクション**が入り、インラインチャットを開いて修正を依頼する（agent mode が使えればそれを、使えなければ ask mode を使う）。**MCP サーバーの自動起動を止める設定**が入り、**Copilot と Claude の MCP サーバーがいつ有効になるかを利用者が決められる。**

**アカウントとサインイン**: アカウント表示の明確化、ステータス表示の簡素化、Switch Account アクション、レスポンシブなサインインページ（プロバイダー選択の改善、Copilot プランへのリンク、ブラウザ認可の進行をキャンセル可能）。

**チャットとナビゲーション**: メッセージをターン単位でグループ化し、ターン間を移動する操作が付いた。利用者メッセージにコピーと編集のアクションが入った。新規利用者向けに Chat の場所を示す1回限りのリマインダーが出る。

**マイグレーション**: マイグレーションコマンドを受け入れた後、Go Back が Copilot home セッションを開く（ローカルの会話が続いていても）。

**品質修正**: language server の起動、モデル / プロバイダーの切替、MCP 設定、カスタマイズの再読込、ファイル変更、worktree ワークフローの信頼性改善。モデル管理、ツール呼び出しの詳細、working sets、JetBrains IDE 設定の修正。

**廃止: JetBrains IDE 2025.1 のサポートが終了した。** 利用には **2025.2 以降が必要**である。**公開日（2026-10-10）以外の発効日は示されていない。**

## できるようになったこと

- managed settings で enterprise の既定モデルを指定できる
- MCP サーバーの自動起動を止め、有効化タイミングを利用者が決められる
- 診断から Fix アクションでインラインチャットを開ける

## 影響範囲

- 対象ユーザー: JetBrains IDE で Copilot を使う開発者と、その管理者
- 対象プラン: 記載なし
- API / UI / 管理者機能: managed settings、プラグイン設定、MCP 設定

## 教材化メモ

- **「MCP サーバーの自動起動を止められる」は統制の観点で重要である。** MCP サーバーは IDE 起動と同時に立ち上がると、**使っていない時間も外部サービスへの口が開いている。** 起動タイミングを利用者が握れるかは、MCP の審査項目に入る。**同じ週に Claude Code 2.1.296 が managed policy へ `code` キーを追加しており、両ベンダーで「管理側から拡張の起動を制御する」方向が揃っている。**
- **JetBrains 2025.1 のサポート終了は、発効日が「公開日のみ」で予告期間がゼロである。** 前週に記録した「同じベンダーの予告期間が1日から29日まで開く」という観察の続きで、**今回は予告なしの即時適用**である。IDE のバージョン統制を持たない組織は、更新時に初めて気づく。
- **enterprise 既定モデルの指定**は、Haiku 5.5 のような新モデルが既定で有効になる方針とセットで読む必要がある。**「新モデルは自動で有効」と「既定モデルは管理者が指定できる」は別の軸**である。

## 原文確認

- 公式見出し: New controls and chat improvements in Copilot for JetBrains
- 公式URL: https://github.blog/changelog/2026-10-10-new-controls-and-chat-improvements-in-copilot-for-jetbrains
- 原文全文は公式ページで確認してください。
