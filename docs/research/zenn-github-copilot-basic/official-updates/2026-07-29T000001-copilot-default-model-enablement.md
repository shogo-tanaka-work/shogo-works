---
date: 2026-07-29
title: "Copilot Business / Enterprise で GA モデルがデフォルト有効化へ（2026-08-26 発効）"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-07-29-default-model-enablement-for-copilot-business-and-enterprise
fetched_at: 2026-07-30T09:20:00+09:00
published_at: 2026-07-29
date_precision: date-only
category: policy
rollout_date: 2026-08-26
---

# 2026-07-29 Copilot Business / Enterprise のデフォルトモデル有効化ポリシー

## 公式内容の日本語要約

GitHub が Copilot Business / Copilot Enterprise 向けに、一般提供（GA）になったモデルを既定で有効にするポリシーを導入した。これまで新モデルは管理者による手動有効化が必要だったが、今後は GA になったモデルが既定でオンになる。

スケジュールは2段階。現時点から 2026-08-25 まではポリシーの設定は可能だが未発効で、モデルの利用可否は現状のまま変わらない。2026-08-26 にポリシーが発効し、明示設定のないモデルは「継承された既定値（inherits default）」の扱いになる。

組織は「既定で有効」（自動ロールアウトを許容する場合の推奨）と「無効」（8月26日より前に手動承認方式を維持したい場合）のどちらかを選べる。管理者が個別モデルについて明示的に設定していれば、その選択は常に保持される。

自動有効化の対象外として、DeepSeek や Kimi K2.7 のようなオープンウェイトモデル、および GitHub のデータ保持契約の対象外となるモデルが挙げられている。

## できるようになったこと

- GA になったモデルを既定で有効にするポリシーを組織単位で選択できる（現在から設定可能、2026-08-26 発効）
- 「既定で有効」/「無効」の2択で、モデル追加ごとの手動承認運用を続けるかどうかを一括決定できる

## 影響範囲

- 対象ユーザー: Copilot Business / Copilot Enterprise の管理者
- 対象プラン: Business、Enterprise（Pro 系は対象外）
- API / UI / 管理者機能: 管理者向けモデルポリシー設定。既存の明示設定は保持される

## 教材化メモ

- 直前まで「新モデルはデフォルトでオフ」（Grok 4.5 の 07-28 追加時など）だった前提が、8月26日を境に反転する。Copilot 教材のモデル管理の記述は日付付きで書き分ける必要がある
- 「モデル追加ごとに個別判断する運用は続かないので、方針を先に決める」という論点が公式側の設計にも現れた例。ガバナンス教材の実例として強い
- オープンウェイトモデルとデータ保持契約外のモデルが除外されている点は、ベンダー審査基準の説明に使える

## 原文確認

- 公式見出し: Default model enablement for Copilot Business and Enterprise
- 公式URL: https://github.blog/changelog/2026-07-29-default-model-enablement-for-copilot-business-and-enterprise
- 原文全文は公式ページで確認してください。
