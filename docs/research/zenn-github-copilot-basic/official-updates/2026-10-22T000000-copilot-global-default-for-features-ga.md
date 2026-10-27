---
date: 2026-10-22
title: "Copilot 機能のグローバル既定ポリシーが GA（2026-10-22 展開開始・10-26 完了）"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-10-22-global-default-for-copilot-features-generally-available
fetched_at: 2026-10-26T09:40:00+09:00
published_at: 2026-10-22
date_precision: date-only
category: policy
---

# 2026-10-22 Copilot 機能のグローバル既定ポリシーが GA

## 公式内容の日本語要約

**2026-09-24 に予告されていた「GA 済み Copilot 機能のグローバル既定ポリシー」の強制適用が、2026-10-22 から展開を開始した。展開完了は 2026-10-26 で、強制適用の発効時刻は enterprise / organization ごとに異なる。** 対象は **Copilot Business と Copilot Enterprise**。

**未設定（unconfigured）の対象機能は、管理者が選んだグローバル既定（Enabled / Disabled / Let organizations decide）に揃えられる。** 対象となるのは「Features & clients」配下の対象設定と、**「MCP servers in Copilot」**である。告知本文は個別の機能名を列挙していない。スクリーンショットは Enabled を表示しているが、これは図解であって各組織の設定値を示すものではない。

**明示的に設定した値は保持される（"Explicit choices are preserved"）。** 後からグローバル既定を変えても、既に設定済みの機能ポリシーは変わらない。**プレビュー機能は引き続き opt-in** で、プレビューに opt-in した機能がのちに GA になった場合もその選択は保持される。そうでない場合は、機能が対象になった時点で既定が適用される。

管理者の作業は、**AI Controls → Copilot → Default policy for new features でグローバル既定を確認**し、既定が意図と違う機能は個別に明示設定することである。対象条件と例外は公式ドキュメント側に記載がある。

## できるようになったこと

- 新しく GA になる Copilot 機能の扱いを、機能ごとに設定せずグローバル既定1か所で決められる
- 明示設定した機能は既定の変更から保護される

## 影響範囲

- 対象ユーザー: Copilot Business / Copilot Enterprise の enterprise・organization 管理者
- 対象プラン: Copilot Business、Copilot Enterprise
- API / UI / 管理者機能: AI Controls（管理者設定）、Features & clients、MCP servers in Copilot

## 教材化メモ

- **「何もしなければ既定が当たる」種類の変更である。** 未設定の機能が管理者の選んだ既定へ一斉に揃うため、**展開完了（2026-10-26）までにグローバル既定を確認していない組織は、意図していない状態で機能が有効（または無効）になる。** 期限付き告知として扱うべきもので、週次巡回だと最大6日遅れるという GitHub Copilot を週次へ移したときの懸念がそのまま当たる形になっている。
- **対象に「MCP servers in Copilot」が含まれる**点が実務上もっとも重い。MCP サーバーの利用可否が、機能ポリシーの既定値に引きずられる。外部システムへの接続を「個別に判断する」運用にしていた組織は、明示設定へ落とす必要がある。
- 「明示設定は保持される」という設計は、**ポリシー管理で後から一括変更を入れるときの定番の作り方**として教材に使える。未設定（null）と明示設定（true / false）を区別し、一括変更は未設定にだけ当てる。
- 同じ週に別の告知（model policy API の GA）が出ており、**手作業で明示設定を埋める代わりに API で埋める**という組み合わせが成立する。

## 原文確認

- 公式見出し: Global default for Copilot features generally available
- 公式URL: https://github.blog/changelog/2026-10-22-global-default-for-copilot-features-generally-available
- 原文全文は公式ページで確認してください。
