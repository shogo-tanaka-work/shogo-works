---
date: 2026-10-07
title: "Codex CLI 0.161.0 の変更内容が changelog に掲載（GPT-6.1 Sol 既定化・Bedrock 拡張・/mcp login）"
service: "OpenAI Codex"
source: https://learn.chatgpt.com/docs/changelog
fetched_at: 2026-10-08T09:30:00+09:00
published_at: 2026-10-07
date_precision: date-only
---

# 2026-10-07 Codex CLI 0.161.0 の内容が判明

## 公式内容の日本語要約

**前日（2026-10-06）の巡回では、GitHub Releases の `rust-v0.161.0` の本文に変更内容の記載がなく「内容不明」として記録していた。** 本日 `learn.chatgpt.com/docs/changelog` に 2026-10-07 付で内容が掲載され、中身が確認できた。GitHub の release 側も 2026-10-07T16:01:20Z に更新されている。

掲載された主な変更は次のとおり。

- **既定モデルの変更**: bundled カタログと Amazon Bedrock カタログの両方で **GPT-6.1 Sol が既定モデル**になった
- **Bedrock 対応の拡張**: multi-agent V2 と Ultra reasoning に対応。Bedrock Mantle が **AWS GovCloud リージョン**を受け付ける
- **`/mcp login <name>`**: ターミナルから MCP サーバーへサインインできる
- **音声会話**: マイク、スピーカー、入力チャンネルの選択に対応
- **Daybreak**: `--enable cli_daybreak` または `features.cli_daybreak=true` でオプトイン
- **Cyber access program**: `codex exec` と TypeScript SDK が、ターンごとに Cyber access program を選択できる
- 修正: ファイルシステムの権限エスカレーション、ターミナル再接続、Windows サンドボックス起動、ペースト処理、スレッド resume、リトライ挙動

本日の窓内には alpha が2本出ている（`0.162.0-alpha.18` が 2026-10-07T02:16:44Z、`0.162.0-alpha.17.1` が 2026-10-08T00:07:10Z）。stable の新規リリースはない。

## できるようになったこと

- Bedrock 経由の Codex で GovCloud リージョンと Ultra reasoning が使える
- `/mcp login` で MCP サーバー認証をターミナル内で完結できる

## 影響範囲

- 対象ユーザー: Codex CLI 利用者、特に Bedrock 経由で使う組織
- 対象プラン: Codex CLI（bundled / Bedrock カタログ）
- API / UI / 管理者機能: CLI、TypeScript SDK

## 教材化メモ

- **「リリース本文が空で、翌日 changelog に載る」という観測パターンを記録しておく価値がある。** GitHub Releases だけを一次情報にすると、Codex は内容不明のまま通過する日が出る。**`learn.chatgpt.com/docs/changelog` を翌日に再確認する**という運用が必要で、source-catalog の補助ソースの位置づけを「翌日の追補確認先」として明示しておくとよい（補足メモへ転記済み）。
- **バージョン番号付きリリースなので単独記事にはしない。** 判定 D（週次ロールアップへ）。GovCloud 対応と既定モデル変更という実務的に重い内容を含むが、`selection-rubric.md` の機械的な線を維持する。週次ロールアップで GovCloud と GPT-6.1 Sol 既定化を要点として扱う。

## 原文確認

- 公式見出し: "Codex CLI 0.161.0"
- 公式URL: https://learn.chatgpt.com/docs/changelog
- 併記: https://github.com/openai/codex/releases
- 原文全文は公式ページで確認してください。
