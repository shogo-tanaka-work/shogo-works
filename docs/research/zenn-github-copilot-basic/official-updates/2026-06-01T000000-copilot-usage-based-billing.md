---
date: 2026-06-01
title: "GitHub Copilot が全プランで GitHub AI Credits ベースの従量課金へ移行"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-06-01-updates-to-github-copilot-billing-and-plans/
fetched_at: 2026-06-02T09:08:09+09:00
published_at: 2026-06-01T00:00:00Z
date_precision: date-only
category: policy
---

# 2026-06-01 GitHub Copilot 従量課金（GitHub AI Credits）移行

## 公式内容の日本語要約

2026-06-01 付の GitHub Changelog で、GitHub Copilot の全プランが **GitHub AI Credits ベースの従量課金（usage-based billing）** に移行したことが告知された。各プランには月次の included usage（含まれる利用枠）が付き、超過分は AI Credits の追加購入になる。従来の **premium request units（PRU）は GitHub AI Credits に置き換え** られ、モデルごとの公開 API レート（入力・出力・キャッシュトークン）に基づいて消費される。あわせて **Copilot code review が AI Credits に加えて GitHub Actions の実行分（minutes）も消費** するようになった。

## できるようになったこと / 変わったこと

- **課金モデル**: 全 Copilot プランが「included usage + 超過は AI Credits 従量」に統一。PRU を廃止し GitHub AI Credits に一本化。
- **コード補完は据え置き**: Code completions と Next Edit suggestions は全プランに含まれ、AI Credits を消費しない。
- **Copilot code review**: AI Credits に加えて Actions 分も消費。組織管理者は標準ランナー（default runners）を指定して全リポジトリで統一可能。
- **ユーザー単位予算が GA**: 組織・Enterprise の管理者が、全ユーザー共通の予算設定、または特定ユーザー群への上書きが可能に。
- **auto モデル選択の優遇**: Copilot Chat / CLI / cloud agent で auto モデル選択を使うと割引（例: 1x 乗数のモデルが 0.9x 相当）。あわせて auto のモデル評価が individual プランでも有効化された（同日別エントリ）。
- **Copilot Max**: 既存の Student / Pro / Pro+ 加入者向けのアップグレード選択肢として提供（より大きな included usage と spending limit）。

## 影響範囲

- 対象ユーザー: Copilot を使う全ユーザー（個人・Business・Enterprise）。特に code review / cloud agent / CLI を多用するチーム。
- 対象プラン: プラン価格自体は **据え置き**（Pro $10 / 月、Pro+ $39 / 月、Business $19 / user・月、Enterprise $39 / user・月）。変わるのは「枠の数え方」と「超過課金の仕組み」。
- API / UI / 管理者機能: 課金・管理者の予算設定（GA）、code review の Actions 分消費。

## 教材化メモ

- Copilot の料金・プラン教材があれば、「PRU → GitHub AI Credits」「included usage + 従量」「code review が Actions 分も消費」を恒久情報として反映。価格自体の据え置きと、コスト構造が「席数固定」から「利用量連動」に変わった点を明記。
- 管理者向け教材には「ユーザー単位予算 GA」「default runners 指定」を追記。コスト管理・ガバナンスの観点で、予算上限とアラートの設計を促す。
- 注意: コミュニティでは個人ユーザーへの影響に懸念の声もある。教材では「フラット課金前提の運用は見直しが必要」と中立的に注意喚起する。

## 原文確認

- 公式見出し: Updates to GitHub Copilot billing and plans（2026-06-01）
- 公式URL: https://github.blog/changelog/2026-06-01-updates-to-github-copilot-billing-and-plans/
- 関連: GitHub Copilot is moving to usage-based billing（GitHub Blog）
- 原文全文は公式ページで確認してください。
