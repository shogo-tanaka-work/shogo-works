---
date: 2026-11-11
title: "Microsoft Copilot（Cowork / Copilot Studio）へ Claude Fable 5.2 の展開開始"
service: "Microsoft Copilot"
source: https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/available-today-anthropic-claude-fable-5-2-in-microsoft-copilot/4571829
fetched_at: 2026-11-16T09:55:00+09:00
published_at: 2026-11-11
date_precision: date-only
category: rollout
---

# 2026-11-11 Microsoft Copilot への Claude Fable 5.2 展開

## 公式内容の日本語要約

Anthropic の Claude Fable 5.2 が **Copilot Cowork と Copilot Studio** の適格ユーザーへ展開を開始した。Copilot 内では Work IQ が、既存の権限の範囲内で組織のファイル・会議・チャット・業務データを使って応答を grounding する。**モデル本体の発表ではなく、Copilot での提供開始**である（Fable 5.2 自体は 2026-11-09 に Anthropic が発表し、同日 GitHub Copilot でも GA になっている）。

Microsoft は提供プランの一覧、地域別スケジュール、全組織に行き渡る日付を示していない。展開状況は AI at Work Roadmap と Microsoft 365 Copilot リリースノートで追う案内になっている。

## 利用者側の対応（管理者設定）

- 管理者は Microsoft 365 管理センターでアクセスと組織の提供可否を設定する。**Anthropic は Microsoft Online Services の subprocessor として組み込まれており**、AI Administrator または Global Administrator ロールで Copilot > Settings > View all > 「AI providers operating as Microsoft subprocessors」から Anthropic を選び、対象ユーザー / グループを指定する。権限はプロバイダー単位で、Copilot と Copilot Studio の双方に効く。
- **地域の既定値が異なる**: 多くの商用クラウド顧客は Claude モデルが既定で有効。**EU / EFTA / 英国は既定が「No users」で、管理者が明示的に有効化する必要がある。** Federal GCC / GCC High / DoD と sovereign cloud ではこのオプションが提供されない。
- Copilot Studio と Power Platform で Anthropic を使うには、Power Platform 管理センター（PPAC）側の追加設定も必要。Copilot Studio ではエージェント作成時に作成者がモデルを選ぶ。
- Microsoft の Customer Copyright Commitment（CCC）は対象製品の Claude モデルに適用され、ドキュメントは Copilot と Copilot Studio を明示している。

## 影響範囲

- 対象ユーザー: Copilot Cowork / Copilot Studio の適格ユーザー。地域と組織により可用性が異なる
- 対象プラン: 公式は明示していない。管理センターでの有効化が前提
- 管理者機能: subprocessor 設定とユーザー / グループ指定。EU / EFTA / 英国は既定オフ

## 教材化メモ

記事化しない（本Skillの記事化対象は Claude Code / Codex のロールアップのみ）。**同じモデルが同じ週に3つの経路（Anthropic 直、GitHub Copilot、Microsoft Copilot）で出たが、有効化の条件とデータ取り扱いが経路ごとに違う。** GitHub Copilot 側はデータ保持が既定で ZDR が年内までの時限免除、Microsoft 側は subprocessor 設定と地域別既定値。**「どのモデルを使うか」ではなく「どの経路で使うか」で統制条件が決まる**実例として使える。

## 原文確認

- 公式見出し: Available today: Anthropic Claude Fable 5.2 in Microsoft Copilot
- 公式URL: https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/available-today-anthropic-claude-fable-5-2-in-microsoft-copilot/4571829
- 原文全文は公式ページで確認してください。
