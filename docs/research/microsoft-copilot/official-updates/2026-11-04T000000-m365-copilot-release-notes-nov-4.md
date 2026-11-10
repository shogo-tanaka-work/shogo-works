---
date: 2026-11-04
title: "Microsoft 365 Copilot リリースノート 11/4 版（10/28〜11/3 分）"
service: "Microsoft Copilot"
source: https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes
fetched_at: 2026-11-09T09:45:00+09:00
published_at: 2026-11-04
date_precision: date-only
category: release
---

# 2026-11-04 Microsoft 365 Copilot リリースノート（10/28〜11/3 分）

## 公式内容の日本語要約

隔週公開のリリースノートの 11/4 版。本文冒頭の対象期間は「Updates released October 28 to November 3, 2026」。

**管理者向けが2件**。Microsoft 365 管理センターに **Agents usage report**（Web）が付き、Microsoft 365 Copilot と Copilot Chat のエージェントに絞った利用状況を見られる。アクティブなエージェント利用者数とエージェント数、ライセンス有無による利用者の区分、**publisher 種別（利用者作成 / 組織作成 / Microsoft / Microsoft パートナー）** での内訳が出る。利用明細はユーザー単位・エージェント単位・その組み合わせで取れる。もう1件は **Copilot Search の authoritative content 管理**（Copilot > Search > Authoritative content）で、Copilot Search での関連度を上げる SharePoint サイトを **最大100件**まで追加・削除・一括インポート / エクスポートできる。

**アプリ側**。Excel はチャット応答から変更されたシート・テーブル・範囲・グラフなどへ直接飛べるリンクが付いた（Windows / Web / Mac）。PowerPoint は既存デッキを添付してテーマとスタイルを新規プレゼンへ適用できる（Windows / Mac）。Outlook は Copilot 有効アカウントが複数ある場合、カレンダー Copilot サイドペインにアカウント切替のドロップダウンが出る（Web）。

**Copilot 本体**。自然言語から Microsoft Lists を作る **SharePoint list agent**（Web）、検索・チャット・Web 探索を1つの検索ボックスへまとめた **Microsoft Edge の Copilot New Tab Page**（Web）、そして **Copilot Cowork がローカルの Microsoft Edge ブラウザを使えるようになった**（Web）。Cowork は利用者が既にサインイン済みのサイトを含め、別の Edge タブで Web 操作の手順を実行する。**資格情報・Cookie・セッショントークンは端末に留まる**と明記されている。

**拡張性**は Researcher の HubSpot コネクタ対応（Web）。**Teams** は Workflows アプリの **AI Workflows**（Copilot を使う定期プロンプトテンプレート）で、管理者は Teams アプリ管理設定でアクセスを制御し、**Workflows アプリが有効でない限り既定オフ**。

## できるようになったこと

- エージェントの利用状況を publisher 種別込みで管理センターから把握できる
- Copilot Search で優先したい SharePoint サイトを最大100件指定できる
- Cowork が利用者のローカル Edge のサインイン状態を使って Web 操作を代行できる
- Teams の Workflows で Copilot の定期プロンプトを組める

## 影響範囲

- 対象ユーザー: Microsoft 365 Copilot の管理者、Excel / PowerPoint / Outlook / Teams の利用者
- 対象プラン: Microsoft 365 Copilot ライセンス前提。機能ごとに Windows / Web / Mac の対応差あり
- API / UI / 管理者機能: **Cowork のローカル Edge 利用が統制上の論点になる。** 利用者がサインイン済みのサイトを AI が操作する経路で、資格情報は端末に留まるとされるが、**操作の対象は社内 SaaS にも及びうる。** AI Workflows は既定オフだが、Workflows アプリが既に有効な組織では管理者の明示的な判断が要る

## 教材化メモ

- **Agents usage report の publisher 種別の内訳が実務的に重要である。** 「利用者作成」のエージェントがどれだけ使われているかが分かると、**シャドー AI の規模が初めて数字になる。** 組織作成・Microsoft 製と並べて見せられるため、統制の優先順位付けに直接使える。AI 利用の棚卸しを教える題材として素直。
- **Cowork のローカルブラウザ利用は「AI にブラウザのセッションを貸す」形である。** 資格情報が端末に留まるという説明は、**漏洩の経路を1つ潰しただけで、操作の権限そのものは利用者と同じ**という点を覆い隠しやすい。Claude の computer use / Claude in Chrome と同じ問題圏で、**「AI が本人として操作できる範囲 = 本人の権限」**という原則を教える実例に使える。
- **authoritative content の100件上限**は、検索の関連度を人為的に調整する仕組みである。**「正しい情報源はどれか」を組織が明示的に宣言する**設計で、RAG の権威付けを扱うときの実例になる。上限があるぶん、何を入れるかの選別が運用課題になる。
- 隔週公開のため、**対象期間（10/28〜11/3）と公開日（11/4）がずれる。** 窓の判定は公開日で行い、内容の日付は対象期間で読む必要がある。巡回運用の注意点として記録しておく。

## 原文確認

- 公式見出し: "November 4, 2026"（Updates released October 28 to November 3, 2026）
- 公式URL: https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes
- 原文全文は公式ページで確認してください。
