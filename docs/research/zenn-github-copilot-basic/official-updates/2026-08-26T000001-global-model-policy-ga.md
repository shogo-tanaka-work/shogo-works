---
date: 2026-08-26
title: "GitHub Copilot の Global model policy が一般提供 — 未設定モデルと新規 GA モデルが既定を継承する"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-08-26-global-model-policy-generally-available/
fetched_at: 2026-08-31T09:40:00+09:00
published_at: 2026-08-26T00:00:00Z
date_precision: date-only
category: policy
---

# 2026-08-26 Global model policy が一般提供

## 公式内容の日本語要約

Copilot で利用可能なモデルの既定を、モデルごとではなく**組織・Enterprise 全体で1つ決められる**ようになった。公式の記載では「これまで未設定だったモデルと、今後 GA になるモデルは global policy の状態を継承する」。

**既に明示的に設定したモデルの選択は保持される。** 一方で、**open-weight モデルとデータ保持が必要なモデルは、global policy の状態にかかわらず既定で無効**のままである。

ロールアウトは 2026-08-26 に開始し、**2026-09-01 にかけて段階的に適用**される。Enterprise ごとに反映タイミングが異なる。適用後、各モデルは Enabled / Disabled / Delegate to enterprise teams・apps or organizations / Delegate to default policy の4状態のいずれかで表示される。

管理者に即時の作業は求められない（自動適用）。GitHub は、global policy の状態を「委譲」ではなく「明示的な決定」にすべきかどうかについてフィードバックを募集している。

## できるようになったこと

- モデル可用性の既定を Enterprise / Organization 単位で一括指定できる
- 今後 GA になるモデルが、個別設定なしで組織の既定を継承する

## 影響範囲

- 対象ユーザー: Copilot Business / Copilot Enterprise の管理者
- 対象プラン: Copilot Business / Copilot Enterprise
- API / UI / 管理者機能: モデルポリシー設定

## 教材化メモ

- **「未設定は既定を継承する」という設計は、新規モデルが自動で入ってくる経路になる。** 明示的に無効化していないモデルは、GA になった時点で組織に入る。モデルの棚卸しを「今あるものの確認」だと思っていると、増える側を取りこぼす。
- **open-weight とデータ保持要のモデルだけ既定オフに残した**のは、既定値設計の実例。リスクの質が違うものを一括の既定に含めないという判断で、ガードレール層の設計として参考になる。
- 記事化はしない（週次確認ソースの通常更新）。

## 原文確認

- 公式見出し: Global model policy generally available（2026-08-26）
- 公式URL: https://github.blog/changelog/2026-08-26-global-model-policy-generally-available/
- 原文全文は公式ページで確認してください。
