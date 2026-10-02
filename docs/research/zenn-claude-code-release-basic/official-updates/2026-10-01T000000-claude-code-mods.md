---
date: 2026-10-01
title: "Claude Code に mods。TypeScript 関数で本体の挙動そのものを書き換えられる"
service: "Claude Code"
source: https://claude.com/blog/claude-code-mods
fetched_at: 2026-10-02T09:11:00+09:00
published_date: 2026-10-01
date_precision: date-only
category: release
---

# 2026-10-01 Claude Code mods

## 公式内容の日本語要約

Anthropic は **Claude Code mods** を公開した。mods は「**Claude Code の動作を変える小さな TypeScript 関数**」であり、公式が機能を実装するのを待たずに挙動を変えられる。**サンドボックス化されておらず、Claude Code 本体と同じマシン権限で動く。**

mods ができることとして公式が挙げているもの。**モデルへ届く前にプロンプトを書き換える**、**ツール呼び出しをブロック / 書き換え / リトライする**、**権限リクエストを許可または拒否する**、**ツール出力から秘匿値を伏せる**、**ツール結果などの画面要素を編集・置換する**、**ボタンや入力欄を追加する**。同じイベントに複数の mod を掛けると**順番にスタックして実行**される。

**組み込み機能自体が mod へ移され始めている。** `/diff` は現在 mod として同梱されており、**無効化や差し替えが可能**。今後も組み込み機能を順次 mod 化していくとしている。

配布は既存のプラグイン基盤に乗る。**プラグインの中に mod が入り、CLI の `/plugin` または Claude ディレクトリからインストール**する。

**Team / Enterprise プランには `sec-default` という組み込みのセキュリティ mod** が用意され、**最初にロードされて「権限拒否の上書き」のような危険な改変を防ぐ**。管理者はソースコードを確認でき、独自の mod を代わりに読み込ませることもできる。

**提供はこの日から、Claude Code の CLI とデスクトップアプリ。** 公式は「**信頼できる提供元の mod だけを入れること**」と注意している（マシン権限で動くため）。

## できるようになったこと

- プロンプト / ツール呼び出し / 権限応答 / 画面表示の各段で割り込んで挙動を変更
- 組み込みの `/diff` を無効化・差し替え
- `/plugin` 経由での mod 配布・導入
- Team / Enterprise での `sec-default` による改変の下限保証

## 影響範囲

- 対象ユーザー: Claude Code（CLI / デスクトップ）利用者。組織統制は Team / Enterprise
- 対象プラン: 全プランで利用可。`sec-default` は Team / Enterprise
- API / UI / 管理者機能: `/plugin`、Claude ディレクトリ、管理者による mod の確認・差し替え

教材化メモ: src/content/ai-news-notes/claude-code/claude-code-mods.mdx

## 原文確認

- 公式見出し: Customize Claude Code with mods
- 公式URL: https://claude.com/blog/claude-code-mods
- 対応リリース: v2.1.287（`Added Claude Mods: plugins may now modify deeper behavior`）
- 原文全文は公式ページで確認してください。
