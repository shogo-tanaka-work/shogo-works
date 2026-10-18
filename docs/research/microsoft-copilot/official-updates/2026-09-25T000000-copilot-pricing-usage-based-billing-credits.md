---
date: 2026-09-25
title: "Microsoft Copilot の課金が2本立てへ。日常AIは per-user の USL、Cowork / Code / Autopilot と上位モデルは Copilot Credits の従量課金（UBB）。Q4 CY2026 展開、Enterprise は管理者が spending policy を作るまで消費されない"
service: "Microsoft Copilot"
source: https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/evolution-of-the-copilot-pricing-model/4559416
fetched_at: 2026-09-28T09:40:00+09:00
published_at: 2026-09-25
date_precision: date-only
category: policy
---

# 2026-09-25 Copilot の課金モデル変更（USL + UBB）

## 公式内容の日本語要約

Microsoft は 2026-09-25、**Copilot の課金モデルを2本立てにする**と告知した（Nicole Herskowitz による "Evolution of the Copilot pricing model"）。Message Center 通知 **MC1479276** が同日付で配信されている。

**日常のAIは従来どおり per-user の User Subscription License（USL）**に含まれる。公式の Copilot Credits Guide（September 2026）が挙げる USL の範囲は、**Microsoft 365 の Copilot Chat、Word / Excel / PowerPoint / OneNote / Outlook / Teams 内の Copilot、Microsoft 製エージェント（Researcher / Analyst / Facilitator）、メール・カレンダー・ファイル・人・組織文脈への Work IQ グラウンディング、タスクに応じたモデル選択**である。**モデル選択と、精度・速度・コストを勘案して自動で振り分ける Auto も USL 側に含まれる。**

**高度なAIは Copilot Credits による usage-based billing（UBB）へ移る。** 対象は **Copilot Cowork、Copilot Studio で作るエージェントとアプリ、Dynamics 365 / Power Platform の AI 機能、エージェント・AI ソリューション向けの Work IQ API**（Credits Guide の記載）。同日の報道では **Code、Autopilot、長時間稼働のエージェント、フロンティアモデル（Astra / Fable）**も UBB 側として整理されている。**UBB を使うには USL が前提である。**

**Copilot Credits の条件（Credits Guide より）。** クレジットは **テナント単位でプール**され、組織の費用は全対象体験での消費合計になる。購入手段は2つ。**(1) Copilot Studio の pay-as-you-go メーター、$0.01 / Copilot Credit、後払い（請求月末締め）。(2) Copilot Credit Pre-Purchase Plan（P3）、1年前払いで9段階（300,000 クレジット / 5% 割引 〜 300,000,000 クレジット / 20% 割引）。未使用分は年間期間の末で失効する。** どちらも **Microsoft Azure Consumption Commitment（MACC）を減額**する。消費量は**タスクの複雑さ**で決まる。

**管理者が先にやることが1つある。** MC1479276 は、**UBB の機能はすべての利用者に見えるが、Enterprise テナントでは管理者が Microsoft 365 管理センターで spending policy を作るまで有効にならず、機能もしない**と明記している。**spending policy を作って初めてクレジットが消費される。** USL に含まれる機能を使い続けるだけなら作業は不要である。

**時期。** **UBB は Q4 CY2026 に Copilot へ展開開始**。FinOps 機能は **2026-09 時点で preview**、**利用者自身のクレジット消費量・残量・履歴の表示は 2026-09 に GA**。

**USL 側にも利用上限がある。** 報道ベースでは、上限に近づいた利用者に警告が出て、**追加費用なしで Auto に切り替えるか、クレジットへ移るかを選ぶ**形になる。管理者は**グループごとに使えるモデルファミリを制限**でき（Cowork から開始）、これは Auto が選べるモデルにも影響する。spending policy は **Microsoft Graph API** から管理できる。

**確認上の制約。** **blog 本文は直接取得できなかった**（WebFetch でタイトルのみ、Exa のキャッシュは 2026-08 まで）。上記のうち **USL / UBB の対象範囲、$0.01 / クレジット、P3 の9段階と割引率、未使用分の失効、MACC 減額、テナント単位プール、管理センターでの管理は、Microsoft 公式の Copilot Credits Guide（September 2026、PDF）本文から直接確認**した。**Q4 CY2026 の展開時期、spending policy を作るまで機能しないという条件、FinOps の preview / GA 区分は MC1479276 の本文を引用する二次ソースから確認**しており、Message Center の原文は本環境から参照できていない。**USL の上限に関する警告の挙動、Astra / Fable の UBB 扱い、Autopilot の課金の最終形は報道ベースで、公式文書では確認できていない。**

