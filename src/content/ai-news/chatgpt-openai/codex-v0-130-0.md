---
title: "Codex v0.130.0：リモート操作・Bedrock SSO認証・Hooksプラグイン可視化"
tool: "chatgpt-openai"
toolLabel: "ChatGPT / OpenAI"
date: 2026-05-09
sourceUrl: "https://github.com/openai/codex/releases/tag/rust-v0.130.0"
summary: "OpenAI Codex の v0.130.0 が 2026-05-08 23:09 UTC（5/9 08:09 JST）に公開。`codex remote-control` でヘッドレス・リモート操作可能なアプリサーバーを起動できるエントリポイント、プラグイン詳細での bundled hooks 表示、AWS console-login 経由の Bedrock 認証、large thread のページング、画像参照の multi-environment 対応など、運用機能の拡張が中心。"
description: "OpenAI Codex v0.130.0では`codex remote-control`でCIやサーバーからヘッドレス実行が可能になり、AWS SSOのconsole-loginプロファイルでBedrockを認証できるようになった。プラグインのbundled hooks可視化で組織内配布も管理しやすくなる。"
impact: "Codex を CI / リモート実行・プラグイン経由運用しているチームに直接効く。Bedrock を AWS SSO 経由で使っている組織は認証フローが整い、プラグイン共有を組織内で回す運用がやりやすくなる。Hooks 機能自体は v0.124.0 で Stable 化済みだが、プラグインとの組み合わせで可視化が一段進んだ。"
tags: ["openai-codex", "remote-control", "hooks", "plugins", "bedrock", "release-note"]
status: "candidate"
relatedKnowledge:
  - "/knowledge/ai-tools/codex/cli-features"
  - "/knowledge/ai-tools/codex/agent-skills"
draft: false
---

## 要約

OpenAI Codex の v0.130.0 が公開されました。リモート操作のための新しいエントリポイント、プラグイン経由の hooks 可視化、AWS console-login での Bedrock 認証など、運用や統合の足回りに効くアップデートが多めです。

なお Codex の Hooks 機能そのものは v0.124.0（2026-04-22）で Stable 化済みです。今回の v0.130.0 で追加されたのは「プラグイン詳細でバンドルされた hooks を表示する」「プラグイン共有時にリンクメタデータと発見可能性のコントロールを公開する」という、可視化・共有運用側の拡張です。

## 何が変わったか

新機能

- `codex remote-control` を追加。ヘッドレスでリモート操作可能なアプリサーバーを起動するシンプルなエントリポイント
- プラグイン詳細にバンドルされた hooks を表示。プラグイン共有時にリンクメタデータと発見可能性コントロールを公開
- アプリサーバークライアントで大規模スレッドをページング可能（unloaded / summary / full のターン項目ビュー）
- Bedrock 認証で `aws login` プロファイルの AWS console-login 資格情報を利用可能
- `view_image` がマルチ環境セッションでも選択された環境経由でファイル解決

主なバグ修正

- ライブのアプリサーバースレッドが再起動なしで設定変更を反映
- apply-patch の partial failure を含めてターン diff が正しい状態を保つ
- スレッド要約・リネーム・resume・fork パスを `ThreadStore` 経由で改善（ローカル rollout パスがないスレッドにも対応）
- リモートコンパクションが v2 ストリーム向けに `response.processed` を発行、API キー利用の compact 要求では `service_tier` を送らない
- Windows サンドボックスでサンドボックスユーザーがデスクトップランタイムバイナリキャッシュへアクセス可能に
- `codex exec` 起動バナーから古い "research preview" 表記を削除

## 業務インパクト

`codex remote-control` の追加で、Codex を「ローカル CLI を立ち上げて使う」用途から、「リモートからヘッドレスで叩くサーバー」用途へ寄せやすくなりました。CI からの実行、社内ツールへの統合、別マシンからの操作などが整理しやすくなる方向です。

プラグイン詳細で bundled hooks が表示されるようになった点は、組織内でプラグインを共有して運用しているチームに効きます。これまでプラグインに含まれた hooks は、入れてみるまで何が動くか把握しづらい部分がありましたが、共有時点で可視化されるので、レビューしてから配布する運用が組みやすくなります。

Bedrock の AWS console-login 認証対応は、AWS SSO（IAM Identity Center）の `aws login` プロファイルで普段運用している組織が、Codex の Bedrock 連携を素直に使えるようになる変更です。これまで Bedrock を使うために専用の API キー運用に寄せていたチームは、認証フローを SSO に統合し直せます。

## 教材化メモ

- Codex の運用・統合教材に「`codex remote-control` を CI から叩くパターン」を追加
- Codex × Bedrock × AWS SSO の認証統合の章
- Codex Hooks 教材（既存 v0.124.0 ベース）に「プラグイン経由で hooks を共有・配布する運用」を追補
- Claude Code との比較教材で、hooks の設定方式（Codex は `config.toml` インライン、Claude Code は `settings.json` + `.claude/hooks/`）の違いを整理
