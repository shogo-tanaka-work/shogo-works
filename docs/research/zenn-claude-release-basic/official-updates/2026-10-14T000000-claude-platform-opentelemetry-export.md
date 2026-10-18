---
date: 2026-10-14
title: "Claude Platform が OpenTelemetry トレース出力をベータ提供 — Messages API / Managed Agents / SDK の全ステップを既存の監視基盤へ流せる"
service: "Claude Platform / Claude API"
source: https://claude.com/blog/agent-observability-on-the-claude-platform
fetched_at: 2026-10-15T09:20:00+09:00
published_date: 2026-10-14
date_precision: date-only
category: release
---

# 2026-10-14 Claude Platform: OpenTelemetry エクスポート（ベータ）

## 公式内容の日本語要約

Claude API と Claude SDK が **OpenTelemetry（OTel）トレースの出力**に対応した。ステータスは **public beta**。Messages API のリクエスト、ツール実行、Managed Agents のセッションを span として出し、**OTLP を受けられる監視プラットフォームへそのまま流せる。**

属性は **GenAI semantic conventions** に従うため、他プロバイダーのデータと同じダッシュボードに並べられる。span にはレイテンシ、トークン使用量、各種 ID が入る。

**経路は2つあり、取れるものが違う。** **SDK トレーシング**はコードで tracer provider を登録し、権限は不要。クライアントツール（tool runner 経由）、self-hosted sandbox 内のツール、ファイルアップロードなどの他 API リクエストが取れる。**API トレーシング**は Claude Console で宛先を追加し、**Admin 権限が必要**。リクエスト内の各モデル実行、Managed Agents のターン、API 側が走らせる server tools が取れる。両方を設定すると1つのトレースに統合される（**Claude Platform on AWS では API span が別トレースになる**）。

**content mode が運用設計の中心になる。** 既定は **`metadata_only`**（ID・時刻・ステータス・トークン数・エージェントやツールの名前のみ）。**`content`** にするとプロンプトと応答そのものが span に入る。HIPAA / FERPA / K-12 のデータ制約がある組織では、content mode の設定にかかわらず**宛先はメタデータのみを出す**（SDK span は対象外）。zero data retention 下でも Full content は使えるが、API は配信までメモリ上にのみ保持する。

**Full content の既定上限は span あたり 0.75 MB**（英語テキストで 200k トークン相当、多くの監視基盤とプロキシの 1 MB 制限を下回る値）。超過時は短縮され **`anthropic.content.truncated` が `true`** になる。リクエスト span はシステムプロンプトと古いメッセージから、ツール span は結果の末尾から落とす。1M トークンを丸ごと通すには約 4 MB が必要で、SDK は `traces.max_content_bytes`、Console は **Advanced settings の「Maximum content size in MB」**で変更する。

**トークン集計には重複カウントの罠がある。** 同一リクエストに SDK span と API span の両方がある場合は API span 側を合計する（どちらも `anthropic.messages.create` で、`CLIENT` / `SERVER` の kind で判別する）。compaction 分は `gen_ai.usage.*` に含まれないため別途加算する。**span の配信は best effort で欠落しうる**ため、API キー単位の正確な使用量は Usage API を使う。

## できるようになったこと

- Messages API / Sessions API / Managed Agents のターン / server tools / クライアントツールを span として既存の監視基盤へ出力できる
- SDK トレーシングは **Python / TypeScript / C# / Go / Java / PHP / Ruby** で span を出す
- パートナー12社（Arize AI / Braintrust / Databricks / Datadog / Grafana Cloud / Honeycomb / Langfuse / LangSmith / New Relic / PostHog / Sentry / Splunk）に加え、OTLP 対応の任意の基盤へ送れる
- `traceparent` ヘッダで自社アプリのトレースへ API span を接続できる
- セッションは `anthropic.session.id`、スレッドは `gen_ai.conversation.id` でまとめて追える

## 影響範囲

- 対象ユーザー: Claude API / Managed Agents の利用者（ベータ）
- 対象プラン: Claude Platform および Claude Platform on AWS。API トレーシングは **Admin 権限が必要**
- API / UI / 管理者機能: Console（宛先追加）と SDK（コード）の両方
- 料金・プラン別の差・リテンション・サンプリング仕様は公式ページに記載がない。**保存とアクセス制御は送信先の監視基盤側の設定に従う**
- Claude Code / Agent SDK / Cowork は別系統のドキュメントが正本

教材化メモ: src/content/ai-news-notes/claude/claude-platform-opentelemetry-export.mdx

## 原文確認

- 公式見出し: Agent observability on the Claude Platform（2026-10-14）／October 14, 2026 — OpenTelemetry export in beta（Claude Platform API release notes）
- 公式URL: https://claude.com/blog/agent-observability-on-the-claude-platform
- 仕様の正本: https://platform.claude.com/docs/en/manage-claude/opentelemetry
- release notes: https://platform.claude.com/docs/en/release-notes/api
- 原文全文は公式ページで確認してください。