## できるようになったこと / 変わること

- 日常AI（Chat、Office アプリ内 Copilot、Microsoft 製エージェント、Work IQ グラウンディング、モデル選択と Auto）は per-user の USL に据え置き
- Cowork / Copilot Studio のエージェントとアプリ / Dynamics 365・Power Platform の AI / Work IQ API は Copilot Credits の従量課金へ
- Copilot Credits は $0.01 / クレジット（pay-as-you-go）、または P3 の1年前払い（9段階、5〜20% 割引、未使用分は年度末失効）
- クレジットはテナント単位でプール、消費はタスクの複雑さに依存、MACC を減額
- Enterprise テナントでは管理者が spending policy を作るまで UBB は機能せずクレジットも消費されない
- 管理者はグループ単位で利用可能なモデルファミリを制限できる（Cowork から）
- 利用者は Copilot 内で自身のクレジット消費量・残量・履歴を確認できる（2026-09 GA）

## 影響範囲

- 対象ユーザー: Microsoft Copilot を導入している全組織。特に Cowork / Copilot Studio / Power Platform の AI 機能を使う、または使う予定のあるテナント
- 対象プラン: Copilot の USL 契約全般。UBB は USL が前提
- API / UI / 管理者機能: Microsoft 365 管理センターの cost management（spending policy、上限、アラート、使用状況）、Microsoft Graph API からの spending policy 管理、Power Platform 管理センターでの pay-as-you-go メーター、Azure ポータルでの P3 provisioning

## 教材化メモ

- **「固定費のAI」と「変動費のAI」が製品内で線引きされた**という、価格設計の転換点そのものが教材になる。**どちらに入るかを決めているのは機能の派手さではなく、1タスクの計算量が予測可能かどうか**である。Cowork / Code / Autopilot はいずれも実行時間が読めない。**費用を読めるものは定額、読めないものは従量**という原則で説明すると、他ベンダーの価格改定も同じ枠組みで読める。
- **Enterprise では spending policy を作るまで機能しない**という既定は、**「未設定が安全側に倒れている」**数少ない例である。同じ週の GitHub Copilot の 10-22 既定有効化（未設定が有効へ倒れる）と正反対であり、**2社の既定値の置き方を並べると、既定値が経営判断であることが分かる。**
- **クレジット消費が「タスクの複雑さ」で決まる**という説明は、見積もりの観点では情報量がほぼゼロである。**Microsoft は estimator を提供しているが、レートカードとしての単価表は出していない。** 予算稟議を書く側は、**estimator で試算し、spending limit で上限を切る**という順序になる。**「使ってみないと分からない」費用にどう上限をかけるか**という実務の型として扱える。
- **Autopilot のように利用者がログオフしても動き続けるもの**は、想定外の請求が出る経路になる。**長時間稼働エージェントの課金は、従来のライセンス管理の考え方では扱えない。** エージェントに Entra ID やメールを持たせる話とセットで、**「人ではないものの原価管理」**という新しい論点として提示できる。
- **未使用の前払いクレジットが年度末に失効する**点は、調達側が見落としやすい。割引率20%を狙って大量購入すると、使い切れなければ割引以上に損をする。**割引率と失効条件をセットで見る。**

## 原文確認

- 公式見出し: Evolution of the Copilot pricing model
- 公式URL: https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/evolution-of-the-copilot-pricing-model/4559416 （**本文の直接取得は不可**）
- 公式文書（金額・購入手段・USL の範囲の出所）: https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/bade/documents/products-and-services/en-us/ai/CopilotCreditsGuideSeptember2026.pdf （Copilot Credits Guide, September 2026）
- Message Center 通知: MC1479276「Microsoft Copilot: Evolving the Copilot pricing model and new FinOps capabilities for AI」（**原文は本環境から参照不可。本文を引用する二次ソースで確認**）
- 原文全文は公式ページで確認してください。
