---
date: 2026-09-12
title: "Microsoft Copilot に Grok モデルを追加（Frontier program 向けの限定提供）"
service: "Microsoft Copilot"
source: https://techcommunity.microsoft.com/category/microsoft365copilot/blog/microsoft365copilotblog
fetched_at: 2026-09-14T09:55:00+09:00
published_at: 2026-09-12T00:00:00Z
date_precision: date-only
category: release
---

# 2026-09-12 Microsoft Copilot への Grok 追加

## 公式内容の日本語要約

Microsoft 365 Copilot Blog に **「Expanding model choice in Copilot with Grok」**（著者 xiasong）が掲載された。公式の要約文は **「We are expanding model choice in Copilot with the addition of Grok models from SpaceXAI.」** である。**SpaceXAI の Grok モデルが Microsoft Copilot のモデル選択肢に加わった。**

**公式一覧ページ上で見出し・日付・著者・要約を確認したが、個別ポストの本文は本実行環境から取得できなかった**（`techcommunity.microsoft.com` の個別記事 URL が JavaScript ローダーのみを返す。同日の他2件と同じ制約）。

**以下は二次ソースによる報道であり、一次情報として未確認である。** 公式 X（@Microsoft365、@satyanadella）の投稿を引く形で、複数媒体が次を報じている — 提供面は **Word / Excel / PowerPoint（Web / デスクトップ）**、**Microsoft Frontier program 参加顧客向けの限定リリース**として開始、**Microsoft 365 管理センターでは既定オフでテナント管理者の明示的な opt-in が必要**、**EU / EFTA / 英国の Frontier 顧客は初回プレビューの対象外**、SpaceXAI は Microsoft Online Services のサブプロセッサー一覧に追加済み。Teams / Outlook や一般商用層への拡大はプレビューの評価後とされる。

**これらの運用上の条件は公式本文で確認できていないため、`保留（公式本文未取得）` として扱う。** なお同系統の先行事例（2026-06 の Claude Fable 5 は Copilot Cowork (Frontier) で既定オフ、2026-02 の Copilot Studio における Grok 4.1 Fast も管理者 opt-in で既定オフ）から、**既定オフ + 管理者 opt-in という形は Microsoft の一貫したパターン**ではある。

## できるようになったこと

- Microsoft Copilot のモデル選択肢に Grok が加わった（提供範囲・有効化条件は公式本文未確認）

## 影響範囲

- 対象ユーザー: Microsoft 365 Copilot のテナント管理者、Frontier program 参加組織
- 対象プラン: 未確認（二次報道では Frontier program 限定プレビュー）
- API / UI / 管理者機能: 管理者による有効化（既定オフとの報道あり・公式未確認）

## 教材化メモ

- **Copilot のマルチモデル化が OpenAI → Anthropic → SpaceXAI と3社目に入った。** 「Copilot を使う」という表現が、もはやどのモデルを使うかを指さない。**社内規程で「Copilot 利用可」と書いている組織は、モデル提供元ごとのデータ取り扱いを別建てで判断する必要がある。** サブプロセッサー一覧への追加が伴う点がまさにそれで、調達・法務のレビュー対象が増える。
- **既定オフ・管理者 opt-in が守られているかは、確認してから語るべき論点である。** 本件は公式本文が取れておらず、二次報道に頼っている。**「既定オフだから安全」と早合点せず、テナント設定を実際に見る**という手順まで含めて教材にする。
- **EU / EFTA / 英国が初回プレビューから外れている**（報道ベース）点は、規制圏ごとにモデル提供のタイミングがずれる実例として使える。多国籍の組織では「本社で使えるものが現地で使えない」状況が常態になる。
- 記事化はしない（週次確認ソースの更新、かつ公式本文未取得）。**次週、公式本文または `learn.microsoft.com` の release notes への反映を確認する。**

## 原文確認

- 公式見出し: Expanding model choice in Copilot with Grok
- 公式URL: https://techcommunity.microsoft.com/category/microsoft365copilot/blog/microsoft365copilotblog （一覧。個別ポスト本文は未取得）
- 二次ソース（URL 特定・状況把握の補助のみ。本文要約の根拠にはしない）: firstpost.com（2026-09-12）、ndtvprofit.com（2026-09-13）、techau.com.au（2026-09-12）
- 原文全文は公式ページで確認してください。
