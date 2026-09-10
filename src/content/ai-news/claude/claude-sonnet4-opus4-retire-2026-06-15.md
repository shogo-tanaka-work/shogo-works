---
title: "Claude Sonnet 4・Opus 4 退役：Sonnet 4.6・Opus 4.8への移行手順"
tool: "claude"
toolLabel: "Claude"
date: 2026-06-14
sourceUrl: "https://platform.claude.com/docs/en/docs/about-claude/models/overview"
summary: "Claude Sonnet 4（claude-sonnet-4-20250514）と Claude Opus 4（claude-opus-4-20250514）が 2026年6月15日に Claude API から退役する。退役後はこれらのモデル ID へのリクエストがエラーを返すようになる。移行先はそれぞれ Claude Sonnet 4.6（claude-sonnet-4-6）と Claude Opus 4.8（claude-opus-4-8）。Opus 4.8 は Opus 4 と比べて大幅な価格改善（$15/$75 → $5/$25 per MTok）を伴う。"
description: "Claude Sonnet 4とOpus 4が2026年6月15日にAPIから退役。移行先のモデルIDと確認すべきコード箇所を把握することで、本番障害を未然に防げます。Opus 4.8は約67%の価格下落でコスト削減にも直結します。"
impact: "Claude API で Sonnet 4 または Opus 4 のモデル ID を固定指定している実装は、本日中（2026-06-14）に Sonnet 4.6 または Opus 4.8 へ切り替えておく必要がある。退役後は当該 ID へのリクエストがエラーを返すため、対応が遅れると本番障害に直結する。"
tags: ["claude", "anthropic", "model-deprecation", "claude-api", "policy", "sonnet-4", "opus-4"]
status: "candidate"
relatedKnowledge: []
draft: false
---

## 要約

Claude Sonnet 4（`claude-sonnet-4-20250514`）と Claude Opus 4（`claude-opus-4-20250514`）の退役が**明日 2026年6月15日**に迫っている。Anthropic の公式モデル一覧ページに退役警告が掲示されており、退役後は上記モデル ID へのリクエストがエラーを返すようになる。

移行先は以下の通り。

- Sonnet 4 → **Claude Sonnet 4.6**（`claude-sonnet-4-6`）: 同価格（$3 / $15 per MTok）、コンテキスト窓は 200k → 1M トークンに拡大
- Opus 4 → **Claude Opus 4.8**（`claude-opus-4-8`）: 価格が $15 / $75 → $5 / $25 per MTok と大幅に値下がり、コンテキスト窓は 200k → 1M トークンに拡大

Claude のアプリ（claude.ai）をブラウザや iOS などから使っているエンドユーザーへの直接的な影響はない。影響を受けるのは API 経由でモデル ID を固定指定している開発者・企業。

なお、Claude Opus 4.1（`claude-opus-4-1-20250805`）は別途 2026年8月5日に退役予定。

## 何が変わったか

- `claude-sonnet-4-20250514` および `claude-ops-4-20250514` が **2026-06-15 に Claude API から退役**
- 退役後: 上記 ID へのリクエストはエラーを返す
- Bedrock / Vertex AI / Microsoft Foundry 上のエイリアス（`claude-sonnet-4-0`、`claude-opus-4-0`）も同様
- 後継モデルの価格と性能：

| モデル | 移行前（退役） | 移行後（推奨）| 価格変化 |
|-------|--------------|------------|--------|
| Sonnet 4 → Sonnet 4.6 | $3 / $15 per MTok | $3 / $15 per MTok | 変化なし |
| Opus 4 → Opus 4.8 | $15 / $75 per MTok | $5 / $25 per MTok | 約 67% 値下がり |

## 業務インパクト（一般企業向け）

**自社サービスや社内ツールで Claude API を使っている場合は本日中に確認が必要**。

確認すべきポイントは次の 3 点。

1. **コード内のモデル ID**: `claude-sonnet-4-20250514`・`claude-opus-4-20250514`・`claude-sonnet-4-0`・`claude-opus-4-0` を grep してハードコードされている箇所を洗い出す
2. **Bedrock / Vertex AI の設定**: クラウドプロバイダー側のモデル指定も確認する
3. **ベンダー管理のツール**: SaaS や社内ツールが Claude を内部利用している場合は、ベンダー側の対応状況を確認する

Opus 4 → Opus 4.8 への移行は価格が大幅に下がるため、コスト面でのメリットが大きい。ただし出力傾向や挙動が変わる可能性があるため、本番適用前に主要ユースケースで差分検証を実施しておくのが安全。

退役後に障害が発生すると、API リクエストが即座にエラーを返すため、ユーザー向けサービスの場合は稼働停止につながる。

## 副業・個人活用視点

個人開発や受託案件で Claude API を組み込んでいる場合、今すぐモデル ID を確認しておきたい。

- **受託案件**: 納品済みの成果物やクライアント向けシステムで Sonnet 4 / Opus 4 を固定指定していると、明日から動かなくなる。今日中に Sonnet 4.6 / Opus 4.8 へ差し替えて動作確認しておく。
- **個人プロダクト**: `.env` やコード内のモデル ID を確認。特に Opus 4 → Opus 4.8 は価格が 2/3 下がるため、移行後のコスト削減効果も大きい。
- **今後の備え**: モデル ID を設定ファイルや環境変数で外部化しておくと、今後の退役にも素早く対応できる。退役スケジュールは Anthropic の [モデル退役ページ](https://platform.claude.com/docs/en/about-claude/model-deprecations) で定期確認する習慣を持つと安心。
