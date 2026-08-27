---
date: 2026-08-26
title: "Claude Cowork にブラウザが内蔵。拡張機能なしでサイト操作、自分のブラウザとは分離"
service: "Claude"
source: https://claude.com/blog/cowork-built-in-browser
fetched_at: 2026-08-27T09:05:00+09:00
published_at: 2026-08-26T00:00:00Z
date_precision: date-only
category: release
---

# 2026-08-26 Claude Cowork 内蔵ブラウザ

## 公式内容の日本語要約

デスクトップアプリの Claude Cowork に**ブラウザが内蔵**された。タスクがサイトを必要とすると、サイドパネルにブラウザが開き、Claude がページを開き・読み・クリックし・入力する。拡張機能のインストールも設定も不要。

**Claude 自身のブラウザであり、利用者のブラウザとは別**。Claude は利用者のタブ・ブックマーク・パスワードを見ない。サイトへのログイン状態を持ち込みたい場合は、macOS では Chrome / Edge / Firefox、Windows・Linux では Firefox から**サイト単位で**クッキーを取り込む。銀行・メール・SSO サイトは、明示的に含めない限り対象外。

公式は2つのブラウザ利用方式の使い分けを明示している。**内蔵ブラウザ**は「自分は別の作業を続けたまま Web 作業を Claude に渡す」用途（レポート用の調査、ベンダーポータルからの請求書収集など）。**Claude in Chrome** は「いま開いているページを、いまログインしているアカウントで操作する」用途（CRM 更新、受信箱の処理、目の前のドキュメント編集）。すでに Claude in Chrome を使っている場合はそちらが既定のまま。切り替えは Settings → Cowork → Preferred browser。

提供は **Pro / Max / Team に今週中ロールアウト**（macOS / Windows / Linux は beta）、届くと既定でオン。**Enterprise は本日から利用可能**で、管理者は Organization settings → Cowork → Built-in browser で管理する。内蔵ブラウザはデスクトップアプリに存在し、Web・モバイルからはデスクトップアプリが起動・オンラインであれば操作できる。

## できるようになったこと

- 拡張機能なしで Claude が Web サイトを操作（Cowork サイドパネル内）
- 自分のブラウザと分離されたセッションで、サイト単位のログイン持ち込み
- 管理者による組織単位の有効化・管理

## 影響範囲

- 対象ユーザー: Claude Cowork デスクトップアプリ利用者、Enterprise 管理者
- 対象プラン: Pro / Max / Team（今週ロールアウト）、Enterprise（提供済み）
- API / UI / 管理者機能: デスクトップアプリ UI + Organization settings

## 教材化メモ

- **「自分のブラウザ」と「エージェントのブラウザ」を分ける設計**は、エージェント権限設計の教材にしやすい。同じ「Web を操作させる」でも、既存ログインを共有するか、専用セッションを与えるかで漏えい面が変わる。銀行・メール・SSO を既定除外にしている点まで含めて、ガードレール設計の実例として扱える。
- **用途で2方式を使い分ける前提が公式に明示された**点は珍しい。「いま開いているページか、そうでないか」という単純な判定軸を提示している。ツール選定を機能比較表ではなく利用文脈で切る例として使える。
- 同日発表の Claude in Chrome 一般提供とセットで読むと、Anthropic のブラウザ戦略が「拡張と内蔵の二本立て」であることが分かる。速報記事は Chrome GA 側で扱ったため、本件は詳細メモに留めた。

## 原文確認

- 公式見出し: Claude gets its own browser in Cowork（ページタイトル: Claude Cowork gets a built-in browser: nothing to install）
- 公式URL: https://claude.com/blog/cowork-built-in-browser
- 原文全文は公式ページで確認してください。
