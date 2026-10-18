---
date: 2026-09-22
title: "Microsoft Copilot の model choice に Claude Opus 5.5 と GPT-6 Sol を追加。Copilot Studio には Claude Sonnet 4 / Opus 4.1"
service: "Microsoft Copilot"
source: https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/more-models-one-copilot/4559035
fetched_at: 2026-09-28T09:40:00+09:00
published_at: 2026-09-22
date_precision: date-only
category: release
---

# 2026-09-22 Microsoft Copilot に Opus 5.5 / GPT-6 Sol

## 公式内容の日本語要約

Microsoft 公式 blog "More Models, One Copilot"（2026-09-22、Xia_Song）で、**Claude Opus 5.5 と GPT-6 Sol が Microsoft Copilot の model choice に加わる**ことが告知された。**展開先は chat、Word、Excel、PowerPoint、Teams** である。

あわせて **Copilot Studio でも Claude Sonnet 4 と Claude Opus 4.1 がモデル選択肢として利用可能**になった。

同社は方針として、**単一のフロンティアモデルに依存する形から、複数モデルのエコシステムへ移行している**と説明している。**Work IQ を通じて組織のファイル・会議・チャット・業務データへグラウンディングする**という位置づけも併記されている。

**確認上の制約**: `source-catalog.md` の規約どおり、主ソースの release notes（09-23 公開、下記の別メモ）と blog の両方を確認した。**本 blog ポストは本文の直接取得ができず（WebFetch でタイトルのみ、Exa のキャッシュは 2026-08 まで）**、上記はモデル名・展開先・Copilot Studio の追加分を検索経由の抜粋で確認したものである。**提供開始日の厳密な特定、管理者側の opt-in 要否、対象ライセンスは確認できていない。**

## できるようになったこと

- Microsoft Copilot の model choice で Claude Opus 5.5 と GPT-6 Sol を選択（chat / Word / Excel / PowerPoint / Teams）
- Copilot Studio で Claude Sonnet 4 / Claude Opus 4.1 を選択

## 影響範囲

- 対象ユーザー: Microsoft Copilot 利用者、Copilot Studio でエージェントを作る開発者
- 対象プラン: **未確認**（本文未取得）
- API / UI / 管理者機能: model choice の選択肢追加。**管理者側の opt-in 要否は未確認**

## 教材化メモ

- **`source-catalog.md` が「モデル追加告知は blog 側に出るため release notes だけで完了扱いにしない」と定めている理由**が、そのまま現れた回である。09-23 の release notes（対象期間 08-26〜09-22）には本件が入っておらず、**blog を見なければ落ちていた。**
- **同一週に GitHub Copilot（09-22）と Microsoft Copilot（09-22）が同じ Opus 5.5 / GPT-6 Sol を追加**している。**同じモデルを、どの製品のどのプランから使うのが安いか**という調達の問題に還元される。

## 原文確認

- 公式見出し: More Models, One Copilot
- 公式URL: https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/more-models-one-copilot/4559035
- 取得状況: 本文の直接取得は不可。モデル名・展開先は検索経由の抜粋で確認
