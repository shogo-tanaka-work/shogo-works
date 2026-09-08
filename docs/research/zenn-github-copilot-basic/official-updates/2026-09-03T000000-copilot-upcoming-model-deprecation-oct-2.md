---
date: 2026-09-03
title: "GitHub Copilot — 4モデルの廃止予告（2026-10-02 発効・残り25日）"
service: "GitHub Copilot"
source: https://github.blog/changelog/2026-09-03-upcoming-deprecation-of-selected-github-copilot-models
fetched_at: 2026-09-07T09:40:00+09:00
published_at: 2026-09-03
date_precision: date-only
category: incident
---

# 2026-09-03 GitHub Copilot モデル廃止予告（10-02）

## 公式内容の日本語要約

**2026-10-02 をもって4モデルが全 Copilot 体験から廃止される。** 本サマリー作成日（2026-09-07）時点で**残り25日**。

| 廃止モデル | 公式が示す代替 |
| --- | --- |
| Gemini 3.5 Flash | Gemini 3.8 Flash |
| Gemini 3.6 Flash | Gemini 3.8 Flash |
| Kimi K2.7 Code | Kimi K3 |
| Claude Opus 4.7 | Claude Opus 5 |

公式は「この日までにワークフローと連携先を対応モデルへ更新すること」を求めている。Enterprise / Business 管理者は Copilot settings のポリシーで代替モデルのアクセスを有効化する必要がある。**廃止後にモデルを取り除く作業は不要。**

**注意すべきは Claude Opus 4.7 が含まれる点である。** 8日前の 2026-08-31 の廃止告知では、Opus 4.5 / 4.6 の代替として **Opus 4.7 が案内されていた**。その 4.7 が今回の廃止対象に入っている。8月末の告知どおり 4.7 へ移行した環境は、**1か月以内に再度の移行を迫られる**。

## できるようになったこと

- （廃止予告。新機能なし）

## 影響範囲

- 対象ユーザー: GitHub Copilot 利用者全般。特に **8月末の告知で Opus 4.7 へ移行した環境**
- 対象プラン: 全プラン。ポリシー操作は Business / Enterprise 管理者
- API / UI / 管理者機能: モデルセレクタ、Copilot settings のモデルポリシー

## 教材化メモ

- **公式が示した移行先が1か月で廃止対象になった**——この一件だけで、「ベンダーの推奨代替に従えば安全」という前提が崩れることを示せる。移行先を選ぶときは**推奨されているかではなく、世代として何番目か**を見る必要がある。Opus 4.7 は告知時点ですでに 5 が存在していた。
- **2回の移行コストを1回に畳む判断**が実務解になる。8月末の告知で 4.5 / 4.6 を使っていた組織は、4.7 ではなく 5 へ直接動くべきだった。**廃止告知を受けたら「示された代替」ではなく「最新世代」へ跳ぶ**という運用則を、この事例で裏づけられる。
- 期限管理の教材として、**残日数を数える運用**そのものの価値を示せる。10-02 は 09-28 の Copilot Chat 統合・code review 既定変更（前週から継続）と近接しており、**9月末に管理者作業が集中する**。

## 原文確認

- 公式見出し: Upcoming deprecation of selected GitHub Copilot models
- 公式URL: https://github.blog/changelog/2026-09-03-upcoming-deprecation-of-selected-github-copilot-models
- 原文全文は公式ページで確認してください。
