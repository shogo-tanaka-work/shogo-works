---
date: 2026-10-09
title: "Workspace Studio に入れ子条件分岐と Drive 検索ステップが追加 — 2026-10-13 から段階ロールアウト"
service: "Google Workspace Studio"
source: http://workspaceupdates.googleblog.com/2026/10/new-logic-and-search-steps-in-workspace-Studio-help-expand-automation-capabilities.html
fetched_at: 2026-10-10T09:35:00+09:00
published_date: 2026-10-09
date_precision: date-only
rollout_date: 2026-10-13
category: enhancement
---

# 2026-10-09 Workspace Studio の新ロジック・検索ステップ

## 公式内容の日本語要約

Google が Workspace Updates Blog で、**Workspace Studio の2026年10月フィーチャーリリース**として4件の追加を発表した。

1. **Nested Conditionals（入れ子条件分岐）** — フロー内に多層の分岐ロジックを持てるようになった。従来は1段の条件分岐しか書けなかったため、複雑な判定は複数フローに割るか諦めるかだった。
2. **Search for a Doc** — Google Drive 専用の検索ステップ。検索パラメータでドキュメントファイルを探す。
3. **Gmail Skip Replies** — Gmail のスレッドトリガーで後続の返信を無視し、**最初の受信メールのときだけフローを走らせる**設定。
4. **Meet Calendar Outputs** — Google Meet ステップが返す Calendar イベントのメタデータが増え、**招待者リスト**を含むようになった。会議後のフォローアップメール下書きのテンプレート対応も入る。

**対象は Workspace Studio を使える全ての Google Workspace 顧客と Workspace Individual 契約者**である。個別エディション・プランの列挙は無い。

**ロールアウトは 2026-10-13 開始**で、Rapid Release ドメインと Scheduled Release ドメインの両方に段階的に展開される。機能が見えるまで最大15日かかる。機能は**既定で有効**で、Workspace Studio のフロービルダーに現れる。管理者側の制御は既存のドメイン / OU ポリシーに従い、前提となるプリミティブの管理設定は展開前に先行投入済みとされている。追加のセットアップ手順は記載が無い。

## できるようになったこと

- フロー内で多層の条件分岐を書ける
- Drive のドキュメントを検索パラメータで探すステップを置ける
- Gmail スレッドの初回受信だけをトリガーにできる
- Meet ステップから招待者リストを含む Calendar メタデータを取れる

## 影響範囲

- 対象ユーザー: Workspace Studio を利用できる全 Workspace 顧客 / Workspace Individual
- 対象プラン: 明示なし（Workspace Studio へのアクセスがある契約）
- API / UI / 管理者機能: UI（フロービルダー）。管理者は既存のドメイン / OU ポリシーで制御
- ロールアウト: 2026-10-13 開始、可視化まで最大15日

教材化メモ: src/content/ai-news-notes/gemini/workspace-studio-nested-conditionals.mdx

## 原文確認

- 公式見出し: New logic and search steps in Workspace Studio help expand automation capabilities（Workspace Updates Blog, 2026-10-09）
- 公式URL: http://workspaceupdates.googleblog.com/2026/10/new-logic-and-search-steps-in-workspace-Studio-help-expand-automation-capabilities.html
- 週次Recap: http://workspaceupdates.googleblog.com/2026/10/weekly-recap-10-09-2026.html
- 原文全文は公式ページで確認してください。
