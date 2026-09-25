---
date: 2026-09-24
title: "Claude Tag がチャンネル内で個人コネクタを使えるようになった"
service: "Claude / Claude Tag"
source: https://claude.com/blog/claude-tag-now-supports-personal-connectors-in-channels
fetched_at: 2026-09-25T09:10:00+09:00
published_at: 2026-09-24
date_precision: date-only
category: enhancement
---

# 2026-09-24 Claude Tag がチャンネル内で個人コネクタを使えるようになった

## 公式内容の日本語要約

Claude Tag（Slack 上で `@Claude` に仕事を渡す仕組み）は、これまでチャンネルでは**管理者がそのチャンネルに紐づけた接続（connections）しか使えなかった**。個人の claude.ai アカウントに設定したコネクタ（カレンダー、受信箱、課題管理など）は DM でしか効かず、チャンネルでは無効だった。

2026-09-24 の更新で、**チャンネル内の自分のリクエストに限り、自分の個人コネクタを Claude が使えるようになった**。「@Claude 木曜のローンチレビューを自分のカレンダーに入れて」のような依頼が、チームチャンネルの中で完結する。

個人コネクタを使う前に、**本人にだけ見える確認プロンプト**が出る。選択肢は3つ。

- **Allow** — Claude が応答をそのまま投稿する。投稿前に機微に見えるものを自動で保留してレビューに回すが、この検査は取りこぼしうる。
- **Allow with review** — すべての応答を本人が承認してから投稿する。
- **Don't allow** — このリクエストでは個人コネクタを使わない。

Enterprise プランでは、組織の Owner が Allow の2択のうち片方を取り上げられる（全件レビュー必須にできる）。

## できるようになったこと

- チャンネル内で、**自分のリクエストにだけ**自分の個人コネクタを使わせられる
- 使用前に3択の確認プロンプトが出る（Allow / Allow with review / Don't allow）
- 管理者は「共有ツールを agent identity で提供する」「個人コネクタだけに寄せる」をツール単位で選べる
- Enterprise では Owner が全件レビュー必須を強制できる

## 影響範囲

- 対象ユーザー: Slack で Claude Tag を使う利用者と組織 Owner
- 対象プラン: **Team で先行ロールアウト、Enterprise が後続**
- API / UI / 管理者機能: Slack UI（確認プロンプト）＋ 組織設定（Owner による選択肢の制限）
- 帰属と課金: 個人コネクタ経由の操作は**本人のアカウント配下に記録**される（DM と同じ）。チャンネルの共有接続はこれまでどおりサービスアカウント配下
- 制限: **監督つきの協働作業だけが対象。** スケジュール実行の routine や無人での Claude の動作は、従来どおりチャンネル側の接続を使う

教材化メモ: src/content/ai-news-notes/claude/claude-tag-personal-connectors.mdx

## 原文確認

- 公式見出し: Claude Tag now supports personal connectors in channels
- 公式URL: https://claude.com/blog/claude-tag-now-supports-personal-connectors-in-channels
- 補助: https://claude.com/docs/claude-tag/concepts/agent-identity（チャンネルと DM の権限・帰属・課金の対比表）
- 原文全文は公式ページで確認してください。
