---
date: 2026-08-05
title: "The Agent Access Model — タスクスコープ認証によるエージェント向けゼロトラスト設計"
service: "Cloudflare"
product: "Cloudflare One, Agents"
source: https://blog.cloudflare.com/the-agent-access-model/
fetched_at: 2026-08-06T18:30:00+09:00
published_date: 2026-08-05
date_precision: date-only
category: release
---

# 2026-08-05 The Agent Access Model

## 公式内容の日本語要約

Cloudflare が、短命な AI エージェントに対するセキュリティ設計フレームワーク「Agent Access Model (AAM)」を公開した。ゼロトラストの原則を人間のユーザーからエージェントへ拡張し、タスク実行グラフそのものを信頼するのではなく、**すべてのアクションに対して都度認可を強制する**という考え方を取る。

構成要素は 6 つ。Agent Identity Broker（証明鍵に紐づく短命・タスクスコープの資格情報を発行）、Task-Scoped Access Engine（宣言されたタスク能力に対して最小権限判定）、Mediation Layer（ツール呼び出しとネットワーク egress の制御）、Trust Ratchet（データ分類やポリシー違反を契機に権限を段階的に絞る）、Agent Activity Log（全制御点からの記録）、Grant Review Loop（活動パターンからタスクテンプレートの見直しを提案）。

重要なのは実装状況の切り分けで、OAuth 2.0 Token Exchange (RFC 8693)、DPoP (RFC 9449)、MCP は既存の標準・実装として利用可能な土台と位置づけられている。一方で Trust Ratchet のアーキテクチャ、制御層をまたいだ協調、マルチプレイヤーのアクセス制御は**まだ構想段階**であり、記事内でも「マルチプレイヤーのアクセス制御をエンドツーエンドで今日構築できるとは言えない」と明言されている。

製品リリースではなく、リファレンス設計・アーキテクチャ提案として読むのが正しい。単一プリンシパルのケースであれば、タスクスコープ資格情報の採用とツール / ネットワーク境界での仲介から着手できる、としている。

## できるようになったこと

- エージェント認可の参照アーキテクチャ（6 コンポーネント）が公式に整理された
- 既存標準（RFC 8693 / RFC 9449 / MCP）で着手できる範囲と、未成熟な範囲が明示された

## 影響範囲

- 対象ユーザー: エージェントのアクセス制御を設計するセキュリティ / プラットフォーム担当
- 対象プラン: 製品ではなくアーキテクチャ提案（該当なし）
- API / UI / 管理者機能: 該当なし

## 教材化メモ

- 「エージェントに人間と同じ権限を渡さない」ための語彙（タスクスコープ資格情報、仲介、Trust Ratchet）が一式そろっており、セキュリティ教材の用語基盤として使える。
- 製品ではないため速報記事にはせず、エージェント設計の教材で参照する一次資料として保持する。実装可能な範囲（OAuth Token Exchange / DPoP）と構想段階を分けて示すのが教育上の要点。
- Cloudflare 自身が「今日はまだできない」と書いている箇所は、教材で誇張しないための良い引用元になる。

## 原文確認

- 公式見出し: The Agent Access Model
- 公式URL: https://blog.cloudflare.com/the-agent-access-model/
- 原文全文は公式ページで確認してください。
