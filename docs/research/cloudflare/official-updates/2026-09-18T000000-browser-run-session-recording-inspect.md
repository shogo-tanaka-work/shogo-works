---
date: 2026-09-18
title: "Browser Run の Session Recordings に Inspect パネル（Logs / Network / DOM）が追加"
service: "Cloudflare Browser Run"
product: "Browser Run"
source: https://developers.cloudflare.com/changelog/post/2026-09-18-browser-run-session-recording-inspect/
official_url: https://developers.cloudflare.com/changelog/post/2026-09-18-browser-run-session-recording-inspect/
fetched_at: 2026-09-19T09:02:00+09:00
published_at: 2026-09-18
date_precision: date-only
category: enhancement
---

# 2026-09-18 Browser Run Session Recordings の Inspect パネル

## 公式内容の日本語要約

Cloudflare Browser Run の **Session Recordings に Inspect パネル**が追加された。公式の言い方は「セッション中に何が起きたかを、**再現しなくても**理解できるようにする」である。セッション終了後の録画に対して、ブラウザの開発者ツールに相当する情報を後から読む形になる。

パネルは3つのタブで構成される。**Logs タブ**はセッション中に取得したコンソール出力を検索でき、メッセージのレベルで絞り込める。**Network タブ**はリクエストの method / status / headers / payload / response と**タイミングのウォーターフォール**を表示し、**HAR ファイルとしてダウンロード**できる。ネットワーク情報は**API 経由でも生 JSON または HAR として取得可能**である。**DOM タブ**は録画終了時点のページ構造を展開可能なツリーで表示し、再構成した HTML をコピーできる。

**複数タブのセッションでは、選択したタブに応じてパネルの内容が切り替わる。**

利用にはセッション起動時に録画を有効化しておく必要がある。セッション終了後、Cloudflare ダッシュボードの **Browser Run > Runs** から該当セッションの録画アイコンを開く。セットアップ手順と現時点の上限は公式の session recording ドキュメント側に置かれており、**changelog 本文には上限の記載がない**。

## できるようになったこと

- 失敗したブラウザ自動化セッションを、**再実行せずに**コンソール・通信・DOM から事後調査できる
- Network タブから **HAR を書き出して**、社内の別チームや外部ベンダーへ再現手順なしで共有できる
- **API 経由でネットワーク情報を JSON / HAR として取得**し、失敗時の自動収集に組み込める

## 影響範囲

- 対象ユーザー: Browser Run でブラウザ自動化・スクレイピング・エージェントを運用する開発者
- 対象プラン: changelog に記載なし
- API / UI / 管理者機能: ダッシュボード（Browser Run > Runs）と API の両方

教材化メモ: src/content/ai-news-notes/cloudflare/browser-run-session-recording-inspect.mdx

## 原文確認

- 公式見出し: Browser Run - Inspect logs, network requests, and DOM in Session Recordings
- 公式URL: https://developers.cloudflare.com/changelog/post/2026-09-18-browser-run-session-recording-inspect/
- 原文全文は公式ページで確認してください。
